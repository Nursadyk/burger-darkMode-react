import "./App.css";
import { useState } from "react";
import moon from "./images/arrowDown.png";
import leftImg from "./images/arrowLeft.png";
function App() {
  const [burger, setModal] = useState(false);
  const [darkMode, setDark] = useState(false);
  console.log(burger);
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="darkMod">
              <img
                className="dark"
                src={moon}
                alt=""
                style={{
                  display: darkMode ? "none" : "",
                }}
                onClick={() => setDark(!darkMode)}
              />
              <img
                src={leftImg}
                alt=""
                style={{
                  display: darkMode ? "block" : "none",
                }}
                onClick={() => setDark(!darkMode)}
              />
            </div>
            <nav
              className="navbar"
              style={{
                marginLeft: burger ? "0" : "-100%",
              }}
            >
              <ul className="list">
                <li className="item">
                  <a href="" className="link">
                    home
                  </a>
                </li>
                <li className="item">
                  <a href="" className="link">
                    about
                  </a>
                </li>
                <li className="item">
                  <a href="" className="link">
                    help
                  </a>
                </li>
                <li className="item">
                  <a href="" className="link">
                    blog
                  </a>
                </li>
              </ul>
            </nav>
            <div className="burger-wrapper" onClick={() => setModal(!burger)}>
              <span
                className="top"
                style={{
                  transform: burger ? "rotate(235deg)" : "",
                  top: burger ? "20px" : "",
                }}
              ></span>
              <span
                className="between"
                style={{
                  transform: burger ? "rotate(-235deg)" : "",
                }}
              ></span>
              <span
                className="bottom"
                style={{
                  transform: burger ? "rotate(-235deg)" : "",
                  bottom: burger ? "20px" : "",
                }}
              ></span>
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <p>
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
          Dolore quisquam quae quasi deleniti, <br /> delectus accusantium atque
          numquam labore <br /> tempore similique, cum dolores sit, cupiditate{" "}
          <br /> fuga voluptatibus excepturi. Vero, consequatur eos.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Dolore quisquam quae quasi deleniti, <br /> delectus accusantium atque
          numquam <br /> labore tempore similique, cum dolores sit,
          <br /> cupiditate fuga voluptatibus <br /> excepturi. Vero,
          consequatur eos.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit.
          Dolore quisquam quae quasi <br /> deleniti, delectus accusantium atque
          numquam <br /> labore tempore similique, cum dolores sit, cupiditate
          <br /> fuga voluptatibus excepturi. Vero, consequatur eos.
        </p>
      </div>
    </div>
  );
}

export default App;
