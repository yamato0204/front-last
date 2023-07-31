
import Image from 'next/image';
import React from 'react'
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import {  IconButton, Input, InputGroup,  } from '@chakra-ui/react'

const Serch = () => {
    return (

        
      <InputGroup m={4} w={2/3} >
      <IconButton aria-label='Search database' icon={<SearchIcon />} />
      <Input
        type="text" placeholder="検索"
        
      />
    </InputGroup>

    





    );
}

export default Serch;
