import { useState } from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { chakra, Icon, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { type ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, type SortingState, useReactTable } from '@tanstack/react-table'

import type { Person } from '../Team'


type DataTableProps = {
    data: Person[];
    columns: ColumnDef<Person>[];
}

const DataTable = ({ data, columns }: DataTableProps) => {
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
    })


    return (
        <Table>
            <Thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (
                                <Th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    p={2}
                                    textAlign="center"
                                >
                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}


                                    {header.column.getIsSorted() && (
                                        header.column.getIsSorted() === "desc" ?
                                            <chakra.span>
                                                <Icon as={TiArrowSortedDown} />
                                            </chakra.span>
                                            :
                                            <chakra.span>
                                                <Icon as={TiArrowSortedUp} />
                                            </chakra.span>
                                    )
                                    }
                                </Th>
                            )
                        })}
                    </Tr>
                ))}
            </Thead>
            <Tbody>
                {table.getRowModel().rows.map(row => (
                    <Tr key={row.id}>
                        {row.getVisibleCells().map(cell => {
                            const { meta }: any = cell.column.columnDef
                            return (
                                <Td
                                    key={cell.id}
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                                    isNumeric={meta?.isNumeric as boolean}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Td>
                            )
                        })}
                    </Tr>
                ))}
            </Tbody>
        </Table >
    )
}

export default DataTable