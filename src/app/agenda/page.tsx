'use client'

import { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai"
import { subMonths, addMonths, isAfter, isBefore,  format } from 'date-fns';
import { eventos } from '../data/bd';

export default function Page() {

  const calendarRef = useRef<FullCalendar>(null);
  const [dataAtual, setDataAtual] = useState(new Date());
  
  const limInf = subMonths(new Date(), 2);
  const limSup = addMonths(new Date(), 1);

  const handleNextClick = () => {

    if (calendarRef.current) {
      calendarRef.current.getApi().next(); // Chama o método next() no calendário
      const date = calendarRef.current.getApi().getDate();
      setDataAtual(date)
    }
  };

  const handlePrevClick = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().prev(); // Chama o método next() no calendário
      const date = calendarRef.current.getApi().getDate();
      setDataAtual(date)
    }
  };



  return (
    <div className="agenda-body">

      <section className="page-top">
        <h1>Igreja Assembleia do Araretama</h1>
        <h2>Agenda</h2>
        <p>Os Cultos de Graça ocorrem aos domingos às 18h. Venha cultuar a Deus conosco.</p>

      </section>

      <section className="page-botton">
      
      <div id="calendar">
          
          <div className="calendar-navigation">
            <button id="button-prev" className={isAfter(dataAtual, limInf) ? "": "inactive"} onClick={handlePrevClick} disabled={!isAfter(dataAtual, limInf)}><AiOutlineCaretLeft/></button>
            <button id="button-next" className={isBefore(dataAtual, limSup) ? "": "inactive"} onClick={handleNextClick} disabled={!isBefore(dataAtual, limSup)}><AiOutlineCaretRight/></button>
          </div>

          <FullCalendar
              ref={calendarRef}
              plugins={[ dayGridPlugin ]}
              initialView="dayGridMonth"
              events={eventos}
              locale='pt-br'
              headerToolbar={{
                start: 'title', // will normally be on the left. if RTL, will be on the right
                center: '',
                end: '' // will normally be on the right. if RTL, will be on the left
              }}
            />
        </div>

        <div id="eventos">
        <h2>Eventos</h2>
        <ul>
          {eventos.map((evento, index)=> {
            return (
              <li key={index}>{format(new Date(evento.date), 'dd/MM/yyyy')
                }: {evento.title}</li>
            )
          })}
        </ul>
      </div>
      </section>


    </div>
  )
}
