import { useState } from "react";
import Styles from "../../styles/Nav.module.css";

const Nav = (props) => {
  const [hamOpen, setHamOpen] = useState(0);
  return (
    <nav>
      <div className={Styles.nav}>
        <ul className={Styles.links}>
          <li id={Styles.hamburger}>
            <button onClick={() => setHamOpen(!hamOpen)}>
              <div className={Styles.bar}></div>
              <div className={Styles.bar}></div>
              <div className={Styles.bar}></div>
            </button>
          </li>
          <li className={Styles.title}>
            <a href="/">
              <span>axis natural foods</span>
            </a>
          </li>
          <li id={Styles.home}>
            <a
              className={props.pathName == "/" ? Styles.active : null}
              href="/"
            >
              <span>Home</span>
            </a>
          </li>
          <li id={Styles.items}>
            <a
              href="/items"
              className={props.pathName == "/items" ? Styles.active : null}
            >
              <span>Items</span>
            </a>
          </li>
          <li id={Styles.about}>
            <a
              href="/about"
              className={props.pathName == "/about" ? Styles.active : null}
            >
              <span>About</span>
            </a>
          </li>
          <li id={Styles.contact}>
            <a
              href="/contact"
              className={props.pathName == "/contact" ? Styles.active : null}
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        id={Styles.hamburger_menu}
        className={hamOpen ? Styles.hamburger_open : Styles.hamburger_close}
      >
        <ul className={Styles.hamburger_links}>
          <li className={hamOpen ? null : Styles.hidden}>
            <a
              href="/"
              className={props.pathName == "/" ? Styles.active : null}
              onClick={() => setHamOpen(0)}
            >
              <span>Home</span>
            </a>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <a
              href="/items"
              className={props.pathName == "/items" ? Styles.active : null}
              onClick={() => setHamOpen(0)}
            >
              <span>Items</span>
            </a>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <a
              href="/about"
              className={props.pathName == "/about" ? Styles.active : null}
              onClick={() => setHamOpen(0)}
            >
              <span>About</span>
            </a>
          </li>
          <li className={hamOpen ? null : Styles.hidden}>
            <a
              href="/contact"
              className={props.pathName == "/contact" ? Styles.active : null}
              onClick={() => setHamOpen(0)}
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
