import { useAuthSet, useAuthState } from "@/hooks/AuthContext";
import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import NextLink from "next/link";

const Navbar = () => {

    const AuthState = useAuthState()
    const AuthSet :any = useAuthSet()
    console.log(AuthState)
    const handleLogout = () => {
        // ここでログアウトの処理を実行し、AuthStateをリセットする
        AuthSet(null);
        Cookies.remove("token"); // または適切な初期値に設定
    }

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
      <Spacer />

      {AuthState ? (

      <NextLink href="/course" passHref 
      onClick={handleLogout}>
      <Box mr={8}>
      <Text as='b' color="black"
       >ログアウト</Text>
        </Box>
      </NextLink>


      ):(

        <NextLink href="/login" passHref>
        <Box mr={8}>
        <Text as='b' color="black" >サインイン</Text>
          </Box>
        </NextLink>

      )}

      {AuthState ? (
        <h5>{AuthState.username}</h5> 

      ):(

        <NextLink href="/register" passHref>
        <Box mr={8}>
        <Text as='b' color="black" >サインアップ</Text>
          </Box>
        </NextLink>
       

      )}

     

     
     
    </Flex>
  );
};

export default Navbar;

