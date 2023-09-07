import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';



const createApolloClient = () => {
    return new ApolloClient({
    uri: 'http://127.0.0.1:1337/graphql',
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });

}


export const initializeApollo = () => {
  return createApolloClient();
}
  


  


// クエリを実行
// client.query({ query: sampleQuery })
//   .then(response => {
//     console.log('バックエンドに接続成功！');
//     console.log('取得したデータ：', response.data);
//   })
//   .catch(error => {
//     console.error('バックエンドに接続できませんでした。エラー:', error);
//   });

