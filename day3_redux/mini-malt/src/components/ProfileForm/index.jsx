import "./index.scss";
import { useState } from "react";
import { connect } from "react-redux";

const ProfileForm = ({ user, updateProfile }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    skills: user.skills.join(", "), // Assuming skills is an array
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      ...user,
      ...formData,
      skills: formData.skills.split(", ").map((skill) => skill.trim()), // Convert string to array
    };
    updateProfile(updatedProfile);
  };

  return (
    <>
      <form className="profileForm" onSubmit={handleSubmit}>
        <div className="nameFormContainer">
          <div className="firstNameFormContainer">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="lastNameFormContainer">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="skillsFormContainer">
          <label htmlFor="skills">Skills</label>
          <input
            id="skills"
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (updatedProfile) =>
    dispatch({ type: "UPDATE_PROFILE", payload: updatedProfile }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
