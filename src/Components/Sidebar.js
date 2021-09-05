import { IconButton } from "@chakra-ui/button"
import { Box, VStack } from "@chakra-ui/layout"
import React from "react"

const Sidebar = () => {
    return (
        <Box>
            <VStack spacing="24px">
                <IconButton />
                <IconButton />
                <IconButton />
                <IconButton />
            </VStack>
        </Box>
    )
}

export default Sidebar
