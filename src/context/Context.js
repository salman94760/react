import React, { createContext, useReducer,useState } from "react";
import { useNavigate } from 'react-router-dom';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const url = "http://127.0.0.1:8000/api/";

function todoReducer(state, action) {
  switch (action.type) {
    case "FETCH_TODOS_START":
      return { ...state, loading: true, error: null };
    case "FETCH_TODOS_SUCCESS":
      return { ...state, loading: false, todos: action.payload };
    case "FETCH_TODOS_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const navigate = useNavigate();
  const [loginUser,setLoginUser] = useState({userid:"",username:"",useremail:""}); 
  // Register User
  async function userRegister(data) {
  try {
    const res = await fetch(url+'register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

      const result = await res.json();
      if (res.ok) {
        navigate('/login');
        return 1; // success
      } else {
        return 2; // server responded with error
      }

    } catch (e) {
      console.error("Register Error:", e);
      return 0; // network or unknown error
    }
  }

  async function login(arr){
    try{
      const res = await fetch(url+'login',{
        method:"POST",
        headers:{"Content-Type": "application/json",},
        body:JSON.stringify(arr)
      });
      const result = await res.json();
      if(result.success == true){
        localStorage.setItem('id', result.user.id);
        localStorage.setItem('name',result.user.name);
        localStorage.setItem('email', result.user.email);
        
          setLoginUser({
            userid: result.user.id,
            username: result.user.name,
            useremail: result.user.email
          });
        
        navigate('/material');
      }
    }catch(err){

    }
  }

  function logout(){
    setLoginUser({userid:"",username:"",useremail:""});
    localStorage.clear();
    navigate('/');
  }

  // Fetch todos example
  const fetchTodos = async () => {
    dispatch({ type: "FETCH_TODOS_START" });
    try {
      const res = await fetch("https://api.example.com/todos");
      const data = await res.json();
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_TODOS_ERROR", payload: error.message });
    }
  };

  // Add todo example
  const addTodo = async (text) => {
    try {
      const res = await fetch("https://api.example.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const newTodo = await res.json();
      dispatch({ type: "ADD_TODO", payload: newTodo });
    } catch (error) {
      // handle error
    }
  };

  // Update todo example
  const updateTodo = async (updatedTodo) => {
    try {
      const res = await fetch(`https://api.example.com/todos/${updatedTodo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      });
      const data = await res.json();
      dispatch({ type: "UPDATE_TODO", payload: data });
    } catch (error) {
      // handle error
    }
  };

  // Delete todo example
  const deleteTodo = async (id) => {
    try {
      await fetch(`https://api.example.com/todos/${id}`, { method: "DELETE" });
      dispatch({ type: "DELETE_TODO", payload: id });
    } catch (error) {
      // handle error
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        fetchTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        userRegister,
        login,
        logout,
        loginUser,
        setLoginUser
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
