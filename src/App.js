import logo from "./images/terminal-solid 1.svg";
import rectangle from "./images/rectangles.svg";
import profileimg from "./images/avatar.png";
import icongit from "./images/Icon GIT.svg";
import icon32seg from "./images/Icon 32 seguidores.svg";
import iconrock from "./images/Icon Rocketseat.svg";
import iconcame from "./images/Icon cameronwll.svg";

const informations= [ 
  {
    title :"JavaScript data types and data structures " ,
    text :"Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean"
  },
    {
    title :"JavaScript data types and data structures " ,
    text :"Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean"
  } , 
  {
    title :"JavaScript data types and data structures " ,
    text :"Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean"
  }, 
   {
    title :"JavaScript data types and data structures " ,
    text :"Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean"
  },
  {
    title :"JavaScript data types and data structures " ,
    text :"Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean"
  } , 
  
  {
    title :"JavaScript data types and data structures " ,
    text :"Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean"
  } , 
  

]

export default function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Input />
      < InfoList data= {informations} />
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


function InfoList({data})
{ 
  return(
    <div className="infolist">
      {
        data.map(el=>
          <AccordianItems title={el.title} text={el.text} key={Date.now}/>
          )
      }
    </div>
  )

}

function AccordianItems ({title, text})
{
  return(
    <div className="items">
      <h3 className="title">{title}</h3>
      <p className="texttitle">{text}</p>
    </div>
  )
}