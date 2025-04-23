import { Cpu, Globe, Zap, ShieldCheck, Github, RefreshCcw } from "lucide-react";

const features = [
{
icon: <Cpu className="w-8 h-8 text-white" />,
title: "AI Ready",
description: "Deploy AI models and apps with built-in edge and serverless support.",
},
{
icon: <Zap className="w-8 h-8 text-white" />,
title: "Speed at Scale",
description: "Blazing fast builds and edge delivery at any scale.",
},
{
icon: <Globe className="w-8 h-8 text-white" />,
title: "Global Edge Network",
description: "Deliver content fast — anywhere in the world.",
},
{
icon: <ShieldCheck className="w-8 h-8 text-white" />,
title: "Enterprise Grade",
description: "Security, compliance, and performance for enterprise needs.",
},
{
icon: <Github className="w-8 h-8 text-white" />,
title: "Git Integration",
description: "Connect your GitHub repo and deploy instantly.",
},
{
icon: <RefreshCcw className="w-8 h-8 text-white" />, 
title: "Instant Rollbacks",
description: "Revert to any previous deployment with a single click.",
},
];

export default function CoreFeatures() {
return (
<section className="bg-zinc-950 py-16 px-6 text-white">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Build like the best.</h2>
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {features.map(({ icon, title, description }) => (
        <div key={title} className="bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-zinc-400">{description}</p>
        </div>
        ))}
    </div>
    </div>
</section>
);
}