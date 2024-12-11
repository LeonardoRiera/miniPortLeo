import React from 'react'
import "./Header.css"
import Boton from '../Boton/Boton';
import Foto from "../../Image/fotoleo.png"
import arg from "../../Image/arg.png"
import italy from "../../Image/italy.png"
import uruguay from "../../Image/uruguay.png"
import ecuador from "../../Image/ecuador.png"
import colombia from "../../Image/colombia.png"


const Header = () => {
  return (
    <div className='headerContainer'>
        
        <div className="row principal">

            <div className="col-md-12 col-lg-6 textoContainer">
                <h1 className='principalTitulo'>Hola Soy Leo!</h1>
                <p className='principalParrafo'>Atención al Público, Gestión de Eventos <br /> Diseñador Gráfico y Desarrollador Web <br />Emprendedor con Experiencia Internacional</p>
                <div className='flags'>
                  <img src={arg} alt="bandera argentina"  className='banderas'/>
                  <img src={italy} alt="bandera italiana"  className='banderas'/>
                  <img src={uruguay} alt="bandera uruguaya" className='banderas' />
                  <img src={ecuador} alt="bandera ecuatoriana" className='banderas' />
                  <img src={colombia} alt="bandera colombiana" className='banderas' />

                </div>
            </div>

            <div className="col-md-12 col-lg-6 fotoContainer">
                <img src={Foto} alt="foto de leo" className='foto'/>
            </div>

        </div>
        <Boton to="/portfolio">Ver Portfolio</Boton>
        
        
    </div>
  )
}

export default Header