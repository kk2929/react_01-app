import React, { FC } from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export type Head = {
  name: string
  keyName: string
  props: { [key: string]: any }
}
export type Row = { [key: string]: any }

export type TableProps = {
  heads: Head[]
  rows: Row[]
} & React.ComponentProps<typeof MuiTable>

export const Table: FC<TableProps> = ({ heads, rows, ...props }) => {
  return (
    <TableContainer component={Paper} style={{
      width: "max-content",
      border: "1px solid #ddd",
    }}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table" {...props}>
        <TableHead>
          <TableRow>
            {heads.map((head, i) => (
              <TableCell
                key={i}
                {...head.props}
              >
                {head.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {heads.map((head, i) => (
                <TableCell
                  key={i}
                  {...head.props}
                >
                  {row[head.keyName]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}