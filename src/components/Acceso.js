function Acceso({showAcceso, displayAcceso}) {
  return (
    <div className={"w-[100vw] min-h-screen justify-center absolute z-20 bg-black/50 p-16 " + (showAcceso ? "flex" : "hidden")}>
        <section className="Form">
            <div className="flex justify-between items-center">
                <h1 className=" text-4xl ">Acceso</h1>
                <button className="h-[50px] bg-white border-0 ">
                    <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681" alt="close" className="h-full object-contain" onClick={e => displayAcceso(e)}></img>
                </button>
            </div>
            <section className="infoSection">
                <section className="grid flex-col w-[50%] h-full gap-8">
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Nombre</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Primer Apellido</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Segundo Apellido</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Fecha de Nacimiento</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Nacionalidad</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Estado</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Actividad Económica</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">CURP</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">RFC</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Genero</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Número de Telefono</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Email</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <button className="actionButton">Generar Reporte</button>
                </section>
                <section className="grid flex-col w-[50%] h-full gap-8">
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Otro</h1>
                        <p className="text-lg">Est sed nihil quo sunt sapiente eaque veritatis quia fugit blanditiis molestiae labore. Omnis optio impedit sit ab dolorem quia et impedit pariatur facere.</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-3xl">Dirección</h1>
                        <hr class="my-4 h-1 border-t-0 bg-black" />
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">País</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Estado</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Ciudad</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Colonia</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Código Postal</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Calle</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Número Exterior</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Número Interior</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-3xl">Identificación</h1>
                        <hr class="my-4 h-1 border-t-0 bg-black" />
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Tipo de Identificación</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                    <section className="grid gap-4">
                        <h1 className="text-2xl">Número de Identificación</h1>
                        <p className="text-lg">voluptate occaecati iusto</p>
                    </section>
                </section>
            </section>

        </section>
    </div>
  )
}

export default Acceso