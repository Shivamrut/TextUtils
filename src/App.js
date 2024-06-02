import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" page1="Home" page2="About" />
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm heading="Enter text to analyze"/>
      </div>
    </>
  );
}

export default App;