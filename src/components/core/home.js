import React from 'react'
import Menu from './menu'
import Layout from './Layout'
import {API} from "../../config"

const Home = () =>{
    return (
        <div>
            <Menu/>
            <Layout title="Home" description="Diet tracker app"></Layout>
            {API}
        </div>
    )
}

export default Home