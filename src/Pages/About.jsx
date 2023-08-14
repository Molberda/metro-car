import React, { useEffect, useState } from "react";
import "../CSS/About.css";
import AboutSelector from "../Components/AboutSelector";

const About = ({ translation }) => {
  const [active, setActive] = useState(null);

  const activateBtn = (label, test) => {
    document.getElementById("About").className = "";
    document.getElementById("About").classList.add(test);
    setActive(label);
  };
  
  useEffect(() =>{
    document.getElementById("About").classList.add('about')
    setActive('selector 1')
  }, [])

  return (
    <section id="About">
      <div className="container top__container about__container">
        <div className="row top__row about__container">
          <ul className="about__selector--list">
            <AboutSelector
              name={translation.aboutSelector1}
              label="selector 1"
              active={active === "selector 1"}
              activateBtn={() => activateBtn("selector 1", "about")}
            />
            <AboutSelector
              name={translation.aboutSelector2}
              label="selector 2"
              active={active === "selector 2"}
              activateBtn={() => activateBtn("selector 2", "faq")}
            />
            <AboutSelector
              name={translation.aboutSelector3}
              label="selector 3"
              active={active === "selector 3"}
              activateBtn={() => activateBtn("selector 3", "reviews")}
            />
          </ul>
          <div className="about__wrapper">
            <div className="about__text--wrapperLeft">
              <div className="about__text">
                <h3 className="about__text--title">
                  {translation.aboutTextTitle1}
                </h3>
                <p className="about__text--info">{translation.aboutText1}</p>
              </div>
            </div>
            <div className="about__text--wrapperRight"></div>
          </div>
          <div className="faq__wrapper">
            <div className="faq__text--wrapperLeft">
              <div className="faq__text">
                <h3 className="faq__text--title">
                  {translation.faqTextTitle1}
                </h3>
                <p className="faq__text--info">{translation.faqText1}</p>
              </div>
            </div>
            <div className="faq__text--wrapperRight"></div>
          </div>
          <div className="reviews__wrapper">
            <div className="reviews__text--wrapperLeft">
              <div className="reviews__text">
                <h3 className="reviews__text--title">
                  {translation.reviewsTextTitle1}
                </h3>
                <p className="reviews__text--info">{translation.reviewsText1}</p>
              </div>
            </div>
            <div className="reviews__text--wrapperRight"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
