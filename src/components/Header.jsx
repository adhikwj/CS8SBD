import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="pt-[80px] w-full"> {/* Ensure full width */}
    <div className="absolute inset-0 z-0 animate-grid bg-[length:40px_40px] bg-[radial-gradient(#ffffff1a_1px,transparent_1px)]"></div>
      <header className="min-h-screen relative w-full bg-gradient-to-r from-green-600 via-teal-700 to-blue-800 text-white overflow-hidden">
        <Navbar />
        <div
        className="absolute inset-0 z-0 animate-grid"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 2px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
        <div className="pt-[200px] max-w-6xl mx-auto text-center py-32 px-6 sm:px-12">
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