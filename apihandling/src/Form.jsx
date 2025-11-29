const Form = ({ name, handleChange, handleSubmit }) => {
  // let [details, setDetails] = useState({
  //   name: "",
  // });
  // let { name } = details;

  // let handleChange = (e) => {
  //   let { name, value } = e.target;
  //   setDetails({ ...details, [name]: value });
  // };

  // let handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await addUser(details);
  //   handleTrue();
  //   setDetails({
  //     name: "",
  //   });
  // };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
