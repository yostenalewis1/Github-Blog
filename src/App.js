import logo from "./images/terminal-solid 1.svg";
import rectangle from "./images/rectangles.svg";
import icongit from "./images/Icon GIT.svg";
import icon32seg from "./images/Icon 32 seguidores.svg";
import iconrock from "./images/Icon Rocketseat.svg";
import iconcame from "./images/Icon cameronwll.svg";
import icon1 from "./images/Iconpre.svg";
import icon2 from "./images/Icon (2).svg";
import icon3 from "./images/Icon (3).svg";
import { useState, useEffect } from "react";
import axios from "axios";

 
const informations = [
  {
    title: "1-JavaScript data types and data structures ",
    semiTitle: "JavaScript data types and data structures",
    text: "1/ Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:",
    code: `let foo = 42; // foo is now a number
           foo = 'bar'; // foo is now a string
           foo = true; // foo is now a boolean`,

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
  const [IsBlogOpen, setIsBlogOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState({});

  return (
    <div className="app">
      <Header 
        IsBlogOpen={IsBlogOpen}
        selectedObject={selectedObject}
        setIsBlogOpen={setIsBlogOpen}
        />

      {!IsBlogOpen && <Input />}

      {!IsBlogOpen && (
        <InfoList
          data={informations}
          setIsBlogOpen={setIsBlogOpen}
          setSelectedObject={setSelectedObject}
        />
      )}

    {IsBlogOpen && <Content selectedObject={selectedObject}/>}
      
    </div>
  );
}

function Header({IsBlogOpen, selectedObject, setIsBlogOpen}) {
  return (
    <div className="header">
      <img src={rectangle} alt="rec" className="rectangle" />
      <img src={rectangle} alt="rec" className="rectangle1" />
      <div className="Logo">
        <img src={logo} alt="logo" className="logopic" />
        <div className="text">GITHUB BLOG</div>
      </div>
      { !IsBlogOpen ? <MainNavBar /> : <NewPageNav selectedObject={selectedObject} setIsBlogOpen={setIsBlogOpen} /> }
    </div>
  );
}

function MainNavBar() {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(`https://api.github.com/users/yostenalewis1`);
        setUserData(userResponse.data);

        const reposResponse = await axios.get(`https://api.github.com/users/yostenalewis1/repos`);
        console.log('Repos:', reposResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile">
      {
        userData && (
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="profile-image"
          />
        )
      }

      <div className="info">
        <p className="name">Yostina lewis</p>
        <p className="textinfo">
          Four year student at the Faculty of Computers and Informatics, Suez Canal University. I am a Front-End Developer and I am passionate about learning new technologies and frameworks.
        </p>

        <div className="contact">
          <div className="cameronwll">
            <img src={iconcame} alt="github" />
            <span>yostenalewis1</span>
          </div>
        </div>
      </div>

      <a href="https://github.com/yostenalewis1" target="blank" className="Github">
        <pre>
          GITHUB <img src={icongit} alt="icongit" className="giticon" />
        </pre>
      </a>
    </div>
  );
}

function NewPageNav({ selectedObject, setIsBlogOpen }) {
  return (
    <div className="profile">
      <button className="Voltar" onClick={() => window.location.reload()}>
        <pre>
          <img src={icon1} alt="icon1" className="voltaricon" /> VOLTAR
        </pre>
      </button>

      <a href="https://www.google.com" target="blank" className="verno">
        <pre>
          ver no github <img src={icongit} alt="icongit" className="giticon" />
        </pre>
      </a>

      <p className="selectedTitle">{selectedObject.title}</p>

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
  setIsBlogOpen,
  setSelectedObject,
}) {
  return (
    <div className="infolist">
      {data.map((el, i) => (
        <AccordianItems
          title={el.title}
          text={el.text}
          code={el.code}
          key={Number(i + 1)}
          setIsBlogOpen={setIsBlogOpen}
          setSelectedObject={setSelectedObject}
        />
      ))}
    </div>
  );
}

function AccordianItems({
  title,
  text,
  code,
  setIsBlogOpen,
  setSelectedObject,
}) {
  const handleClick = () => {
    setIsBlogOpen(true);
    setSelectedObject({ title, text, code });
  };
  return (
    <div className="items" onClick={handleClick}>
      <h3 className="title">{title}</h3>
      <p className="texttitle">{text}</p>
    </div>
  );
}
  
 function Content({selectedObject}) {
  return <div className="content">
   <p className="selectedText">{selectedObject.text}</p> 
   <p className="selectedCode">{selectedObject.code}</p>
    </div>;
}
 

 