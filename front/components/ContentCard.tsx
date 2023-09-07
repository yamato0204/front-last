import { Content } from '@/types/graphql';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'


type ContentsItemsProps = {
    content: Content;
  };
  

const ContentCard: React.FC<ContentsItemsProps> = ({content}) => {
    return (

        <>
        <Card maxW='sm'>
  <CardBody>
    
    <Stack  mt='6' spacing='3'>
      <Heading size='md'>{content.name}</Heading>
      <Text >
       {content.description}
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