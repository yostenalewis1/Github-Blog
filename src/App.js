import logo from "./images/terminal-solid 1.svg";
import rectangle from "./images/rectangles.svg";

export default function App() {
  return (
    <div>
      <Header />
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
