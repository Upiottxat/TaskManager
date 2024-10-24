import React from 'react'
import Hero from '../Components/Hero/Hero'

const Home = () => {
    return (
        <div className='Home d-flex justify-content-center align-items-center' style={{
            width: '100%',
            height: '100%',
            flexDirection: 'column'
        }}>

            <nav className="navbar navbar-light bg-light " style={{ width: '100vw' }}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">TaskManager</span>
                </div>
            </nav>
            <Hero />
        </div>
    )
}

export default Home
