import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled className="container-navigation-bar">
      <NavLink to="/films">
        <ul>
          <li className="navigation-bar__home">Página principal</li>
        </ul>
      </NavLink>
      <NavLink to="/add-movie">
        <ul>
          <li className="navigation-bar__add-movie">Añade película</li>
        </ul>
      </NavLink>
    </NavigationStyled>
  );
};
export default Navigation;
