import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import CustomFetch
 from './CustomFetch';
export const useFetchTasks=()=>{
    const {isLoading,data,isError,error} = useQuery({
        queryKey:['tasks'],
        queryFn: async ()=>{
            const {data} = await CustomFetch.get("/api/tasks/")
            return data;
        }
    })
    return { isLoading, isError, data };
}
export const useCreateTask=()=>{
    const queryClient = useQueryClient();
    const {mutate: createTask,isLoading} = useMutation({
        mutationFn:async (taskTitle)=>{
            let resp= await CustomFetch.post("/api/tasks/",{title:taskTitle})
            return resp;
        } ,
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['tasks']})
            toast.success('task added')
        },
        onError:(error)=>{
            toast.error(error.response.data.msg);
        }
    })
    return {isLoading, createTask}
}
export const useEditTask =()=>{
    const queryClient = useQueryClient();
    const {mutate: editTask,isLoading} = useMutation({
        mutationFn:  ({taskId,isDone})=>CustomFetch.patch(`/api/tasks/${taskId}`,{isDone: isDone}),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['tasks']})
            toast.success('task updated')
        },
        onError:(error)=>{
            toast.error(error.response.data.msg);
        }
    })
    return {isLoading,editTask};
}
export const useDeleteTask = ()=>{
    const queryClient = useQueryClient();
    const {mutate: deleteTask, isLoading: deleteTaskLoading} = useMutation({
        mutationFn: ({taskId})=>CustomFetch.delete(`/api/tasks/${taskId}`),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['tasks']})
            toast.success('task updated');
        }
    })
    return {deleteTask,deleteTaskLoading}
}