import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard/opportunities");
  }, [navigate]);
  return null;
};

export default Dashboard;
