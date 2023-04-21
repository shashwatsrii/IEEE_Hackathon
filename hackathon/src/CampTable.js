import React from "react";
import { MDBDataTable } from "mdbreact";
import { Campdata } from "./Campdata";

const DatatablePage2 = () => {
  return (
    <div className="h-[80vh] w-[98vw]">
      <MDBDataTable responsive striped bordered data={Campdata} />
    </div>
  );
};

export default DatatablePage2;
