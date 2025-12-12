import React, { useContext, useEffect } from "react";
import { trainerContext } from "./../context/TrainerContext";
import { useNavigate } from "react-router-dom";

const DisplayTrainer = () => {
  let { fetchTrainerData, trainersData } = useContext(trainerContext);
  let navigate = useNavigate();

  useEffect(() => {
    fetchTrainerData();
  }, []);
  return (
    <div>
      {trainersData?.map((value) => {
        return (
          <article>
            <p>Trainer Name :{value.trainerName}</p>
            <p>Technology : {value.technologies}</p>
            <button
              onClick={() => {
                navigate(`/singleTrainer/${value.id}`);
              }}
            >
              View Details
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default DisplayTrainer;
