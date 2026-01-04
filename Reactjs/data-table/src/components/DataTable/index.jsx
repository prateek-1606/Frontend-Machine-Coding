import React, { useMemo, useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

const PAGE_SIZE_OPTIONS = [
  {
    label: "Show 5",
    value: 5,
  },
  {
    label: "Show 10",
    value: 10,
  },
  {
    label: "Show 20",
    value: 20,
  },
];

const DataTableComponent = ({
  columns,
  tableData,
  pagination: isPaginated = false,
}) => {
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0].value);
  const [sorting, setSorting] = useState({});

  const totalPages = useMemo(() => {
    return Math.ceil(tableData.length / pageSize);
  }, [pageSize]);

  const items = useMemo(() => {
    return tableData.slice((pageNo - 1) * pageSize, pageNo * pageSize);
  }, [pageNo, pageSize]);

  const sortedItems = useMemo(() => {
    if (!sorting.colKey) return items;
    return items.sort((item1, item2) => {
      if (sorting.dir === "dsc")
        return item1[sorting.colKey] > item2[sorting.colKey] ? -1 : 1;
      else return item1[sorting.colKey] < item2[sorting.colKey] ? -1 : 1;
    });
  }, [sorting, items]);

  const handleSort = (colKey) => {
    if (sorting.colKey !== colKey) {
      setSorting({
        colKey,
        dir: "asc",
      });
    } else if (sorting.dir === "asc") {
      setSorting({
        colKey,
        dir: "dsc",
      });
    } else if (sorting.dir === "dsc") {
      setSorting({});
    }
  };

  return (
    <>
      <div className="data-table-container">
        <table>
          <thead>
            {columns.map((col) => {
              return (
                <th>
                  {col.label}
                  {col.sorting && (
                    <>
                      <span
                        style={{
                          color: sorting.colKey === col.key ? "black" : "grey",
                        }}
                        onClick={() => handleSort(col.key)}
                      >
                        {sorting.dir === "dsc" ? (
                          <AiOutlineSortDescending />
                        ) : (
                          <AiOutlineSortAscending />
                        )}
                      </span>
                    </>
                  )}
                </th>
              );
            })}
          </thead>
          <tbody>
            {sortedItems.map((row) => {
              return (
                <tr>
                  {columns.map((col) => {
                    return <td>{row[col.key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {isPaginated && (
          <div className="pagination-container">
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(parseInt(e.target.value));
                setPageNo(1);
              }}
            >
              {PAGE_SIZE_OPTIONS.map(({ value, label }) => {
                return <option value={value}>{label}</option>;
              })}
            </select>
            <button
              disabled={pageNo === 1}
              onClick={() => {
                setPageNo(pageNo - 1);
              }}
            >
              Prev
            </button>
            Page {pageNo} of {totalPages}
            <button
              disabled={pageNo === totalPages}
              onClick={() => {
                setPageNo(pageNo + 1);
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DataTableComponent;
