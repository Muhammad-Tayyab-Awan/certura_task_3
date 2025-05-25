import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

function PrimaryLayout({ children }) {
  return (
    <div className="relative h-auto w-full">
      <Navbar />
      <main className="min-h-[calc(100vh-5.75rem)] w-full overflow-x-hidden overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PrimaryLayout;
