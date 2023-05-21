import type { IconType } from 'react-icons';
import { MenuItem } from 'react-pro-sidebar';
import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

type SidebarItemProps = {
    title: string;
    to: string;
    icon: IconType;
    selected: string;
    setSelected: (title: string) => void;
}

const SidebarItem = ({ title, to, icon, selected, setSelected }: SidebarItemProps) => {
    return (
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={<Icon as={icon} />}
            style={{ color: "grey.100" }}
            component={<ChakraLink as={Link} href={to} />}
        >
            <Text fontSize="md">{title}</Text>
        </MenuItem>
    )
}

export default SidebarItem