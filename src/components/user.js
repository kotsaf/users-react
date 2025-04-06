import React from "react"
import AddUser from "./AddUser"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }

    user = this.props.user
    render() { 
        return (
            <div className="user">
                <div className="user-text">
                    <h3>{this.user.first_name} {this.user.last_name}</h3>
                    <p>{this.user.email}</p>
                </div>
                <div className="img-btns">
                    <div className="btns">
                        <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                        <IoHammerSharp onClick={() => {
                            this.setState({
                                editForm: !this.state.editForm
                            })
                        }} className="edit-icon" />
                    </div>
                    <img src={this.user.avatar} />
                </div>
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
            </div>
        )
    }
}

export default User