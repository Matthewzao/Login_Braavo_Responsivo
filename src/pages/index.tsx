
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import ButtonHeader from "../components/Header/Button";
import Cadastro from "../components/Cadastro";
import ButtonCriar from "../components/Cadastro/ButtonCriarConta";
import Rodape from "../components/Rodape";

export default function Home() {


    return (
        <>
            <Header />
            <ButtonHeader />
            <Flex justifyContent="center">
                <Cadastro />
            </Flex>
            <ButtonCriar />
            <Rodape />

        </>
    )
}

