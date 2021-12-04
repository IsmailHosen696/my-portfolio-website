import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const RootPage = lazy(() => import('./components/pages/Root'));
const Signin = lazy(() => import('./components/auth/Signin'));
const Signup = lazy(() => import('./components/auth/Signup'));
const Home = lazy(() => import('./components/pages/Home'));
const Contact = lazy(() => import('./components/pages/Contact'));
const AllProjects = lazy(() => import('./components/pages/AllProjects'));
const Project = lazy(() => import('./components/pages/Project'));

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<p>loading...</p>}>
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
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
