import React, { useState, useContext } from 'react'
import { PageHeader, Input, Button } from 'antd'
import { Link, Redirect } from 'react-router-dom'
import { auth } from '../config/firebase';
import UserContext from '../context/UserContext'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [error, setError] = useState(false);
    const { user, setUser } = useContext(UserContext);


    const onLoginClick = () => {

        auth.signInWithEmailAndPassword(email, password).then(
            res => {
                console.log("logged in", res);
                console.log(user);
                setUser(res.user)
                setRedirect(true)
            }
        ).catch(err => {
            console.error(err);
            setError(true);
        })
    }


    return (

        <div className="log-in">
            {redirect && <Redirect to="/" />}
            <PageHeader
                className="site-page-header"
                title="Log In"
            />


Email:
            <Input value={email} onChange={e => setEmail(e.target.value)}></Input>
        Password: <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
            <div style={{ float: "right" }}>
                <div >
                    {error && <Link to="/signup">Don't have an account- sing up</Link>}
                </div>
                <Button style={{ float: "right" }} onClick={onLoginClick} >Log In</Button>
            </div>
        </div>

    )
}

export default Login
