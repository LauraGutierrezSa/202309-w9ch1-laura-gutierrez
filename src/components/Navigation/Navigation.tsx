import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled className="container-navigation-bar">
      <NavLink to="/films">
        <span className="navigation-bar__home">Página principal</span>
      </NavLink>
      <NavLink to="/add-movie">
        <span className="navigation-bar__add-movie">Añade película</span>
      </NavLink>
    </NavigationStyled>
  );
};
export default Navigation;
