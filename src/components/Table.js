import Data from "./Data"


function Table({displayAcceso, displayRectificacion, displayCancelacion, displayOposicion}) {
  return (
    <section>
        <div className="grid grid-cols-8 h-[60px] w-full borders divide-x-4 divide-black ">
            <div className="TypeofData">
                <p>ID</p>
            </div>
            <div className="TypeofData">
                <p>Nombre</p>
            </div>
            <div className="TypeofData">
                <p>Cumpleaños</p>
            </div>
            <div className="TypeofData">
                <p>Nacionalidad</p>
            </div>
            <div className="TypeofData">
                <p>Estado</p>
            </div>
            <div className="TypeofData">
                <p>Ocupación</p>
            </div>
            <div className="TypeofData">
                <p>CURP</p>
            </div>
            <div className="ARCOAction">
                <p>ARCO</p>
            </div>
        </div>
        <section className="h-[80vh] overflow-auto">
            <Data
                displayAcceso = {displayAcceso}
                displayRectificacion = {displayRectificacion}
                displayCancelacion = {displayCancelacion}
                displayOposicion = {displayOposicion}
            />
        </section>
    </section> 
  )
}

export default Table