import React from 'react'

const Home = (props) => {

    if (props.loggedIn){
        return (
            <div>
                <h1 className='home'>Hello {props.user.username}!</h1>
                <h1 className='home'>Welcome to YOUR Digital Secrets!</h1>
                <p className='content'>Hello and welcome to Digital Secrets! Our mission is to allow our users to upload digital posts that can only be viewed by the user themselves. Our website is perfect for anyone trying to digitalize their secret recipes, diary, or notes. Just click the signup button to begin !</p>
            </div>
        )
    } else{
        return (
            <div>
                <h1 className='home'>Welcome to YOUR Digital Secrets!</h1>
                <p className='content'>Hello and welcome to Digital Secrets! Our mission is to allow our users to upload digital posts that can only be viewed by the user themselves. Our website is perfect for anyone trying to digitalize their secret recipes, diary, or notes. Just click the signup button to begin !</p>
            </div>
        )
    }
}

export default Home; 




