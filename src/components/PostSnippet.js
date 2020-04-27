import React from 'react'
import { Card } from 'antd'
import {Link} from 'react-router-dom'

function PostSnippet(props) {





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
                    &nbsp;
                    <a href="./#" onClick={() => props.delete(props.item.id)}> Delete</a>
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
