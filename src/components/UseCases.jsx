import { Brain, ShoppingCart, Megaphone, BookText } from "lucide-react";

const useCases = [
{
icon: <Brain className="w-8 h-8 text-white" />,
title: "AI",
description: "Deploy ML models with serverless edge functions, streamed responses, and fast iteration.",
},
{
icon: <ShoppingCart className="w-8 h-8 text-white" />,
title: "Ecommerce",
description: "Build lightning-fast online stores with personalized experiences and dynamic content.",
},
{
icon: <Megaphone className="w-8 h-8 text-white" />,
title: "Marketing Sites",
description: "Craft high-converting landing pages and run experiments with no engineering bottlenecks.",
},
{
icon: <BookText className="w-8 h-8 text-white" />,
title: "Docs",
description: "Document APIs and codebases with markdown-first workflows, previews, and search.",
},
];

export default function UseCases() {
return (
<section className="bg-black text-white py-16 px-6">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Built for every team</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {useCases.map(({ icon, title, description }) => (
        <div key={title} className="bg-zinc-900 p-6 rounded-xl hover:shadow-lg transition">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-zinc-400 text-sm">{description}</p>
        </div>
        ))}
    </div>
    </div>
</section>
);
}