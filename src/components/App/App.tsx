import { Navigate, Route, Routes } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => (
  <AppStyled className="main-container">
    <Routes>
      <Route path="/films" element={<MoviesPage />} />
      <Route path="/" element={<Navigate to="/films" />} />
    </Routes>
  </AppStyled>
);

export default App;
