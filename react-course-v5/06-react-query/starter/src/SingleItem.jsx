import { useCreateTask, useEditTask ,useDeleteTask} from "./hooks/ReactQueryHooks";

const SingleItem = ({ id,title,isDone }) => {
  const {isLoading,editTask} = useEditTask();
  const {deleteTask,deleteTaskLoading} = useDeleteTask();

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={isDone}
        onChange={() => editTask({taskId:id, isDone:!isDone})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isDone && 'line-through',
        }}
      >
        {title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask({taskId:id})}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
