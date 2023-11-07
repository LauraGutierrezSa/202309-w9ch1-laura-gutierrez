import { Navigate, Route, Routes } from "react-router-dom";
import Films from "../../pages/homepage";

const App = (): React.ReactElement => (
  <div className="main-container">
    <Routes>
      <Route path="/films" element={<Films />} />
      <Route path="/" element={<Navigate to="/films" />} />
    </Routes>
  </div>
);

export default App;
