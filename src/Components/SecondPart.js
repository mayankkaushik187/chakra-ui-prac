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
} from "@chakra-ui/react"
import { TriangleDownIcon, AddIcon, CloseIcon } from "@chakra-ui/icons"

function SecondPart() {
    return (
        <Box
            w="863px"
            h="367px"
            mt="42px"
            ml="182px"
            rounded="lg"
            bgColor="white"
            pos="absolute"
            boxShadow="lg"
        >
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
                        placeholder="Single Choice"
                        mt="63px"
                        ml="44px"
                        w="222px"
                        color="brand.100"
                        bgColor="brand.50"
                        varaint="filled"
                    />
                    <InputGroup mt="63px" ml="44px" w="292px" color="brand.100">
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
                    <InputGroup mt="63px" ml="44px" w="292px" color="brand.100">
                        <Flex>
                            <Input
                                mr="auto"
                                ml="44px"
                                placeholder="1"
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

                <Stack spacing="24px">
                    <Text ml="46px" mt="40px" color="brand.100">
                        What is the size of the Earth?
                    </Text>
                    <Flex>
                        <Radio ml="46px" colorScheme="red" mr="40px"></Radio>
                        <InputGroup>
                            <InputLeftElement
                                children={
                                    <Badge size="md" colorScheme="red">
                                        A
                                    </Badge>
                                }
                                color="brand.100"
                            />
                            <Input pr="30px" placeholder="Option 1" />
                            <InputRightElement
                                mr="1px"
                                children={
                                    <IconButton
                                        colorScheme="brand.50"
                                        icon={<CloseIcon color="brand.100" />}
                                        ml="1px"
                                        size="sm"
                                    />
                                }
                                color="brand.50"
                            />
                        </InputGroup>
                    </Flex>
                    <Flex>
                        <Radio ml="46px" colorScheme="red" mr="40px"></Radio>
                        <InputGroup>
                            <InputLeftElement
                                children={
                                    <Badge size="md" colorScheme="red">
                                        B
                                    </Badge>
                                }
                                color="brand.100"
                            />
                            <Input pr="30px" placeholder="Option 2" />
                            <InputRightElement
                                mr="1px"
                                children={
                                    <IconButton
                                        colorScheme="brand.50"
                                        icon={<CloseIcon color="brand.100" />}
                                        ml="1px"
                                        size="sm"
                                    />
                                }
                                color="brand.50"
                            />
                        </InputGroup>
                    </Flex>
                    <Flex>
                        <Radio ml="46px" colorScheme="red" mr="40px"></Radio>
                        <InputGroup>
                            <InputLeftElement
                                children={
                                    <Badge size="md" colorScheme="red">
                                        C
                                    </Badge>
                                }
                                color="brand.100"
                            />
                            <Input pr="30px" placeholder="Option 3" />
                            <InputRightElement
                                mr="1px"
                                children={
                                    <IconButton
                                        colorScheme="brand.50"
                                        icon={<CloseIcon color="brand.100" />}
                                        ml="1px"
                                        size="sm"
                                    />
                                }
                                color="brand.50"
                            />
                        </InputGroup>
                    </Flex>
                    <Flex>
                        <InputGroup ml="102px">
                            <InputLeftElement
                                children={
                                    <Badge size="md" colorScheme="red">
                                        D
                                    </Badge>
                                }
                                color="brand.100"
                            />
                            <Input
                                pr="30px"
                                _placeholder={{ color: "black.500" }}
                                placeholder="Add Option"
                                color="black.300"
                            />
                            <InputRightElement
                                mr="1px"
                                children={
                                    <IconButton
                                        colorScheme="brand.50"
                                        icon={<CloseIcon color="brand.100" />}
                                        ml="1px"
                                        size="sm"
                                    />
                                }
                                color="brand.50"
                            />
                        </InputGroup>
                    </Flex>
                </Stack>
            </Flex>
        </Box>
    )
}

export default SecondPart
