import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import DisplayPageGrid from './components/DisplayPage';
import ViewButton from './components/ViewButton';

function App() {
  const [users, setUsers]=useState([]);
  const [fetchedData, setFetchedData]=useState(false);
  const [viewButton, setViewButton]=useState(false);

  useEffect(()=>{
    setViewButton(true);
  }, []);

  const fetchData=async ()=>{
    try{
      const response1=await axios.get('https://reqres.in/api/users?page=1');
      const response2=await axios.get('https://reqres.in/api/users?page=2');

      const response=[...response1.data.data, ...response2.data.data]
      setUsers(response);
      setFetchedData(true);
      setViewButton(false);
    } catch (error){
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
    {viewButton && <ViewButton fetchData={fetchData}/>}
    {fetchedData && <DisplayPageGrid users={users}/>}
    {!viewButton && <p>Refresh to go to the first page.</p>}
    </div>
  );
}

export default App;
