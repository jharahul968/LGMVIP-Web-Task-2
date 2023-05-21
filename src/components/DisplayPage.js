import React from 'react'

const DisplayPageGrid = ({users}) => {
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
  )
}

export default DisplayPageGrid