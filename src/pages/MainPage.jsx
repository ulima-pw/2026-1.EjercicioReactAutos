import { useState } from "react"
import TablaAutos from "../components/TablaAutos"

function MainPage() {
    const [listaAutos, setListaAutos] = useState([
        { marca : "Toyota", modelo : "Prius", placa : "ABC123" },
        { marca : "Honda", modelo : "CRV", placa : "XYZ987" }
    ])
    return <div className="px-6">
        <h1 className="font-medium text-2xl">Listado de Autos</h1>
        <TablaAutos autos={listaAutos} />
    </div>
}

export default MainPage