import fs from "fs";
import path from "path";

const postDirectory = path.join(process.cwd(), "content", "posts");

function getAllPosts() {
    const postFiles = fs.readdirSync(postDirectory);
}
