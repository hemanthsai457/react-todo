import react, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const[showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [toDos, setToDos] = useState([
    {rowNumber: 1, rowDescription: 'Feed Dog', rowAssigned: 'Eric'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'Hari'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'Kutty'},
    {rowNumber: 4, rowDescription: 'Wash Car', rowAssigned: 'Sally'}
  ])

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if(toDos.length > 0){
      rowNumber = toDos[toDos.length-1].rowNumber+1
    }
    else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber:rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      };
      setToDos(toDos => [...toDos, newTodo]);
    }

    const deleteTodo = (rowNumber) => {
      let filteredTodos = toDos.filter(function(value){
        return value.rowNumber!==rowNumber;
      })
      setToDos(filteredTodos);
    }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable toDos={toDos} deleteTodo={deleteTodo}/>
          <button className="btn btn-primary" onClick={()=>{
            setShowAddTodoForm(!showAddTodoForm);
          }}>
            {showAddTodoForm ? 'Close New Todo':'New Todo'}
          </button>
          {showAddTodoForm &&
            <NewTodoForm addTodo={addTodo}/>
          }

        </div>
      </div>
    </div>
  );
}

export default App;
