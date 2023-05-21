import { Heading, useColorMode } from "@chakra-ui/react"

type HeaderProps = {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const { colorMode } = useColorMode()

  return (
    <div className="p-5">
      <Heading
        as="h3"
        size="lg"
        mb={2}
        color={colorMode === 'dark' ? "gray.100" : "gray.900"}
        fontWeight="bold"
        marginBottom="5px"
      >
        {title}
      </Heading>
      <Heading as="h5" size="md" color={colorMode === 'dark' ? "gray.400" : "grey.800"}>
        {subtitle}
      </Heading>
    </div >
  )
}

export default Header