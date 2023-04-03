import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const{id,title,body} = post;
    return (
        <div className='post'>
            <h3>id : {id}</h3>
            <p>Title :{title}</p>
            <Link to={`/post/${id}`}>Shoe details</Link>
            <button>Show more details</button>
            
        </div>
    );
};

export default Post;