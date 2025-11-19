// import React, { useState } from "react";

// const Form = () => {
//   let [userName, setUsername] = useState("");
//   let [email, setEmail] = useState("");
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted");
//     console.log(userName);
//     console.log(email);
//   };
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <aside>
//           <label htmlFor="">Name</label>
//           <input
//             type="text"
//             value={userName}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </aside>
//         <aside>
//           <label htmlFor="">Email</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </aside>
//         <aside>
//           <button>Submit</button>
//         </aside>
//       </form>
//     </div>
//   );
// };

// export default Form;
import React, { useState } from "react";

const Form = () => {
  let [details, setDetails] = useState({
    userName: "",
    email: "",
    gender: "",
  });
  let { userName, email, gender } = details;

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(details);
    setDetails({
      userName: "",
      email: "",
      gender: "",
    });
  };
  let handleChange = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={details.userName}
            name="userName"
            onChange={handleChange}
          />
        </aside>
        <aside>
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={details.email}
            name="email"
            onChange={handleChange}
          />
        </aside>
        <aside value={details.gender} onChange={handleChange}>
          <label htmlFor="">Gender</label>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
          <input type="radio" name="gender" value="others" />
          Others
        </aside>
        <aside>
          <button>Submit</button>
        </aside>
      </form>
    </div>
  );
};

export default Form;
