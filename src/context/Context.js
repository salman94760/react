import React, { createContext, useReducer,useState } from "react";
import { useNavigate } from 'react-router-dom';
import Loader from "../components/Loader";
const initialState = {product: [],loading: false,error: null};

const url = "http://127.0.0.1:8000/api/";

function todoReducer(state, action) {
  switch (action.type) {
    case "FETCH_TODOS_START":
      return { ...state, loading: true, error: null };
    case "FETCH_TODOS_SUCCESS":
      return { ...state, loading: false, product: action.payload };
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
  const navigate                  = useNavigate();
  const [Products, dispatch]      = useReducer(todoReducer, initialState);
  const [loginUser,setLoginUser]  = useState({userid:"",username:"",useremail:""}); 
  const [loading, setLoading]     = useState(false);
  const [msg, setMsg]             = useState({msg:"",type:""});
  
  // Register User
  async function userRegister(data) {
    try {
      const res = await fetch(url+'register', {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setMsg({ msg: "User registered successfully!", type: "success" });
        navigate('/admin-login');
      } else {
        setMsg({ msg: "Something went wrong!", type: "warning" });
      }

    } catch (e) {
      setMsg({ msg: e, type: "error" });
    }
  }

  // login user
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
      setMsg({ msg: err, type: "error" });
    }
  }

  //logout user
  function logout(){
    setLoginUser({userid:"",username:"",useremail:""});
    localStorage.clear();
    navigate('/');
  }
  
  // add material to Database
  async function addMaterial(link,data){
    try {
      const res = await fetch(url + link, {
        method: "POST",
        body: data
      });
      
      if (res.ok) {
        const result = await res.json();
        setMsg({ msg: "Grocery added successfully", type: "success" });
        navigate('/material');
      } else {
        setMsg({ msg: "Something went wrong", type: "warning" });
      }
    } catch (err) {
        setMsg({ msg: err, type: "error" });
    }
  } 

  // Fetch todos example
  const fetchProduct = async () => {
    setLoading(true);
    try{
      const response = await fetch(url+'products');
      const result = await response.json();
      if(response.ok){
        dispatch({ type: "FETCH_TODOS_SUCCESS", payload: result.data });  
        setLoading(false);
      }
    }catch(err){

    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${url}products/${id}`, {method: "DELETE",});
      const data = await response.json();
      if (response.ok) {
        setMsg({ msg: "Grocery deleted successfully", type: "success" });
        const updatedProducts = Products.product.filter((item) => item.id !== id);
        dispatch({ type: "FETCH_TODOS_SUCCESS", payload: updatedProducts });  
      }
    } catch (err) {
      setMsg({ msg: err, type: "error" });
    }
  };

  const addToCart = async (data)=>{
    if(!localStorage.getItem('id')){
      navigate('/login');
    }else{
      try{
        const response = await fetch(url+'cart',{
          method:"POST",
          headers:{"Content-Type": "application/json",},
          body:JSON.stringify(data)
        });
        const result = await response.json();
        if(response.ok){
          setMsg({ msg: "Grocery added to cart", type: "success" });
        }else{
          setMsg({ msg: "Something went wrong", type: "success" });
        }
      }catch(err){
        setMsg({ msg: err, type: "error" });
      }  
    }
  }

  return (
    <TodoContext.Provider value={{addMaterial,Products,fetchProduct,deleteProduct,userRegister,login,logout,Loader,loading,addToCart,msg}}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;