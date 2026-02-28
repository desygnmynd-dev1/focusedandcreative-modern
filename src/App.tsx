import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-wrapper container">
        <h1 className="text-display-xl mt-5">
          FACMP v2 Navbar Initialized
        </h1>
      </div>

      <Footer />

    </>
  );
}

export default App;