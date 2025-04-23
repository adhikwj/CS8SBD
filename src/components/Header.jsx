import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="pt-[40px]">  {/* Adjust based on Navbar height */}
      <header className="relative bg-gradient-to-r from-green-600 via-teal-700 to-blue-800 text-white">
        <Navbar />

        <div className="max-w-6xl mx-auto text-center py-32 px-6 sm:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Build, Preview, and Ship with Confidence
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Deploy your next project to the edge with unbeatable speed, security, and scalability.
          </p>
          <a href="#cta" className="inline-block bg-blue-500 hover:bg-blue-400 text-white py-3 px-6 rounded-full text-lg font-semibold transition">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
}