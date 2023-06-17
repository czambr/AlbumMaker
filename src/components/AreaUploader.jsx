const AreaUploader = ({ propsRoot, propsInput }) => {
    return (
        <article className="bg-gray-400 py-1 rounded-md" {...propsRoot}>
            <input {...propsInput} />
            <h2 className="p-8 rounded-lg text-center border-dashed border-4 m-2 text-gray-700 text-xl">
                Suelte las imagenes que desee Cargar
            </h2>
        </article>
    );
};

export default AreaUploader;
