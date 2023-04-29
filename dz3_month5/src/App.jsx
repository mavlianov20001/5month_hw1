import Form from "./components/Form";
import "./App.css";
import Counter from "./components/Counter";
import User from "./components/User/User";
function App() {
  return (
    <>
      <div className="wrapper">
        <Form />
        <User />
      </div>
      <Counter />
    </>
  );
}

export default App;
