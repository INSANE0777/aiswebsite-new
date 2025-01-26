import LandingBanner from "@/components/home/LandingAnimation";
import ParticleBackground from "@/components/home/ParticleBackground"; // Import the new component

export default function Home() {
  return (
    <main className="bg-black">
      <ParticleBackground /> {/* Add the particle background */}
      <LandingBanner />
      <div className="h-screen">
        <p className="mt-32 ml-64 text-white">Helllp</p>
      </div>
    </main>
  );
}
