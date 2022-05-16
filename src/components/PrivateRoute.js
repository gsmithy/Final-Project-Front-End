// import { Component, Redirect } from "react";
// import Route from "react-router";

// const PrivateRoute = ({ component: Component, ...nest }) => { 
//     const token = localStorage.getItem('myJWT');
//     const isLoggedIn = !! token;

//     return (
//         <Route
//         {...nest}
//         render = { (props) => {
//             props.token = token;
//             isLoggedIn ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                 to={{
//                     pathname: '/login',
//                     state: { from: location }
//                 }}
//                 />
//             );
//         }} 
//         />
//     )
// }

// export default PrivateRoute;


