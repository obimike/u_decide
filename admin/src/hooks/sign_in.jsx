import { useState } from "react";
import { auth, app } from "../firebase";

function GetSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <div>getSignIn</div>;
}

export default GetSignIn;
