import { useState } from "react"
import { useNavigate } from "react-router-dom"

function RegistroPage() {
    const navigate = useNavigate()

    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [placa, setPlaca] = useState("")

    function guardarAuto(auto) {
        const listaAutosStr = sessionStorage.getItem("AUTOS")
        let listaAutos = []
        if (listaAutosStr != null) {
            listaAutos = JSON.parse(listaAutosStr)
        }
        listaAutos.push(auto)
        sessionStorage.setItem("AUTOS", JSON.stringify(listaAutos))

        navigate("/")
    }

    return <>
        <h1 className="font-black text-4xl mb-4">Registro de Auto</h1>
        <form>
            <div>
                <label>Marca</label>
                <input className="px-2 border border-gray-200" 
                    type="text"
                    value={marca}
                    onChange={ function(e) {
                        setMarca(e.currentTarget.value)
                    }} />
            </div>
            <div>
                <label>Modelo</label>
                <input className="px-2 border border-gray-200" 
                    type="text"
                    value={modelo}
                    onChange={ function(e) {
                        setModelo(e.currentTarget.value)
                    }} />
            </div>
            <div>
                <label>Placa</label>
                <input className="px-2 border border-gray-200" 
                    type="text"
                    value={placa}
                    onChange={ function(e) {
                        setPlaca(e.currentTarget.value)
                    }} />
            </div>
            <button type="button"
                className="mt-4 px-6 py-2 border border-gray-200 bg-amber-400 rounded-md"
                onClick={function() {
                    guardarAuto({
                        marca : marca,
                        modelo : modelo,
                        placa : placa
                    })
                }}>
                    Guardar
            </button>
        </form>
    </>
}

export default RegistroPage