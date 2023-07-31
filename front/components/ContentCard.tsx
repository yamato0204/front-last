import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

const ContentCard = () => {
    return (

        <>
        <Card maxW='sm'>
  <CardBody>
    
    <Stack  mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text >
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        450円
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        購入
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        カートに追加
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>






  





   

</>



    );
}

export default ContentCard;