import { useState } from 'react';
import { BiBarChartAlt2, BiCalendar, BiHelpCircle, BiHomeAlt2, BiLineChart, BiMapAlt, BiMenu, BiPieChartAlt, BiReceipt, BiUser } from 'react-icons/bi';
import { FaAddressBook, FaUsers } from 'react-icons/fa';
import { Menu, MenuItem, Sidebar as ProSidebar, useProSidebar } from 'react-pro-sidebar';
import { Box, Heading, Icon, IconButton, useColorMode, useToken } from '@chakra-ui/react';
import Image from 'next/image';

import SidebarItem from './SidebarItem';

const Sidebar = () => {
    const [selected, setSelected] = useState<string>("Dashboard");
    const { collapsed, collapseSidebar } = useProSidebar();
    const [gray100, gray200, gray700, gray900] = useToken("colors", ["gray.100", "gray.200", "gray.700", "gray.900",])
    const { colorMode } = useColorMode();

    const handleSidebar = () => {
        collapseSidebar();
    };

    return (
        <ProSidebar backgroundColor={colorMode === 'dark' ? gray900 : gray100}>
            <Menu menuItemStyles={{
                button: {
                    '&:hover': {
                        backgroundColor: colorMode === 'dark' ? gray700 : gray200,
                        color: colorMode === 'dark' ? gray100 : gray900,
                    },
                }
            }}>
                <MenuItem
                    onClick={handleSidebar}
                    icon={collapsed ? <Icon as={BiMenu} /> : null}
                    style={{ margin: "15px 0 20px 0", color: colorMode === 'dark' ? "gray.100" : "gray.900" }}
                >
                    {!collapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Heading as="h3" color={colorMode === 'dark' ? "gray.100" : "gray.900"} size="md">
                                T3 Dashboard
                            </Heading>
                            <IconButton aria-label="Collapse" backgroundColor="transparent">
                                <Icon as={BiMenu} />
                            </IconButton>
                        </Box>)
                    }
                </MenuItem>

                {!collapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Image
                                alt="profile-user"
                                width={100}
                                height={100}
                                src="/images/profile-user.png"
                                style={{ cursor: 'pointer', borderRadius: "50%", marginBottom: "10px" }}
                            />
                        </Box>

                        <Box>
                            <Heading
                                as="h2"
                                color={colorMode === 'dark' ? "gray.100" : "gray.900"}
                                fontWeight="bold"
                                size="md"
                                mb="10px"
                                textAlign="center"
                            >
                                Russell Oakham
                            </Heading>
                            <Heading
                                as="h5"
                                color={colorMode === 'dark' ? "gray.400" : "grey.800"}
                                size="sm"
                                textAlign="center"
                            >
                                VP of Frontend
                            </Heading>
                        </Box>
                    </Box>
                )}

                <Box>
                    <SidebarItem
                        title="Dashboard"
                        to="/"
                        icon={BiHomeAlt2}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Heading
                        as="h6"
                        color={colorMode === 'dark' ? "gray.300" : "gray.600"}
                        size="xs"
                        m="15px 0 5px 20px"
                    >
                        Data
                    </Heading>

                    <SidebarItem
                        title="Manage Team"
                        to="/team"
                        icon={FaUsers}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <SidebarItem
                        title="Contacts Information"
                        to="/team"
                        icon={FaAddressBook}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <SidebarItem
                        title="Invoices Balances"
                        to="/invoices"
                        icon={BiReceipt}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Heading
                        as="h6"
                        color={colorMode === 'dark' ? "gray.300" : "gray.600"}
                        size="xs"
                        m="15px 0 5px 20px"
                    >
                        Pages
                    </Heading>

                    <SidebarItem
                        title="Profile Form"
                        to="/form"
                        icon={BiUser}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <SidebarItem
                        title="Calendar"
                        to="/calendar"
                        icon={BiCalendar}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <SidebarItem
                        title="FAQ Page"
                        to="/faq"
                        icon={BiHelpCircle}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <Heading
                        as="h6"
                        color={colorMode === 'dark' ? "gray.300" : "gray.600"}
                        size="xs"
                        m="15px 0 5px 20px"
                    >
                        Charts
                    </Heading>

                    <SidebarItem
                        title="Bar Chart"
                        to="/bar"
                        icon={BiBarChartAlt2}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <SidebarItem
                        title="Pie Chart"
                        to="/pie"
                        icon={BiPieChartAlt}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <SidebarItem
                        title="Line Chart"
                        to="/line"
                        icon={BiLineChart}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <SidebarItem
                        title="Geography Chart"
                        to="/geography"
                        icon={BiMapAlt}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </Box>
            </Menu>
        </ProSidebar >
    )
}

export default Sidebar