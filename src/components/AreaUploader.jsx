// ------------------------------------------
//      Importacion de Contexto
// ------------------------------------------
import { albumContext } from "../App";
// ------------------------------------------
//      Importaciones de Dependencias
// ------------------------------------------
import React, { useContext } from "react";

const AreaUploader = ({ propsRoot, propsInput }) => {
    const [images, setImages] = useContext(albumContext);
    return (
        <div className="flex flex-col">
            <div className={`text-end my-4 ${images.length === 0 && "hidden"}`}>
                <button className="bg-gray-200  hover:bg-green-300 font-bold py-2 px-4 rounded">
                    Continuar
                </button>
            </div>
            <article className="bg-gray-400 py-1 rounded-md" {...propsRoot}>
                <input {...propsInput} />
                <h2 className="p-8 rounded-lg text-center border-dashed border-4 m-2 text-gray-700 text-xl">
                    Suelte las imagenes que desee Cargar
                </h2>
            </article>
        </div>
    );
};

export default AreaUploader;
