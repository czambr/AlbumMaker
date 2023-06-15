const Factura = () => {
    const { title, description, state, priority } = {};
    const handelSubmit = e => {};

    const handleChange = e => {};

    return (
        <div className="" onSubmit={handelSubmit}>
            <label htmlFor="">Cliente:</label>
            <input
                className="form-control mb-2"
                placeholder="Juan Leon"
                type="text"
                name="client"
                value={title}
                onChange={handleChange}
            />
            <label htmlFor="">Cedula de Identidad:</label>
            <input
                className="form-control mb-2"
                placeholder="13157093343"
                type="text"
                pattern="\d*"
                maxLength="10"
                name="identification"
                value={title}
                onChange={handleChange}
            />
            <label htmlFor="">Correo Electrónico:</label>
            <input
                className="form-control mb-2"
                placeholder="example@mail.com"
                type="email"
                name="mail"
                value={title}
                onChange={handleChange}
            />
            <input
                className="form-control mb-2"
                placeholder="09934345345"
                type="text"
                pattern="\d*"
                maxLength="10"
                name="phone"
                value={title}
                onChange={handleChange}
            />
            <label htmlFor="">Dirección de Entrega:</label>
            <input
                className="form-control mb-2"
                placeholder="Guayaquil, Cdla: Alborada"
                type="text"
                name="direction"
                value={title}
                onChange={handleChange}
            />
        </div>
    );
};
export default Factura;
