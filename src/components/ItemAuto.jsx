function ItemAuto({ num, marca, modelo, placa }) {
    return <tr className="hover:bg-gray-100">
        <td className="px-6 py-4 font-medium text-gray-900">{num}</td>
        <td className="px-6 py-4 font-medium ">{marca}</td>
        <td className="px-6 py-4 font-medium ">{modelo}</td>
        <td className="px-6 py-4 font-medium ">{placa}</td>
    </tr>
}

export default ItemAuto