import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "content", "posts");

function getPostData(filename) {
    const filePath = path.join(postDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const postSlug = filename.replace(/\.md$/, "");
    const postData = {
        slug: postSlug,,
        ...data,
        content
    };
    return postData;
}

function getAllPosts() {
    const postFiles = fs.readdirSync(postDirectory);

    const allPosts = postFiles.map(postFile => getPostData(postFile)).sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return allPosts;
}

function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}