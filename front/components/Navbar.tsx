import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex shadow="md"  bg="gray.100" p={4} color="white">
      <NextLink href="/mypage"  passHref>
       <Box mr={8}>
        <Text as='b' color="black" >マイページ</Text>
        </Box>
      </NextLink>
      <NextLink href="/materials" passHref>
      <Box mr={8}>
      <Text as='b' color="black" >教材一覧</Text>
        </Box>
      </NextLink>
     
     
    </Flex>
  );
};

export default Navbar;

