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

function FirstPart() {
    return (
        <Box
            w="863px"
            h="230px"
            mt="165px"
            ml="182px"
            rounded="lg"
            boxShadow="lg"
        >
            <Textarea
                w="2360px"
                h="48px"
                mt="19px"
                ml="50px"
                pos="absolute"
                fontSize="40px"
                lineHeight="48px"
                color="GrayText"
                placeholder="Section Name"
                variant="unstyled"
            ></Textarea>
            <Textarea
                w="2360px"
                h="100px"
                mt="50px"
                ml="50px"
                pos="absolute"
                fontSize="14px"
                lineHeight="100px"
                color="GrayText"
                variant="unstyled"
                placeholder="Description (optional)"
            ></Textarea>
            <Checkbox mt="189px" ml="25px" color="brand.100">
                Shuffle Questions
            </Checkbox>
        </Box>
    )
}

export default FirstPart
