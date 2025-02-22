import react from 'react';

function NewTodoForm(props) {

    const [description, setDescription] = react.useState();
    const [assigned, setAssigned] = react.useState();

    // const descriptionChange = (event) =>{
    //     setDescription(event.target.value);
    // }

    // const assignedChange = (event) =>{
    //     setAssigned(event.target.value);
    // }

    const submitTodo = () => {
        if(description !== '' && assigned !== ''){
            props.addTodo(description, assigned);
            setAssigned('');
            setDescription('');
      }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>
                        Assigned
                    </label>
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>
                        Description
                    </label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <button
                    type='button'
                    className='btn btn-primary' 
                    onClick={submitTodo}>
                        Add Todo
                </button>
            </form>
        </div>
    )
}

export default NewTodoForm;