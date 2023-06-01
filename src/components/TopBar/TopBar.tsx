import { BiBell, BiCog, BiMoon, BiSearch, BiSun, BiUser } from "react-icons/bi"
import { Box, Icon, IconButton, Input, InputGroup, InputRightElement, useColorMode } from "@chakra-ui/react"


const TopBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box display="flex" justifyContent="space-between" p={5}>
            <InputGroup
                display="flex"
                width="auto"
                backgroundColor={colorMode === "dark" ? "whiteAlpha.200" : "gray.100"}
                borderRadius="3px"
            >
                <Input
                    display="flex"
                    border="none"
                    backgroundColor="transparent"
                    placeholder="Search..." />
                <InputRightElement>
                    <IconButton
                        aria-label="search"
                        type="button"
                        p="1"
                        backgroundColor="transparent"
                        borderLeftRadius="0"
                    >
                        <Icon as={BiSearch} />
                    </IconButton>
                </InputRightElement>
            </InputGroup>

            <Box display="flex">
                <IconButton aria-label="dark mode toggle" onClick={toggleColorMode}>
                    {colorMode === "dark" ? <Icon as={BiMoon} /> : <Icon as={BiSun} />
                    }
                </IconButton>
                <IconButton aria-label="notifications">
                    <Icon as={BiBell} />
                </IconButton>
                <IconButton aria-label="settings">
                    <Icon as={BiCog} />
                </IconButton>
                <IconButton aria-label="profile">
                    <Icon as={BiUser} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopBar