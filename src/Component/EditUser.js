import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: "",
    }

  }
  isChange = (e) => {
    // const obj = {}
    // const name = e.target.name;
    // const value = e.target.value;
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  newUserObj = () => {
    const updateUser = {}
    updateUser.id = this.props.ObjUserApp.id;
    updateUser.name = this.state.name;
    updateUser.tel = this.state.tel;
    updateUser.permission = this.state.permission;
    this.props.newUserObj(updateUser)


  }
  showHandle = () => {
    if (this.props.handleEditUser() === true) {
      return (
        <div className="data-add__wrap">
          <h3 className="data-add__wrap-title">Sửa thông tin thành viên </h3>
          <div className="data-add__wrap-content">

            <form>
              <input name="name" defaultValue={this.props.ObjUserApp.name}
                onChange={(e) => this.isChange(e)}
                type="text" className="data-add__wrap-input data-add__wrap-user" placeholder="Tên thành viên" />
              <input name="tel" defaultValue={this.props.ObjUserApp.tel}
                onChange={(e) => this.isChange(e)}
                type="text" className="data-add__wrap-input data-add__wrap-telephone" placeholder="Số điện thoại" />

              <select name="permission" defaultValue={this.props.ObjUserApp.permission}
                onChange={(e) => this.isChange(e)}
                className="data-add__wrap-select">
                <option value={0} className="data-add__wrap-select-option">Chọn quyền</option>
                <option value={1} className="data-add__wrap-select-option">Admin</option>
                <option value={2} className="data-add__wrap-select-option">Member</option>
                <option value={3} className="data-add__wrap-select-option">Nomal</option>
              </select>
              <input type="reset" value="Lưu" className="data-add__wrap-btn" onClick={() => this.newUserObj()} />
            </form>
          </div>
        </div>
      )
    }
  }
  render() {
    //  console.log(this.props.ObjUserApp.id);
    //  console.log(this.state.id);
    return (
      <div>
        {this.showHandle()}

      </div>
    );
  }
}

export default EditUser;