'use client'

import { membros } from "@/app/data/bd"

export default function Page() {
  return (
    <div className="page-body">

      <h1>Igreja Assembleia do Araretama</h1>
      <h2>Membros</h2>

      <table id="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>
              Cargo
            </th>
          </tr>
        </thead>
        <tbody>
          {membros.map((membro)=> {
            return (
              <tr key={membro.id}>
                <td >
                    {membro.nome}
                </td>
                <td >
                    {membro.cargo}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}
