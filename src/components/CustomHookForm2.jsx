import useInputStateReturnObject from "../hooks/useInputStateReturnObject";

const CustomHookForm2 = () => {
  const nameState = useInputStateReturnObject("nilkantomoni");
  const emailState = useInputStateReturnObject("nilkantomoni@go.com");
  const passwordState = useInputStateReturnObject();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameState);
    console.log(nameState.value);
    console.log(emailState);
    console.log(emailState.value);
    console.log(passwordState);
    console.log(passwordState.value);
    console.log("submitted...................");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <h1 className="text-2xl font-semibold text-blue-600">
          Custom Hook Form 2 Return Object
        </h1>
        <input
          {...nameState}
          type="text"
          name="name"
          placeholder="enter your name"
          className="border-2 border-gray-800"
        />
        <br />
        <input
          {...emailState}
          type="email"
          name="email"
          placeholder="enter your email"
          className="border-2 border-gray-800"
        />
        <br />
        <input
          {...passwordState}
          type="password"
          name="password"
          placeholder="enter your password"
          className="border-2 border-gray-800"
        />
        <br /> <br />
        <input type="submit" value="Submit Now" className="bg-green-600 p-1" />
      </form>
    </div>
  );
};

export default CustomHookForm2;
