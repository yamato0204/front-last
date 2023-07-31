
import { initializeApollo } from "@/apollo/apollo";
import { GET_CONTENTS } from "@/apollo/query/getContents";
import { isApolloError } from "@apollo/client";

const client: any = initializeApollo();


export const GetContents = async () => {
   
    let _data, err;
   
    let data: any = [];
    await client
    .query({
        query: GET_CONTENTS,
    })
    .then((res :any) => {

        _data =res.data.contents.data
    
    

        data = _data.map((item: any) => {
         
            const obj: Object  = {
              name: item.attributes.name,
              description: item.attributes.description,
             
            };
            return obj

        })

        
        
            
        

        // _data.forEach((obj :any) => {
        //     const attributesArray = Object.values(obj.attributes);
        //     data.push(attributesArray);
        //   });

       


         
        // return _data;
    })
    .catch( (error :any) => {


        if(isApolloError(error)){
             console.log("エラー発生",error)
            error.graphQLErrors.find((e) => {
                if (e.extensions.code) err = e.extensions.code;
                
           })
        }

      });
      console.log(data)
      return {data,err};
      
};