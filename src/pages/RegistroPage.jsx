function RegistroPage() {
    return <>
        <h1 className="font-black text-4xl mb-4">Registro de Auto</h1>
        <form>
            <div>
                <label>Marca</label>
                <input className="border border-gray-200" type="text" />
            </div>
            <div>
                <label>Modelo</label>
                <input className="border border-gray-200" type="text" />
            </div>
            <div>
                <label>Placa</label>
                <input className="border border-gray-200" type="text" />
            </div>
        </form>
    </>
}

export default RegistroPage