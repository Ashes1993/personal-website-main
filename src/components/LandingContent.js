import React from "react";
import image from "./images/profile-picture1.jpg";
import { useGlobalContext } from "../context";
import { MdOutlineWeb } from "react-icons/md";
import SlowText from "./UI/SlowText";
import { Link } from "react-router-dom";

const LandingContent = () => {
  const { setIsBurgerMenu } = useGlobalContext();
  return (
    <>
      <div onClick={() => setIsBurgerMenu(false)} className="about-container">
        <div className="picture-container">
          <img className="profile-picture" src={image} alt="Profile" />
        </div>
        <div className="about-text">
          <SlowText text={"Front-End Developer"} speed={120} />
          <h1 className="name">Ashkan Eslami</h1>
          <p>
            Developing Responsive web pages using React library and other
            related libraries.
          </p>
          <button className="download-btn">
            <a href="https://drive.google.com/uc?export=download&id=1R602c8puPfGGRDcuJ1wEyrWFFQqdJqgI">
              Download CV
            </a>
          </button>
          <button className="contact-btn">
            <Link to={"/contact"}>Contact</Link>
          </button>
        </div>
      </div>
      <div className="abilities">
        <div className="abilities-header">
          <span>What I Do</span>
        </div>
        <div className="ability-item">
          <MdOutlineWeb className="ability-item-icon" />
          <h3>Web Development</h3>
          <p>
            Designing responsive web pages for any devices using React library
            and JavaScript language.
          </p>
        </div>
        <div className="ability-item">
          <MdOutlineWeb className="ability-item-icon" />
          <h3>Data Scraping</h3>
          <p>
            Data Scraping and mining using python language and Scrapy library.
          </p>
        </div>
        <div className="ability-item">
          <MdOutlineWeb className="ability-item-icon" />
          <div className="ability-item-texts">
            <h3>Data Entry and Research</h3>
            <p>
              Professional research and handling the result in documents like
              Excel, Spreadsheet and etc.
            </p>
          </div>
        </div>
        <div className="ability-item ">
          <MdOutlineWeb className="ability-item-icon" />
          <h3>English Transcriber</h3>
          <p>
            Transcription of English audio and videos. Also making subtitles for
            videos using SubtitleEdit application.
          </p>
        </div>
      </div>
    </>
  );
};
export default LandingContent;
