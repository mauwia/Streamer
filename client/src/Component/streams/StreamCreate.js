import React from 'react';
import StreamForm from './StreamForm'
import {connect} from 'react-redux'
import {createStream} from '../../Action'

class StreamCreate extends React.Component{
  
    submitPar=(formValues)=>{
        this.props.createStream(formValues)
    }
    render(){
        return<div>
            <h4>Create A Stream</h4>
            <StreamForm submitPar={this.submitPar}/>
        </div>
    }
}

export default connect(null,{createStream})(StreamCreate)