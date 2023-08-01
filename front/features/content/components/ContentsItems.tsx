import ContentCard from "@/components/ContentCard";
import { Content } from "@/types/graphql";
import { Box, Grid, Text } from "@chakra-ui/react";
import { useContent } from "../hooks/ContentContext";


type ContentsItemsProps = {
    contents: Content[]
}

const breakpoints = {
    base: '0em',
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  }


const ContentsItems: React.FC<ContentsItemsProps> = ({contents}) => {
    const stateContent = useContent()
    const filteredData = contents.filter(item => item.name.toLowerCase()
    .includes(stateContent.toLowerCase()));
    
    console.log(filteredData) 

    return (
        <Box display="flex" justifyContent="center" paddingTop="60px">
      {filteredData.length === 0 ? (
        <Text fontSize="xl">対象の商品が存在しません</Text>
      ) : (
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 3fr)" }} gap={10}>
          {filteredData.map((content) => (
            <ContentCard key={content.name} content={content} />
          ))}
        </Grid>
      )}
    </Box>
   
           
        
    );
}

export default ContentsItems;