import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingOn from './components/loading/LoadingOn';
import AllProjects from './pages/gen/AllProjects';
import Contact from './pages/gen/Contact';
import Home from './pages/gen/Home';
import NotFound from './pages/gen/NotFound';
import Project from './pages/gen/Project';


const RootPage = lazy(() => import('./pages/gen/Root'));
const Signin = lazy(() => import('./pages/auth/Signin'));
const Signup = lazy(() => import('./pages/auth/Signup'));

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingOn />}>
        <Router>
          <Routes>
            <Route path='/' element={<RootPage />} >
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/projects' element={<AllProjects />} />
              <Route path='/project/:pId' element={<Project />} />
            </Route>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
