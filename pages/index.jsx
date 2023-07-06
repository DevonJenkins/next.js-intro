import { useState } from 'react';


function Header({ title }){
	return(
		<h1>{ title ? title : 'banana' }</h1>
	)				
}

export default function HomePage(){
	//initial value, function used to update value, and the initial state
	const names = ['Jones', 'Carly', 'Banana', 'Svelte', 'Clarita']

	const [likes, setLikes] = useState(0);

	function handleClick(){
		setLikes(likes + 1);
	}

	return(
		<div>
		<Header title="Develop. Preview. Ship. 🚀"/>

		<ul>
		{names.map((name) => (
			<li key={name} >{name}</li>
		))}
		</ul>
		
		<button onClick={handleClick}>Like({likes})</button>

		</div>
	)	
}
