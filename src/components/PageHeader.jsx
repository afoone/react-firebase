import React, { useState, useContext } from 'react'
import { Menu } from 'antd';
import { MailOutlined, FileAddOutlined, LoginOutlined, UserAddOutlined as Signin, LogoutOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext'
import {auth} from '../config/firebase'

const PageHeader = () => {

    const [current, setCurrent] = useState("posts");
    const {user, setUser} = useContext(UserContext)


    const handleClick = e => {
        console.log('click ', e);

        setCurrent(e.key)

    };

    const logout = () => {
       setUser({})
    }

    

    return (
        <div className="page-header">

            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="posts">
                    <Link to="/">
                        <MailOutlined />
                        <span>Posts</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="create" >
                    <Link to="/post/new">
                        <FileAddOutlined />
                        Create Post
                    </Link>
                </Menu.Item>
                <Menu.Item key="signup" >
                    <Link to="/signup">
                        <Signin />
                    Sign Up
                    </Link>
                </Menu.Item>
                <UserContext.Consumer>{
                    ctx => ctx.user.email ? <Menu.Item key="login" style={{ float: "right" }} 
                        onClick={console.log}>
                    <a href="#" onClick={logout}>
                        <LogoutOutlined />
            Log Out
            </a>
                </Menu.Item> :
                        <Menu.Item key="login" style={{ float: "right" }}>
                            <Link to="/login">
                                <LoginOutlined />
                    Log In
                    </Link>
                        </Menu.Item>}
                </UserContext.Consumer>


                {/* <UserContext.Consumer>
                    {
                        ctx => ctx.user.email ?
                            <Menu.Item key="logout" >
                              <div  onClick={()=>auth.signOut()}>  <LogoutOutlined />
                        Log Out
</div>
                    </Menu.Item> : null
                    }
                </UserContext.Consumer> */}

                <Menu.Item style={{ float: "right" , cursor: "pointer"}}>
                    <UserContext.Consumer>
                        {ctx => ctx.user.email ? <div>{ctx.user.email}</div> : "Not logged in"}
                    </UserContext.Consumer>
                </Menu.Item>
            </Menu>
        </div >
    )
}

export default PageHeader
