import React, { useEffect } from 'react'
import FacebookLogin from 'react-facebook-login'
import classes from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../app/slices/authSlice'

function FbLogin() {
    const dispatch = useDispatch()
    const user = useSelector(state => state._auth)

    const responseFacebook = response => {
        if (response.status !== 'unknown') {
            console.log(response)
            dispatch(authActions.login(response))
        }
    }

    function handleLogout() {
        dispatch(authActions.logout())
    }

    let fbContent

    if (user.isLogged) {
        fbContent = (
            <div className={classes.Profile}>
                <img src={user.picture} alt={user.name} />
                <h2>Welcome {user.name}</h2>
                Email: {user.email}
                <button onClick={handleLogout} >Logout</button>
            </div>
        )
    } else {
        return fbContent = (
            <div className={classes.Login} >
                <h1>Create Account</h1>
                <FacebookLogin
                    fields="name,email,picture"
                    callback={responseFacebook} />
                <div>
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                <label htmlFor="name">Full Name</label>
                <input id='name' placeholder='Full Name' />
                <label htmlFor="email">Email</label>
                <input id='email' placeholder='Email' />
                <label htmlFor="pass">Password</label>
                <input id='pass' placeholder='Password' />
                <div>
                    <input id='check' type="checkbox" />
                    <label htmlFor="check">Sign up for Iron and Earth's mailing list. Stay in touch with the organisation!</label>
                </div>
                <button className={classes.LoginBtn}>Sign Up</button>
            </div >

        )
    }

    return fbContent
}

export default FbLogin