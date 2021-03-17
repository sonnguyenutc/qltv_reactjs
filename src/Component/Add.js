import React, { Component } from 'react';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        name: "",
        tel: "",
        permission: "",
     
    }
  }
    changeInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
     
    }
    addUser = () => {
      let obj = {name: this.state.name, tel: this.state.tel, permission: this.state.permission, };
      this.props.addUser(obj);

    }
    displayForm = () => {
      if(this.props.connectApp() === false) {
        return (
                <div className="data-add__wrap">
                  <h3 className="data-add__wrap-title">Thêm mới thành viên </h3>
                  <div className="data-add__wrap-content">

                    <form>
                        <input name ="name" onChange = {(e) => this.changeInput(e)} type="text" className="data-add__wrap-input data-add__wrap-user" placeholder="Tên thành viên" />
                        <input name ="tel" onChange = {(e) => this.changeInput(e)} type="text" className="data-add__wrap-input data-add__wrap-telephone" placeholder="Số điện thoại" />

                        <select name ="permission" onChange = {(e) => this.changeInput(e)} className="data-add__wrap-select">
                          <option value={0} className="data-add__wrap-select-option">Chọn quyền</option>
                          <option value={1} className="data-add__wrap-select-option">Admin</option>
                          <option value={2} className="data-add__wrap-select-option">Member</option>
                          <option value={3} className="data-add__wrap-select-option">Normal</option>
                        </select>
                        <input type="reset" value="Thêm mới" className="data-add__wrap-btn" onClick = {() => this.addUser()}/>
                    </form>
                  </div>
                </div>
        )
      }
    }
    render() {
        return (
          <div>
                {this.displayForm()}
          </div>
        );
    }
}

export default Add;