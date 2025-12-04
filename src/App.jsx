import HomePage from "./home/HomePage";
import ProjectPage from './projects/ProjectPage';
import ProjectsPage from './projects/ProjectsPage';
import { Provider } from 'react-redux';
import store from './store/store';
import {  Routes, Route, NavLink, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
   <Provider store={store}>
      <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="35" height="70" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
      </div>
      </Router>
   </Provider>
  );
}

export default App;
