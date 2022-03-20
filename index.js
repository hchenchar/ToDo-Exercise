function App (){
    const [todos, setTodos] = React.useState ([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        }
    ]);
    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
        setValue('');
    }

    const addTodo = text => {
        const newTodos = [...todos, {text:value, isCompleted:false}];
        setTodos(newTodos);
    }
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    
    return (<> 
        <div className="app">
            <div className="todo-list">
                {todos.map((todo,i) => 
                  <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
