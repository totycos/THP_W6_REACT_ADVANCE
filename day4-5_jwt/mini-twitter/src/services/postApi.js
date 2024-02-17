import { useState } from "react";

const postApi = () => {
    const [postResponse, setPostResponse] = useState(null);
    const [postError, setPostError] = useState(null);

    // GET POST
    const getPostsFetch = async (token) => {
        try {
            const response = await fetch('http://localhost:1337/api/posts?populate=*', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Get post data failed. Please check your credentials and try again.');
            }

            const postData = await response.json();
            setPostResponse(postData)
        } catch (error) {
            setPostError(`Error during get posts: ${error.message}`);
        }
    }

    // CREATE POST
    const createPostFetch = async (token, text, USER_ID) => {
        try {
            const data = {
                text: text,
                user: USER_ID
            };
            console.log('data dans fetch:', data)
            const response = await fetch(`http://localhost:1337/api/posts`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Create post failed. Please check your credentials and try again.');
            }

            const postData = await response.json();
            setPostResponse(postData)
        } catch (error) {
            setPostError(`Error during create post: ${error.message}`);
        }
    }

    // GET AUTHOR S POSTS
    const getAuthorPostsFetch = async (token, USER_ID) => {
        try {
            const response = await fetch(`http://localhost:1337/api/posts?filters[user][id][$eq]=${USER_ID}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Get author s post data failed. Please check your credentials and try again.');
            }

            const postData = await response.json();
            setPostResponse(postData)
        } catch (error) {
            setPostError(`Error during getauthor s posts: ${error.message}`);
        }
    }

    // DELETE POST
    const deletePostFetch = async (token, POST_ID) => {
        console.log(token, POST_ID)
        try {
            const response = await fetch(`http://localhost:1337/api/posts/${POST_ID}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Delete post failed. Please check your credentials and try again.');
            }

            const postData = await response.json();
            setPostResponse(postData)
        } catch (error) {
            setPostError(`Error during delete post: ${error.message}`);
        }
    }


    return { postResponse, postError, getPostsFetch, createPostFetch, getAuthorPostsFetch, deletePostFetch }
};

export default postApi