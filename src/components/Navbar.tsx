interface NavbarProps {
    title: string;

  }
  const Navbar: React.FC<NavbarProps> = ({title}) => {
   
    return(
  
     <a href={title}></a>
    )
}

export default Navbar;