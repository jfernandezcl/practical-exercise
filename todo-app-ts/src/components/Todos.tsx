import { ListOfTodos } from "./types"
import { Todo } from "./todo"


interface Props {
    todos: ListOfTodos
    onRemoveTodo: (id: string) => void
}



export const Todos: React.FC = ({ todos, onRemoveTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                    />

                </li>
            ))}
        </ul>
    )
}