import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#31363F";
      document.body.style.color = "white";
      // showAlert("Enabled Dark mode!","success")
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is awesome!"
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Install TextUtils now!!!"
      // },2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // showAlert("Enabled Light mode!","success")
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          page1="Home"
          page2="About"
          mode={mode}
          toggleMode={handleToggle}
        />
        {/* <Navbar /> */}
        <div style= {{height : "40px"}}>
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter text to format"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            }
            errorElement={ErrorPage}
          />
          <Route
            exact
            path="/about"
            element={
              <div className="container">
                <About mode={mode} />
              </div>
            }
            errorElement={ErrorPage}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
