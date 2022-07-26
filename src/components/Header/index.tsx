import { FiFacebook, } from "react-icons/fi";
import { BsInstagram, BsPersonCircle, BsHandbag } from "react-icons/bs";
import React from "react";
import { Flex, Input, Link, Image, Button, } from "@chakra-ui/react";




export default function Header() {
    return (
        <Flex p="7" alignItems="center" justifyContent="space-between" w="100%" h="80px">
            <Flex alignItems="center" gap="8">
                <Flex gap="3">
                    <Link href="https://www.facebook.com/cenariummodasoficial/"><FiFacebook color="black" size="20px" /></Link>
                    <Link href="https://www.instagram.com/cenarium_modas/"><BsInstagram color="black" size="20px" /></Link>
                </Flex >
                < Input fontSize={["7px", "10px", "15px"]} borderColor="black" size="sm" placeholder="Procurar..." _placeholder={{ color: "black" }} borderRadius="30" w={["20px", "70px", "auto"]} ></Input>
            </Flex>
            <Link href="https://www.shopcenarium.com.br/"><Image w={["70px", "100px", "200px"]} src=' https://braavo-cache.nyc3.cdn.digitaloceanspaces.com/cenarium/0x0-1309527443.png' /></Link>
            <Flex alignItems="center" gap="2">
                <BsPersonCircle color="black" size="20" />
                <Link fontSize={["7px", "10px", "15px"]}>Entrar</Link>
                <Link fontSize={["7px", "10px", "15px"]} href="https://www.shopcenarium.com.br/cadastro">Criar Conta</Link>
                <Flex marginLeft="3">
                    <BsHandbag color="black" size="40px" />
                </Flex>
            </Flex>
        </Flex >
    )
}