import { BiBell, BiCog, BiMoon, BiSearch, BiSun, BiUser } from "react-icons/bi"
import { Box, Icon, IconButton, Input, useColorMode } from "@chakra-ui/react"

const TopBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* search bar */}
            <Box
                display="flex"
                backgroundColor="primary.400"
                borderRadius="3px"
            >
                <Input display="flex" marginLeft="2" placeholder="Search..." />
            </Box>

            <IconButton
                aria-label="search"
                type="button"
                p="1"
            >
                <Icon as={BiSearch} />
            </IconButton>

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