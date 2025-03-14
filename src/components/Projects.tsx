interface ProjectsProps {
    title: string;

  }
  const Projects: React.FC<ProjectsProps> = ({title}) => {
   
    
      return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
    
}

export default Projects;