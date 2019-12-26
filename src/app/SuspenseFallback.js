import React from "react";

const SuspenseFallback = () => {
  return (
    <div className="animated fadeIn pt-3 text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default SuspenseFallback;
