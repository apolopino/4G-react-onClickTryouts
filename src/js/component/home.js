import React, { useState } from "react";
import PropTypes from "prop-types";

//Paso 1: Importar useState
// Paso 2: crear variable de estado

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Article = props => {
	const shortText = `${props.text.substring(0, 8)}`;
	const [status, setStatus] = useState(true);

	return (
		<div>
			<p>{JSON.stringify(status)}</p>
			<p>{status === true ? props.text : shortText}</p>
			<button onClick={() => setStatus(!status)}>Ver Mas</button>
		</div>
	);
};
Article.propTypes = {
	text: PropTypes.string
};

export function Home() {
	//defino useState: const [variable, funcion-modifica-variable] = useState(valor-inicial-variable);

	// const [count, setCount] = useState(0);

	// return (
	// 	<div className="text-center mt-5">
	// 		<h1>El valor de la variable count es {count} </h1>
	// 		<button onClick={() => setCount(666)}>The Beast</button>
	// 		{/* <button onClick={() => setCount("UwU")}>No the Beast</button> */}
	// 		<button onClick={() => setCount(count + 1)}>Sumar</button>
	// 		<button onClick={() => setCount(count - 1)}>Restar</button>
	// 		<button onClick={() => setCount(0)}>Reset</button>
	// 	</div>
	// );

	return (
		<div className="text-center mt-5">
			<Article
				text={` Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at magna auctor, venenatis mi in, sodales quam`}
			/>
		</div>
	);
}
