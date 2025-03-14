interface AboutProps {
    title: string;

  }
  const About: React.FC<AboutProps> = ({title}) => {
   
    
      return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
    
}

export default About;