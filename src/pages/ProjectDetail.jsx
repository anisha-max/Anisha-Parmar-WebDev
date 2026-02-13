import { useParams, Link } from "react-router-dom";
import { projects } from "../data/project";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Back */}
        <Link
          to="/projects"
          className="text-gray-400 hover:text-white inline-block"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            {project.title}
          </h1>
          <p className="text-[#00f2ad]">{project.subtitle}</p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span>Role: {project.role}</span>
            <span>Duration: {project.duration}</span>
            <span>Status: {project.status}</span>
          </div>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={project.title}
              className="rounded-xl border border-white/10 h-full  min-h-[30vh] max-h-[50vh] w-full"
            />
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-zinc-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300">
          {project.description}
        </p>
        <p className="text-lg text-gray-300">
          {project.overview}
        </p>
        {/* Case Study Sections */}
        <div className="space-y-8">
          <Section title="Problem" content={project.problem} />
          <Section title="Solution" content={project.solution} />
        {project.architecture && (  <Section title="Architecture" content={project.architecture} />)}
          {project.uiConsistency && (  <Section title="UI Consistency" content={project.uiConsistency} />)}
          <Section title="Challenges" content={project.challenges} />
          <Section title="Learnings" content={project.learnings} />
        </div>
                {project.responsibilities && (
   <div>
          <h3 className="text-xl font-semibold mb-4">Responsibilities</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            {project.responsibilities.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#00f2ad]">▹</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
)}

        {/* Features */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            {project.features.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#00f2ad]">▹</span>
                {f}
              </li>
            ))}
          </ul>
        </div>


         {project.technicalDecisions && (   <div>
          <h3 className="text-xl font-semibold mb-4">Technical Decisions</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            {project.technicalDecisions.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#00f2ad]">▹</span>
                {f}
              </li>
            ))}
          </ul>
        </div>)}

          {project.userFlow && ( <div>
          <h3 className="text-xl font-semibold mb-4">User Flow</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            {project.userFlow.map((f, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#00f2ad]">▹</span>
                {f}
              </li>
            ))}
          </ul>
        </div>)}

        {/* Links */}
        <div className="flex gap-4 pt-6">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              className="border border-[#00f2ad] px-6 py-3 font-bold rounded-md hover:bg-[#00f2ad] hover:text-black transition"
            >
              View Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              className="bg-[#00f2ad] px-6 py-3 font-bold rounded-md hover:bg-zinc-700 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, content }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{content}</p>
  </div>
);

export default ProjectDetail;
