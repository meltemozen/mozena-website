interface NavbarProps {
    title: string;

  }
  const Navbar: React.FC<NavbarProps> = ({title}) => {
   
    
      return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
    
}

export default Navbar;