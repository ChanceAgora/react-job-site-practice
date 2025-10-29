import { createBrowserRouter,
         createRoutesFromElements,
         RouterProvider,
         Outlet,
       } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';
import HomePage from './pages/HomePage.tsx';

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
