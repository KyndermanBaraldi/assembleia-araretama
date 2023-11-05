'use client'

import Image from "next/image"
import { GiPrayer } from "react-icons/gi";

export default function Page() {
  return (
    <div className="page-body">
      <h1>Igreja Assembleia do Araretama</h1>
      <h2>Doações</h2>
      
      <p>Com sua contribuição iremos levar a mensagem do amor de Deus a mais corações e juntos iremos transformar vidas e espalhar a esperança.</p>

      <div className="image">
        <Image 

          src={"/qrcode.png"}
          alt="Qrcode"
          width={200}
          height={200}
        
        />

      </div>

      <p>Escaneie o QR code com o seu aplicativo de pagamento para fazer sua doação. Ajude-nos a continuar nossa missão e ministério. Sua doação faz a diferença!</p>
      
      <div className="image">
        <GiPrayer id="praying"/>
      </div>
    
    </div>
  )
}
