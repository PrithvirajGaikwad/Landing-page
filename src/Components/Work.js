import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Pick Meals info should be here about how it works and all.",
    },
    {
      image: ChooseMeals,
      title: "Choose Meals",
      text: "Choose Meals info should be here about how it works and all.",
    },
    {
      image: DeliveryMeals,
      title: "Delivery Meals",
      text: "Delivery Meals info should be here about how it works and all.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <p className="primary-heading">How it Work</p>
        <p className="primary-text">
          How it works info should be here about how it works and all.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt=""></img>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
