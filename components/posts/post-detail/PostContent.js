import React from "react";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";

const DUMMY_POST = {
    title: "One",
    image: "getting-started-nextjs.png",
    content: "# The first post titled one",
    date: new Date(),
    slug: "getting-started-with-nextjs",
};

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            Content
        </article>
    );
};

export default PostContent;
