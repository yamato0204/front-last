import ContentCard from "@/components/ContentCard";
import { Content } from "@/types/graphql";


type ContentsItemsProps = {
    contents: Content[]
}


const ContentsItems: React.FC<ContentsItemsProps> = ({contents}) => {
    return (
        <div>
            
           <ContentCard />
           <ContentCard />

           

           
        </div>
    );
}

export default ContentsItems;