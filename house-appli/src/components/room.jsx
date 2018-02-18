import React from "react"
import { Light } from "./device/light";
import { Plug } from "./device/plug";
import { Shutter } from "./device/shutter";

export class Room extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: this.props.edit || false,
      label: this.props.label || "",
      roomID: this.props.roomID,
    };
    this.input = null;
  }

  render() {
    return (
      <React.Fragment>
        <div key={this.props.key} className={"flex-container--column"} style={{borderBottom: "1px solid black"}}>        
          <label>{this.state.roomID}</label>
          {this.state.edit ? ( 
            <React.Fragment>
              <div style={{padding: "10px"}}>
                <label>nom
                  <input type="text" className="item-center" style={{maxWidth: "300px", marginLeft: "20px"}}
                    defaultValue={this.state.label} placeholder={"nom de la pièce"} ref={(input) => this.input = input} />
                </label>
                <i className="fa-2x fas fa-check"  style={{color:"#009900", marginLeft: "20px", verticalAlign: "top"}} onClick={() => this.valid()}></i>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={"flex-container"} style={{flexDirection: "row"}}>
                <label className="item-center" style={{fontSize: "3em"}}>{this.state.label}</label>
                <i className="fa-2x fas fa-pencil-alt" style={{color:"#009900", margin: "10px", verticalAlign: "top"}} onClick={() => this.handleClick()}></i>
              </div>
            </React.Fragment>
          )
        }
        </div>
        {this.state.roomID &&
          <React.Fragment>
            <button className="btn addDevice">Ajouter un device</button>
            <div className={"flex-container--column"} style={{borderBottom: "1px solid black"}}>        
              <Light/>
              <Plug/>
              <Shutter/>
            </div>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }

  handleClick() {
    this.setState({
      edit: !this.state.edit
    });
  }

  valid() {
    
    if(this.input.value.trim()) {
    
      this.setState({
        edit: !this.state.edit,
        label: this.input.value
      });
    } else {
      alert("Veuillez renseigner un nom !");
    }
  }

  getDevices() {

  }
}
