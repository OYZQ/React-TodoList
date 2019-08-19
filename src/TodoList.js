import React, {Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
	}

    render() {
        return (
            <Fragment>
							<label htmlFor="insertArea">输入内容</label>
							<input id="insertArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange}/>
							{/* bind改变this指向 */}
							<button onClick={this.handleBtnClick}>提交</button>
							<ul>
								{
									this.getTodoItem()
								}
							</ul>
						</Fragment>
        )
		}

		getTodoItem() {
		return	this.state.list.map((item,index) => {
				return (
					<div key={index}>
						<TodoItem content={item} index={index} deleteItem={this.handleItemDelete}></TodoItem>
					</div>
				)
			})
		}

		handleInputChange(e){
			// 改变数据使用这种方法，不可以直接=
			const value = e.target.value
			this.setState(() => ({
					inputValue: value
			}))
		}
		handleBtnClick(){
			this.setState((prevState) => ({
				list:[...prevState.list,prevState.inputValue],
				inputValue:''
			}))
		}
		handleItemDelete(index){
			this.setState((prevState) => {
				const list = [...prevState.list];
				list.splice(index,1);
				return {list}
			})
		}
}

export default TodoList;