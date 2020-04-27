import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import Unauthorized from './Unauthorized'


export default function SecurityWrapper(WrappedComponent) {

    const {user} = useContext(UserContext)

    return function (props) {
        if (user.email === "hola@hola.com") {
            return <WrappedComponent {...props} />;
        }
        return <Unauthorized />;
    };
}


