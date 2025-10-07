import { useEffect, useRef } from "react";

const RefHookForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef);
    console.log(nameRef.current);
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log("submitted................");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <h1 className="text-2xl font-semibold text-blue-600">
          Ref Hook Uncontrolled Form
        </h1>
        <input
          ref={nameRef}
          defaultValue={"sojoni"}
          type="text"
          name="name"
          placeholder="enter your name"
          className="border-2 border-gray-800"
          autoComplete="given-name"
        />
        <br />
        <input
          ref={emailRef}
          defaultValue={"sojoni@go.com"}
          type="email"
          name="email"
          placeholder="enter your email"
          className="border-2 border-gray-800"
          autoComplete="work email"
        />
        <br />
        <input
          ref={passwordRef}
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

export default RefHookForm;
