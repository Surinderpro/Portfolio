import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                {/* Custom Header */}
                <div className='bg-blue-500 text-white p-4'>
                  <Link to='/'>
                    <button className='bg-white text-blue-500 px-2 py-1 rounded'>
                      Back to Home
                    </button>
                  </Link>
                </div>

                {/* Page Content */}
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
