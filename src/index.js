import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.css';
import 'font-awesome/css/font-awesome.css';
import './css/index.css';
import './css/navbar.css';
import './css/sidebar.css';
import './css/login.css'
import './css/404.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/login'
import NotFound from './components/notFound';
import Dashboard from './components/admin/dashboard';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Dashboard} />
            <Route path='/not-found' component={NotFound} />
            <Route path='/' component={App} />
            <Redirect to='/not-found' />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
