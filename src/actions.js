"use server";
import { db } from "./db";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const id = Number(formData.get("id"));

  await db.todo.delete({
    where: { id },
  });

  redirect("/");
}

export const addTodo = async (FormData) => {
  console.log(FormData);

  const titulo = FormData.get("titulo");
  const descricao = FormData.get("descricao");
  const status = "pendente";

  const todo = await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  });
  redirect("/");
};

export const findById = async (id) => {
  const todo = db.todo.findFirst({
    where: { 
        id: Number(id) },
  });
  return todo;
};


export const updateTodo = async(formState, formData) => {

    
    const id = Number(formData.get("id"))
    const titulo = formData.get("titulo")
    const descricao = formData.get("descricao")
    
    const todo = await findById(id)

    if(titulo.length < 5){
        return{
            errors: "O titulo precisa ter mais de 5 caracteres"
        }
    }

    if(titulo === todo.titulo){
        return{
            errors: "voce precisa inserir um titulo diferente"
        }
    }

    await db.todo.update({
        where: {id},
        data: {titulo, descricao}
    })
    redirect("/")
}