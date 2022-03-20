function Todo(){
   function handle(){
       remove(index);
   }
   return <div className="todo" onClick={handle}>
    {todo.text} (-)</div>
}