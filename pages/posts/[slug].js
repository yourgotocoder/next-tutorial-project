import React from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostFiles } from "../../lib/post-util";
import Head from "next/head";

const SinglePostPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </>
    );
};

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 1800,
    };
}

export function getStaticPaths() {
    const postFileNames = getPostFiles();
    const slugs = postFileNames.map((filename) =>
        filename.replace(/\.md$/, "")
    );
    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default SinglePostPage;
