import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComplaint, deleteComplaint } from "../redux/slices/complaintSlice";

const Complaint = () => {
  let [complaintData, setComplaintData] = useState({
    id: crypto.randomUUID(),
    complaintValue: "",
  });
  let complaints = useSelector((state) => state.complaint.complaints);
  let dispatch = useDispatch();
  let handleChange = (e) => {
    setComplaintData({ ...complaintData, complaintValue: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComplaint(complaintData));
    console.log(complaints);
    setComplaintData({
      id: crypto.randomUUID(),
      complaintValue: "",
    });
  };
  console.log(complaints);
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Complaint</label>
        <input
          type="text"
          value={complaintData.complaintValue}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>

      <section>
        {complaints.map((value) => {
          return (
            <article>
              <p>{value.complaintValue}</p>
              <button>Edit</button>
              <button onClick={() => dispatch(deleteComplaint(value.id))}>
                Delete
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Complaint;
