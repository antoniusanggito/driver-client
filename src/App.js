import LoginBar from "./components/loginBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home";

function App() {
  const isLoggedIn = localStorage.getItem("token") != null;

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-screen h-screen flex flex-col justify-center items-center p-4 font-sans">
        {isLoggedIn ? <Home /> : <LoginBar />}
      </div>
    </>
  );
}

export default App;
