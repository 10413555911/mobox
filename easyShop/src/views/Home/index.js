import React from 'react';
import {NavLink} from "react-router-dom"
import "./home.scss"
import Header from "../../components/Header/index"
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {routes}=this.props
        return (
            <React.Fragment>
                <div className="wrap"> 
                   <Header/> 
                   <div className="content">
                        {
                            this.props.children
                        }
                   </div>
                   <div className="footer">
                       {
                          routes.map((item,i)=>{
                            return item.path ?<div key={item.path}>
                                <NavLink to={item.path}><i className={item.icon}></i>{item.name}</NavLink></div>:null
                          }) 
                       }
                        
                   </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;