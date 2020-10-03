import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Avatar, Button, LinearProgress } from "@material-ui/core";

import logo from "../../assets/images/logo.svg";

import Amenities from "./Amenities";
import SpaceDetails from "./SpaceDetails";
import Footer from "./Footer";
import "./SubmitListing.scss";

const SubmitListing = ({
  progress,
  screenNumber,
  handleChangeScreen,
  formData,
  setFormData,
  handleChange,
  loading,
  error,
  handleSubmit
}) => {
  const history = useHistory();

  const renderScreen = () => {
    switch (screenNumber) {
      case 1:
        return <Amenities formData={formData} handleChange={handleChange} />;
      case 2:
        return <SpaceDetails formData={formData} handleChange={handleChange} />;

      default:
        return <Amenities formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <Container className="SubmitListing">
      <header className="flex flex-row justify-content-space-between">
        <Avatar alt="Logo" src={logo} />
        <Button color="primary" onClick={() => history.push("/home")}>
          Exit
        </Button>
      </header>
      <section>
        <LinearProgress
          className="progress-bar"
          variant="determinate"
          value={progress}
        />
        <div className="content">{renderScreen()}</div>
      </section>
      <footer>
        <Footer
          screenNumber={screenNumber}
          handleChangeScreen={handleChangeScreen}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </footer>
    </Container>
  );
};

export default SubmitListing;
