import useInputStateReturnArray from "../hooks/useInputStateReturnArray";

const CustomHookForm = () => {
  const [name, handleNameChange] = useInputStateReturnArray("rojoni");
  const [email, handleEmailChange] = useInputStateReturnArray("rojoni@go.com");
  const [password, handlePasswordChange] = useInputStateReturnArray();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log("submited...");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <h1 className="text-2xl font-semibold text-blue-600">
          Custom Hook Form 1 return array
        </h1>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="enter your name"
          className="border-2 border-gray-800"
          autoComplete="given-name"
        />
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="enter your email"
          className="border-2 border-gray-800"
          autoComplete="work email"
        />
        <br />
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          name="password"
          placeholder="enter your password"
          className="border-2 border-gray-800"
          autoComplete="current-password"
        />
        <br /> <br />
        <input type="submit" value="Submit Now" className="bg-green-600 p-1" />
      </form>
    </div>
  );
};

export default CustomHookForm;
