import { Navigate, Route, Routes } from "react-router-dom";

const App = (): React.ReactElement => (
  <div className="main-container">
    <Routes>
      <Route path="/films" />
      <Route path="/" element={<Navigate to="/films" />} />
    </Routes>
  </div>
);

export default App;
