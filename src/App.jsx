import { useSelector, useDispatch } from "react-redux";
import {
  add_todo_action,
  remove_todo_action,
  search_todo_action
} from "./redux/acciones";
import React, { useState } from "react";
import "boxicons";

function App() {
  const state = useSelector((st) => st.todoAppReducer); //i get "todos" from st object.
  const searchState = useSelector((st) => st.todoAppSearch);
  //My initial state was ==
  /*
    {
      todos: [],
      searchTodos: []
    }
  */
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_todo_action(inputText));
    setInputText("");
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(search_todo_action(e.target.value, state))
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDelete = (e) => {
    dispatch(remove_todo_action(e));
  };

  return (
    <>
      <div className="text-center">
        <div className="input">
          <input
            type="text"
            name="searchTodo"
            placeholder="Search Todo"
            onChange={handleSearch}
            value={searchText}
          />
          <span>
            <box-icon name="search-alt-2" size="30px"></box-icon>
          </span>
        </div>
        <div className="results">
          <ul>
            {
              (/\w/).test(searchText) ? (
                searchState.length > 0 ? searchState.map((result, ind) => {
                  result = result.toLowerCase().replace(searchText.toLowerCase(), `<span class='resultado-character'>${searchText}</span>`);
                  return <li key={ind} dangerouslySetInnerHTML={{__html: result}}></li>
                }) : <h3>Sin resultados</h3>
              ) : <React.Fragment />
            }
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="todoName"
            value={inputText}
            onChange={handleChange}
            placeholder="Todo Name"
          />
          <button>Click me</button>
        </form>
        <ul className="todos">
          {state.map((todo, index) => (
            <li key={index} onClick={() => handleDelete(index)}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
