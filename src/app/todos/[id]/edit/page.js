import { findById } from "@/actions";
import TodoForm from "@/components/TodoForm";
import React from "react";

const Edit = async ({ params }) => {
  const { id } = await params;
  const todo = await findById(id);

  return (
    <div>
      <h1> {todo.titulo} 
        <TodoForm todo={todo}/>

      </h1>
    </div>
  );
};

export default Edit;
