import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
      <h1>Valor não encontrado</h1>
      <Link href="/">voltar para a home</Link>
    </div>
  )
}

export default notFound
