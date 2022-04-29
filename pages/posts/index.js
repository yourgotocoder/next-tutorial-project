import React from "react";
import AllPosts from "../../components/posts/AllPosts";

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

const AllPostsPage = () => {
    return <AllPosts posts={DUMMY_DATA} />;
};

export default AllPostsPage;
