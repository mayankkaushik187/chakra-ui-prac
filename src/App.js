import "./App.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import ExamForm from "./Components/ExamForm"

function App() {
    const theme = extendTheme({
        colors: {
            brand: {
                100: "#733D47",
                50: "#F2D8D5",
                75: "#BF9B9B",
            },
        },
    })
    return (
        <ChakraProvider theme={theme}>
            <ExamForm />
        </ChakraProvider>
    )
}

export default App
