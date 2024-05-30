import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './layout/user'
import AdminLayout from './layout/admin'
import Home from './pages/user/home'
import Detail from './pages/user/detail'
import Contact from './pages/user/contact'
import Dashboard from './pages/admin/dashboard'
import Products from './pages/admin/products'
import Users from './pages/admin/users'
import Search from './pages/user/search'
import { productsApi } from './services/base'
import SignUp from './pages/user/login'
import SignIn from './pages/user/signin'
import ForgotPassword from './pages/user/forgotpassword'
import Cart from './pages/user/cart'

function App() {
  productsApi.getAllProduct()
  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route element={<Home />} index />
          <Route element={<Detail />} path=':id' />
          <Route element={<Search />} path='search' />
          <Route element={<Cart />} path='Cart' />
          <Route element={<Contact />} path='contact' />
          <Route element={<SignUp />} path='login' />
          <Route element = {<SignIn />} path='signin' />
          <Route element = {<ForgotPassword />} path='forgetPas' />
        </Route>
        <Route path='/manage' element={<AdminLayout />}>
          <Route element={<Dashboard />} index />
          <Route element={<Products />} path='products' />
          <Route element={<Users />} path='users' />
        </Route>
      </Routes>
    </>
  )
}

export default App