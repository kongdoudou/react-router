import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class UserList extends Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    componentWillMount(){
        let userStr = localStorage.getItem("users");
        let users = userStr?JSON.parse(userStr):[];
        this.setState({users});
    }
    render(){
        return (<ul className="list-group">
            {
                this.state.users.map((user,index)=>(
                    <li key={index} className="list-group-item">
                        <Link to={"/user/detail/"+user.id}>{user.name}</Link>
                    </li>
                ))
            }
        </ul>)
    }
}