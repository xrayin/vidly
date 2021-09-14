import React from 'react';

const Like = ({Liked, onLike}) => {
    let classes = "fa fa-heart";
    if (!Liked) classes += "-o";
    return (
        <div>
            <i style={{cursor: "pointer"}} className={classes} onClick={onLike}></i>
        </div>
    );
};

export default Like;
