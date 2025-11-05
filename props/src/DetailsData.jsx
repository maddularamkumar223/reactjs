// import React from "react";

// const DetailsData = (props) => {
//   console.log(props);
//   console.log(props.userDetails.userName);
//   // let {userDetails} = props
//   // console.log(userDetails)
//   // let {userName,isAvailable} = userDetails;
//   // console.log(userName)
//   // console.log(isAvailable)

//   let {
//     userDetails: { userName, isAvailable },
//   } = props;
//   console.log(userName, isAvailable);
//   return (
//     <div>
//       {/* <h1>Name : {userName}</h1>
//       <p> IS Available : {isAvailable ? "Online" : "Busy"}</p> */}
//     </div>
//   );
// };

// export default DetailsData;

import React from "react";

const DetailsData = (props) => {
  let { employeesData } = props;
  console.log(employeesData);
  return (
    <div>
      {employeesData?.map((value) => {
        return (
          <>
            <h1>Name : {value.employName}</h1>
            <p>Is Available :{value.isAvailable ? "Online" : "Busy"}</p>
          </>
        );
      })}
    </div>
  );
};

export default DetailsData;
