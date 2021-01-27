import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UserInfoDisplay from "./UserInfoDisplay";
import {Link} from "react-router-dom";
import UserActionsButton from "./UserActionsButton";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop:50
  },
  tableHeading:{
      fontWeight:"normal",
      fontSize:14,
      color:"#8f8f8f"
  },
  link:{
      textDecoration:"none",
      color:"#00a2ff",
      fontSize:14
  }
});

function createData(name, email, role, appPage, dateAdded) {
  return { name, email, role, appPage, dateAdded };
}

const rows = [
  createData('Taras Kozak',"kozaktaras15@gmail.com", "Owner", "calendapp.com/taras-kozak", "27 January 20201"),
  createData('John Doe', "john-doe@gmail.com", "User", "calendapp.com/john-doe","27 January 2021")
];

export default function ActiveTab() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{}}>
          <TableRow>
            <TableCell classes={{head:classes.tableHeading}}>Name</TableCell>
            <TableCell align="center" classes={{head:classes.tableHeading}}>Role</TableCell>
            <TableCell align="center" classes={{head:classes.tableHeading}}>CalendApp Page</TableCell>
            <TableCell align="center" classes={{head:classes.tableHeading}}>Date Added</TableCell>
            <TableCell align="center" classes={{head:classes.tableHeading}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <UserInfoDisplay name={row.name} email={row.email}/>
              </TableCell>
              <TableCell align="center">{row.role}</TableCell>
              <TableCell align="center"><Link to="#" className={classes.link}>{row.appPage}</Link></TableCell>
              <TableCell align="center">{row.dateAdded}</TableCell>
              <TableCell align="center"><UserActionsButton/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
