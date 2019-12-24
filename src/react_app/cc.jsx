import React from 'react'
import { withVueRouter } from 'vuereact-combined'
class cc extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            slotValue: {
                value: '本地作用域'
            }
        }
    }
    componentDidMount () {
        this.props.event1 && this.props.event1(11,22)
    }
    render () {
        return (
            <div>
                <h1>{this.props.$vueRoute.query.a}</h1>
                <div onClick={(e)=>{console.log(e)}}>我是React组件</div>
                <div>属性1：{this.props.prop1}</div>
                <div>属性2：{this.props.prop2}</div>
                {this.props.slotA}
                {this.props.children}
                {this.props.slotB}
                {this.props.slotC && this.props.slotC(this.state.slotValue)}
            </div>
        )
    }
}
export default withVueRouter(cc)
