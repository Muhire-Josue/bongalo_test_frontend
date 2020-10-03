import React from "react";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

const SpaceDetails = ({ formData, handleChange }) => {
  const onChange = (event) => {
    handleChange({
      name: "place",
      value: {
        ...formData.place,
        [event.target.name]: event.target.value,
      },
    });
  };
  return (
    <div className="SpaceDetails">
      <h1>Let's get started listing your space</h1>
      <b>STEP 1 </b>
      <p>What kind of place do you have?</p>
      <div className="flex flex-column">
        <InputLabel id="place-type-label">Place type</InputLabel>
        <div>
          <Select
            labelId="place-type-label"
            value={formData.place.type ?? ""}
            onChange={onChange}
            name="type"
            placeholder="Entire place"
            style={{ width: "80%" }}
          >
            <MenuItem value="Entire place">Entire place</MenuItem>
            <MenuItem value="Private place">Private place</MenuItem>
            <MenuItem value="Shared place">Shared place</MenuItem>
          </Select>
        </div>
        <br />
        <br />
        <div>
          <InputLabel id="places-number-label">places number</InputLabel>
          <Select
            labelId="places-number-label"
            value={formData.place.placesNumber ?? 0}
            onChange={onChange}
            name="placesNumber"
            style={{ width: "80%" }}
          >
            <MenuItem value={10}>For 10 guests</MenuItem>
            <MenuItem value={30}>For 30 guests</MenuItem>
            <MenuItem value={40}>For 40 guests</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetails;
