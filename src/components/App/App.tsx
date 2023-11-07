import { Navigate, Route, Routes } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage";

const App = (): React.ReactElement => (
  <div className="main-container">
    <Routes>
      <Route path="/films" element={<MoviesPage />} />
      <Route path="/" element={<Navigate to="/films" />} />
    </Routes>
  </div>
);

export default App;
