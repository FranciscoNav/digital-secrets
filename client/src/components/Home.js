import React from 'react'

const Home = (props) => {

    if (props.loggedIn){
        return (
            <div>
                <h1 className='home'>Hello {props.user.username}</h1>
                <h1 className='home'>Welcome to YOUR Digital Secrets!</h1>
                <p className='content'>Hello {props.user.username} and welcome to your Digital Secrets! If this is your first-time logging in please click on the “view all secret posts” at the top to begin.</p>
                <p className='content'>At your Digital Secrets, you will be able to upload digital posts that can only be viewed by you. If you have any secret recipes, diary, or notes you would like to digitalize, then you came to the right place! Thank you for choosing Digital Secrets and enjoy your stay. Your secret is safe with use.</p>
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




