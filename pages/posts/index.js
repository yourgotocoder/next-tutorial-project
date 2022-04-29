import React from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";

const AllPostsPage = (props) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta
                    name="description"
                    content="A list of all programming tutorials and posts"
                />
            </Head>
            <AllPosts posts={props.posts} />
        </>
    );
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
