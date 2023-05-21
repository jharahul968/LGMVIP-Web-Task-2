import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers]=useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData=async ()=>{
    try{
      const response1=await axios.get('https://reqres.in/api/users?page=1');
      const response2=await axios.get('https://reqres.in/api/users?page=2');

      const response=[...response1.data.data, ...response2.data.data]
      setUsers(response);
    } catch (error){
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-2xl font-bold mb-6">User Card Grid</h1>
      <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {users && users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="bg-white rounded shadow p-4">
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">{`User id: ${user.id}`}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
