import axios from "axios";
import { createContext, useState } from "react";

export let trainerContext = createContext();

let TrainerProvider = ({ children }) => {
  let [trainers, setTrainers] = useState({
    trainersData: [],
    singleTrainer: {},
  });

  let { trainersData, singleTrainer } = trainers;

  let fetchTrainerData = async () => {
    try {
      let { data } = await axios.get("http://localhost:3000/trainers");
      setTrainers({ ...trainersData, trainersData: data });
    } catch (error) {
      console.log(error);
    }
  };

  let addTrainer = async (data) => {
    try {
      await axios.post("http://localhost:3000/trainers", data);
    } catch (error) {
      console.log(error);
    }
  };

  let fetchSingleTrainer = (id) => {
    let singleTrainerData = trainersData.find((value) => value.id === id);
    setTrainers({ ...trainersData, singleTrainer: singleTrainerData });
  };
  return (
    <trainerContext.Provider
      value={{
        fetchTrainerData,
        addTrainer,
        trainersData,
        singleTrainer,
        fetchSingleTrainer,
      }}
    >
      {children}
    </trainerContext.Provider>
  );
};
export default TrainerProvider;
