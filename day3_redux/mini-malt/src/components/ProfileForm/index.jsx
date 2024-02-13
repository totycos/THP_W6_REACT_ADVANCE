import "./index.scss";

const ProfileForm = () => {
  let data = {};

  const handleSave = (event) => {
    event.preventDefault();
    data = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      skills: event.target[2].value.split(","),
    };
    console.log(data);
  };

  return (
    <>
      <form className="profileForm" onSubmit={handleSave}>
        <div className="nameFormContainer">
          <div className="firstNameFormContainer">
            <label htmlFor="firstName">First name</label>
            <input id="firstName" name="firstName" />
          </div>
          <div className="lastNameFormContainer">
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" name="lastName" />
          </div>
        </div>

        <div className="skillsFormContainer">
          <label htmlFor="skills">Skills</label>
          <input id="skills" name="skills" />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default ProfileForm;
