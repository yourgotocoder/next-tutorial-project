import React from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/post-util";

const AllPostsPage = (props) => {
    return <AllPosts posts={props.posts} />;
};

export function getStaticProps(context) {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts,
        },
    };
}

export default AllPostsPage;
