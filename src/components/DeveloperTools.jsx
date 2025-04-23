import { TerminalSquare, GitMerge, Code, Layers3, BookText, FolderGit2 } from "lucide-react";

const tools = [
{
icon: <TerminalSquare className="w-8 h-8 text-white" />,
title: "Powerful CLI",
description: "Control deployments, inspect logs, and configure projects straight from your terminal.",
},
{
icon: <GitMerge className="w-8 h-8 text-white" />,
title: "Git Integration",
description: "Deploy automatically from GitHub, GitLab, or Bitbucket on every push.",
},
{
icon: <Layers3 className="w-8 h-8 text-white" />,
title: "Previews for Every Push",
description: "Every git branch gets a unique preview URL for instant feedback.",
},
{
icon: <Code className="w-8 h-8 text-white" />,
title: "SDKs and APIs",
description: "Build integrations or use your stack with fully-documented APIs and SDKs.",
},
{
icon: <BookText className="w-8 h-8 text-white" />,
title: "Developer Docs",
description: "Comprehensive documentation for every feature, with code examples and guides.",
},
{
icon: <FolderGit2 className="w-8 h-8 text-white" />,
title: "Monorepo Support",
description: "Built-in support for monorepos, TurboRepo, and modular architectures.",
},
];

export default function DeveloperTools() {
return (
<section className="bg-zinc-950 py-16 px-6 text-white">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">By Developers. For developers.</h2>
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {tools.map(({ icon, title, description }) => (
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