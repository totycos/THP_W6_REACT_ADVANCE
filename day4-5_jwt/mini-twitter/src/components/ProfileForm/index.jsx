import { useState, useEffect } from "react";
import userApi from "../../services/userApi";
import Cookies from "js-cookie";

const ProfileForm = () => {
  const { response, error, getUserDataFetch, updateUserDataFetch } = userApi();
  const [username, setUsername] = useState(
    response && response.username ? response.username : ""
  );
  const [description, setDescription] = useState(
    response && response.description ? response.description : ""
  );
  const [userId, setUserId] = useState(
    response && response.id ? response.id : ""
  );

  useEffect(() => {
    const getUserDataCallApi = async () => {
      await getUserDataFetch(Cookies.get("token"));
    };
    getUserDataCallApi();
  }, []);

  useEffect(() => {
    response && response.username && setUsername(response.username);
    response && response.description && setDescription(response.description);
    response && response.id && setUserId(response.id);
    error && console.log(error);
  }, [response, error]);

  const handleSaveChanges = async () => {
    await updateUserDataFetch(
      Cookies.get("token"),
      username,
      description,
      userId
    );
  };

  return (
    <form>
      <label>Username:</label>
      <input
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label>Description:</label>
      <input
        type="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button type="button" onClick={handleSaveChanges}>
        Save changes
      </button>
    </form>
  );
};

export default ProfileForm;
