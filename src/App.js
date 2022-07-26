import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarsPage, UsersPage} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route path={'cars'} element={<CarsPage/>}/>
          <Route path={'users'} element={<UsersPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
