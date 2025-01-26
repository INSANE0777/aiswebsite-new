// app/page.tsx
import LandingBanner from "@/components/home/LandingAnimation";
export default function Home() {
  return (
    <main className="bg-black">
      <>
        <LandingBanner />
      </>
      {/* <MainContent /> */}
      <div className="h-screen">
        <p className="mt-32 ml-64 text-white">Helllp</p>
      </div>
    </main>
  );
}
