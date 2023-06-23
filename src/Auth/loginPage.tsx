import { MdAccountCircle } from 'react-icons/md'
import { AiOutlineGoogle } from 'react-icons/ai'
import { BsPersonFillSlash } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorFailedAuth, setErrorFailedAuth] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUserName(user?.email == undefined ? userName : user?.email)
        })
    }, [])

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, userName, password)
            setErrorFailedAuth(false)
            navigate("/")
        }
        catch (err) {
            console.log(err)
            setErrorFailedAuth(true)
        }
    }

    const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
            setErrorFailedAuth(false)
            navigate("/")
        }
        catch (err) {
            console.log(err)
            setErrorFailedAuth(true)
        }
    }

    const loginWithAnonymous = async () => {
        console.log("Please wait for anonymous support")
        alert("Please wait for anonymous support")
    }

    const logout = async () => {
        try {
            await signOut(auth)
            console.log(auth?.currentUser?.email)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen bg-dark-blue-gray text-gray-100 flex flex-col justify-center items-center shadow-2xl">
            <div className="bg-light-gray w-fit p-8 m-8 pb-3 rounded-3xl flex flex-col items-center">
                <MdAccountCircle className="block w-40 h-40 fill-light-blue-gray text-center mb-4" />
                <h1 className="text-light-blue-gray font-semibold font-mono text-5xl mb-10 text-center">Login</h1>
                <input
                    className="block w-96 my-2 text-xl font-mono p-2 rounded-lg text-gray-900 shadow-md"
                    placeholder="Email"
                    defaultValue={userName}
                    onChange={(e) => {
                        setUserName(e.target.value)
                    }}>
                </input>
                <input
                    type='password'
                    className="block w-96 my-2 text-xl font-mono p-2 rounded-lg text-gray-900 shadow-md"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}>
                </input>
                <p className="block w-full text-center text-2xl font-mono text-light-blue-gray my-3">or</p>
                <div className="flex-col items-center flex-grow"></div> {/* Added flex-grow to occupy remaining space */}
                <div className='flex gap-4'>
                    <div className='p-5 bg-slate-50 rounded-xl shadow-lg mb-8'
                        onClick={loginWithGoogle}>
                        <AiOutlineGoogle className="w-10 h-10 fill-light-blue-gray" />
                    </div>
                    <div className='p-5 bg-slate-50 rounded-xl shadow-lg mb-8'
                        onClick={loginWithAnonymous}>
                        <BsPersonFillSlash className="w-10 h-10  fill-light-blue-gray" />
                    </div>
                </div>

                {errorFailedAuth ?
                    <p className='bg-red-100 text-red-800 w-full m-2 text-center font-medium font-mono py-3 rounded-lg border-red-300 border-solid border-2 shadow-lg'>* Error Login user.</p>
                    : null
                }

                <button
                    className='bg-light-blue-gray text-2xl font-mono font-medium w-full py-2.5 rounded-xl shadow-lg'
                    onClick={login}>
                    Submit
                </button>
                <div  className='ml-auto mt-5 flex gap-3'>
                    <button className='font-mono text-light-blue-gray' onClick={logout}> signout </button>
                    <Link to="/register">
                        <button className='font-mono text-light-blue-gray'> register </button>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default Login