import React, { useContext, useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import { UserContext } from '../../../data/models/UserContext';
import classes from './Login.module.scss'

function Login() {
    const { user, setUser } = useContext(UserContext)

    const responseFacebook = response => {
        if (response.status !== 'unknown') {
            localStorage.setItem("fbLoginToken", JSON.stringify(response));
            setUser(() => ({
                isLoggedIn: true,
                name: response.name,
                email: response.email,
                picture: response.picture.data.url
            }))
        }
    }

    let fbContent

    console.log(user)

    if (user.isLoggedIn) {
        fbContent = (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>Welcome {user.name}</h2>
                Email: {user.email}
            </div>
        )
    } else {
        return fbContent = (
            <div className={classes.Login} >
                <h1>Create Account</h1>
                <FacebookLogin
                    appId="872537787474596"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook} />
                <div>
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                <label for="name">Full Name</label>
                <input id='name' placeholder='Full Name' />
                <label for="email">Email</label>
                <input id='email' placeholder='Email' />
                <label for="pass">Password</label>
                <input id='pass' placeholder='Password' />
                <div>
                    <input id='check' type="checkbox" />
                    <label for="check">Sign up for Iron and Earth's mailing list. Stay in touch with the organisation!</label>
                </div>
                <button className={classes.LoginBtn}>Sign Up</button>
            </div >

        )
    }

    return fbContent
}

export default Login