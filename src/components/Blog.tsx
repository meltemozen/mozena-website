interface BlogProps {
    title: string;

  }
  const Blog: React.FC<BlogProps> = ({title}) => {
   
    
      return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
    
}

export default Blog;