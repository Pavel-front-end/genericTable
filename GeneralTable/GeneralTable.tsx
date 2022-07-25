import {FC, ReactNode} from "react";
import {Table, TableBody, TableCell, TableHead, Typography, TableRow} from "@material-ui/core";
import * as React from "react";
import {useStylesTable} from "./styles";
import clsx from 'clsx';

interface Props {
  children: ReactNode
  titleColumns: string[]
  tableLayout?: string
  lastCellCenter?: boolean
  tableStyle?: string
}

const GeneralTable: FC<Props> = ({children, titleColumns, tableLayout, lastCellCenter, tableStyle} : Props) => {
  const classes = useStylesTable();
  return (
    <Table className={clsx(classes.table, tableLayout === 'auto' ? classes.tableLayoutAuto : '', tableStyle === 'white' ? classes.tableColor : '')}>
      <TableHead className={clsx(classes.tableHead, tableStyle === 'white' ? classes.tableHeadColor : '')}>
        <TableRow>
          {titleColumns.map((title) => (
            <TableCell className={clsx(classes.tableCell, lastCellCenter ? classes.textCenter : '')} key={title}>
              <Typography variant="body1" className={clsx(tableStyle === 'white' ? classes.TextDark : '', classes.size14)}>{title}</Typography>
            </TableCell>
          ))}
          </TableRow>
      </TableHead>
      <TableBody>
        {children ? children : <TableRow><TableCell colSpan={titleColumns.length}></TableCell></TableRow>}
      </TableBody>
    </Table>
  )
}

export default GeneralTable