import React from 'react';
import {Route,Redirect} from 'react-router-dom';

//当通过函数来定义组件的时候，参数是属性对象
//当一个组件不需要状态的时候可以用函数来声明
//当一个组件必须需要状态的时候必须用类声明
export default function({component:Component,...rest}){
    return <Route render={props=>{
        let isLogin = localStorage.getItem("login");
        if(isLogin){
            return <Component/>
        }else{
            return <Redirect to={{
                pathname:'/login',
                state:{from:props.location.pathname}
            }}/>
        }
    }
    }>
    </Route>
}