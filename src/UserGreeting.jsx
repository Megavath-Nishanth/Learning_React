import PropTypes from 'prop-types';
function UserGreeting(props){
    let content;

    if(props.isLoggedIn){
        content = <h2 className="welcome-message">Welcome {props.username}</h2>
    }
    else{
        content = <h2 className="login-prompt">Please log in to continue</h2>
    }
    return content;

    /*
        return (props.isLoggedIn) ? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>
    */
}
UserGreeting.PropTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting