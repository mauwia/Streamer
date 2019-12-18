import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamList from './streams/StreamList'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'
class App extends React.Component{
    render(){
        return<div>
            <Router history={history}>
            <div>
                <Header/>
                <Switch>
                <Route path='/' exact component={StreamList}/>
                <Route path='/stream/new' exact component={StreamCreate}/>
                <Route path='/stream/delete/:id' exact component={StreamDelete}/>
                <Route path='/stream/edit/:id' exact component={StreamEdit}/>
                <Route path='/stream/:id' exact component={StreamShow}/>
                </Switch>
            </div>
            </Router>
        </div>
    }
}
export default App