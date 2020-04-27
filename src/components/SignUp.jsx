import React, { useState } from 'react'
import { PageHeader, Input, Button } from 'antd'
import { Link, Redirect } from 'react-router-dom'
import {auth} from '../config/firebase'

const SignUp = props => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const onSubmitClick = e =>{
        auth.createUserWithEmailAndPassword(email, password).then(
            res => {console.log(res); setRedirect(true)}
        ).catch(console.log)
    }


    return (
        <div className="sign-up">
            {redirect && <Redirect to="/login"></Redirect>}
            <PageHeader
                className="site-page-header"
                title="Sign Up"
            />


Email:
            <Input value={email} onChange={e => setEmail(e.target.value)}></Input>
        Password: <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
            <div style={{ float: "right" }}>
                <div >
                    <Link to="/login">Already
         have and account, Log In instead</Link>
                </div>
                <Button style={{ float: "right" }} onClick={onSubmitClick}>Sign Up</Button>

            </div>
        </div>

    )
}

export default SignUp
