// import { useContext, useState } from "react"
// const [userName, setUserName] = useState('')
//  localStorage.clear()
// if(!data){
//     setUserName('Admin')
// }
// else{
//     setUserName(data.firstName)
// }


const Header = () => {
    const logOutUser = () => {

        localStorage.setItem("loggedInUser", '')
        window.location.reload()
    }
    return (
        <div>
            <div className='p-5 flex items-center justify-between'>
                <h1 className='text-white text-2xl font-medium'>Hello <br /> <span className='text-4xl font-bold'> userName 👋</span></h1>
                <button onClick={logOutUser} className='bg-red-600 text-white font-semibold outline-none px-3 py-1'>Log Out</button>
            </div>
        </div>

    )

}


export default Header