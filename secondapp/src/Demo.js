import React from 'react'

class Demo extends React.Component{
    state={
        name1:'kmk',
    age1:20 ,
    dummy:false  

}
    display=()=>{
        if(this.state.dummy==false){
       this.setState({
        name1:"yasaswi",
        age1:19,
        dummy:true
       })}
       else{
       this.setState({name1:'kmk',
       age1:20 ,
       dummy:false  
    })}
    } 
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>{this.state.name1}</h1>
                <h1>{this.state.age1}</h1>
                
                <p>name:{this.props.name}</p>
                <p>age:{this.props.age}</p>
                <p>college:{this.props.college}</p>
            
                
                <button onClick={this.display}>click</button>
                </div>
        )
    }
}


