import React, { useState, useEffect } from 'react'
import { PageHeader, Input, Button } from 'antd'
import { Redirect } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import './CreatePost.css'
import db from '../config/firebase'



const CreatePost = props => {

    const [redirect, setRedirect] = useState(false);
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(
        () => {
            if (props.match.params.id) {

                db.collection("posts").doc(props.match.params.id)
                    .get().then(
                        res => {
                            const data = res.data();
                            setBody(data.body);
                            setTitle(data.title);
                            console.log(data);
                        }

                    )
            } else {
                console.log("create mode")
            }
        }, [props.match.params.id]
    )

    const onFinish = e => {
        e.preventDefault();
        if (props.match.params.id) {
            db.collection('posts').doc(props.match.params.id).update({
                title,
                body
            }).then(
                res => {
                    console.log("guardado", res);
                    setRedirect(true)
                }
            )
                .catch(console.log)
        } else {
            db.collection('posts').add({
                title,
                body
            }).then(
                res => {
                    console.log("guardado", res);
                    setRedirect(true)
                }
            )
                .catch(console.log)
        }
    };

    const onTitleChange = e => {
        setTitle(e.target.value);
    }

    const onBodyChange = e => {
        setBody(e.target.value)
    }

    return (
        <div className="create-post">
            <PageHeader
                className="site-page-header"
                onBack={() => setRedirect(true)}
                title="Create Post"
            />
            {redirect && <Redirect to="/" />}

            <div className="post-form">


                <Input value={title} onChange={onTitleChange} />

                <TextArea rows="7" value={body} onChange={onBodyChange} />
                <Button type="primary" htmlType="submit" onClick={onFinish}>
                    Submit
        </Button>

            </div>
        </div>
    )
}

export default CreatePost
