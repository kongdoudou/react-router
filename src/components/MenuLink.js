import React from 'react';
import {Route,Link} from 'react-router-dom';
//children 不论当前路径是否匹配上，都会渲染一个组件
// export default function({to,label}){
//     return (
//         <Route path={to} children={({match})=>{
//             console.log(match);
//             return <li className={match?'active':''}>
//                 <Link to={to}>{label}</Link>
//             </li>
//         }}/>
//     )
// }


export default function({to,label}){
    return (
        <Route path={to} children={({match})=>{
        return <li className={match?'active':''}>
            <Link to={to}>{label}</Link>
        </li>
    }}/>)
}