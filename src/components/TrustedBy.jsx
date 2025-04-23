import adobeLogo from "/src/assets/logos/adobe.svg";
import netflixLogo from "/src/assets/logos/netflix.svg";
import twitchLogo from "/src/assets/logos/twitch.svg";
import huluLogo from "/src/assets/logos/hulu.svg";
import uberLogo from "/src/assets/logos/uber.svg";
import githubLogo from "/src/assets/logos/github.svg";

export default function TrustedBy() {
    const logos = [
        { name: "Adobe", src: adobeLogo },
        { name: "Netflix", src: netflixLogo },
        { name: "Twitch", src: twitchLogo },
        { name: "Hulu", src: huluLogo },
        { name: "Uber", src: uberLogo },
        { name: "GitHub", src: githubLogo },
    ];
    return (
    <section className="bg-black py-12 px-6 text-white text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-zinc-400">
        Trusted by the world’s leading teams
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex flex-col items-center justify-center space-y-2"
          >
            {/* Logo */}
            <img
              src={logo.src}
              alt={logo.name}
              className="w-16 h-16 object-contain"
            />
            {/* Text */}
            <span className="text-sm text-zinc-300">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
    );
}