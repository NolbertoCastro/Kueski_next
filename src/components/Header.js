function Header() {
  return (
    <div className="flex w-[100vw] h-[10vh] justify-between items-center border-solid border-b-4 border-black px-16">
        <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/kueskilogo.png?alt=media&token=c6bdb00b-1ce0-4346-a618-c5f7c69a00c7" alt= "kueski logo" className="w-[10vw] object-contain"/> 
        <section className="flex gap-6">
          <button className="headerButton">Solicitudes ARCO</button>
          <button className="headerButton">Datos</button>
        </section>
    </div>
  )
}

export default Header