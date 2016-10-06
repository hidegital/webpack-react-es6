class GlobalStylesExample extends React.Component {
	constructor () {
		super();
		this.openModalOne = this.openModalOne.bind(this);
		this.closeModalOne = this.closeModalOne.bind(this);
		this.openModalTwo = this.openModalTwo.bind(this);
		this.closeModalTwo = this.closeModalTwo.bind(this);
	}
​
    openModalOne () { this.setState({open: true}); }
	openModalTwo () { this.setState({open: true}); }
​
    closeModalOne () { this.setState({open: false}); }
	closeModalTwo () { this.setState({open: false}); }
​
    render () {
		return (
			<div>
			<button onClick={this.openModalOne}>Open Modal One</button>
		<button onClick={this.openModalTwo}>Open Modal Two</button>
		<Modal
		isOpen={this.state.openOne}
		onRequestClose={this.closeModalOne}
	>
	<h1>Styled Global Overrides Modal One</h1>
		<button onClick={this.closeModalOne}>Close</button>
		<input />
		<input />
		</Modal>
		<Modal
		isOpen={this.state.openTwo}
		onRequestClose={this.closeModalTwo}
	>
	<h1>Styled Global Overrides Modal Two</h1>
		<button onClick={this.closeModalTwo}>Close</button>
		<input />
		<input />
		</Modal>
		</div>
	);
	}
}