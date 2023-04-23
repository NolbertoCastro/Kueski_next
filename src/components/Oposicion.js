function Oposicion({showOposicion, displayOposicion}) {
  return (
    <div className={"w-[100vw] min-h-screen justify-center absolute z-20 bg-black/50 p-16 " + (showOposicion ? "flex" : "hidden")}>
        <section className="Form">
            <div className="flex justify-between items-center">
                <h1 className=" text-4xl ">Oposición</h1>
                <button className="h-[50px] bg-white border-0 ">
                    <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681" alt="close" className="h-full object-contain" onClick={e => displayOposicion(e)}></img>
                </button>
            </div>
            <section className="grid gap-8">
                <p className="text-lg ">Velit recusandae non voluptas earum est aut non. Laborum illum reprehenderit ratione sunt natus qui a dolorem eaque architecto rem. Officia beatae voluptatum impedit ut rem dicta suscipit. Et modi et doloribus qui non at animi sed quia et. Aut itaque sit rerum excepturi sit facilis odit eius eveniet aperiam suscipit aliquam enim.</p>
                <h1 className="text-3xl">¿Cuál es la oposición?</h1>
                <section className="flex justify-between">
                    <div className="flex min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                    <div className="flex min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                    <div className="flex  min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                    <div className="flex  min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                    <div className="flex  min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                </section>
                <textarea value="Velit recusandae non voluptas earum est aut non." className="w-full text-lg p-8 outline-0 borders break-words appearance-none"/>
                <h1 className="text-3xl">¿Porque se realiza la oposición?</h1>
                <section className="flex justify-between">
                    <div className="flex min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                    <div className="flex min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                    <div className="flex  min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                    <div className="flex  min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                    <div className="flex  min-h-[100px] items-center gap-5 ">
                        <input type="checkbox" id="html" className="check"/>
                        <label for="html" className="text-2xl font-medium ">HTML</label>
                    </div>
                </section>
                <textarea value="Velit recusandae non voluptas earum est aut non." className="w-full text-lg p-8 outline-0 borders break-words appearance-none"/>
                <button className="flex max-w-[300px] bg-[#48cd00] borders font-bold text-white text-lg p-2 justify-self-end ">Registrar Cancelación</button>
            </section>
        </section>
    </div>
  )
}

export default Oposicion