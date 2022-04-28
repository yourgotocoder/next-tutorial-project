import React from "react";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Hero from "../components/home/Hero";

const DUMMY_DATA = [
    {
        title: "One",
        image: "getting-started-nextjs.png",
        excerpt: "The first post titled one",
        date: new Date(),
        slug: "getting-started-with-nextjs",
    },
    {
        title: "Two",
        image: "getting-started-nextjs.png",
        excerpt: "The second post titled two",
        date: new Date(),
        slug: "finishing-nextjs",
    },
    {
        title: "Three",
        image: "getting-started-nextjs.png",
        excerpt: "The third post titled three",
        date: new Date(),
        slug: "done-with-nextjs",
    },
];

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_DATA} />
        </>
    );
};

export default HomePage;
