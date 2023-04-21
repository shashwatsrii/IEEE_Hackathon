import Main from "./Main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DatatablePage from "./UserTable";
import DatatablePage2 from "./CampTable";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/refugeeData" element={<DatatablePage />} />
          <Route path="/campData" element={<DatatablePage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
