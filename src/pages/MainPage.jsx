import { useEffect, useState } from "react"
import TablaAutos from "../components/TablaAutos"
import { Link } from "react-router-dom"

function MainPage() {
    const [listaAutos, setListaAutos] = useState([])

    useEffect( function() {
        const listadoAutosStr = sessionStorage.getItem("AUTOS")
        if (listadoAutosStr !== null) {
            const listadoAutos = JSON.parse(listadoAutosStr)
            setListaAutos(listadoAutos)
        }
    }, [] )

    return <div className="px-6">
        <h1 className="font-medium text-2xl mb-4">Listado de Autos</h1>
        <Link to={"/registro"} className="px-6 py-2 border border-gray-200 bg-amber-400 rounded-md">Nuevo</Link>
        <TablaAutos autos={listaAutos} />
    </div>
}

export default MainPage