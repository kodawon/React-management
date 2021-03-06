
import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
class Customer extends Component {
    render() {
        return (
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell><div>{this.props.gender}</div></TableCell>
                    <TableCell><div>{this.props.job}</div></TableCell>
                </TableRow>
        );
    }
}

export default Customer;