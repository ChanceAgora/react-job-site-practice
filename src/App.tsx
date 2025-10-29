import { createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet} from 'react-router-dom';
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import HomeCards from "./components/HomeCards.tsx";
import JobListings from "./components/JobListings.tsx";
import ViewAllJobs from "./components/ViewAllJobs.tsx";

const Root = () => <Outlet />;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <h1 className='text-[50px]'>TESTING</h1> },
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
