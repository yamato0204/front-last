

import { GetContents } from '@/api/query';
import Layout from '@/components/Layout';
import ContentsPage from '@/components/pages/ContentsPage';
import { useAuthSet, useAuthState } from '@/hooks/AuthContext';
import { Content } from '@/types/graphql';
import Cookies from 'js-cookie';
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react';


type ContentsProps = {
    contents: Content[];
}


const Contents: NextPage<ContentsProps> = ({contents}) =>  {

    const setAuth = useAuthSet()
 
 const StateAuth = useAuthState()

 useEffect(() => {

  const token = Cookies.get("token")

  if(token) {
    fetch("http://localhost:1337/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      if(!res.ok) {
        
        Cookies.remove("token");
        return null;
    }
   const user: any = await res.json()
    console.log(user);
    
    setAuth(user);
    
  });
  }


 },[])



    return(
       <Layout>
        <ContentsPage contents={contents} ></ContentsPage>
        </Layout>
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
     