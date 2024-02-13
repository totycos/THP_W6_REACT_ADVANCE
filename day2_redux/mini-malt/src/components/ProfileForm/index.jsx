import "./index.scss";

const ProfileForm = () => {
  const handleSave = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.entries(formData);
    console.log(data);
  };

  return (
    <>
      <form className="profileForm" action={handleSave}>
        <div className="nameFormContainer">
          <div className="firstNameFormContainer">
            <label htmlFor="firstName">First name</label>
            <input name="firstName" />
          </div>
          <div className="lastNameFormContainer">
            <label htmlFor="lastName">Last name</label>
            <input name="lastName" />
          </div>
        </div>

        <div className="skillsFormContainer">
          <label htmlFor="skills">Skills</label>
          <input name="skills" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default ProfileForm;
