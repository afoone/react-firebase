import React from 'react'
import { Card } from 'antd'
import {Link} from 'react-router-dom'

function PostSnippet(props) {

    console.log(props.item)
    return (
        <div className="post-snippet">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.item.title}
                extra={
                    <>
                    <Link to={`/post/${props.item.id}/show`}>Leer</Link>
                    &nbsp;
                    <Link to={`/post/${props.item.id}/edit`}>Editar</Link>
                    </>
                }
            >
                <p>{props.item.body.split("/n")[0]}</p>
                <h3>...</h3>
                </Card>
        </div>
    )
}

export default PostSnippet
