import React from "react";
import ContentCard from "../ContentCard";
import Serch from "../Serch";

import { Content } from "@/types/graphql"; 
import { Grid } from "@chakra-ui/react";
import ContentsItems from "@/features/content/components/ContentsItems";

type ContentsPageProps = {
    contents: Content[]
}


 

const ContentsPage: React.FC<ContentsPageProps> = ({
    contents
}) => {
    console.log(contents[0].name)
    return (
        <div>
           <Serch />
          
           <ContentsItems contents={contents} />
           
          
          
          <br/>
          {contents[2].name}
        </div>
    );
}

export default ContentsPage;