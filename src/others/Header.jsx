

const Header = ({changeUser}) => {
    console.log(changeUser)
    const logOutUser = () => {
        localStorage.setItem("loggedInUser", '')
        changeUser('')
    }
    return (
        <div>
            <div className='p-5 flex items-center justify-between'>
                <h1 className='text-white text-2xl font-medium'>Hello <br /> <span className='text-4xl font-bold'>{}👋</span></h1>
                <button onClick={logOutUser} className='bg-red-600 text-white font-semibold outline-none px-3 py-1'>Log Out</button>
            </div>
        </div>

    )

}


export default Header