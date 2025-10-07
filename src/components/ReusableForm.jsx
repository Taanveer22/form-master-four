const ReusableForm = ({ formTitle, submitBtnText, handleSubmit, children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      <form onSubmit={handleLocalSubmit} className="space-y-3">
        <h1 className="text-2xl font-semibold text-blue-600">{formTitle}</h1>
        {children}
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          className="border-2 border-gray-800"
          autoComplete="given-name"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          className="border-2 border-gray-800"
          autoComplete="work email"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          className="border-2 border-gray-800"
          autoComplete="current-password"
        />
        <br /> <br />
        <input
          value={submitBtnText}
          type="submit"
          className="bg-green-600 p-1"
        />
      </form>
    </div>
  );
};

export default ReusableForm;
