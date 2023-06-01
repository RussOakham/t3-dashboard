import { useState } from 'react'
import { BiChevronLeft, BiChevronRight, BiChevronsLeft, BiChevronsRight } from 'react-icons/bi'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { chakra, Icon, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { type ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, type SortingState, useReactTable } from '@tanstack/react-table'

import type { Person } from '../Team'


type DataTableProps = {
    data: Person[];
    columns: ColumnDef<Person, any>[];
}

const DataTable = ({ data, columns }: DataTableProps) => {
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        },
        debugTable: true,
    })


    return (
        <>
            <Table className='mt-4 border overflow-hidden rounded-3xl' size="lg" variant="simple">
                <Thead className='bg-purple-900'>
                    {table.getHeaderGroups().map(headerGroup => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <Th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
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
                        <Tr key={row.id} className='h-16'>
                            {row.getVisibleCells().map(cell => {
                                const { meta }: any = cell.column.columnDef
                                return (
                                    <Td
                                        key={cell.id}
                                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                                        isNumeric={meta?.isNumeric as boolean}
                                        padding={2}
                                        textAlign="center"
                                        justifyContent="center"
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Td>
                                )
                            })}
                        </Tr>
                    ))}
                </Tbody>
            </Table >
            <tfoot className='bg-purple-900 flex justify-center items-center gap-2 p-2 rounded-b-3xl'>
                <button
                    type='button'
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    <Icon as={BiChevronsLeft} />
                </button>
                <button
                    type='button'
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <Icon as={BiChevronLeft} />
                </button>
                <span className="flex items-center gap-1">
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of{' '}
                        {table.getPageCount()}
                    </strong>
                </span>
                <button
                    type='button'
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <Icon as={BiChevronRight} />
                </button>
                <button
                    type='button'
                    className="border rounded p-1"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    <Icon as={BiChevronsRight} />
                </button>
            </tfoot>
        </>
    )
}

export default DataTable