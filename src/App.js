import "./App.css";
import React, { useState } from "react";

import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hire from "./components/Hire/Hire";
import Inner from "./components/Inner/Inner";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

import react from "./assets/Img/skills/react.svg";
import sass from "./assets/Img/skills/sass.svg";
import js from "./assets/Img/skills/js.svg";
import html from "./assets/Img/skills/html-5.svg";
import git from "./assets/Img/skills/git.svg";
import css from "./assets/Img/skills/css-3.svg";
import avtotex from "./assets/Img/projects/avtotex.by.jpg";
import spaceX from "./assets/Img/projects/SpaceX.jpg";
import myCollages from "./assets/Img/projects/MyCollages.jpg";

function App() {
  const skillsState = [
    {
      id: 1,
      title: "React",
      discription: `React — JavaScript-библиотека с открытым исходным кодом для
                  разработки пользовательских интерфейсов. React разрабатывается
                  и поддерживается Facebook, Instagram и сообществом отдельных
                  разработчиков и корпораций. React может использоваться для
                  разработки одностраничных и мобильных приложений.`,
      img: react,
    },
    {
      id: 2,
      title: "HTML5",
      discription: `HTML5 — язык для структурирования и представления содержимого
                  всемирной паутины.`,
      img: html,
    },
    {
      id: 3,
      title: "CSS",
      discription: `CSS — формальный язык описания внешнего вида документа,
                  написанного с использованием языка разметки. Также может
                  применяться к любым XML-документам, например, к SVG или XUL.`,
      img: css,
    },
    {
      id: 4,
      title: "JS",
      discription: `JavaScript — мультипарадигменный язык программирования.
                  Поддерживает объектно-ориентированный, императивный и
                  функциональный стили. Является реализацией стандарта
                  ECMAScript. JavaScript обычно используется как встраиваемый
                  язык для программного доступа к объектам приложений.`,
      img: js,
    },
    {
      id: 5,
      title: "GitHub",
      discription: `GitHub — крупнейший веб-сервис для хостинга IT-проектов и их
                  совместной разработки. Веб-сервис основан на системе контроля
                  версий Git и разработан на Ruby on Rails и Erlang компанией
                  GitHub, Inc.`,
      img: git,
    },
    {
      id: 6,
      title: "SASS",
      discription: `Sass — модуль, включенный в Haml. Sass — это метаязык на
                  основе CSS, предназначенный для увеличения уровня абстракции
                  CSS-кода и упрощения файлов каскадных таблиц стилей.`,
      img: sass,
    },
  ];

  const projectsState = [
    {
      id: 1,
      title: "Avtotex",
      discription: `Сайт выполнен на технологиях HTML, JS и CSS`,
      img: avtotex,
    },
    {
      id: 2,
      title: "Landing Pages",
      discription: `LandingPages и небольшие Веб сайты на технологиях HTML, JS и CSS`,
      img: myCollages,
    },
    {
      id: 3,
      title: "SpaceX",
      discription: `SpaceX - это одностраничное приложение выполненное на технологии React`,
      img: spaceX,
    },
  ];

  const [closedMenu, setClosedMenuMenu] = useState(true);

  const onClick = () => {
    if (closedMenu === true) {
      setClosedMenuMenu(false);
    } else {
      setClosedMenuMenu(true);
    }
  };

  return (
    <div className="App">
      <Header onClick={onClick} closedMenu={closedMenu} />
      <Inner />
      <Projects projectsState={projectsState} />
      <Hire />
      <Skills skillsState={skillsState} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
