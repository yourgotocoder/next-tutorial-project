import React from "react";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Hero from "../components/home/Hero";
import { getFeaturedPosts } from "../lib/post-util";

const HomePage = (props) => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    );
};

export default HomePage;

export function getStaticProps(context) {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts,
        },
        revalidate: 2400,
    };
}
