import React from 'react';



export class AddTask extends React.Component {
    state = {
        value: '',
        checked: false,
        date: new Date().toLocaleDateString()
    }
    handleInput = (e) => {
        this.setState({
            value: e.currentTarget.value
        })
    }
    handleCheckbox = (e) => {
        this.setState({
            checked: !this.state.checked
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { value, checked, date } = this.state;
        const add = this.props.click(value, date, checked);
        if (add) {
            this.setState({
                value: '',
                checked: false
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleInput} placeholder='dodaj zadanie' />
                    </label>
                    <label>
                        <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckbox} />Priorytet
                        <button>Dodaj</button>
                    </label>
                </form>
                {JSON.stringify(this.state, null, 2)}

            </div>
        )
    }
}