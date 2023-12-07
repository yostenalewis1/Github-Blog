import logo from "./images/terminal-solid 1.svg";
import rectangle from "./images/rectangles.svg";
import profileimg from "./images/avatar.png";
import icongit from "./images/Icon GIT.svg";
import icon32seg from "./images/Icon 32 seguidores.svg";
import iconrock from "./images/Icon Rocketseat.svg";
import iconcame from "./images/Icon cameronwll.svg";
import icon1 from "./images/Iconpre.svg";
import icon2 from "./images/Icon (2).svg";
import icon3 from "./images/Icon (3).svg";
import { useState } from "react";
 
const informations = [
  {
    title: "1-JavaScript data types and data structures ",
    text: "1/Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean",
  },
  {
    title: "2-JavaScript data types and data structures ",
    text: "2/Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean",
  },
  {
    title: "3-JavaScript data types and data structures ",
    text: "3/Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean",
  },
  {
    title: "4-JavaScript data types and data structures ",
    text: "4/Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean",
  },
  {
    title: "5-JavaScript data types and data structures ",
    text: "5/Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean",
  },

  {
    title: "6-JavaScript data types and data structures ",
    text: "6/Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean",
  },
];

export default function App() {
  const [selectedTitle, setselectedtitle] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(true);
  const [isTitelOpen, setIstTitleOpen] = useState(false);
  const [isInfoListOpen, setIsInfoListOpen] = useState(true);
  const [isNewPageOpen,setIsNewPageOpen ] = useState(false);
  const [selectedText, setSelectedText] = useState("");  

  return (
    <div className="app">
      <Header />
      {isProfileOpen && <Profile selectedTitle={selectedTitle} />}
      {isInfoListOpen && <Input />}

      {isInfoListOpen && (
        <InfoList
          data={informations}
          dataTitle
          onselected={selectedTitle}
          setonselected={setselectedtitle}
          setIsProfileOpen={setIsProfileOpen}
          setIstTitleOpen={setIstTitleOpen}
          setIsInfoListOpen={setIsInfoListOpen}
          setIsNewPageOpen={setIsNewPageOpen}
          setSelectedText={setSelectedText}
        />
      )}

      {isTitelOpen && (
        <NewPage
          selectedTitle={selectedTitle}
          isTitelOpen={isTitelOpen}
          isProfileOpen={isProfileOpen}
        />
      )}

    {isNewPageOpen && <Content  selectedText={selectedText} />}
      
    </div>
  );
}
function Header() {
  return (
    <div className="header">
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
            <span> cameronwll</span>
          </div>
          <div className="rocketseat">
            <img src={iconrock} alt="imgrock" />
            <span> Rocketseat</span>
          </div>
          <div className="seguidores">
            <img src={icon32seg} alt="32seguidores" />
            <span> 32 seguidores</span>
          </div>
        </div>
      </div>

      <a href="https://www.github.com" target="blank" className="Github">
        <pre>
          GITHUB <img src={icongit} alt="icongit" className="giticon" />
        </pre>
      </a>
    </div>
  );
}
function Input() {
  return (
    <div className="input">
      <div className="wordinput">
        <p>Publicações </p>
        <p className="publicações">6 publicações</p>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="inputtext"
        disabled
      />
    </div>
  );
}

function InfoList({
  data,
  onselected,
  setonselected,
  setIsProfileOpen,
  setIstTitleOpen,
  setIsInfoListOpen,
  setIsNewPageOpen,
  setSelectedText
}) {
  return (
    <div className="infolist">
      {data.map((el, i) => (
        <AccordianItems
          title={el.title}
          text={el.text}
          key={Number(i + 1)}
          onselected={onselected}
          setonselected={setonselected}
          setIsProfileOpen={setIsProfileOpen}
          setIstTitleOpen={setIstTitleOpen}
          setIsInfoListOpen={setIsInfoListOpen}
          setIsNewPageOpen={setIsNewPageOpen}
          setSelectedText={setSelectedText}
        />
      ))}
    </div>
  );
}

function AccordianItems({
  title,
  text,
  setonselected,
  setIsProfileOpen,
  setIstTitleOpen,
  setIsInfoListOpen,
  setIsNewPageOpen,
  setSelectedText,
}) {
  const handleClick = () => {
    setonselected(title);
    setIsProfileOpen(false);
    setIstTitleOpen(true);
    setIsInfoListOpen(false);
    setIsNewPageOpen(true)
    setSelectedText(text)
  };
  return (
    <div className="items" onClick={handleClick}>
      <h3 className="title">{title}</h3>
      <p className="texttitle">{text}</p>
    </div>
  );
}

function NewPage({ selectedTitle }) {
  return (
    <div className="profile">
      <a href="https://www.google.com" className="Voltar">
        <pre>
          <img src={icon1} alt="icon1" className="voltaricon" /> VOLTAR
        </pre>
      </a>

      <a href="https://www.google.com" target="blank" className="verno">
        <pre>
          ver no github <img src={icongit} alt="icongit" className="giticon" />
        </pre>
      </a>

      <p className="selectedTitle">{selectedTitle}</p>

      <div className="contact2">
        <div className="cameronwll2">
          <img src={iconcame} alt="cameronwll" className="iconcame" />
          <span className="textcameronwll">cameronwll</span>
        </div>
        <div className="rocketseat2">
          <img src={icon2} alt="rocketseat" className="iconrocketseat" />
          <span className="iconrocket"> Há 1 dia</span>
        </div>
        <div className="comentários">
          <img src={icon3} alt="icon3" className="iconseguidores" />
          <span> 5 comentários</span>
        </div>
      </div>
    </div>
  );
}
  
 function Content({selectedText}) {
  return <div className="content">
   <p className="selectedText">{selectedText}</p> 
    </div>;
}
 

 