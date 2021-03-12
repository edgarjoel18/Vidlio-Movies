// The common folder stores all the re-usable components that are not specific to the domain of the vidly application
// Such as like components, pagination, tables, forms, etc
import React, { Component } from "react";
/**
    Interface: 
    -Input: We tell this component whether the given entity(Movie) is liked or not. Its a boolean
    -Output: When clicked we want to raise an onClick event. Whoever is using this component will be notified the user of this 
    // can save this data to the database
    // This component knows nothing about Movies. Just renders an empty or full heart 


 */

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) {
    classes += "-o";
  }

  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
