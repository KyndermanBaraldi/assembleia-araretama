'use client'

const membros = [
  {"id": 1, "cargo": "PASTOR", "nome": "João da Silva"},
  {"id": 2, "cargo": "EVANGELISTA", "nome": "Gabriel Silva"},
  {"id": 3, "cargo": "PRESBÍTERO", "nome": "Lucas Oliveira"},
  {"id": 4, "cargo": "PRESBÍTERO", "nome": "Mateus Santos"},
  {"id": 5, "cargo": "DIÁCONO", "nome": "André Pereira"},
  {"id": 6, "cargo": "DIÁCONO", "nome": "Pedro Costa"},
  {"id": 7, "cargo": "LÍDER", "nome": "Rafael Lima"},
  {"id": 8, "cargo": "OBREIRO", "nome": "Felipe Almeida"},
  {"id": 9, "cargo": "OBREIRO", "nome": "Daniel Ferreira"},
  {"id": 10, "cargo": "OBREIRO", "nome": "Matheus Oliveira"}
]

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
