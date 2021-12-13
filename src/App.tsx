import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingOn from './components/loading/LoadingOn';
import AddProject from './pages/gen/AddProject';
import AllProjects from './pages/gen/AllProjects';
import Contact from './pages/gen/Contact';
import EditProject from './pages/gen/EditProject';
import Home from './pages/gen/Home';
import NotFound from './pages/gen/NotFound';
import ShowProject from './pages/gen/ShowProject';


const RootPage = lazy(() => import('./pages/gen/Root'));
const Signin = lazy(() => import('./pages/auth/Signin'));

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
              <Route path='/create/project/new' element={<AddProject />} />
              <Route path='/show/project/:pId' element={<ShowProject />} />
              <Route path='/edit/project/:pId' element={<EditProject />} />
            </Route>
            <Route path='/signin' element={<Signin />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
