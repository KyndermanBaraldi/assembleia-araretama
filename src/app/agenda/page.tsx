'use client'



import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Page() {
  const eventos = [
    { title: 'Culto de Graça', date: '2023-11-05' },
    { title: 'Culto de Seia', date: '2023-11-11' },
    { title: 'Culto de Graça', date: '2023-11-12' },
    { title: 'Culto de Graça', date: '2023-11-19' },
    { title: 'Culto de Graça', date: '2023-11-26' }
  ]

  return (
    <div className="agenda-body">

      <section className="page-top">
        <h1>Igreja Assembleia do Araretama</h1>
        <h2>Agenda</h2>
        <p>Os Cultos de Graça ocorrem aos domingos às 18h. Venha cultuar a Deus conosco.</p>

      </section>

      <section className="page-botton">
      
      <div id="calendar">
          <FullCalendar
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              events={eventos}
            />
        </div>

        <div id="eventos">
        <h2>Eventos</h2>
        <ul>
          {eventos.map((evento)=> {
            return (
              <li>{evento.date}: {evento.title}</li>
            )
          })}
        </ul>
      </div>
      </section>


    </div>
  )
}
