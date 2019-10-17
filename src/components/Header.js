import React from "react";

const Header = props => (
	<header className="top">
		<h1>Catch of the day</h1>
		<h3 className="tagline">
		<span>{props.tagline}</span>
		</h3>
	</header>
)

export default Header;