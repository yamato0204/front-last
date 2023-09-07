import Layout from '@/components/Layout'
import theme from '../styles/theme'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { initializeApollo } from '@/apollo/apollo'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider, useAuthSet, useAuthState } from '@/hooks/AuthContext'
import { SetStateAction, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export default function App({ Component, pageProps,}: AppProps) {
 // const client: any = initializeApollo();
 
  




  return (
    <AuthProvider>
  <ChakraProvider theme={theme}> 
  
  <Component {...pageProps} />
  
 
 
</ChakraProvider>
</AuthProvider>
  )
}
