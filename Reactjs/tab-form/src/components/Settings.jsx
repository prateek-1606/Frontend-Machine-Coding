const Settings = ({ formData, setFormData, errors }) => {
  const { theme } = formData;

  const { theme: themeError } = errors || {};

  return (
    <div>
      <label>Theme</label>
      <select
        name="theme"
        value={theme}
        onChange={(e) => {
          setFormData({ ...formData, theme: e.target.value });
        }}
      >
        <option>Light</option>
        <option>Dark</option>
      </select>
      {themeError && (
        <span style={{ color: "red", display: "block" }}>{themeError}</span>
      )}
    </div>
  );
};

export default Settings;
