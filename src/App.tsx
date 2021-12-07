import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/gen/NotFound';


const RootPage = lazy(() => import('./pages/gen/Root'));
const Signin = lazy(() => import('./pages/auth/Signin'));
const Signup = lazy(() => import('./pages/auth/Signup'));
const Home = lazy(() => import('./pages/gen/Home'));
const Contact = lazy(() => import('./pages/gen/Contact'));
const AllProjects = lazy(() => import('./pages/gen/AllProjects'));
const Project = lazy(() => import('./pages/gen/Project'));

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
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
