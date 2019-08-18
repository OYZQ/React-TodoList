import React, {Component,Fragment} from 'react'
class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue:'',
			list:[]
		}
	}

    render() {
        return (
            <Fragment>
							<input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
							{/* bind改变this指向 */}
							<button onClick={this.handleBtnClick.bind(this)}>提交</button>
							<ul>
								{
									this.state.list.map((item,index) => {
										return (<li 
											key={index} 
											onClick={this.handleItemDelete.bind(this,index)}>{item}
														</li>)
									})
								}
							</ul>
						</Fragment>
        )
		}
		handleInputChange(e){
			// 改变数据使用这种方法，不可以直接=
			this.setState({
				inputValue : e.target.value
			})
		}
		handleBtnClick(){
			this.setState({
				list:[...this.state.list,this.state.inputValue],
				inputValue:''
			})
		}
		handleItemDelete(index){
			const list = [...this.state.list];
			list.splice(index,1);
			this.setState({
				list:list
			})
		}
}

export default TodoList;