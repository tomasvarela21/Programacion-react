import React from 'react'
import ReactDOM from 'react'
import '../estilos/cajas.css'

function Caja2(){
    return(<div className='contenedortexto'>
              <img className='contendorImagen'
             src={require('../imagen/dk.png')} alt='escudo dk'/>
              
        <h4 className='contenedorTitulo'>
            De boca como roman 
        </h4>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum amet cumque delectus dolorum natus, reiciendis unde, doloremque, esse iste numquam voluptatem consectetur reprehenderit nostrum incidunt harum qui odio culpa?
        </p>
        <button className='botonMasInfo'>
            Solicitar Información
        </button>
    </div>

    )
}

export default Caja2