

import { GetContents } from '@/api/query';
import ContentsPage from '@/components/pages/ContentsPage';
import { Content } from '@/types/graphql';
import { GetServerSideProps, NextPage } from 'next'


type ContentsProps = {
    contents: Content[];
}


const Contents: NextPage<ContentsProps> = ({contents}) =>  {

    return(
        <ContentsPage contents={contents} ></ContentsPage>
    );  
};

export default Contents;

export const getServerSideProps: GetServerSideProps<ContentsProps> = async () => {
   
    const {data: contents}  =  await GetContents();
   

    return {
        props:{
            contents,

        },
    
    };
} 
     