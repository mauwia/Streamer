import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getStream,deleteStream} from '../../Action'
// import Modal from '../../Modal';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }
    
    render(){
        console.log(this.props.stream)
        return<div className='center'>
            <h4>Are You Sure To Delete Stream</h4>
            <div className='row center'>
            <button onClick={()=>{this.props.deleteStream(this.props.match.params.id)}} className='btn btn-large red col offset-s4 s1'>Yes</button>
            <Link to='/'className='btn btn-large blue col offset-s2 s1'>No</Link>
            </div>
        </div>
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{getStream,deleteStream})(StreamDelete)