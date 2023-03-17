import React from "react"; 

const AddTask = ({addNewTask}) => {


return (
    <button className="btn btn-primary add-button" onClick={ addNewTask }>Add New Task</button>
); 

}; 

export default AddTask; 