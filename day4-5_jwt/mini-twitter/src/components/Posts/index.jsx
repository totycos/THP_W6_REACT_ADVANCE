import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userApi from "../../services/userApi";
import postApi from "../../services/postApi";
import Cookies from "js-cookie";
import "./index.scss";
import remove from "../../assets/remove.svg";

const Posts = () => {
  const { response, error, getUserDataFetch } = userApi();
  const {
    postResponse,
    postError,
    getPostsFetch,
    createPostFetch,
    deletePostFetch,
  } = postApi();
  const [postData, setPostData] = useState("");
  const [userId, setUserId] = useState("");
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      await getUserDataFetch(Cookies.get("token"));
    };

    const getPosts = async () => {
      await getPostsFetch(Cookies.get("token"));
    };

    getUserData();
    getPosts();
  }, []);

  useEffect(() => {
    if (response && response.id) {
      setUserId(response.id);
    }
    error && console.log(error);
  }, [response, error]);

  useEffect(() => {
    postResponse && setPostData(postResponse);
    postError && console.log(postError);
  }, [postResponse, postError]);

  const handleSaveNewPost = () => {
    const createNewPost = async () => {
      await createPostFetch(Cookies.get("token"), newPost, userId);
    };
    createNewPost();
  };

  const handleRemovePost = async (postId) => {
    await deletePostFetch(Cookies.get("token"), postId);

    const getPosts = async () => {
      await getPostsFetch(Cookies.get("token"));
    };
    getPosts();
  };

  return (
    <>
      <form className="postForm">
        <input
          type="post"
          value={newPost}
          placeholder="What's up ?!"
          onChange={(e) => setNewPost(e.target.value)}
          required
        />

        <div>
          <button type="button" onClick={handleSaveNewPost}>
            Post
          </button>
        </div>
      </form>

      <div className="postList">
        {postData &&
          postData.data &&
          Array.isArray(postData.data) &&
          postData.data.map((post) => (
            <div className="singlePost" key={post.id}>
              <div
                className="singlePost__remove"
                onClick={() => handleRemovePost(post.id)}
              >
                <img src={remove} alt="remove post" />
              </div>
              <Link
                className="singlePost__author"
                to={`/user/${post.attributes.users_permissions_user.data.attributes.username}`}
                state={{
                  description:
                    post.attributes.users_permissions_user.data.attributes
                      .description,
                  authorId: post.attributes.users_permissions_user.data.id,
                }}
              >
                {
                  post.attributes.users_permissions_user.data.attributes
                    .username
                }
              </Link>
              <p className="singlePost__text">{post.attributes.text}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Posts;
