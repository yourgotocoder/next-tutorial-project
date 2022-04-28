import React from "react";
import Link from "next/link";
import classes from "./PostItem.module.css";
import Image from "next/image";

const PostItem = (props) => {
    const { title, image, excerpt, date, slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
    });

    const imagePath = `/images/post/${slug}/${image}`;

    return (
        <li className={classes.post}>
            <Link href={slug}>
                <a>
                    <div className={classes.image}>
                        <Image
                            src={image}
                            alt={excerpt}
                            width={300}
                            height={200}
                        />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
