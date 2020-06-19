import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Title from './Title';

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Schedule Table</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Task Name</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField />
            </TableCell>

            <TableCell>
              <TextField />
            </TableCell>

            <TableCell>
              <TextField />
            </TableCell>

            <TableCell>
              <TextField />
            </TableCell>

            <TableCell>
              <TextField />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
