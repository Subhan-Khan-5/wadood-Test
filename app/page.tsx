import Antigravity from "./antigravity";
import TargetCursor from './TargetCursor';

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#0a0005]">
      
      {/* 1. CUSTOM CURSOR (Top Layer) */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {/* 2. BACKGROUND PARTICLES (Bottom Layer) */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={800}
          magnetRadius={12}
          ringRadius={25}
          waveSpeed={0.6}
          waveAmplitude={2}
          particleSize={1.8}
          lerpSpeed={0.06}
          color="#FF69B4"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0.2}
          depthFactor={1.2}
          pulseSpeed={4}
          particleShape="sphere"
          fieldStrength={15}
        />
      </div>

      {/* 3. MAIN CONTENT LAYER (Middle) */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center select-none">
        
        {/* Floating Title */}
        <div className="text-center pointer-events-none mb-12">
          <h1 className="text-7xl md:text-9xl font-serif text-[#FFB6C1] drop-shadow-[0_0_20px_rgba(255,20,147,0.9)] italic">
            Chand Raat
          </h1>
          <p className="mt-2 text-2xl text-[#FF69B4] font-light tracking-[0.3em] uppercase opacity-80">
            Mubarak, My Love ❤️
          </p>
        </div>

        {/* INTERACTIVE OPTIONS (The part you couldn't see) */}
        <div className="flex flex-col items-center gap-6 pointer-events-auto">
          <p className="text-[#FFB6C1] opacity-60 text-sm tracking-widest uppercase mb-2">
            Interact with the night sky
          </p>
          
          <button className="cursor-target px-8 py-3 rounded-full border border-[#FF69B4] bg-[#FF1493]/10 text-[#FFB6C1] hover:bg-[#FF1493]/30 transition-all duration-300 backdrop-blur-md">
            Our Memories
          </button>

          <div className="cursor-target px-8 py-3 rounded-full border border-white/10 bg-white/5 text-[#FFB6C1] text-sm">
            Hover to stir the stars
          </div>
        </div>

        {/* Decorative Pink Glow */}
        <div className="absolute w-[300px] h-[300px] bg-[#FF1493] rounded-full blur-[150px] opacity-20 -z-10" />
      </div>

      {/* 4. FOOTER (Bottom) */}
      <div className="absolute bottom-8 w-full text-center z-10 opacity-40 pointer-events-none">
        <p className="text-[#FFB6C1] text-xs tracking-widest uppercase">Looking at the moon, thinking of you</p>
      </div>

    </main>
  );
}