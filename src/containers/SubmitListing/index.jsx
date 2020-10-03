import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

import SubmitListing from "../../components/SubmitListing";
import { MAX_LISTING_SCREENS } from "../../constants/general";
import { saveListing } from '../../redux/actions/listing';

const SubmitListingContainer = () => {
  const dispatch = useDispatch();
  const [screenNumber, setScreenNumber] = React.useState(1);
  const [progress, setProgress] = React.useState(0);
  const [formData, setFormData] = React.useState({
    amenities: {
      wifi: false,
      tv: false,
      heat: false,
    },
    place: {
      type: "",
      placesNumber: 0,
    },
  });

  const { amenities, place } = formData;
  const { submitListing: { loading, data, error } } = useSelector((state) => state);
  const history = useHistory();

  const handleChange = ({ name, value }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeScreen = (screen) => {
    // check if at least one amenity has be selected, otherwise return
    if (
      !Object.keys(formData.amenities).some(
        (key) => formData.amenities[key] === true
      )
    ) {
      return;
    }
    setScreenNumber(screen ?? 1);
  };
  const handleChangeProgress = () => {
    const percentage = Math.ceil((screenNumber * 100) / MAX_LISTING_SCREENS);

    // check if at least one amenity has be selected, otherwise return
    if (
      !Object.keys(formData.amenities).some(
        (key) => formData.amenities[key] === true
      )
    ) {
      return setProgress(0);
    }
    if (!(formData.place.type && formData.place.placesNumber)) {
      return setProgress(50);
    }
    setProgress(percentage);
  };

  const handleSubmit = () => {
    const wifi = amenities.wifi;
    const tv = amenities.tv;
    const heat = amenities.heat;
    const place_type = place.type;
    const guest_number = place.placesNumber;
    saveListing({ wifi, tv, heat, place_type, guest_number }, history)(dispatch)
  }

  React.useEffect(() => {
    handleChangeProgress();
  }, [screenNumber, formData]);

  return (
    <SubmitListing
      progress={progress}
      handleChangeProgress={handleChangeProgress}
      screenNumber={screenNumber}
      handleChangeScreen={handleChangeScreen}
      formData={formData}
      setFormData={setFormData}
      handleChange={handleChange}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
};

export default SubmitListingContainer;
