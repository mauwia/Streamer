    import React from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from '../Action'

class OAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'362740939728-qm9eqshj4vmrsmkrssvoq0niq7e6kfb5.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{ 
                this.auth=window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange=isSignedIn=>{
       if(isSignedIn){
           this.props.signIn(this.auth.currentUser.get().getId())
       }
       else{
           this.props.signOut()
       }
    }
    forSignInClick=()=>{
        this.auth.signIn()
    }
    forSignOutClick=()=>{
        this.auth.signOut()
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null
        }
        else if(this.props.isSignedIn){
            return<button className='btn large-btn purple' onClick={this.forSignOutClick}>Sign Out</button>
        }
        else
        {
            return<button className='btn large-btn blue' onClick={this.forSignInClick}>Sign In</button>
        }
    }
    render(){
    return <div>{this.renderAuthButton()}</div>
    }
}
const mapStateToProps=(state)=>{
    return { isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn,signOut})(OAuth)