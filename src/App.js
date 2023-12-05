import logo from "./images/terminal-solid 1.svg";
import rectangle from "./images/rectangles.svg";
import profileimg from "./images/avatar.png";
import icongit from "./images/Icon GIT.svg";
import icon32seg from "./images/Icon 32 seguidores.svg";
import iconrock from "./images/Icon Rocketseat.svg";
import iconcame from "./images/Icon cameronwll.svg";
export default function App() {
  return (
    <div>
      <Header />
      <Profile />
    </div>
  );
}

function Header() {
  return (
    <div className="container">
      <img src={rectangle} alt="rec" className="rectangle" />
      <img src={rectangle} alt="rec" className="rectangle1" />

      <div className="Logo">
        <img src={logo} alt="logo" className="logopic" />
        <div className="text">GITHUB BLOG</div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <img src={profileimg} alt="profilepic" className="profilepic" />

      <div className="info">
        <p className="name">Cameron Williamson</p>
        <p className="textinfo">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="contact">
          <div className="cameronwll">
            <img src={iconcame} alt="cameronwll" />
            <lable> cameronwll</lable>
          </div>
          <div className="rocketseat">
            <img src={iconrock} alt="imgrock" />
            <label> Rocketseat</label>
          </div>
          <div className="seguidores">
            <img src={icon32seg} alt="32seguidores" />
            <label> 32 seguidores</label>
          </div>
        </div>
      </div>

      <a href="https://www.github.com" target="blank" className="Github">
        <pre>
          {" "}
          GITHUB <img src={icongit} alt="icongit" className="giticon" />{" "}
        </pre>
      </a>
    </div>
  );
}
