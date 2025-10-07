import { useState } from "react";

const StateHookForm = () => {
  const [name, setName] = useState("sojoni");
  const [email, setEmail] = useState("sojoni@go.com");
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 4) {
      setError("password must be longer than 4 characters");
    } else {
      setError("no problem");
      console.log(name);
      console.log(email);
      console.log(password);
      console.log("subitted.............");
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <h1 className="text-2xl font-semibold text-blue-600">
          State Hook Controlled Form
        </h1>
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          name="name"
          className="border-2 border-gray-800"
        />
        <br />
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          name="email"
          className="border-2 border-gray-800"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          className="border-2 border-gray-800"
        />
        <br /> <br />
        <input type="submit" value="Submit Now" className="bg-green-600 p-1" />
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default StateHookForm;
