import img from "../assets/images/welcome.jpg";
import React from "react";
import style from "../pages/Homestyle.css";
const Home = () => {
  return (
    <div className="hello flex flex-col ">
      <div className="text-center">
        <img src={img} alt="welcome photo" />
      </div>
      <div className="pt-10 text-center">
        <h2 className="text-yellow-400 text-xl font-blod font-serif">
          About me
        </h2>
        <p className="italic">
          A full stacker having spent more than 10 years in the finance and
          transport professions, I reoriented myself towards the full stack
          while mixing my knowledge and my assets with the work that I do as a
          full stack and SAP consultant. I work freelance and remotely while
          satisfying all my clients' needs on time. At the same time independent
          researcher in the field of Afroasiatic linguistics especially the two
          Amazigh and Semitic branches of which I carry out research
          permanently. register in associations promoting the tangible and
          intangible heritage of Morocco.
        </p>
        <p className="pt-4 italic">
          Im Glad you're visiting my simple portfolio , you're welcome to take a
          look throught the pages to see my projects and my formations, and i'll
          be glad if you contact me
        </p>
      </div>
    </div>
  );
};

export default Home;
