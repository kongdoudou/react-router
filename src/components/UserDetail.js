import React,{Component} from 'react';

export default class UserDetail extends Component{
    render(){
        //hidtory用來跳轉路由的
        //match:匹配結果，匹配上就是一個對象，匹配不上就是一個null
        //location:其中pathname就是當前請求路徑
        let id = this.props.match.params.id;
        id = parseFloat(id);
        let userStr = localStorage.getItem("users");
        let users = userStr?JSON.parse(userStr):[];
        let user = users.find(user=>user.id===id);
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>姓名</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}