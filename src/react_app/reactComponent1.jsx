import React, { Component } from 'react'
export default class test1 extends Component{
    componentDidMount () {
        // setTimeout(()=>{
        //     this.props.click()
        // },3000)
    }
    render() {
        return (
            <div>
                <h1 style={{color:'green'}}>React Component1</h1>
                {/*{this.props.children}*/}
                {/*<h2>{this.props.prop1}</h2>*/}
            </div>
        );
    }
}
