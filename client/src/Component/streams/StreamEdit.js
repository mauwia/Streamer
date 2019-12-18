import React from 'react';
import {connect} from 'react-redux'
import {getStream,editStream} from '../../Action'
import StreamForm from './StreamForm'
import _ from 'lodash'

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }
    submitPar=formValues=>{
       this.props.editStream(this.props.match.params.id,formValues)
    }
    render(){
        console.log(this.props.stream)
        if(!this.props.stream){
            return<div>Loading</div>
        }
        return<div>
            <h4>Edit A Form</h4>
            <StreamForm submitPar={this.submitPar} initialValues={_.pick(this.props.stream,'title','description')}/>
        </div>
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{getStream,editStream})(StreamEdit)