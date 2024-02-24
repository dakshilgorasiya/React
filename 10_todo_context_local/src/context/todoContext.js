import React, { useContext } from "react";

export const TodoContext = React.createContext({
    todos: [
        {
            id: 1,
            todo: "Learn React",
            completed: false,
        }
    ],
    addTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleCompleted: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);