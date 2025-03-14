interface ServicesProps {
    title: string;

  }
  const Services: React.FC<ServicesProps> = ({title}) => {
   
    
      return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
    
}

export default Services;