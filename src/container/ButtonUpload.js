import React from "react";

const ButtonUpload = ({ onClick, title, loadingupload, className }) => {
  if (loadingupload) {
    return (
      <div
        className="spinner-border"
        style={{
          color: " #06d194",
          position: "relative",
          left: "8vw",
          top: "1vw"
        }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <button type="submit" className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonUpload;
