import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Card2 } from "./card.js";
import { Footer } from "./footer";

export function Main() {
	return (
		<div className="container mx-auto">
			<Navbar />
			<Jumbotron />
			<div className="row">
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card2 />
				</div>
				<div className="col">
					<Card />
				</div>
				<div className="col">
					<Card2 />
				</div>
			</div>
			<Footer />
		</div>
	);
}
