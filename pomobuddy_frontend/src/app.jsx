import Timer from "./components/Timer.jsx";
import Layout from "./pages/Layout";
import "./index.css";

const App = () => {
  return (
    <div className="h-screen bg-blue-950 ">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Layout />
    </div>
  );
};

export default App;
