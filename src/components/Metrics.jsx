const metrics = [
{ number: "90ms", label: "Global Response Time" },
{ number: "70M+", label: "Edge Requests per Day" },
{ number: "99.99%", label: "Uptime SLA" },
{ number: "300K+", label: "Git Deployments per Week" },
{ number: "24ms", label: "Median Build Time" },
{ number: "10K+", label: "Companies Using Vercel" },
];

export default function Metrics() {
return (
    <section className="bg-black text-white py-20 px-6">
    <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">Built for speed and scale</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {metrics.map(({ number, label }) => (
            <div key={label} className="space-y-2">
            <div className="text-4xl font-bold text-white">{number}</div>
            <div className="text-zinc-400 text-sm">{label}</div>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}