import { useEffect, useState, useRef, Fragment } from "react";
import { useTranslation } from "react-i18next"; // 🔥 i18n eklendi

const Projects: React.FC = () => {
  const { t } = useTranslation(); // 🔥 Çeviri hook

  const projectsData = [
    {
      title: t("projectsData.project1.title"),
      description: t("projectsData.project1.description"),
      link: "#",
    },
    {
      title: t("projectsData.project2.title"),
      description: t("projectsData.project2.description"),
      link: "#",
    },
    {
      title: t("projectsData.project3.title"),
      description: t("projectsData.project3.description"),
      link: "#",
    },
    {
      title: t("projectsData.project4.title"),
      description: t("projectsData.project4.description"),
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-8 px-2 md:px-4 py-8 md:py-12"
    >
      <h1 className="text-3xl font-bold">{t("projects")}</h1>{" "}
      {/* 🔥 Başlık çevirisi */}
      <ul className="flex flex-wrap justify-center gap-12 md:gap-24">
        {projectsData.map((project, index) => (
          <Fragment key={`p_${index}`}>
            <ProjectItem project={project} index={index} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

const ProjectItem = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <li
      className="relative w-full md:w-[40%] flex flex-col gap-2 pointer-events-none"
      style={{
        transition: "all 1.25s",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0)"
          : index % 2 === 0
          ? "translateX(-150px)"
          : "translateX(150px)",
      }}
      ref={ref}
    >
      <div className="h-[300px] bg-neutral-500 rounded-3xl mb-2 pointer-events-auto overflow-hidden">
        <a href={project.link} className="block w-full h-full">
          <img
            src={`https://picsum.photos/seed/${project.title}/400/300`}
            alt={project.title}
            className="w-full h-full object-cover rounded-3xl hover:scale-125 transition-all duration-[700ms]"
            data-hover="project"
          />
        </a>
      </div>

      <div className="pointer-events-none">
        <h2 className="text-xl font-bold uppercase">{project.title}</h2>
        <p className="text-lg">{project.description}</p>
      </div>
    </li>
  );
};

export default Projects;
