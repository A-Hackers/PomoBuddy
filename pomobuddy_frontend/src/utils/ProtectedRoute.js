import React from "react";
import { Route, Navigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance"; // Import axiosInstance

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = React.useState(true);
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get("/user/check-auth"); // Example protected endpoint
        if (response.status === 200) {
          setAuthenticated(true);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        setAuthenticated(false);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
