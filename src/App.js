import { Form } from "./Components/Form";
import { Tasks } from "./Components/Tasks";
import { FormContextProvider } from "./Context/FormContext";

function App() {
  return (
    <div>
      <FormContextProvider>
        <Form />
        <Tasks />
      </FormContextProvider>
    </div>
  );
}

export default App;
