interface FooterProps {
    title: string;


  }
  const Footer: React.FC<FooterProps> = ({title}) => {
   
    return(
  
     <a href={title}></a>
    )
}

export default Footer;