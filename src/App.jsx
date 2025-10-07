import SimpleForm from "./components/SimpleForm";

import StateHookForm from "./components/StateHookForm";

import RefHookForm from "./components/RefHookForm";

import CustomHookForm from "./components/CustomHookForm";

import CustomHookForm2 from "./components/CustomHookForm2";

import ReusableForm from "./components/ReusableForm";

function App() {
  const handleSignUpForm = (data) => {
    console.log("sign up ", data);
  };

  const handleUpdateProfileForm = (data) => {
    console.log("update profile", data);
  };
  return (
    <div className="w-5/6 mx-auto my-10 space-y-5">
      <SimpleForm></SimpleForm>
      <StateHookForm></StateHookForm>
      <RefHookForm></RefHookForm>

      <CustomHookForm></CustomHookForm>
      <CustomHookForm2></CustomHookForm2>

      <ReusableForm
        handleSubmit={handleSignUpForm}
        formTitle="Resuable Form 1"
        submitBtnText="sign up"
      >
        <div>
          <h1>Sign Up</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </ReusableForm>
      <ReusableForm
        handleSubmit={handleUpdateProfileForm}
        formTitle="Reusable Form 2"
        submitBtnText="update profile"
      >
        <div>
          <h1>Update Profile</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </ReusableForm>
    </div>
  );
}

export default App;
