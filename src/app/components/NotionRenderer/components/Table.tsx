import React from "react";
import { TableBlock, TableRowBlock, RichTextItem } from "../types";
import { RichText } from "./RichText";
import { retrieveBlockChildren } from "@/app/lib/notionAPI";

interface TableProps {
  block: TableBlock;
  tableRows?: TableRowBlock[];
}

export async function Table({ block, tableRows }: TableProps) {
  // If tableRows not provided, fetch them using retrieveBlockChildren
  let actualTableRows = tableRows;
  if (!actualTableRows && block.id) {
    try {
      const childrenData = await retrieveBlockChildren(block.id);
      actualTableRows = (childrenData.results || []) as TableRowBlock[];
    } catch (error) {
      console.error("Error fetching table children:", error);
      actualTableRows = [];
    }
  }
  const tableData = block.table;

  if (!tableData) {
    return null;
  }

  const { has_column_header } = tableData;

  if (!actualTableRows || actualTableRows.length === 0) {
    return (
      <div className="notion-simple-table">
        <table>
          <tbody>
            <tr>
              <td>No table data</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // Process table rows
  const headerRow = has_column_header ? actualTableRows[0] : null;
  const dataRows = has_column_header
    ? actualTableRows.slice(1)
    : actualTableRows;

  return (
    <div className="notion-simple-table">
      <table>
        {headerRow && (
          <thead>
            <tr className="notion-simple-table-header-row">
              {headerRow.table_row?.cells?.map(
                (cell: RichTextItem[], index: number) => (
                  <td key={index} className="notion-simple-table-header-cell">
                    <RichText value={cell || []} />
                  </td>
                ),
              )}
            </tr>
          </thead>
        )}
        <tbody>
          {dataRows.map((row, rowIndex) => {
            const cells = row.table_row?.cells || [];
            return (
              <tr key={row.id || rowIndex}>
                {cells.map((cell: RichTextItem[], cellIndex: number) => (
                  <td
                    key={cellIndex}
                    className={
                      cellIndex === 0 ? "notion-simple-table-header-cell" : ""
                    }
                  >
                    <RichText value={cell || []} />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
