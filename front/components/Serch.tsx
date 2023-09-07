
import Image from 'next/image';
import React, { useState } from 'react'
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import {  IconButton, Input, InputGroup,  } from '@chakra-ui/react'
import { useContent, useUpdateContent } from '@/features/content/hooks/ContentContext';


const Serch = () => {

    const setContent = useUpdateContent()
    const stateContent = useContent()
    
    return (

      <InputGroup m={4} w={2/3} >
      <IconButton aria-label='Search database' icon={<SearchIcon />} />
      <Input
        type="text" placeholder="検索"
        onChange={(e) => setContent(e.target.value.toLowerCase())}
      />
    </InputGroup>

    





    );
}

export default Serch;
