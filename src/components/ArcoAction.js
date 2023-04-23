import React from "react";

function ArcoAction() {
    const [Description, setDescription] = React.useState(false);

    function showDescription(e){
        e.preventDefault()
        if (Description){
            setDescription(false)   
        } else {
            setDescription(true)
        }
    }
  return (
    <button className="flex w-[60px] justify-center items-center bg-[#008ad8] borders text-white font-bold text-2xl  relative" onClick={e => showDescription(e)}>
        A
        <section className={"w-[300px] absolute top-full right-0 mt-2 borders bg-[#008ad8] z-10 " + (Description ? "opacity-100 flex" : "opacity-0 hidden")}>
            <p className="text-sm font-medium text-md m-8">Acceso: Es la facultad de solicitar el acceso a los datos
            personales que se encuentran en las bases de datos, sistemas, archivos,
            registros o expedientes de la SFP, que los almacena o utiliza, así como
            conocer la información relacionada con las condiciones y
            generalidades del tratamiento que se les da. </p>
        </section>
    </button>
  )
}

export default ArcoAction