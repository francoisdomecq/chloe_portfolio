import {useContext, useState} from "react";
import axiosClient from "../../../../config/axios";
import {Outlet} from "react-router-dom";
import {AppContext} from "../../../../config/contexts/app-context";

const AdminLogin = () => {
  const {user, setUser} = useContext(AppContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    axiosClient.post('/auth/login', {email, password})
      .then(res => res.data)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.accessToken))
        setUser(res.user)
      })
      .catch(err => console.log(err))
  }

  return !user ? (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email"/>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
      <button onClick={handleLogin}/>

    </div>
  ) : <Outlet/>
}

export default AdminLogin