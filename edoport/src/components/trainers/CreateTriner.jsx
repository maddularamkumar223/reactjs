import React, { useContext, useState } from "react";
import { trainerContext } from "./../context/TrainerContext";
import CreateForm from "./../form/CreateForm";

const CreateTriner = () => {
  let [trainerDetails, setTrainerDetails] = useState({
    trainerName: "",
    experience: "",
    technologies: "",
    email: "",
    contact: "",
  });

  let { addTrainer } = useContext(trainerContext);

  let { trainerName, experience, technologies, email, contact } =
    trainerDetails;
  let trainersData = [
    {
      trainerName: "trainerName",
      stateValue: trainerName,
      type: "text",
    },
    {
      name: "email",
      stateValue: email,
      type: "email",
    },
    {
      name: "contact",
      stateValue: contact,
      type: "tel",
    },
    {
      name: "experience",
      stateValue: experience,
      type: "number",
    },
    {
      name: "technologies",
      stateValue: technologies,
      type: "text",
    },
  ];

  let handleChange = (e) => {
    let { name, value } = e.target;
    setTrainerDetails({ ...trainerDetails, [name]: value });
  };

  let handleSubmit = () => {
    addTrainer(trainerDetails);
  };

  return (
    <div>
      <CreateForm
        data={trainersData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateTriner;
