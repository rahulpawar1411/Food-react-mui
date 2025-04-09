import React from 'react'
import Layout from '../Components/Layout/Layout'
import {Link} from 'react-router-dom'
import '../style/home.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(https://images.unsplash.com/photo-1672246934698-d8560bb6d46d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}}>
        <div className="headContainer">
          <h1>Good FOOD </h1>
          <h1>Good MOOD </h1>
          <p>Best Food in India.</p>
         <Link to='/menu'><button>Oder Now</button></Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home