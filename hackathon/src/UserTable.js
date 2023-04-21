import React from "react";
import { MDBDataTable } from "mdbreact";
import { data } from "./data";

const DatatablePage = () => {
  return (
    <div className="h-[80vh] w-[98vw]">
      <MDBDataTable responsive striped bordered data={data} />
    </div>
  );
};

export default DatatablePage;
