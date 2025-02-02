import "./MainLayout.css";
import { NavLink } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div>
      <div className="header-top">
        <div className="cont">
          <div className="userName">
            <p>Sign in / Guest</p>
            <p>Create Account</p>
          </div>
        </div>
      </div>
      <header>
        <div className="header">
          <div className="cont">
            <div className="header-wrapper">
              <div className="logo">
                <p>Pixl</p>
              </div>
              <div className="menus">
                <ul>
                  <li className="link cursor-none">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active cursor-none" : "cursor-none noactive"
                      }
                    >
                      Query
                    </NavLink>
                  </li>
                  <li className="link">
                    <NavLink className="cursor-none" to="/zustand">
                      Zustand
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

export default MainLayout;
