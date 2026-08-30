import { useEffect } from 'react';
import SingleItem from './SingleItem';
import { useQuery } from "@tanstack/react-query";

const Items = ({ items }) => {
  
  return (
    <div className='items'>
      {items && items.taskList.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </div>
  );
  //alternatively, you can load cache: 
  //const { data } = useQuery({ queryKey: ["tasks"] });
  //
};
export default Items;
