// src/components/Hero.jsx

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      style={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)",
        color: "white"
      }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Deepak Togarla</span>
      </h1>

      <p className="text-lg sm:text-xl max-w-2xl text-gray-300 mb-8">
        Software Developer • Full-Stack • AI Learner • Java | React | SQL | Groovy  
        <br />
        Building clean, modern applications & improving business workflows.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-400 hover:bg-gray-800 rounded-full text-gray-300 font-medium transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
