import { useForm } from 'react-hook-form'
import {
  Input,
  Button,
  Flex,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import { login, registerUser } from '@/lib/auth';
import { AuthContext, useAuthSet } from '@/hooks/AuthContext';
import { Eater, ZCOOL_XiaoWei } from 'next/font/google';
import { useRouter } from 'next/router';

export default function Login() {

    const [data, setData] = useState({identifier: "", password: ""});

    const AuthSet: any = useAuthSet();

    const handleLogin= async () => {
           login(data.identifier, data.password)
           .then((response: any) => {
            AuthSet(response.data.user)
            console.log(response.data.user)
           })
           .catch((err) => console.log(err))
    };

    const handleChange = (e :any) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }

    

  return (
    <Flex height="80vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" padding={12} rounded={6}>
       <Heading ml={16} mb={6}>Login</Heading>
        
        <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email" 
        name='identifier'
        onChange={(e) => handleChange(e)}
         />

        <Input placeholder="********" variant="filled" mb={6} type="password" 
        name='password'
        onChange={(e) => handleChange(e)}
         />

        <Button mb={6} colorScheme="teal" 
        onClick={() => {
            handleLogin();
        }}>
            
            login</Button>
        
      </Flex>
    </Flex>
  )
}