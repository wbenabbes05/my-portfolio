export default function Layout() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-10 md:px-32 bg-[#050510] gap-12">
      
      {/* Left Section */}
      <div className="max-w-xl space-y-6 text-center md:text-left order-2 md:order-1">
        <p className="text-lg text-[#601cfc]">
          Web Developer • Backend Next.js / Node.js
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Hi, I'm BenAbbes Faical Wassim.
        </h1>

        <p className="text-[#b0b0b0] text-base md:text-lg">
          I’m a Full-Stack Developer focused on building modern web
          applications using React.js, Next.js, and Tailwind CSS.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="text-white bg-[#601cfc] px-6 py-3 rounded-2xl hover:bg-[#601cfc]/80 transition" type="button" onClick={() => window.location.href = '#c3'}>
            View My Projects
          </button>

          <button className="bg-white text-[#601cfc] px-6 py-3 rounded-2xl hover:bg-white/80 transition" type="button" onClick={() => window.location.href = '#c5'}>  
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="order-1 md:order-2">
        <img
          src="github.jpg"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border border-indigo-500/50 shadow-lg shadow-indigo-500/40"
        />
      </div>

    </div>
  );
}