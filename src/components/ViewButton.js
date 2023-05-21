import React from 'react'

const ViewButton = ({fetchData}) => {
  return (
    <button onClick={fetchData}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
    >
      Get Data
    </button>
   
  )
}

export default ViewButton