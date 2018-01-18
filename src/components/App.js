import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import User from './User';
import Home from './Home';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.css';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import MenuLink from './MenuLink';
import NotFound from './NotFound';

export default(
<Router>
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="navbar-brand">
                        用户管理系统
                    </div>
                </div>
                <ul className="nav navbar-nav">
                    <MenuLink label="首页" to="/home"/>
                    <MenuLink label="用户管理" to="/user"/>
                    <MenuLink label="个人设置" to="/profile"/>
                    {/*<li>*/}
                        {/*<Link to="/user">用户管理</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<Link to="/profile">个人设置</Link>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/user" component={User}/>
                        <ProtectedRoute path="/profile" component={Profile}/>
                        <Route path="/login" component={Login}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </div>
    </div>
</Router>
)