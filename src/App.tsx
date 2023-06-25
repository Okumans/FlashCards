import { Link } from 'react-router-dom'


const App = () => {
  return (
    <div className="min-h-screen bg-dark-blue-gray text-gray-100 flex flex-col justify-center items-center shadow-2xl gap-4 ">
      <div className='w-1/4 min-w-fit flex flex-col items-center justify-center gap-4'>
        <p className='text-5xl font-semibold font-mono text-light-gray'>Navigate</p>
        <div className='flex flex-col gap-1 justify-center items-center w-full  bg-light-gray p-4 rounded-2xl'>
          <Link to="/create" className='w-full'>
            <button className='w-full text-2xl font-medium font-mono text-light-gray bg-light-blue-gray rounded-lg shadow-lg p-4 px-5 hover:bg-dark-blue-gray transition-all'>Create</button>
          </Link>
          <Link to="/login" className='w-full'>
            <button className='w-full text-2xl font-medium font-mono text-light-gray bg-light-blue-gray rounded-lg shadow-lg p-4 px-5 hover:bg-dark-blue-gray transition-all'>Signin</button>
          </Link>
          <Link to="/register" className='w-full'>
            <button className='w-full text-2xl font-medium font-mono text-light-gray bg-light-blue-gray rounded-lg shadow-lg p-4 px-5 hover:bg-dark-blue-gray transition-all'>Signup</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App