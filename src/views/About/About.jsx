import React from "react";
import "./About.css";
import CutePic from "../../assets/bighappy.png";
import MemeBird from "../../assets/memebird.jpg";

function PhotoButton(props) {
  console.log(props);
  if (props.isShow) {
    return (
      <>
        <div className="button-wrapper">
          <div
            className="button"
            onClick={() => {
              props.setPhotoShow(false);
            }}
          >
            Click to now close it
          </div>
        </div>
        <img
          src={props.src}
          alt="This is a funny photo"
          width="400px"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </>
    );
  } else {
    return (
      <div className="button-wrapper">
        <div className="button" onClick={() => props.setPhotoShow(true)}>
          Click to see my favorite photo!
        </div>
      </div>
    );
  }
}

export default function AboutScreen() {
  const [isShow, setPhotoShow] = React.useState(false);
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <h1>About Me</h1>
          My name is your name is my name is your name.
          <PhotoButton
            isShow={isShow}
            setPhotoShow={setPhotoShow}
            src={MemeBird}
          ></PhotoButton>
        </div>
      </div>
    </div>
  );
}
