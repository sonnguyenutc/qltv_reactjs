import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            search: "",
            statusAdd: false,
        }
    }
    setStatus = () => {
        this.setState({
            status: !this.state.status,
        });
        this.props.connectApp()
    }
    addUser = () => {
        if(this.props.displayAddStatus === true) {
            if(this.state.status === true) {
                return <button className="btn add-close" onClick = {() => this.setStatus()} >Đóng lại</button>
    
            }
            else {
                return <button className="btn add-open" onClick = {() => this.setStatus()}>Thêm mới</button>
            }
        }
        
        // {this.state.status === true ? "Dong lai" : "them moi"}
    }
    isChangeInput = (e) => {
        this.setState({
            search: e.target.value,
        });
        // console.log("e:" , e)
    }
    handleClickSearch = () => {
        this.props.dataSearch(this.state.search)
    }
    

    render() {
        return (
            <div className = "wrap-search">
                <div className="search">
                    <input type="text" className="search__input" placeholder="Nhập tên cần tìm" onChange = {(e) => this.isChangeInput(e)}/>
                    <button className="search__btn" onClick = {() => this.handleClickSearch()}>Tìm</button>
                 </div>
                 {this.addUser()}
             </div>
        );
    }
}

export default Search;