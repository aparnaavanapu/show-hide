import { Component } from 'react'
import './index.css'

class ShowHide extends Component{

    state={showfirstName:true,
        showlastName:true
    }

    showHidefirstName=()=>{
        this.setState(prevState=>({showfirstName:!prevState.showfirstName})) 
    }
    showHidelastName=()=>{
        this.setState(prevState=>({showlastName:!prevState.showlastName}))
    }


    render(){
        const { showfirstName,showlastName }=this.state
        return(
            <div className="bg-container">
                <h1 className="heading">Show/Hide</h1>
                <div className="items-container">
                    <div>
                        <button type="button" onClick={this.showHidefirstName} className="btns">Show/Hide Firstname</button>
                        {showfirstName &&(
                            <div className="name-container">
                                <h1>Joe</h1>
                            </div>)}

                    </div>
                    <div>
                        <button type="button" onClick={this.showHidelastName} className="btns">Show/Hide Lastname</button>
                        {showlastName && (
                            <div className="name-container">
                                <h1>Jonas</h1>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowHide
