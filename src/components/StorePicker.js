import React from 'react';

class StorePicker extends React.Component {
	goToStore(event) {
		// 1. Stop the form from submitting
		event.preventDefault();
		// 2. Get the text from that input
		// 3. Change the page to /store/whatever-they-entered
	}
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter a store</h2>
				<input 
					type="text" 
					placeholder="Enter Name"
				/>
				<button type="submit">Visit Store!</button>
			</form>
		)
	}
}

export default StorePicker;