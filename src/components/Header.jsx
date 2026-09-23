import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link href="/" className="font-bold text-lg">
            Lista de tarefas
          </Link>
          <Link href="/todos/create" className="font-bold text-lg">Criar todo</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
