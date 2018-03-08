import React from 'react'
import Register from '../Register'
import Search from '../Search'
import { Route } from 'react-router-dom'
import './index.css';

function Body() {

    return (
        <div>
            <Route exact path="/" render={() => (
                <Search/>
            )}/>

            <Route exact path="/register" render={() => (
                <Register />
            )} />
        </div>
    )
}

export default Body