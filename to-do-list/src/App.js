import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoDetails from "./pages/TodoDetails"
import Todos from "./pages/Todos"
import TodoCreate from "./pages/TodoCreate"
import { useState } from 'react';

function App() {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const localTodos = JSON.parse(localStorage.getItem('todos'));
        if (localTodos.length) {
            setTodos(localTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return <BrowserRouter>
        <Routes>
            <Route path="/todos/" element={<Todos todos={todos} />}></Route>
            <Route path="/todos/:todoId" element={<TodoDetails todos={todos} />}></Route>
            <Route path="/todos/create" element={<TodoCreate todos={todos} setTodos={setTodos} />}></Route>
        </Routes>
    </BrowserRouter>
}

export default App;