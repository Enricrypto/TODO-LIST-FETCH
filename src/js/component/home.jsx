import React, { useState, useEffect } from "react";

const URL = "https://assets.breatheco.de/apis/fake/todos/user/enrique_ibarra"

const Home = () => {

	const [state, setState] = useState([]);
	const [load, setLoad] = useState(false);
	const [newTask, setnewTask] = useState("");

const getData = async () =>{
	try {
		const response = await fetch(URL, { method: "GET" });
		const data = await response.json();
		setState(data);
		console.log(data);
		setLoad(true);
	  } catch (err) {
		console.log("err");
	  }
  }

useEffect(() => {
	getData()
	}, []);

const addNewTask = async () => {
	try {
	  const data =[...state, {label: newTask, done: false}]
	  const response = await fetch(URL, { method: "PUT", body: JSON.stringify(data), headers:{"Content-Type": "application/json"}});
	  console.log(response);
	  getData();
  } catch (err) {
	  console.log("err");
	}
  }; 

const handleChange = (e) => {
	setnewTask(e.target.value);
}

	return (
		<div className="text-center">
			<input onChange={handleChange} type="text" placeholder="add task"/>
		<button onClick={addNewTask}>Add New Task</button>
		{ load ? state.map(task => { 
			return <h1 key={task.label}> {task.label} </h1>}) 
			: <h1>Loading...</h1>}
		</div>
	);
};

export default Home;
