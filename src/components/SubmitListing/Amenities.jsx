import { Checkbox } from "@material-ui/core";
import React from "react";

const Amenities = ({ formData, handleChange }) => {
  const onChange = (event) => {
    handleChange({
      name: "amenities",
      value: {
        ...formData.amenities,
        [event.target.name]: event.target.checked,
      },
    });
  };

  return (
    <div className="amenities">
      <h1>What amenities do you offer?</h1>
      <p>
        This are jus amenities users guests usually expect, but you can even add
        more after you publish
      </p>
      <div>
        <div className="flex flex-row justify-content-space-between">
          <span>Wifi</span>
          <Checkbox
            name="wifi"
            checked={!!formData.amenities.wifi}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-row justify-content-space-between">
          <span>TV</span>
          <Checkbox
            name="tv"
            checked={!!formData.amenities.tv}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-row justify-content-space-between">
          <span>Heat</span>
          <Checkbox
            name="heat"
            checked={!!formData.amenities.heat}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
