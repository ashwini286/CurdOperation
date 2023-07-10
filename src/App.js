// import Calculatern from './componantes/CalCulater/Calculatern';
// import LocalStorage from './componantes/LocalStorage/LocalStorage.jsx'
// import StudentForm from './componantes/StudentForm/StudentForm';
// import ParentCompo from './componantes/CreateTableAutomatic/ParentCompo';
// import CreateTable from './componantes/Table/CreateTable';

// CARD operation using useContaxt
import Home from './componantes/CurdOperation/Home';
import AddUser from './componantes/CurdOperation/AddUser';
import EditUser from './componantes/CurdOperation/EditUser';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from './componantes/CurdOperation/GlobalState';
function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
