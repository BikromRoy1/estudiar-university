import React from "react";

const ButtomFooter = () => {
  return (
    <div>
      <hr />
      <div className="container bg-primary text-white py-3">
        <div className="row">
          <div className="col-lg-12">
            <div className=" d-lg-flex text-center text-lg-start justify-content-between ">
              <p className="m-0">
                Copyright © 2022 Estudiar University. All rights reserved.
              </p>
              <div className="text-white">
                <a className="text-white" href="https://google.com">
                  PRIVACY POLICY
                </a>
                <a className="text-white" href="https://google.com">
                  SUPPORT
                </a>
                <a className="text-white" href="https://google.com">
                  TERMS & CONDITION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtomFooter;
