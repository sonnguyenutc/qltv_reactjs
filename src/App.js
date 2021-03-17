import './App.css';
import React, { Component } from 'react';
import Header from './Component/Header';
import Search from './Component/Search';
import Table from './Component/Table';
import Add from './Component/Add';
import data from './Component/data.json';
import EditUser from './Component/EditUser';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      statusAddForm: true,
      dataUser: data,
      statusEditUser: false,
      editUserObj: {},
      displayAddStatus: true,
    }
  }
  componentWillMount() {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify(this.state.dataUser))
    }
    else {
      let user = JSON.parse(localStorage.getItem('user'));
      this.setState({
        dataUser: user
      });
    }
  }

  setForm = () => {
    this.setState({
      statusAddForm: !this.state.statusAddForm,
    });
  }
  //C1: Dùng hàm forEach qua từng phần tử, sau đó push (item thỏa mãn ĐK) vào mảng rỗng
  // C2: ....
  dataSearch = (data) => {
    let dataSearch = this.state.dataUser.filter((item) => {
      return item.name === data;
    })
    this.setState(
      {
        dataUser: dataSearch,
      }
    );
  }

  deleteUser = (id) => {
    let dataAfterDelete = this.state.dataUser.filter((item) => {
      return item.id !== (id - 1);
    })
    this.setState({
      dataUser: dataAfterDelete,
    });
    localStorage.setItem('user', JSON.stringify(dataAfterDelete));
  }

  addNew = (obj) => {
    if (!obj.id) {
      obj.id = this.state.dataUser.length;
    }

    let newData = this.state.dataUser;
    newData.push(obj);
    this.setState({
      dataUser: newData,
    });
    localStorage.setItem('user', JSON.stringify(newData));
  }

  displayEditUser = (user) => {
    this.setState({
      statusEditUser: !this.state.statusEditUser,
    });
    this.setState({
      displayAddStatus: false,
    });
    this.setState({
      editUserObj: user,
    });
  }

  updateUser = (user) => {
    this.setState({
      statusEditUser: !this.state.statusEditUser,
    });
    this.setState({
      displayAddStatus: true,
    });

    this.state.dataUser.map((item) => {
      if (item.id === user.id) {
        if (user.name === '') {
          return item.name;
        }
        else {
          item.name = user.name
        }

        if (user.tel === '') {
          return item.tel;
        }
        else {
          item.tel = user.tel
        }

        if (user.permission === '') {
          return item.permission;
        }
        else {
          item.permission = user.permission;
        }
      }
      return 0;

    })
    localStorage.setItem('user', JSON.stringify(this.state.dataUser));
  }
  render() {


    return (

      <div className="App">
        <div className="app">

          <Header></Header>

          <div className="body">
            <Search connectApp={() => this.setForm()}
              dataSearch={(data) => this.dataSearch(data)}
              displayAddStatus = {this.state.displayAddStatus}
            ></Search>

            <div className="data">

              <Table dataUser={() => this.state.dataUser}
                getIdUser={(id) => this.deleteUser(id)}
                editUserApp={(key) => this.displayEditUser(key)}
              ></Table>

              <Add connectApp={() => this.state.statusAddForm}
                addUser={(obj) => this.addNew(obj)}
              ></Add>

              <EditUser handleEditUser={() => this.state.statusEditUser}
                ObjUserApp={this.state.editUserObj}
                newUserObj={(user) => this.updateUser(user)}
              />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;