interface FooterProps {
    title: string;


  }
  const Footer: React.FC<FooterProps> = ({title}) => {
   
    return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
}

export default Footer;