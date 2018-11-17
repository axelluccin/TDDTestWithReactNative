import React, { Component } from 'react';

export default class NewRestaurantForm extends Component {
	state = { inputText: '' };

	handleTextChange = (event) => {
		this.setState({ inputText: event.target.value });
	}

	handleSave = () => {
		const { inputText } = this.state;
		const { onSave } = this.props;
		onSave(inputText);
	}

	render() {
		const { inputText } = this.state;
		return (
			<div>
				<input type="text" value={inputText} onChange={this.handleTextChange} data-test="newRestaurantName" />
				<button onClick={this.handleSave} data-test="saveNewRestaurantButton">Save</button>
			</div>
		);
	}
}
