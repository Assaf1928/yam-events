import React from "react";

import classes from "./serviceDescription.module.css";
import ServiceDescriptionCard from "./serviceDescriptionCard/serviceDescriptionCard";

const serviceDescription = (props) => {
  console.log(props.serviceDescriptionCardsArr);

  return (
    <div className={classes.serviceDescription_container}>
      {props.serviceDescriptionCardsArr.map((a, index) => {
        return (
          <ServiceDescriptionCard
            title={a.title}
            icon={a.icon}
            description={a.description}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default serviceDescription;
