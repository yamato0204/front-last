import { useForm } from 'react-hook-form'
import {
 
  Input,
  Button,
  Flex,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import { registerUser } from '@/lib/auth';
import { AuthContext, useAuthSet } from '@/hooks/AuthContext';
import { ZCOOL_XiaoWei } from 'next/font/google';

export default function HookForm() {

    const [data, setData] = useState({username: "", email: "", password: ""});

    const AuthSet: any = useAuthSet();

    const handleRegister= async () => {
        
        
       await registerUser(data.username, data.email, data.password)
       .then((response: any) => { 
        AuthSet(response.data.user);
       })
       .catch((err) => console.log(err));
    }

    console.log(data)

  return (
    <Flex height="80vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" padding={12} rounded={6}>
       <Heading ml={10} mb={6}>Sign Up</Heading>
        <Input 
        placeholder="name" variant="filled" mb={3} type='text' 
        name='username'
        onChange={(e) => 
            setData({...data, username: e.target.value})
        } />
        <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email" 
        name='email'
        onChange={(e) => 
            setData({...data, email: e.target.value})
        } />
        <Input placeholder="********" variant="filled" mb={6} type="password" 
        name='password'
        onChange={(e) => 
            setData({...data, password: e.target.value})
        } />
        <Button mb={6} colorScheme="teal" 
        onClick={() => {
            handleRegister();
        }}>
            
            Sign Up</Button>
        
      </Flex>
    </Flex>
  )
}