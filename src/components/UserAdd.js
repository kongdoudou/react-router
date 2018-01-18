import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';

export default class UserAdd extends Component{
    constructor(){
        super();
        this.state = {
            blocking:false
        }
    }
    handleSubmit = (e) =>{
        let name = this.name.value;
        //從緩存中讀取用戶列表字符串，讀出或者是null或者是數組字符串
        let userStr = localStorage.getItem("users");
        //轉成對象數組
        let users = userStr?JSON.parse(userStr):[];
        //向數組中加入新的對象
        users.push({id:Date.now(),name:name});
        //再把新數組保存到我們的緩存中
        localStorage.setItem("users",JSON.stringify(users));
        //最後再通過history對象的push方法跳轉到用戶列表頁面
        this.setState({
            blocking:false
        },()=>{
            this.props.history.push("/user/list");
        });
        e.preventDefault();
    }
    handleChange = (e)=>{
        this.setState({
            blocking:e.target.value&&e.target.value.length>0,
            name:e.target.value
        })
    }
    render(){
        return (
            <div>
                <Prompt when={this.state.blocking} message={location=>(`确定你要跳转到${location.pathname}吗？`)}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">姓名</label>
                        <input type="text" className="form-control" placeholder="请输入姓名" ref={ref=>this.name=ref} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}