import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import HomeCards from "./components/HomeCards.tsx";
import JobListings from "./components/JobListings.tsx";

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
    
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >View All Jobs</a
        >
      </section>
    </>
  )
}

export default App;
