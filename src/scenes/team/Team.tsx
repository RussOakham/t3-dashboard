import { createColumnHelper } from "@tanstack/react-table"

import Header from "@/components/Header/Header"
import { mockDataTeam } from "@/data/mockData"

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
        meta: {
            isNumeric: true,
        }
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
    columnHelper.accessor('access', {
        header: 'Access',
        cell: info => info.getValue(),
    }),
]

// type TeamProps = {}

const Team = () => {
    return (
        <>
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <div>
                <DataTable
                    data={mockDataTeam}
                    columns={columns}
                />
            </div>
        </>
    )
}

export default Team