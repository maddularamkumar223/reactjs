const CreateForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {data.map((value) => {
          return (
            <aside key={value.name}>
              <label htmlFor="">{value.name}</label>
              <input
                type="text"
                placeholder={`Enter Your ${value.name}`}
                value={value.stateValue}
                onChange={handleChange}
                name={`${value.name}`}
              />
            </aside>
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
