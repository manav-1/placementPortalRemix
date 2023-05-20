import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/dashboard/opportunities');
  }, [navigate]);
  return null;
}

export default Dashboard;
