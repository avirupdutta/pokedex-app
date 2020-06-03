import React, { Component } from "react";

class PokeDetails extends Component {
	state = {
		pokemon: {
			ready: false,
			name: "",
			image: "https://pokeres.bastionbot.org/images/pokemon",
			attack: 0,
			defence: 0,
			hp: 0,
			speed: 0
		}
	};
	getPokemon = async () => {
		const id = this.props.match.params.id;
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const pokemon = await response.json();

		this.setState({
			...this.state,
			pokemon: {
				...this.state.pokemon,
				ready: true,
				name: pokemon.name,
				attack: pokemon.stats[4].base_stat,
				defence: pokemon.stats[3].base_stat,
				hp: pokemon.stats[5].base_stat,
				speed: pokemon.stats[0].base_stat
			}
		});
	};
	componentDidMount() {
		this.getPokemon();
	}
	renderDetails = () => {
		return (
			<div className="row	">
				<div className="col-12 col-md-5 text-center">
					<img
						src={`${this.state.pokemon.image}/${
							this.props.match.params.id
						}.png`}
						className="w-75 pokemon-image-animation"
						alt="pokemon"
					/>
				</div>
				<div className="col-12 col-md-7">
					<p className="text-right">
						Health: {this.state.pokemon.hp}
					</p>
					<h1 className="display-4 font-weight-bold text-capitalize">
						{this.state.pokemon.name}
					</h1>
					<div className="statsbar mt-5 mb-4">
						<p>Attack: {this.state.pokemon.attack}</p>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
								role="progressbar"
								aria-valuenow={this.state.pokemon.attack}
								aria-valuemin="0"
								aria-valuemax="100"
								style={{
									width: this.state.pokemon.attack + "%"
								}}
							/>
						</div>
					</div>
					<div className="statsbar mb-4">
						<p>Defence: {this.state.pokemon.defence}</p>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
								role="progressbar"
								aria-valuenow={this.state.pokemon.defence}
								aria-valuemin="0"
								aria-valuemax="100"
								style={{
									width: this.state.pokemon.defence + "%"
								}}
							/>
						</div>
					</div>
					<div className="statsbar mb-4">
						<p>Speed: {this.state.pokemon.speed}</p>
						<div className="progress">
							<div
								className="progress-bar progress-bar-striped progress-bar-animated bg-success"
								role="progressbar"
								aria-valuenow={this.state.pokemon.speed}
								aria-valuemin="0"
								aria-valuemax="100"
								style={{
									width: this.state.pokemon.speed + "%"
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};
	render() {
		return (
			<div
				className="p-5 shadow"
				style={{
					borderRadius: "2.5rem",
					backgroundColor: "#fff"
				}}
			>
				{this.state.pokemon.ready ? this.renderDetails() : "loading..."}
			</div>
		);
	}
}

export default PokeDetails;
