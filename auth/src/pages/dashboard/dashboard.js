import React, { useEffect, useHistory } from "react";
import jwt from "jsonwebtoken";

function Dashboard() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        history.replace = "/";
      }
    }
  });
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <h2>You came here because you login is successfull,Thanks for coming.</h2> */}
    </div>
  );
}

export default Dashboard;
