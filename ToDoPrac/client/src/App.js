import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  `;

const _Header = styled.div`
  background-color: rgb(110, 140, 246);
  color: white;
  font-size: 25px;
  height: 60px;
  line-height: 60px;
  text-align: center;
`;

const _TopDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-top: 20px;
  width: 100%;
`;

const _BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: flex-start;
  margin: auto;
`;

const _Input = styled.input`
  border: none;
  width: 80%;
  border-bottom: 1px solid rgb(110, 140, 246);
`;
const _Btn = styled.button`
  background-color: rgb(110, 140, 246);
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  margin-left: 10px;
  border: none;
`;

const _Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

function App() {
  const [todos, setTodos] = useState([]); // todo 배열
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [inputValue, setInputValue] = useState(''); // input value
  const [readOnly, setReadOnly] = useState(true); // readOnly flag

  // 처음 실행 시 데이터 불러오기
  useEffect(() => {
    const todoData = async () => {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:8000/todos',
      });
      console.log(res.data.data);
      setTodos(res.data.data);
      setLoading(false);
    };
    todoData();
  }, []);

  // todo 추가
  const AddTodo = async () => {
    if (inputValue === '') return; // 빈값 거르기

    const res = await axios({
      method: 'POST',
      url: 'http://localhost:8000/todo',
      data: {
        title: inputValue,
      },
    });
    setTodos([...todos, res.data.data]);
    setInputValue('');
  };

  // todo 삭제
  const RemoveTodo = async (id) => {
    const res = await axios({
      method: 'DELETE',
      url: `http://localhost:8000/todo/${id}`,
    });
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const editTodo = async (id, title, done) => {
    const res = await axios({
      method: 'PATCH',
      url: `http://localhost:8000/todo/${id}`,
      data: {
        title: title,
        done: done,
      },
    });
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
          todo.done = done;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <GlobalStyle />
      <_Header>✌🏻 My Todo APP</_Header>
      <_TopDiv>
        <_Input
          type="text"
          placeholder="Add Todo here"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === 'Enter' && AddTodo();
          }}
        />
        <_Btn onClick={AddTodo}>+</_Btn>
      </_TopDiv>
      <_BottomDiv>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          🚀 {todos.length} Todos
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <_Ul>
            {todos.map((value) => {
              return (
                <li key={value.id} style={{ display: 'flex', height: '35px' }}>
                  <input
                    type="checkbox"
                    checked={value.done == 0 ? false : true}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      const done = checked ? 1 : 0;
                      editTodo(value.id, value.title, done);
                    }}
                  />
                  <input
                    style={{ border: 'none' }}
                    type="text"
                    value={value.title}
                    readOnly={!value.done}
                    onChange={(e) => {
                      setTodos((prevTodos) => {
                        return prevTodos.map((todo) => {
                          if (todo.id === value.id) {
                            todo.title = e.target.value;
                          }
                          return todo;
                        });
                      });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        editTodo(
                          value.id,
                          e.target.value,
                          value.done == 0 ? 0 : 1
                        );
                        // blur 되게
                        e.target.blur();
                        setReadOnly(true);
                      }
                    }}
                  />
                  <button
                    style={{
                      marginLeft: 'auto',
                      width: '30px',
                      height: '30px',
                    }}
                    onClick={() => {
                      RemoveTodo(value.id);
                    }}
                  >
                    🗑
                  </button>
                </li>
              );
            })}
          </_Ul>
        )}
      </_BottomDiv>
    </>
  );
}

export default App;
