import ActionBar from "./ActionBar"
import Table from "./Table"

function Content({displayAcceso, displayRectificacion, displayCancelacion, displayOposicion}) {
  return (
    <div className="flex flex-col w-[100vw] px-16 pt-8 gap-8 pb-16 ">
        <ActionBar/>
        <Table
            displayAcceso = {displayAcceso}
            displayRectificacion = {displayRectificacion}
            displayCancelacion = {displayCancelacion}
            displayOposicion = {displayOposicion}
        />
    </div>
  )
}

export default Content