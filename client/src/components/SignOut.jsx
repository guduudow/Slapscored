import react from "react";
import { useNavigate } from "react-router-dom";
import "./SignOut.css";

function SignOut() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userData");

    navigate("/login");
  };

  return (
    <>
      <button onClick={logout} className="signout-btn btn-font">
        Sign Out
      </button>
    </>
  );
}

export default SignOut;
