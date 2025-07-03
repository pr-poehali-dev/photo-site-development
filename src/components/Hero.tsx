import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-6 tracking-tight">
          Fast launch. <span className="block">Fast results.</span>
        </h1>
        <p className="text-2xl md:text-3xl text-sky-600 font-light italic mb-12">
          Here's how.
        </p>
      </div>
    </section>
  );
};

export default Hero;
