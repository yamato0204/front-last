import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Card, IconButton, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Layout from '@/components/Layout'
import { Input } from '@chakra-ui/react'
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import ContentCard from '@/components/ContentCard'

//import ContentItem from '@/components/test'
import { Content, ContentsDocument } from '@/generated/graphql'

import { useEffect, useState } from 'react'
import { gql } from '@apollo/client'
import { GetContents } from '@/api/query'






const inter = Inter({ subsets: ['latin'] })

 const Home = () => {

  
    useEffect(() => {
      // リダイレクトを行う
      window.location.href = '/course';
    }, []);
  
    return <div>リダイレクト中...</div>;
  };
  
  // サーバーサイドでのリダイレクトのために必要
  export async function getServerSideProps() {
    return {
      props: {},
    };
  }

















//   const [contents, setContents] = useState<any[]>([])
//   useEffect(()=>{
//     (async()=>{
//       const { data } = await client.query({
//         query: gql`
//           query Contents {
//             contents {
//     data {
//       id
//       attributes {
//         name
//         description
//         image
//       }
//     }
//   }
//           }
//         `,
//       });

//       console.log(data. contents)
//       setContents(data.contents)
//     })()
//   },[])

// type Props = {
//   content: Content;
// };


//const Home = ({ content }: Props) => {
 // return <ContentItem content={content} />;
// };


// export  const getServerSideProps = async () => {
//   const content = (
//     await client.query({
//       query: ContentsDocument
//     })
//   ).data;


//   return {
//     props:{
//       ...content,
//     }
//   }

    // <>
    
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <main >

    //   <InputGroup m={4} w={2/3} >
    //   <IconButton aria-label='Search database' icon={<SearchIcon />} />
    //   <Input
    //     type="text" placeholder="検索"
        
    //   />
    // </InputGroup>

    // <ContentCard />

    
      

    //   </main>
    //   </>

    
    //Write your query or mutation here
  
  
  // クエリを実行
  // client.query({ query: sampleQuery })
  //   .then(response => {
  //     console.log('バックエンドに接続成功！');
  //     console.log('取得したデータ：', response.data);
  //   })
  //   .catch(error => {
  //     console.error('バックエンドに接続できませんでした。エラー:', error);
  //   });
  


   
  


export default Home;
