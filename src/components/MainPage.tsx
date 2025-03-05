interface MainPageProps {
    title: string;


  }
  const MainPage: React.FC<MainPageProps> = ({title}) => {
   
    return(
  
     <a href={title}></a>
    )
}

export default MainPage;