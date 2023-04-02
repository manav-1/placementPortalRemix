import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard/opportunities");
  });
  return null;
};

export default Dashboard;
