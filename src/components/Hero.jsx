export default function Hero() {
    return (
        <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Develop. <br className="hidden md:inline" />
                <span className="text-zinc-400">Preview.</span> <br className="hidden md:inline" />
                <span className="text-white">Ship.</span>
            </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Vercel enables developers to build high-performance websites and applications with ease. Fast deploys, global CDN, and seamless collaboration.
        </p>
        <div className="mt-8 flex gap-4">
            <a
                href="#"
                className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition"
            >
            Start Deploying
            </a>
            <a
                href="#"
                className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
            Get a Demo
            </a>
        </div>
        </section>
    );
}