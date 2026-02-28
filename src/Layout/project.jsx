export default function Projects() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#0b0b16]" id="c3">
      <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-12">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* Project 1 */}
        <div className="bg-[#0f0f1e] p-8 rounded-xl shadow-md border border-[#601cfc]/50 
                        hover:shadow-lg hover:shadow-[#601cfc]/40 
                        transition duration-300 hover:scale-105 hover:border-[#601cfc]">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Modern SaaS Landing Page
          </h3>
          <p className="text-base text-[#b0b0b0] mb-4 leading-relaxed">
            A fully responsive SaaS marketing website built with React and Tailwind CSS. 
            Includes hero sections, feature grids, pricing tables, testimonials, and smooth UI animations.
          </p>
          <a href="#" className="text-[#601cfc] hover:underline">
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-[#0f0f1e] p-8 rounded-xl shadow-md border border-[#601cfc]/50 
                        hover:shadow-lg hover:shadow-[#601cfc]/40 
                        transition duration-300 hover:scale-105 hover:border-[#601cfc]">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Admin Dashboard UI
          </h3>
          <p className="text-base text-[#b0b0b0] mb-4 leading-relaxed">
            A modern admin dashboard interface featuring a responsive sidebar, 
            statistics cards, charts, and data tables. Designed with reusable components 
            and clean layout structure using React and Tailwind CSS.
          </p>
          <a href="#" className="text-[#601cfc] hover:underline">
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-[#0f0f1e] p-8 rounded-xl shadow-md border border-[#601cfc]/50 
                        hover:shadow-lg hover:shadow-[#601cfc]/40 
                        transition duration-300 hover:scale-105 hover:border-[#601cfc]">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Reusable UI Component System
          </h3>
          <p className="text-base text-[#b0b0b0] mb-4 leading-relaxed">
            A custom component library built with React and Tailwind CSS including 
            buttons, modals, tabs, accordions, and form components. Focused on 
            reusability, scalability, and clean design consistency.
          </p>
          <a href="#" className="text-[#601cfc] hover:underline">
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}