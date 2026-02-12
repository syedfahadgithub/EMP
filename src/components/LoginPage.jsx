import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthProvider"



const LoginPage = ({ LoginHandle }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        LoginHandle(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='w-full h-screen text-white bg-zinc-900'>
            <h1 className='w-full flex items-center justify-center py-20 uppercase text-5xl font-bold text-stone-200'>Login</h1>
            <div className='w-96 h-1/2 border-2 rounded-2xl border-emerald-700 bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <form onSubmit={submitHandler} className='w-full h-full flex flex-col items-center gap-7 justify-center'>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} required className='w-68 bg-transparent border-2 border-emerald-700 rounded-full px-6 py-3 text-xl font-semibold outline-none placeholder:text-stone-300' type="email" placeholder='Enter Email' />
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} required className='w-68 bg-transparent border-2 border-emerald-700 rounded-full px-6 py-3 text-xl font-semibold outline-none placeholder:text-stone-300' type="password" placeholder='Enter Password' />
                    <button type="submit" className='w-52 bg-emerald-700 text-stone-300 rounded-full px-5 py-2 text-2xl font-bold outline-none hover:bg-emerald-400 hover:text-zinc-900 cursor-pointer  transition-all duration-300 ease-in-out'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage