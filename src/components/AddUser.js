import React from "react"

// форма для добавления пользователя
class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            bio: '',
            age: 1,
            isHappy: false
        }
    }

    render() { 
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Name" onChange={(e) => this.setState({ first_name: e.target.value })} />
                <input placeholder="Surname" onChange={(e) => this.setState({ last_name: e.target.value })} />
                <textarea placeholder="Email" onChange={(e) => this.setState({ bio: e.target.value })} ></textarea>
                <input placeholder="Age" onChange={(e) => this.setState({ age: e.target.value })} />
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Добавить</button>
            </form>
        )
    }
}

export default AddUser
