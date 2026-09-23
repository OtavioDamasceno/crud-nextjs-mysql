"use client"
import { updateTodo } from "@/actions"
import { useFormState } from "react-dom"
import { useActionState } from "react"

const TodoForm = ({todo}) => {
  const [formState, action] = useActionState(updateTodo, {errors: ""})

  return (
    
        <form
        action={action}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >

        {formState.errors ? <div>{formState.errors}</div> : ""}

        <input type="hidden" name="id" value={todo.id}/>
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
            defaultValue={todo.titulo}
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
            defaultValue={todo.descricao}
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
    
  )
}

export default TodoForm
