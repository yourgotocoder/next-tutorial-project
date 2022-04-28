import React from "react";
import classes from "./PostGrid.module.css";
import PostItem from "./PostItem";

const PostGrid = (props) => {
    const { posts } = props;

    return (
        <ul className={classes.grid}>
            {posts.map((post) => (
                <PostItem key={post.id} />
            ))}
        </ul>
    );
};

export default PostGrid;
