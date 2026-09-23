import Link from "next/link";
import { db } from "@/db";
import Button from "@/components/Button";
import { deleteTodo } from "@/actions";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <div className="container mx-auto p-4">
      <Link href="/todos/create">Ir para a criação de todo</Link>
      <h1 className="text-2x1 font-bold mb-4">Lista</h1>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div key={todo.id} className="bg-gray-100 rounded-lg shadow">
            <div>
              <h2 className="text-xl font-semibold">{todo.titulo}</h2>
              <p>{todo.descricao}</p>
              <div className="flex space-x-2 mt-3">
                <Link
                  href={`/todos/${todo.id}`}
                  className="bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Visualizar
                </Link>
                <Link
                  href={`/todos/${todo.id}/edit`}
                  className="bg-yellow-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </Link>
                <form action={deleteTodo}>
                  <input type="hidden" value={todo.id} name="id"></input>
                  <Button>Excluir</Button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
