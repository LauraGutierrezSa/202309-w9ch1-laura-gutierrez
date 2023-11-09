import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage";
import AppStyled from "./AppStyled";
import NewMoviePage from "../../pages/NewMoviePage";

const App = (): React.ReactElement => (
  <AppStyled className="container">
    <nav className="navigation-bar">
      <NavLink to="/form">
        <span className="navigation-bar__form">Form</span>
      </NavLink>
      <NavLink to="/">
        <span className="navigation-bar__home">Home</span>
      </NavLink>
    </nav>
    <main className="main-container">
      <Routes>
        <Route path="/films" element={<MoviesPage />} />
        <Route path="/" element={<Navigate to="/films" />} />
        <Route path="/add" element={<NewMoviePage />} />
      </Routes>
    </main>
  </AppStyled>
);

export default App;
