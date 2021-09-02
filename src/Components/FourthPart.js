import React from "react"
import {
    Box,
    Checkbox,
    color,
    Divider,
    FormControl,
    Heading,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
    Icon,
    EditableInput,
    EditablePreview,
    Editable,
    InputRightAddon,
    InputGroup,
    InputRightElement,
    Flex,
    FormLabel,
    Grid,
    Spacer,
    IconButton,
    Radio,
    InputLeftAddon,
    InputLeftElement,
    Button,
    Badge,
    Center,
} from "@chakra-ui/react"
import { TriangleDownIcon, AddIcon, CloseIcon } from "@chakra-ui/icons"

function FourthPart() {
    return (
        <Box
            w="863px"
            h="367px"
            mt="880px"
            ml="182px"
            rounded="lg"
            bgColor="white"
            pos="absolute"
            boxShadow="lg"
        >
            <Flex>
                <Flex>
                    <Stack spacing="24px">
                        <Select
                            icon={
                                <TriangleDownIcon
                                    w="14px"
                                    h="14px"
                                    color="brand.100"
                                />
                            }
                            placeholder="File Upload"
                            mt="63px"
                            ml="44px"
                            w="222px"
                            color="brand.100"
                            bgColor="brand.50"
                            varaint="filled"
                        />
                        <InputGroup
                            mt="63px"
                            ml="44px"
                            w="292px"
                            color="brand.100"
                        >
                            <Flex>
                                <Input
                                    mr="auto"
                                    ml="44px"
                                    placeholder="5"
                                    color="brand.100"
                                    is
                                />
                                <InputRightElement
                                    mr="50px"
                                    children="marks"
                                    color="brand.50"
                                />
                            </Flex>
                        </InputGroup>
                        <InputGroup
                            mt="63px"
                            ml="44px"
                            w="292px"
                            color="brand.100"
                        >
                            <Flex>
                                <Input
                                    mr="auto"
                                    ml="44px"
                                    placeholder="-"
                                    color="brand.100"
                                    is
                                />
                                <InputRightElement
                                    mr="50px"
                                    children="marks"
                                    color="brand.50"
                                />
                            </Flex>
                        </InputGroup>
                        <Flex flexDirection="row">
                            <IconButton
                                colorScheme="brand.50"
                                icon={<AddIcon color="brand.100" />}
                                ml="70px"
                            />
                            <Text mr="80px" mt="9px" color="brand.100">
                                Add Optional
                            </Text>
                        </Flex>
                    </Stack>
                    <Divider
                        orientation="vertical"
                        ml="30px"
                        mt="28px"
                        h="308px"
                        color="brand.100"
                        bgColor="brand.100"
                        variant="solid"
                    />
                </Flex>
                <Box>
                    <Text ml="46px" mt="40px" color="brand.100">
                        What is the size of the Earth?
                    </Text>
                    <Divider
                        w="400px"
                        h="1px"
                        ml="46px"
                        mt="20px"
                        fontWeight="400"
                        lineHeight="36px"
                        colorScheme="brand.100"
                        color="brand.100"
                        bgColor="brand.100"
                        border="1px"
                    />
                    <Center textAlign="center">
                        <Button
                            variant="link"
                            w="300px"
                            h="100px"
                            mt="60px"
                            ml="80px"
                            textAlign="center"
                            lineHeight="60px"
                            fontWeight="light"
                            fontSize="6xl"
                            colorScheme="brand.100"
                            color="brand.100"
                        >
                            File Upload
                        </Button>
                    </Center>
                </Box>
            </Flex>
        </Box>
    )
}

export default FourthPart
