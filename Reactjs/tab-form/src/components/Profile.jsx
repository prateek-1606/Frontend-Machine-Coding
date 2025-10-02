const Profile = ({ formData, setFormData, errors }) => {
  const { name, age, email } = formData;
  const { name: nameError, age: ageError, email: emailError } = errors;

  return (
    <div>
      <div>
        <label>Name: </label>

        <input
          type="text"
          value={name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
        />
        {nameError && (
          <span style={{ color: "red", display: "block" }}>{nameError}</span>
        )}
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) =>
            setFormData({
              ...formData,
              age: e.target.value,
            })
          }
        />
        {ageError && (
          <span style={{ color: "red", display: "block" }}>{ageError}</span>
        )}
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
        {emailError && (
          <span style={{ color: "red", display: "block" }}>{emailError}</span>
        )}
      </div>
    </div>
  );
};

export default Profile;
