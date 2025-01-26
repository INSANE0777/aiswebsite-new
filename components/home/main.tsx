// components/MainContent.tsx
"use client";
export default function MainContent() {
  return (
    <section className="min-h-screen bg-black p-8 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Welcome to Our Society
        </h2>
        <p className="text-lg text-gray-300">
          Explore the future of artificial intelligence and its impact on our
          world. Scroll down to discover more about our initiatives and research
          projects.
        </p>
      </div>
    </section>
  );
}
