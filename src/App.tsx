import { createBrowserRouter,
          createRoutesFromElements,
          RouterProvider,
          Outlet,
      } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';
import HomePage from './pages/HomePage.tsx';
import ErrorBoundary from './pages/ErrorBoundary.tsx';

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <ErrorBoundary /> },
  ]},
]);

function App() {

  return <RouterProvider router={router} />

  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  )
}

export default App;
