import React, {Fragment} from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import { About } from '../pages/About';
import { Content } from '../pages/Content';
import { Login } from '../pages/Login';
import { SingIn } from '../pages/SingIn';
import {Home} from '../pages/Home'

export default function Router() {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes >
                <Route path="/" element={<Home/>} />
                <Route path="/post/:name" element={<Content/>} />
                <Route path="/contact" element={<About/>} />
                <Route path="/login" element={<Login/>}  />
                <Route path="/singin" element={<SingIn/>} />
            </Routes> 
        </Fragment>
    </BrowserRouter>
  )
}
