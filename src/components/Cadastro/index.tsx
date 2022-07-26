import { Flex, Input, Link, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function Cadastro() {
    return (
        <>
            <Flex boxShadow="md" p="2" alignItems="center" borderRadius="10" border="1px solid #D1D5DB" gap="2" w={["200px", "300px", "600px"]} h={["130px", "230px", "330px"]} mt="5" direction="column">
                <Text w="100%" >E-mail:</Text>
                <Input type="email"></Input>
                <Text w="100%" >Senha:</Text>
                <Input type="password"></Input>
                <Link fontStyle="normal" w="100%" fontSize={["8px", "10px", "13px"]}>Esqueceu sua senha?</Link>
                <Button fontWeight="normal" borderRadius="4" colorScheme="white" bg="black" _hover={{ color: "blue" }} h={["20px", "40px", "60px"]} w={["10px", "200px", "300px"]}>Entrar</Button>
                <Text w="100%" textAlign="center" fontSize={["6px", "8px", "12px"]}>Este site é protegido pelo reCAPTCHA Enterprise e pelo Google</Text>
                <Text textAlign="center" fontSize={["6px", "8px", "12px"]}><Link color="blue">Política de Privacidade</Link> e <Link color="blue">Termos de serviço</Link> se aplicam.</Text>
            </Flex>

        </>
    )
}