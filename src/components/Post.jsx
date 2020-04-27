import React, { useState, useEffect } from 'react'
import { PageHeader, Card } from 'antd'
import { Redirect } from 'react-router-dom'
import db from '../config/firebase'

function Post(props) {

    const [item, setItem] = useState('test');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        db.collection('posts').doc(props.match.params.id).get()
            .then(
                res => {
                    setItem({id: res.id, ...res.data()})
                }
            )
    })


    return (
        <div className="post">
            {redirect && <Redirect to="/" />}
            <PageHeader
                className="site-page-header"
                onBack={() => setRedirect(true)}
                title={item.title}

            />

            <Card>
                {item.body ? item.body.split('\n').map(
                    (e, i) => <p key={`${i.id}-${i}`}>{e}</p>)
                    : null}
            </Card>


        </div>
    )
}

export default Post
