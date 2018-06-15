import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// 页面
import Home             from './page/home';
import Login            from './page/login';
import Layout            from './component/Layout';
class App extends React.Component{
    public render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={ Home }/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={ Layout }/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
