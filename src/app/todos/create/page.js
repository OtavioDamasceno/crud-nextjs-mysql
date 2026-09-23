import React from "react";
import { addTodo } from "@/actions";

const TodoPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2x1 font-bold text-center mb-6">criar nova tarefa</h1>
      <form
        action={addTodo}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
        <label
          htmlFor="titulo"
          className="block text-sm font-medium text-gray-700"
        >
          Título
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="insira o titulo"
            required
            className="mt-1 px-4 border border-gray-300 rounded-md w-full"
          />
        </label>
        <label
          htmlFor="descricao"
          className="block text-sm font-medium text-gray-700"
        >
          Título
          <textarea
            type="text"
            id="descricao"
            name="descricao"
            placeholder="insira a descricao"
            required
            className="mt-1 px-4 border border-gray-300 rounded-md w-full"
          ></textarea>
        </label>
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focu:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default TodoPage;
