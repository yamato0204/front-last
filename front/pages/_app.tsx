import Layout from '@/components/Layout'
import theme from '../styles/theme'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { initializeApollo } from '@/apollo/apollo'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '@/hooks/AuthContext'

export default function App({ Component, pageProps,}: AppProps) {
 // const client: any = initializeApollo();
  return (
  <ChakraProvider theme={theme}> 
  <AuthProvider>
  <Component {...pageProps} />
  
  </AuthProvider>
 
</ChakraProvider>
  )
}
