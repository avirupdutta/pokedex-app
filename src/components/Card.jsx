import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
	console.log(props.pokemon.name, props.pokemon.types[0]);

	return (
		<Link to={`pokemon/${props.pokemon.id}`}>
			<div className="col-12 mb-4">
				<div
					class="card p-3 shadow"
					style={{ backgroundColor: props.color }}
				>
					<div className="pokemon-image-container">
						<img
							src={`https://pokeres.bastionbot.org/images/pokemon/${
								props.pokemon.id
							}.png`}
							alt={props.pokemon.name}
							className="w-75 poke-img"
						/>
					</div>
					<div className="card-body text-center mt-4 text-dark">
						<p className="card-text pokemon-name">
							{props.pokemon.name}
						</p>
						<p className="text-small">Type: {props.type}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default Card;
