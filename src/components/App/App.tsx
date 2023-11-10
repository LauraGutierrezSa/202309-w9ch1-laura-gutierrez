import { Navigate, Route, Routes } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import AppStyled from "./AppStyled";
import NewMoviePage from "../../pages/NewMoviePage/NewMoviePage";
import Navigation from "../Navigation/Navigation";

const App = (): React.ReactElement => (
  <AppStyled className="container">
    <Navigation />
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
