import React from "react"
import ArcoAction from "./ArcoAction"

function ActionBar() {
    const [Dropmenu, setDropmenu] = React.useState(false);

    function showMenu(e){
        e.preventDefault()
        if (Dropmenu){
            setDropmenu(false)   
        } else {
            setDropmenu(true)
        }
    }
    
  return (
    <div className="w-full h-[60px] flex justify-between items-center">
        <section className="flex h-[80%] items-center gap-8">
            <section className="flex h-full w-[140px] h- borders relative">
                <section className="flex w-[70%] items-center justify-center border-solid border-0 border-r-4 ">
                    <p className="font-bold text-lg">Filter</p>
                </section>
                <button className="flex w-[30%] justify-center items-center border-black bg-[#008ad8] border-0" onClick={e => showMenu(e)}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/dropDown.png?alt=media&token=64271ab0-0cc9-4716-a0d2-e2ccdb34ad19" alt="drop arrow" className="w-[60%] h-[60%] object-contain"/>
                </button>
                <section className={"w-[100%] flex-col absolute top-full borders " + (Dropmenu ? "opacity-100 flex" : "opacity-0 hidden")}>
                        <div className="DDOption">
                            <a>ID usuario</a>
                        </div>
                        <div className="DDOption">
                            <a>Email</a>
                        </div>
                        <div className="DDOption">
                            <a>P.Apellido</a>
                        </div>
                        <div className="DDOption">
                            <a>S.Apellido</a>
                        </div>
                        <div className="DDOption">
                            <a>CURP</a>
                        </div>
                        <div className="DDOption">
                            <a>RFC</a>
                        </div>
                </section>
            </section>
            <div className="h-full w-[350px] relative">
                <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/search.png?alt=media&token=857add59-1538-462b-beec-946d2155663c" alt="search icon" className="h-[50%] absolute top-[25%] left-[5%]"/>
                <input className="w-full h-full font-medium text-lg borders rounded-full pl-[15%] pr-4 outline-0 focus:border-[#008ad8]"></input>
            </div>
        </section>

        <section className="flex h-full gap-8">
            <ArcoAction/>
            <ArcoAction/>
            <ArcoAction/>
            <ArcoAction/>
        </section>
    </div>
  )
}

export default ActionBar