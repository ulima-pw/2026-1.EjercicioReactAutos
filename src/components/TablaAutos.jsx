import ItemAuto from "./ItemAuto"

function TablaAutos({autos}) {
    return <table className="mt-4 w-full bg-white border border-gray-200 text-left text-sm text-gray-500">
        <thead className="bg-gray-200">
            <tr>
                <th className="px-6">Num.</th>
                <th className="px-6 ">Marca</th>
                <th className="px-6 ">Modelo</th>
                <th className="px-6">Placa</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-200">
            {
                autos.map( function(auto, index) {
                    return <ItemAuto key={"auto" + index}
                        num={index + 1} marca={auto.marca}
                        modelo={auto.modelo} placa={auto.placa}/>
                } )
            }
        </tbody>
    </table>
}

export default TablaAutos