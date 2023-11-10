import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import AppStyled from "./AppStyled";
import NewMoviePage from "../../pages/NewMoviePage/NewMoviePage";

const App = (): React.ReactElement => (
  <AppStyled className="container">
    <nav className="container-navigation-bar">
      <NavLink to="/films">
        <span className="navigation-bar__home">Home</span>
      </NavLink>
      <NavLink to="/add-movie">
        <span className="navigation-bar__add-movie">Add movie</span>
      </NavLink>
    </nav>
    <main className="main-container">
      <Routes>
        <Route path="/films" element={<MoviesPage />} />
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/add-movie" element={<NewMoviePage />} />
      </Routes>
    </main>
  </AppStyled>
);

export default App;
