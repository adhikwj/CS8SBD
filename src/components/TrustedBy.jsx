export default function TrustedBy() {
    return (
    <section className="bg-black py-12 px-6 text-white text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-zinc-400">
        Trusted by the world’s leading teams
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
        {/* Replace these with real logos as needed */}
        {["Vercel", "Netflix", "Twitch", "Hulu", "Uber", "GitHub"].map((brand) => (
            <div
            key={brand}
            className="w-24 h-10 bg-zinc-800 rounded-md flex items-center justify-center text-zinc-300 text-sm"
            >
            {brand}
            </div>
        ))}
        </div>
    </section>
    );
}