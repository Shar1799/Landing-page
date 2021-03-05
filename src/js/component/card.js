import React from "react";

export function Card() {
	return (
		<div className="card">
			<img
				src="https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, sectetur adipisicing elit.
					Sapiente esse necessitatibus neque.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}

export function Card2() {
	return (
		<div className="card">
			<img
				src="https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, sectetur adipisicing elit.
					Explicabo magni sapiente, tempore debitis beatae culpa natus
					architecto.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}

/*
const texto = {
	texto1:
		"Lorem ipsum dolor sit amet, sectetur adipisicing elit. Sapiente esse necessitatibus neque.",
	texto2:
		"Lorem ipsum dolor sit amet, sectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
};

export function Card() {
	return (
		<div className="card">
			<img
				src="https://i.pinimg.com/originals/80/a5/1a/80a51a0b7293317a273207178aa12358.jpg"
				className="card-img-top"
				alt="500x325"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					"Lorem ipsum dolor sit amet, sectetur adipisicing elit.
					Sapiente esse necessitatibus neque."
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}
*/
