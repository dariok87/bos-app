import React from 'react';

class StorePicker extends React.Component {
	goToStore(event) {
		event.preventDefault();
		console.log("going to store")
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