import { useState, setState } from 'react';


function Header({ title }){
	return(
		<h1>{ title ? title : 'default' }</h1>
	)				
}

function Form({ names }){

	return (
			<ul>
				{names.map((name) => (
					<li key={name} >{name}</li>
				))}
			</ul>
	)
}


export default function HomePage(){
	let namesArr = ['Jones', 'Carly', 'Banana', 'Svelte', 'Clarita']
	//initial value, function used to update value, and the initial state

	const [likes, setLikes] = useState(0);
	const [names, setNames] = useState(namesArr)
	const [answer, setAnswer] = useState('');
	const [error, setError] = useState(null);

	function handleClick(){
		setLikes(likes + 1);
	}

	function handleSubmit(e){
		setAnswer(answer)
		
	}

	function handleInputChange(e){
		setAnswer(e.target.value)
	}

	return(
		<div>
			<Header title="Develop. Preview. Ship. 🚀"/>

			<button onClick={handleClick}>Like({likes})</button>

			<input value={answer} onChange={handleInputChange} />	
			<button onClick={handleSubmit} >Submit</button>

			<Header title={answer}/>
		  <Form names={namesArr}/>
		</div>
	)	
}
