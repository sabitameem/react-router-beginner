import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,userId,body} = post;
    return (
        <div>
            <h3>All thing about post details of {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;