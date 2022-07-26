import { Flex, Link, List, Text } from "@chakra-ui/react";



export default function Rodape() {
    return (
        <>
            <Flex marginTop="20" w="100%" border="1px solid #EEE"> </Flex>
            <Flex p="5" marginTop="5" h="300px" justifyContent="space-between">
                <Flex gap="1" direction="column">
                    <Text fontSize="13px" fontWeight="bold">INSTITUCIONAL</Text>
                    <Link fontSize="13px"><li>Home</li></Link>
                    <Link fontSize="13px"><li>Sobre</li></Link>
                    <Link fontSize="13px"><li>Dúvidas</li></Link>
                    <Link fontSize="13px"><li>Contato</li></Link>
                </Flex>
                <Flex gap="1" direction="column">
                    <Text fontWeight="bold">MINHA CONTA</Text>
                    <Link fontSize="13px"><li>Meus Dados</li></Link>
                    <Link fontSize="13px"><li>Meus Pedidos</li></Link>
                    <Link fontSize="13px"><li>Lista Desejos</li></Link>
                </Flex>
                <Flex gap="1" direction="column">
                    <Text fontWeight="bold">ATENDIMENTO</Text>
                </Flex>
                <Flex gap="12" direction="column">
                    <Text fontWeight="bold">FORMA DE PAGAMENTO</Text>
                </Flex>
                <Flex gap="12" direction="column">
                    <Text fontWeight="bold">NEWSLETTER</Text>
                </Flex>
            </Flex>
            <Flex justifyContent="center" w="100%" h="75px" bg="black">
                <Flex direction="column" >
                    <Text fontSize="12px" color="white">Todos os direitos reservados -
                        CNPJ: 73.051.419/0001-46</Text>
                    <Text fontSize="12px" color="white">  Desenvolvimento: Up Agency -
                        Plataforma:</Text>
                </Flex>
            </Flex>
        </>

    )
}