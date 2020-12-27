import React, {Component} from 'react'
import Todo from './Todo'

export default class List extends Component {
render (){
    let list = this.props.tasks.map((el, index)=> {
        return <Todo key={index} task={el} />
    })
    return <div> {list} </div>
}

}