export default function Navbar() {
  return (
    <nav className="bg-[#050510] border-b border-indigo-500/50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between h-16">
        
        {/* Logo / Name */}
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-white">
            Benabbes Faical Wassim
           <span className="hidden sm:inline text-[#601cfc]">
               {" "} | Web Developer
          </span>
          </h1>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-[#b0b0b0] text-lg">
          <li><a href="#C1" className="hover:text-[#601cfc] transition">Objective</a></li>
          <li><a href="#C2" className="hover:text-[#601cfc] transition">Education</a></li>
          <li><a href="#C3" className="hover:text-[#601cfc] transition">Projects</a></li>
          <li><a href="#C4" className="hover:text-[#601cfc] transition">Experience</a></li>
          <li><a href="#C5" className="hover:text-[#601cfc] transition">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}