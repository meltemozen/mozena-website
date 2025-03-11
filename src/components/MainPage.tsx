interface MainPageProps {
    title: string;


  }
  const MainPage: React.FC<MainPageProps> = ({title}) => {
   
    return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
}

export default MainPage;