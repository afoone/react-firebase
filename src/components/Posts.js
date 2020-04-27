import React, { useEffect, useState } from 'react'
import { PageHeader } from 'antd'
import './Posts.css'
import PostSnippet from './PostSnippet';
import db from '../config/firebase'

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").get().then(
            res => setPosts(res.docs)
        );
    }, [])


    const deletePost = (id) => {
        console.log("delete post " + id)
        db.collection("posts").doc(id).delete().then(
            setPosts(posts.filter(p => p.id !== id))
        )
    }

    return (
        <div className="posts">
            <PageHeader
                className="site-page-header"
                title="Posts"

            />

            {
                posts ? posts.map(
                    (e, i) => <PostSnippet delete={deletePost} key={e.id} item={{ id: e.id, ...e.data() }}></PostSnippet>
                ) : null
            }
        </div>

    )
}

export default Posts
