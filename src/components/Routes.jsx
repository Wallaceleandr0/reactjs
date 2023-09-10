import React from 'react'
import Form from './Form'
import List from './List'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './Menu';

function AppRotas  () {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Form />}>FORMULÁRIO</Route>
                <Route path="/list" element={<List />}>LISTA</Route>
            </Routes>
        </Router>
    )
}

export default AppRotas