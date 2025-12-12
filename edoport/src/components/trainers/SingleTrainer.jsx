import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { trainerContext } from "../context/TrainerContext";

const SingleTrainer = () => {
  let { id } = useParams();
  let { fetchSingleTrainer, singleTrainer } = useContext(trainerContext);
  console.log(singleTrainer);
  useEffect(() => {
    fetchSingleTrainer(id);
  }, []);
  return (
    <div>
      {
        <>
          <p>Trainer Name : {singleTrainer?.trainerName}</p>
          <p>Trainer Email : {singleTrainer?.email}</p>
          <p>Trainer Contact : {singleTrainer?.contact}</p>
          <p>Trainer Experience : {singleTrainer?.experience}</p>
          <p>Trainer Technology : {singleTrainer?.technologies}</p>
        </>
      }
    </div>
  );
};

export default SingleTrainer;
