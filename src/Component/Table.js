import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: ""
    }
  }
  
  idUser = (id) => {
    this.props.getIdUser(id);
  }
  

    dataRow = () => this.props.dataUser().map((item, index) => (
      <TableRow getIdUser = {(id) => this.idUser(id)}
                editTable = {(user) => this.props.editUserApp(item)}
       key = {index} id = {item.id+1} name = {item.name} tel = {item.tel} permission = {item.permission} />
    ))
  
    render() {
        return (
             <div className="data-add__wrap-table">
              <table className="data__table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Thao tác</th>
                  </tr>

                </thead>
                <tbody>
                  
                    {this.dataRow()}  

                </tbody>
              </table>
            </div>
        );
    }
}

export default Table;