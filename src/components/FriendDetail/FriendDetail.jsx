import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friendData =useLoaderData();
    console.log(friendData);
    return (
        <div>
            <h3>EveryThis about this person is here</h3>
            <p>Name : {friendData.name}</p>
            <p>Email : {friendData.email}</p>
        </div>
    );
};

export default FriendDetail;