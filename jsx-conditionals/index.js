function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class Numpicker extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if (num === 7) {
			msg =
				<div>
					<h2>CONGRATS</h2>
					<img src="https://gph.is/1hpq9RD"/>
				</div>
		} else {
			msg = <p>You Suck</p>
		}
		return (
			<div>
				<h1>Your number is {num}</h1>
				{msg}
			</div>

		)
	}
}

ReactDOM.render(<Numpicker/>, document.getElementById('root'));
