import React, { Component } from 'react';

class TableRow extends Component {
   
    
    deleteUser = (id) => {
        this.props.getIdUser(id);
    }
    editClick = () => {
        this.props.editTable();
    }
    renderPermission = () => {
        if(this.props.permission === '1') {
            return "Admin"
        }
        else if(this.props.permission === '2') {
            return "Member"
        }
        else if(this.props.permission === '3') {
            return "Normal"
        }
    }
    render() {
        return (
                <tr>
                    <td>{this.props.id}</td>
                    <td style={{width: '25%'}}>{this.props.name}</td>
                    <td>{this.props.tel}</td>
                    <td>{this.renderPermission()}</td>
                    <td style={{width: '30%'}}><button className="data__table-edit" onClick = {() => this.editClick()}>Sửa</button>
                                               <button className="data__table-del" onClick = {() => this.deleteUser(this.props.id)}>Xóa</button>
                    </td>
                </tr>
                
        );
    }
}

export default TableRow;