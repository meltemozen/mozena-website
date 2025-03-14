interface CommunicationFormProps {
    title: string;

  }
  const CommunicationForm: React.FC<CommunicationFormProps> = ({title}) => {
   
    
      return <div><h1 className="text-3xl font-bold underline">{title}</h1></div>;
    
}

export default CommunicationForm;