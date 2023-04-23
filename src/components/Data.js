import React from "react";

function Data({displayAcceso, displayRectificacion, displayCancelacion, displayOposicion}) {
    const [Action, setAction] = React.useState(false);

    function showAction(e){
        e.preventDefault()
        if (Action){
            setAction(false)   
        } else {
            setAction(true)
        }
    }

  return (
    <div className="grid grid-cols-8 h-[60px] w-full divide-x-4 divide-black ">
        <div className="simpleData">
            <p>ID</p>
        </div>
        <div className="simpleData">
            <p>Nombre</p>
        </div>
        <div className="simpleData">
            <p>Cumpleaños</p>
        </div>
        <div className="simpleData">
            <p>Nacionalidad</p>
        </div>
        <div className="simpleData">
            <p>Estado</p>
        </div>
        <div className="simpleData">
            <p>Ocupación</p>
        </div>
        <div className="simpleData">
            <p>CURP</p>
        </div>
        <div className="options">
            <button className="w-[20%] h-[20%] border-0 bg-white relative" onClick={e => showAction(e)}>
                <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/options.png?alt=media&token=bb6665a5-a484-4316-a894-0356ec05ed3d" alt="options" className="w-full h-full object-contain z-0 "/>
                <section className={"w-[120px] flex-col absolute top-full right-0 borders mt-1 z-10 " + (Action ? "opacity-100 flex" : "opacity-0 hidden")}>
                    <div className="DDOption" onClick={e => displayAcceso(e)}>
                        <a>Acceso</a>
                    </div>
                    <div className="DDOption" onClick={e => displayRectificacion(e)}>
                        <a>Rectificación</a>
                    </div>
                    <div className="DDOption" onClick={e => displayCancelacion(e)}>
                        <a>Cancelación</a>
                    </div>
                    <div className="DDOption" onClick={e => displayOposicion(e)}>
                        <a>Oposición</a>
                    </div>
                </section>
            </button>
        </div>
    </div>
  )
}

export default Data