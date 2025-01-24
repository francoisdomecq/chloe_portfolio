import {ChangeEvent, useContext, useState} from "react";
import axiosClient from "@config/axios";
import {Outlet} from "react-router-dom";
import {AppContext} from "@config/contexts/app-context";
import TextInput from "@core/components/text-input/text-input";
import {useTranslation} from "react-i18next";
import "./admin-login.scss"

const AdminLogin = () => {
  const {t} = useTranslation("admin")
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

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return !user ? (
    <div className="admin-login">
      <TextInput onChange={handleChangeEmail} type="text" placeholder="Email"/>
      <TextInput onChange={handleChangePassword} type="password" placeholder="Password"/>
      <button className="admin-login__login" onClick={handleLogin}>{t("login")} </button>

    </div>
  ) : <Outlet/>
}

export default AdminLogin