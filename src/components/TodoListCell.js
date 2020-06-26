import  React from  'react'

function TodoListCell(){
    const todoStyle={color:"#FF8C00", fontSize:"18px", backgroundColor:"lightblue"}
    const todoCheck={color:"#FF8C00", backgroundColor:"lightpink"}
    return (
        
        <div>
            <input type="checkbox"  class="form-check-input" id="exampleCheck1"/>
            <label style={todoStyle} class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
       
    )
}

export default TodoListCell;