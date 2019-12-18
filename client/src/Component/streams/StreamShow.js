import React from 'react';
import {getStream} from '../../Action'
import {connect} from 'react-redux'

class StreamShow extends React.Component{
    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }
    render(){
        console.log(this.props)
    if(!this.props.stream){
        return<div>Loading</div>
    }
    return<div>
        <h1>{this.props.stream.title}</h1>
        <h4>{this.props.stream.description}
        </h4>
        <p className='center'>Available soon</p>
        </div>
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        stream:state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{getStream})(StreamShow)