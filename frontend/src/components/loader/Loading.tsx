import React from "react";
import "./loading.css";

export interface LoadingProps {
  classes?: { dot?: string; body?: string };
}

const dotClasses = ["", "animation-delay-200", "animation-delay-400"];

const Loading: React.FC<LoadingProps> = ({ classes }) => {
  return (
    <div className={`flex justify-center ${classes?.body || ""}`}>
      {dotClasses.map((dot) => {
        return (
          <div className={`dot animate-loader ${dot} ${classes?.dot}`}></div>
        );
      })}
    </div>
  );
};

export default Loading;
