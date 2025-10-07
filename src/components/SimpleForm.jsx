const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit btn clicked...............");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <h1 className="text-2xl font-semibold text-blue-600">Simple Form</h1>
        <input type="text" name="name" className="border-2 border-gray-800" />
        <br />
        <input type="email" name="email" className="border-2 border-gray-800" />
        <br />
        <input
          type="password"
          name="password"
          className="border-2 border-gray-800"
        />
        <br /> <br />
        <input type="submit" value="Submit Now" className="bg-green-600 p-1" />
      </form>
    </div>
  );
};

export default SimpleForm;
