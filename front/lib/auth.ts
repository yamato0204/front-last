
import { rejects } from 'assert';
import axios from 'axios';
import Cookies from 'js-cookie';
import { resolve } from 'path';



export const registerUser = async (username: any, email: any, password: any) => {

    await axios
    .post('http://localhost:1337/api/auth/local/register', {
      username,
      email,
      password
    })
    .then(response => {
      // Handle success.
      Cookies.set('token', response.data.jwt, { expires: 7 } );
      

      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
}



// Request API.
export const login = (identifier: any, password: any) => {

    return new Promise((resolve, reject) => {


        axios
  .post('http://localhost:1337/api/auth/local', {
    identifier,
    password,
  })
  .then(response => {
    // Handle success.
    
    Cookies.set("token", response.data.jwt, { expires: 7 } );
    const token = Cookies.get('token')
      console.log(`これは${token}`)
      window.location.href = "/"
    resolve(response)
    
  })
  .catch(error => {
    // Handle error.
    reject(error)
    console.log('An error occurred:', error.response);
  });



    })
  
}
