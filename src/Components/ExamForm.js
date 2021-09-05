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
import React from "react"
import FirstPart from "./FirstPart"
import SecondPart from "./SecondPart"
import ThirdPart from "./ThirdPart"
import FourthPart from "./FourthPart"
import FifthPart from "./FifthPart"

const ExamForm = () => {
    return (
        <Box
            w="1199px"
            h="4526px"
            mt="45px"
            ml="83px"
            pos="absolute"
            rounded="lg"
            bgColor="white"
            boxShadow="lg"
        >
            <Heading
                h="36px"
                mt="74px"
                ml="127px"
                fontWeight="400"
                lineHeight="36px"
            >
                Create Questions
            </Heading>
            <Divider
                h="2px"
                w="980px"
                mt="80px"
                ml="127px"
                pos="absolute"
                border="1px"
                bgColor="red.200"
                color="brand.100"
                colorScheme="brand.100"
            />
            <FirstPart />
            <SecondPart />
        </Box>
    )
}

export default ExamForm
