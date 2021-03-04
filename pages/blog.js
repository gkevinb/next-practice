import React from "react";
import Link from "next/Link";
import { useRouter } from "next/router"

function Blog({ posts }) {
    const router = useRouter();

    if (router.isFallback) {
        return <h2>Loading...</h2>
    }

    console.log(posts);
    return (
        <div>
            <h1>My blog</h1>
            <Link href="/about">
                <a>Click go to about page</a>
            </Link>

            <button onClick={() => router.push("/about")}>Click to go to about page</button>

            {posts.map(({ id, title, author }) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <h3>By {author}</h3>
                </div>
            ))}
        </div>
    );
}

// Runs at build time, getStaticProps is a keyword
export async function getStaticProps() {
    // fancy await
    const res = {
        data: [
            {
                id: "123",
                title: "My first blog",
                author: "Sonny",
            },
            {
                id: "456",
                title: "My second blog",
                author: "Gwen",
            },
        ],
    };

    const posts = res.data;

    return {
        props: {
            posts,
        },
    };
}

export default Blog;
