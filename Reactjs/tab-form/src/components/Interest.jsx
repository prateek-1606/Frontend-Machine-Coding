const Interests = ({ formData, setFormData, errors }) => {
  const interestsList = ["Coding", "Traveling", "Cooking", "Gaming", "Sports"];
  const interests = formData.interest || [];
  const { interest: interestError } = errors || {};
  return (
    <div>
      {interestsList.map((interest) => (
        <div key={interest}>
          <input
            checked={interests.includes(interest)}
            type="checkbox"
            name={interest}
            onChange={(e) => {
              if (e.target.checked) {
                setFormData({
                  ...formData,
                  interest: [...interests, interest],
                });
              } else {
                setFormData({
                  ...formData,
                  interest: interests.filter((item) => item !== interest),
                });
              }
            }}
          />
          {interest}
        </div>
      ))}
      {interestError && (
        <span style={{ color: "red", display: "block" }}>{interestError}</span>
      )}
    </div>
  );
};

export default Interests;
