import React from "react";
import "../CSS/Slideshow.css";
import img1 from "../Assets/Carrousel/carr1.JPG";
import img2 from "../Assets/Carrousel/carr2.JPG";
import img3 from "../Assets/Carrousel/carr3.JPG";
import img4 from "../Assets/Carrousel/carr4.JPG";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Slideshow = () => {
  return (
    <div className="slideshow__container">
      <div className="slideshow">
        <div className="slide">
          <a href="https://google.com">
            <img src={img1} alt="" />
          </a>
        </div>
        <div className="slide">
          <a href="https://google.com">
            <img src={img2} alt="" />
          </a>
        </div>
        <div className="slide">
          <a href="https://google.com">
            <img src={img3} alt="" />
          </a>
        </div>
        <div className="slide">
          <a href="https://google.com">
            <img src={img4} alt="" />
          </a>
        </div>
      </div>

      <div className="arrows">
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <IconButton>
          <ChevronRight />
        </IconButton>
      </div>
    </div>
  );
};

export default Slideshow;