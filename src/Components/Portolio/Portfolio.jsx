import { useEffect } from 'react';
import Boton from '../Boton/Boton'
import foto2 from '../../Image/segundoleo.png'
import bombilla from '../../Image/bombilla.png'
import globo from '../../Image/globo.png'
import grupo from '../../Image/grupo.png'
import "./Portfolio.css"

const Portfolio = () => {

  // Este useEffect asegura que la página se desplace hacia arriba al cargar el componente, me encanto!!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // El array vacío indica que se ejecutará solo al montar el componente

  return (
    <div className='hidden'>
        <div className="row principal2">

         <div className="col-md-12 col-lg-5 containerSedungo ">
            <img src={foto2} alt="foto de leo" className='segundoleo'/>
            <button className='botonDescargar'>Descargar Cv</button>
          </div>
        
          <div className="col-md-12 col-lg-7 textoContainer2 ">

            <div className="explain">
              <div className='refer'>
                <img src={globo} alt="globo" className='logo' />
                <p className='textoRefer'>Más de 10 Años de Experiencia</p>
              </div>

              <div className='refer'>
                <img src={bombilla} alt="bombilla" className='logo' />
                <p className='textoRefer'>Logística y Planificación</p>
              </div>

              <div className='refer'>
                <img src={grupo} alt="grupo" className='logo' />
                <p className='textoRefer'>Coordinación de Equipos</p>
              </div>
            </div>

            

            <div className='description'>
              <p className='descriptionP'>He tenido la oportunidad de trabajar en diversos países, desempeñándome en áreas como la gestión de eventos, espectáculos y producción de giras artísticas, así como en el sector de turismo. Estas experiencias, en distintos contextos y rubros, me han permitido desarrollar una sólida capacidad en atención al público y resolución de problemas.</p>
              <p className='descriptionP'>Además, mi experiencia en diseño gráfico ha sido un recurso clave para todos los proyectos en los que he trabajado. Desde la creación de materiales visuales hasta algo más actual en mi carrera, como es la implementación de soluciones digitales basadas en el desarrollo de software, mi enfoque ha estado siempre orientado a crear experiencias integradas que potencien la comunicación, la publicidad y la presencia digital.</p>
            </div>

          </div>

          

        </div>
        <div className='decideBoton'>
          <Boton to="/">Volver a Inicio</Boton>
        </div>
    </div>
  )
}

export default Portfolio