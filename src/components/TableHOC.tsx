import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import { Column, TableOptions, useSortBy, useTable, usePagination } from "react-table";

function TableHOC<T extends {}>(columns: Column<T>[], data: T[], containerClassName: string, heading: string, showPagination: boolean = false) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 5,
      },
    };

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      pageCount,
      state: { pageIndex },
      gotoPage,
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
    } = useTable(options, useSortBy, usePagination);

    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, hi) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} key={hi}>
                    {column.render("Header")}
                    {column.isSorted && <span> {column.isSortedDesc ? <AiOutlineSortDescending /> : <AiOutlineSortAscending />}</span>}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {showPagination && (
          <div className="tablePagination">
            <button onClick={() => gotoPage(0)}>First Page</button>
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
            <button onClick={() => gotoPage(pageCount - 1)}>Last Page</button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
