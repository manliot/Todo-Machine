import './App.css';

import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false }
]

function App() {
  return (
    <div className='app-container'>
      <div className='section-container'>
        <section className='left-section'>
          <h2>Create new task</h2>
          <h3>Task Name</h3>
          <input placeholder='Sacar a pasear a los perros' />
          <CreateTodoButton />
        </section>
        <section className='right-section'>
          <h2>Your Tasks</h2>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {
              todos.map(todo => (
                <TodoItem text={todo.text} completed={todo.completed} key={todo.text} />
              ))
            }
          </TodoList>

        </section>
      </div>

    </div>
  );
}

export default App;
