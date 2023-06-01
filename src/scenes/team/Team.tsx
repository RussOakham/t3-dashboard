import { BiLockOpenAlt } from "react-icons/bi"
import { MdAdminPanelSettings, MdSecurity } from "react-icons/md"
import { Icon, TableContainer } from "@chakra-ui/react"
import { createColumnHelper } from "@tanstack/react-table"

import Header from "@/components/Header/Header"
import { mockDataTeam } from "@/data/mockData"
import twClassNames from "@/utils/tailwind"

import DataTable from "./components/DataTable"

export type Person = {
    id: number
    name: string
    email: string
    age: number
    phone: string
    access: string
}

const columnHelper = createColumnHelper<Person>()



const columns = [
    columnHelper.accessor('id', {
        header: 'ID',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('age', {
        header: 'Age',
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('phone', {
        header: 'Phone',
        cell: info => info.getValue(),
    }),
    columnHelper.display({
        header: 'Access',
        cell: info => (
            <div
                className={twClassNames(info.row.original.access === "admin" ? 'bg-green-600' : 'bg-green-700', 'text-center items-center inherit flex justify-center rounded text-white')} >
                {info.row.original.access === 'admin' ? <Icon as={MdAdminPanelSettings} /> : null}
                {info.row.original.access === "manager" ? <Icon as={MdSecurity} /> : null}
                {info.row.original.access === "user" ? <Icon as={BiLockOpenAlt} /> : null}
                <span className="capitalize text-gray-100 ml-1 p-2">
                    {info.row.original.access}
                </span>
            </div>),
    }),
]


const Team = () => {
    return (
        <>
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <TableContainer>
                <DataTable
                    data={mockDataTeam}
                    columns={columns}
                />
            </TableContainer>
        </>
    )
}

export default Team