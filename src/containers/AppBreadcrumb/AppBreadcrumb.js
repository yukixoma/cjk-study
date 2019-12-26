import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const AppBreadcrumb = props => {
  let currentLocation = props.location.pathname.split("/");
  currentLocation.shift();
  return (
    <Breadcrumb tag="nav" listTag="div" listClassName="bg-dark">
      <BreadcrumbItem></BreadcrumbItem>
      {currentLocation.map((pathItem, index) => (
        <BreadcrumbItem key={index} style={{ textTransform: "capitalize" , color: "#20a8d8"}}>
          {`${pathItem}`}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
