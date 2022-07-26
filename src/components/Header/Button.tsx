import { Flex, Button, Text, Link } from "@chakra-ui/react";
import React from "react";

export default function ButtonHeader() {
    return (<>
        <Flex fontSize={{ base: '8px', md: '10px', lg: '15px' }} borderTop="1px solid #EEE" justifyContent="center" gap="4">
            <Link p="2" alignItems="center" href="https://www.shopcenarium.com.br/cat/8/novidades" fontWeight="bold" bg="none" color="none " _hover={{ color: "gray.200" }}>NOVIDADES</Link>
            <Link p="2" alignItems="center" href="https://www.shopcenarium.com.br/cat/5/blusas" fontWeight="bold" bg="none" color="none" _hover={{ color: "gray.200" }}>BLUSA</Link>
            <Link p="2" alignItems="center" href="https://www.shopcenarium.com.br/cat/2/camisas" fontWeight="bold" bg="none" color="none" _hover={{ color: "gray.200" }}>CAMISAS</Link>
            <Link p="2" alignItems="center" href="https://www.shopcenarium.com.br/cat/3/calcas" fontWeight="bold" bg="none" color="none" _hover={{ color: "gray.200" }}>CALÇA</Link>
            <Link p="2" alignItems="center" href="https://www.shopcenarium.com.br/cat/4/saias" fontWeight="bold" bg="none" color="none" _hover={{ color: "gray.200" }}>SAIAS</Link>
            <Link p="2" alignItems="center" href="https://www.shopcenarium.com.br/cat/1/vestidos-macacoes" fontWeight="bold" bg="none" color="none" _hover={{ color: "gray.200" }}>VESTIDOS & MACAÇÕES</Link>
            <Link p="2" alignItems="center" href="https://www.shopcenarium.com.br/cat/11/conjuntos" fontWeight="bold" bg="none" color="none" _hover={{ color: "gray.200" }}>CONJUNTOS</Link>
            <Link p="2" alignItems="center" href="https://www.shopcenarium.com.br/cat/6/jaquetas" fontWeight="bold" bg="none" color="none" _hover={{ color: "gray.200" }}>JAQUETAS</Link>
        </Flex>
        <Flex mt="10" direction="column" alignItems="center" h="40px">
            <Text fontSize="20px" >IDENTIFICAÇÃO</Text>
        </Flex>
    </>
    )
}