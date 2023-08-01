import React, { useState } from "react";
import ContentCard from "../ContentCard";
import Serch from "../Serch";

import { Content } from "@/types/graphql"; 
import { Grid } from "@chakra-ui/react";
import ContentsItems from "@/features/content/components/ContentsItems";
import { createContext } from "vm";
import { ContentProvider } from "@/features/content/hooks/ContentContext";

type ContentsPageProps = {
    contents: Content[]
}


 

const ContentsPage: React.FC<ContentsPageProps> = ({
    contents
}) => {
    
    return (
        <div>
          <ContentProvider>
           <Serch />
           <ContentsItems contents={contents} />
           </ContentProvider>
           
         </div>
    );
}

export default ContentsPage;