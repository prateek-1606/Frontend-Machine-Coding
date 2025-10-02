import { useMemo, useState } from "react";
import Profile from "./Profile";
import Interests from "./Interest";
import Settings from "./Settings";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const tabs = [
    {
      id: 1,
      name: "Profile",
      component: (
        <Profile
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      ),
      validate: () => {
        const currentErrors = {};
        if (!formData.name) {
          currentErrors.name = "Name is required";
        }
        if (!formData.age) {
          currentErrors.age = "Age is required";
        } else if (isNaN(formData.age)) {
          currentErrors.age = "Age must be a number";
        }
        if (!formData.email) {
          currentErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          currentErrors.email = "Email is invalid";
        }
        setErrors(currentErrors);
        return Object.keys(currentErrors).length === 0;
      },
    },
    {
      id: 2,
      name: "Interests",
      component: (
        <Interests
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      ),
      validate: () => {
        const currentErrors = {};
        if (!formData.interest || formData.interest.length === 0) {
          currentErrors.interest = "At least one interest must be selected";
        }
        setErrors(currentErrors);
        return Object.keys(currentErrors).length === 0;
      },
    },
    {
      id: 3,
      name: "Settings",
      validate: () => true,
      component: (
        <Settings
          formData={formData}
          setFormData={setFormData}
          errors={errors}
        />
      ),
    },
  ];

  const TabFormComponent = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab).component ?? <div></div>;
  }, [activeTab, formData, errors]);

  const handlePrevNavigation = () => {
    if (activeTab === 1) return;
    setActiveTab(activeTab - 1);
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  const handleNextNavigation = () => {
    if (tabs.find((tab) => tab.id === activeTab).validate()) {
      if (activeTab === tabs.length) {
        handleSubmit();
      }
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <div>
      <div className="tabs-header">
        {tabs.map((individualTab) => (
          <div
            className="single-tab"
            onClick={() => setActiveTab(individualTab.id)}
          >
            {individualTab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">{TabFormComponent}</div>
      <div className="naviation-buttons">
        <button onClick={handlePrevNavigation}>Prev</button>
        <button onClick={handleNextNavigation}>
          {activeTab === tabs.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default TabForm;
