import {useContext, useEffect, useState} from 'react'
import LoginPage from './components/LoginPage'
import AdminDashboard from './dashboards/AdminDashboard'
import EmpDashboard from './dashboards/EmpDashboard'
import { AuthContext } from './context/AuthProvider'
// import { getLocalStorage, setLocalStorage } from './utils/Localstorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem('loggedInUser',)
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  
    
  const LoginHandle = (email, password) => {
    if (email == 'admin@me.com' && password == 123) {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      console.log("This is admin")
    } else if (authData) {
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
    } else {
      alert("This is invalid credentials!")
    }
  }
  
  return (
    <div>
      {!user ? <LoginPage LoginHandle={LoginHandle} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmpDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
      {/* <AdminDashboard/> */}
      {/* <EmpDashboard/> */}
    </div>
  )
}

export default App