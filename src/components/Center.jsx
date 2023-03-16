import { Component } from "react";

class Center extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
    }
  }

  handleChange (e){
    this.setState({value:e.target.value})
  }

  submit(){
    this.props.handle( this.state.value)
  }

  render() {
    const listItems = this.props.tarr.map(r=>{
      return (<li>{r}</li>)
    })
    return (
      <div>
        <p>子-中心</p>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <button onClick={this.submit.bind(this)}>提交表单</button>
        <br></br>
        {listItems}
      </div>
    )
  }
}

export default Center