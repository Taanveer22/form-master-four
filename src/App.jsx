// import SimpleForm from "./components/SimpleForm";

import CustomHookForm2 from "./components/CustomHookForm2";

import CustomHookForm from "./components/CustomHookForm";

// import RefHookForm from "./components/RefHookForm";

// import StateHookForm from "./components/StateHookForm";

function App() {
  return (
    <div className="w-5/6 mx-auto my-10">
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateHookForm></StateHookForm> */}
      {/* <RefHookForm></RefHookForm> */}

      <CustomHookForm></CustomHookForm>
      <CustomHookForm2></CustomHookForm2>
    </div>
  );
}

export default App;
