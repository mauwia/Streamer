import React from 'react';
import {Field,reduxForm} from 'redux-form'

class StreamForm extends React.Component{
    renderError({error,touched})
    {
        if(touched && error){
        return<div className=' blue lighten-5 '>{error}</div>
        }    
    }
    renderInput=({input,label,meta})=>{
       
        return <div className="input-field col s12">
        <input id={label} type="text" className="validate" {...input} />
    <label htmlFor={label}>{label}</label>
        {this.renderError(meta)}
      </div>
    }
    submitPar=(formValues)=>{
        this.props.submitPar(formValues)
    }
    render(){
        return<form className='row' onSubmit={this.props.handleSubmit(this.submitPar)}>
            <Field name='title' component={this.renderInput} label='Enter Title'/>
            <Field name='description' component={this.renderInput} label='Enter Description'/>
            <button className='btn col offset-s11 blue' >Submit</button>
        </form>
    }
}
const validate=(formValues)=>{
    let error={}
    if(!formValues.title){
        error.title='You Must Enter A Title'
    }
   if(!formValues.description){
        error.description='You Must Enter A Description'
    }
    return error
}
export default reduxForm({form:'streamForm',validate})(StreamForm)
    