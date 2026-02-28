export default function Experience() {
  return (
    <section className="py-12 px-6 md:px-20 bg-[#0b0b16] text-[#b0b0b0]" id="C4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white text-center">
        Experience
      </h2>

      {/* Sonatrach */}
      <div className="max-w-3xl mx-auto mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          IT Intern
        </h3>
        <p className="text-base md:text-lg mt-1">
          Sonatrach, Algeria (07 Feb 2026 – 14 Feb 2026)
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>Assisted in monitoring and maintaining internal information systems.</li>
          <li>Gained exposure to enterprise IT infrastructure and security practices.</li>
          <li>Observed system architecture and network management processes.</li>
          <li>Collaborated with technical teams to understand operational workflows.</li>
        </ul>
      </div>

      {/* Naftal */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          IT Intern
        </h3>
        <p className="text-base md:text-lg mt-1">
          Naftal, Algeria (24 Dec 2023 – 02 Jan 2024)
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>Supported maintenance of internal software and hardware systems.</li>
          <li>Assisted in troubleshooting and resolving technical issues.</li>
          <li>Learned enterprise IT management and system security fundamentals.</li>
          <li>Observed best practices in infrastructure organization and data handling.</li>
        </ul>
      </div>
    </section>
  );
}