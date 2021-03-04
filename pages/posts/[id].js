import React from "react";

// /posts/123
function Post({post: {id, title}, post}) {
    console.log(post)
    return (
        <div>
            <h1>I am a post (id: {id})</h1>
            <h2>{title}</h2>
        </div>
    );
}

export async function getStaticProps({ params }) {
    // fancy await call

    const post = {
        id: params.id,
        title: `This post is the special ${params.id} post`,
    }

    return {
        // props are then passed to the components this way
        props: {
            post: post
        }
    }
}

export async function getStaticPaths() {
    // fancy await call
    const paths = ["/posts/123", "/posts/456", "/posts/789"];

    return {
        // paths is the key
        paths: paths,
        fallback: false,
    };
}

export default Post;
