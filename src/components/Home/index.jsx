import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  const history = useHistory();
  return (
    <div className="Home">
      <h1>Welcome to Bangalo</h1>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/submit-listing")}
        >
          Submit Listing
        </Button>
      </div>
    </div>
  );
};

export default Home;
