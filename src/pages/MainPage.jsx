import { useEffect, useState } from "react"
import TablaAutos from "../components/TablaAutos"

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
        <h1 className="font-medium text-2xl">Listado de Autos</h1>
        <TablaAutos autos={listaAutos} />
    </div>
}

export default MainPage