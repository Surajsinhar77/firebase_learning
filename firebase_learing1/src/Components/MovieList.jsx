import React, { useMemo } from 'react';
import { useTable } from 'react-table';

const MovieList = ({ data }) => {
    const columns = useMemo(
        () => [
            {
                Header: 'Movie Name',
                accessor: 'movieName',
            },
            {
                Header: 'Release Date',
                accessor: 'releaseDate',
            },
            {
                Header: 'Oscar Got',
                accessor: 'oscarGot',
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <div className="container mx-auto my-5">
            <table {...getTableProps()} className="table-auto border-collapse w-full rounded">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className="py-2 px-4 border">
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="border-t">
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} className="py-2 px-4 border">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;
