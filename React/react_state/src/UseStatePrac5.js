import { useState } from 'react';

export default function UseStatePrac5() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const [cnt, setCnt] = useState(0);

  const todoAdd = () => {
    const newTodo = {
      id: id,
      text: todo,
      checkd: false,
    };

    setTodos([...todos, newTodo]); // 배열에 추가

    setId(id + 1);
    setTodo('');
    setCnt(cnt + 1);

    if (cnt > 9) {
      alert('할 일이 너무 많아요!');
    }
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checkd: !todo.checkd };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  const todoDelete = () => {
    let count = 0;

    const newTodos = todos.filter((todo) => {
      if (todo.checkd === true) {
        count++;
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
    setCnt(cnt - count);
  };

  return (
    <>
      <form>
        <input
          placeholder="할 일을 입력해주세요"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button type="button" onClick={todoAdd}>
          추가
        </button>
      </form>

      <ul>
        {/* todo 배열을 map으로 돌면서 li로 뿌리기 */}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checkd}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.text}
            </li>
          );
        })}
      </ul>

      <button type="button" onClick={todoDelete}>
        완료된 할 일 삭제
      </button>
    </>
  );
}
