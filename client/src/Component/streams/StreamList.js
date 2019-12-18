import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getStreams} from '../../Action'
class StreamList extends React.Component{
    componentDidMount(){
        this.props.getStreams()
        
    }
    renderAdmin(stream){
        if(stream.userID===this.props.userID){
            return <div className='row secondary-content'>
                <Link to={`stream/edit/${stream.id}`}className='btn btn-large blue'>Edit</Link>
                <Link to={`stream/delete/${stream.id}`}className='btn btn-large red'>Delete</Link>
            </div>

        }
    }
    renderCreate(){
        if(this.props.userID){
            return <div className='right'>
                <Link to='/stream/new' className='btn btn-large blue'>Create Stream</Link>
                </div>
        }
    }
    renderList(){
        return this.props.streams.map(stream=>{
        return <li className='collection-item avatar' key={stream.id}>        
         <i className="material-icons circle black">camera_roll</i>
        <Link to={`stream/${stream.id}`} className="title">{stream.title}</Link>
        <p>{stream.description}</p>
        {this.renderAdmin(stream)} 
        </li>
    })
    }
    render(){
        return<div>
            <h4>Streams List</h4>
            <ul className='collection'>
                {this.renderList()}
            </ul>
            {this.renderCreate()}
        </div>
    }
}
const mapStateToProps = state=>{
    return{streams:Object.values(state.streams),
        userID:state.auth.userID}
}
export default connect(mapStateToProps,{getStreams})(StreamList)