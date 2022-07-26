import { Button, Flex, Text } from "@chakra-ui/react";

export default function ButtonCriar() {
    return (
        <>
            <Flex alignItems="center" direction="column" mt="10" justifyContent="center">
                <Text fontWeight="bold" fontSize={["8x", "13px", "16px"]}>Quero me cadastrar</Text>
                <Text fontSize={["8px", "10px", "13px"]}>Ao criar uma conta, você concorda com nossos termos de uso,condições,<br></br>política de privacidade e que tem pelo menos 16 anos de idade.</Text>
                <Button shadow="md" fontWeight="normal" border="1px solid gray" bg="white" mt="4" w={["100px", "200px", "300px"]} h={["10px", "30px", "50px"]}>Criar Conta</Button>
            </Flex>
        </>
    )
}