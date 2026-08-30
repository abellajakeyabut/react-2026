import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { useEffect, useState } from 'react';
import { useFetchTasks } from './hooks/ReactQueryHooks';

const App = () => {
const { isLoading, isError, data } = useFetchTasks();
  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
  }
  if (isError) {
    return <p style={{ marginTop: '1rem ' }}>There was an error...</p>;
  }
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items items={data}/>
    </section>
  );
};
export default App;
