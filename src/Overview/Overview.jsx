import { useRef } from "react";
import { backgrounds } from "../Tehmes/backgrounds";
import "./Overview.css";
import Float from "./FloatLib/Float";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Overview = () => {
  const floatReft = useRef(null);
  const Nav = useNavigate();
  const speeds = [
    { x: 0.33, y: 0.23 },
    { x: 0.4, y: 1.2 },
    { x: 0.6, y: 0.32 },
    { x: 0.8, y: 0.52 },
    { x: 1, y: 0.52 },
  ];

  return (
    <div className="containerSover" style={{ background: backgrounds[3] }}>
      <div className="header-bar">
        <div className="logo">
          <img src="/imagesUi/icon.png" />
        </div>

        <div className="info-header-bar">
          <span>Teams</span>
          <span>Community</span>
          <span>Support</span>
          <span>Enterprise</span>
        </div>
      </div>

      <div className="container-big-text">
        <h1>“Build Better </h1>
        <h2>Live Experiences faster </h2>
        <p>
          “Real-time apps, made simple.”With RTCFlow, you can create secure,{" "}
          <br />
          low-latency video and audio applications in minutes. Perfect for chat
          apps, <br />
          conferencing, or live collaboration. Integrate once, stream
          everywhere.
        </p>

        <button onClick={() => Nav("/doc")}>Start for free</button>
      </div>

      <div className="containreOrganization">
        <Card img={"/OrganizationImage/React.png"} />
        <Card img={"/OrganizationImage/JavaScript.png"} />
        <Card img={"/OrganizationImage/Node.js.png"} />
        <Card img={"/OrganizationImage/Red Hat.png"} />
        <Card img={"/OrganizationImage/Vite.js.png"} />
        <Card img={"/imagesUi/icon.png"} />
      </div>

     <div className="squareFloat" ref={floatReft}>
        {speeds.map((speed, index) => (
          <Float
            key={index}
            posx={Math.random() * 200}  
            posy={Math.random() * 200}
            floatReft={floatReft}
            image={`https://picsum.photos/200/300?random=${index}`}
            Speed={speed}

          />
        ))}
      </div>   
      <div className="trusted-dev">
        <h1>Trusted by developers worldwide</h1>
        <div className="content-trusted-dev">
          <span className="star-content">★ ★ ★ ★ </span>
          <div className="installs"><span>+ 10 k</span> <span>Install</span></div>

         <span> © 2026 YourBrand — Open Source • MIT License   </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
