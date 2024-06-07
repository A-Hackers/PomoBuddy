import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';

const TimerPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <div className="items-center h-screen bg-background-gradient">
        <Timer />
      </div>
      <style jsx>{`
        .bg-background-gradient {
          background: rgb(4, 20, 72);
          background: -moz-radial-gradient(
            circle,
            rgba(4, 20, 72, 1) 12%,
            rgba(0, 0, 0, 1) 89%
          );
          background: -webkit-radial-gradient(
            circle,
            rgba(4, 20, 72, 1) 12%,
            rgba(0, 0, 0, 1) 89%
          );
          background: radial-gradient(
            circle,
            rgba(4, 20, 72, 1) 12%,
            rgba(0, 0, 0, 1) 89%
          );
          filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#041448",endColorstr="#000000",GradientType=1);
        }
      `}</style>
    </div>
  );
};

export default TimerPage;
