'use client'
import Link from "next/link";
import { useState } from "react";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaHandsPraying } from "react-icons/fa6"
import { VscMenu, VscChromeClose } from "react-icons/vsc";

const Menu: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(true);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(true);
    };
        
    return (
      <nav className="menu-navbar">
        <div className="menu-logo">
          <Link href="/" onClick={closeMenu}>
                <FaHandsPraying/>
          </Link>
        </div>
        <div className={`nav-list ${menuOpen ? "hide" : ""}`}>
          <ul>
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={closeMenu}>
                Início
              </Link>
            </li>
             
             <li className="dropdown">
              <a className="nav-link" href="#" onClick={closeMenu}>Sobre</a>  
              <div className="dropdown-menu">
                <Link href="/sobre/historia" className="nav-link" onClick={closeMenu}>
                  História
                </Link>
                <hr style={{ width: "98%", margin: "5px auto"}} />
                <Link href="/sobre/acao-social" className="nav-link" onClick={closeMenu}>
                  Ação Social
                </Link>
                <Link href="/sobre/escola-biblica" className="nav-link" onClick={closeMenu}>
                  Escola Bíblica
                </Link>
                <hr style={{ width: "98%", margin: "5px auto"}} />
                <Link href="/sobre/membros" className="nav-link" onClick={closeMenu}>
                  Membros
                </Link>
              </div>          
            </li>

            <li className="nav-item">
              <Link href="/agenda" className="nav-link" onClick={closeMenu}>
                Agenda
              </Link>
            </li>
  
            <li className="dropdown">
              <a className="nav-link" href="#" onClick={closeMenu}>Contato</a>  
              <div className="dropdown-menu">
                <Link href="/contato/pedido-oracao" className="nav-link" onClick={closeMenu}>
                  Pedidos de Oração
                </Link>
                <hr style={{ width: "98%", margin: "5px auto"}} />
                <a className="nav-link" href="https://www.instagram.com/kyndermanbaraldi/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>@Insta <AiFillInstagram/> </a>
                <a className="nav-link" href="https://www.youtube.com/watch?v=IzAajq-e_bU&t=471s" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>YouTube <AiFillYoutube /></a>
              </div>          
            </li>


            <li className="nav-item">
                <Link href="/blog" className="nav-link" onClick={closeMenu}>
                  Blog
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/doacoes" className="nav-link" onClick={closeMenu}>
                  Doações
                </Link>
            </li>

          </ul>
        </div>
        
        <div className="mobile-menu">
          <a href="#" className="mobile-menu-icon" onClick={toggleMenu}>
            {menuOpen ? <VscMenu /> : <VscChromeClose /> }
          </a>
        </div>
        
      </nav>
    );
  };
  
  export default Menu;