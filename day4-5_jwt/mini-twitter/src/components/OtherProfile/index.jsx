import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import postApi from "../../services/postApi";
import Cookies from "js-cookie";

const OtherProfile = () => {
  const { postResponse, postError, getAuthorPostsFetch } = postApi();
  const { state } = useLocation(); // profile description in received state
  const { username } = useParams();
  const [postData, setPostData] = useState();

  useEffect(() => {
    const getAuthorPosts = async () => {
      await getAuthorPostsFetch(Cookies.get("token"), state.authorId);
    };

    getAuthorPosts();
  }, []);

  useEffect(() => {
    postResponse && setPostData(postResponse);
    postError && console.log(postError);
  }, [postResponse, postError]);

  return (
    <div className="otherProfile">
      <p className="otherProfile__username">{username}</p>
      <p className="otherProfile__description">{state.description}</p>
    </div>
  );
};

export default OtherProfile;
