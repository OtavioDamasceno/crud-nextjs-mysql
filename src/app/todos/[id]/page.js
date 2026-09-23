import { findById } from "@/actions";
import { notFound } from "next/navigation";

const TodoShow = async ({ params }) => {
  const { id } = await params;
  const todo = await findById(id)
  if(!todo) return notFound()

  return (
    <div>
      <h1>
        {todo.titulo} {todo.descricao}
      </h1>
    </div>
  );
};

export default TodoShow;