import React, { useState } from 'react';
import { v4 } from 'uuid';
import { useNavigate } from "react-router-dom";
function TodoCreate(props) {

    const { todos, setTodos } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleCancel = () => {
        navigate("/todos");
    };

    const handleCreateTodo = () => {
        setTodos((prev) => {
            const id = v4();
            return [
                ...prev,
                {
                    title,
                    description,
                    id
                },
            ];
        });
        navigate("/todos");
    };

    return <div>todo Create Page
        <form>
            <div className='form-section'>
                <label for="title" />
                <input name='title' value={title} onChange={handleTitleChange} />
            </div>
            <div className='form-section'>
                <label for="description" />
                <input name='description' value={description} onChange={handleDescriptionChange} />
            </div>
            <div>
                <button onClick={handleCreateTodo}>create todo</button>
                <button onClick={handleCancel}>cancel</button>
            </div>
        </form>
    </div>
}

export default TodoCreate;