// ------------------------------------------
//      Importacion de Contexto
// ------------------------------------------
import { albumContext } from "../App";

// ------------------------------------------
//     Importación de dependencias
// ------------------------------------------
import { useDropzone } from "react-dropzone";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import ImgCard from "./ImgCard";
import AreaUploader from "./AreaUploader";
import React, { useState, useContext } from "react";
// ------------------------------------------

const ImageUploaderGrid = () => {
    const [images, setImages] = useContext(albumContext);
    // const [images, setImages] = useState([]);

    const handleDrop = acceptedFiles => {
        const newImages = acceptedFiles.map(file => ({
            id: `${images.length}-` + file.name,
            file,
        }));
        setImages(prevImages => [...prevImages, ...newImages]);
    };

    const handleDragEnd = result => {
        const { destination, source } = result;

        if (!destination) return;
        const updatedImages = [...images];
        const [reorderedImage] = updatedImages.splice(source.index, 1);
        updatedImages.splice(destination.index, 0, reorderedImage);

        setImages(updatedImages);
    };

    const handleRemoveImage = id => {
        const updatedImages = images.filter(image => image.id !== id);
        setImages(updatedImages);
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/png": [".png"],
            "image/jpg": [".jpg"],
            "image/jpeg": [".jpeg"],
        },
        onDrop: handleDrop,
    });

    return (
        <section className="">
            <AreaUploader
                propsRoot={getRootProps()}
                propsInput={getInputProps()}
            />
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="imageGrid">
                    {dropableProvided => (
                        <article className="bg-gray-600 my-8 py-1 rounded-md">
                            <div className="p-4">
                                <h2 className="text-lg text-gray-200">
                                    Visualizar todos los objetos de un bucket
                                </h2>
                                {images.length == 0 && (
                                    <h3 className="mt-8 text-center  text-gray-200">
                                        Sube un archivo 😉
                                    </h3>
                                )}
                            </div>
                            <div
                                className={`grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 my-8 p-2
                                ${
                                    images.length > 0 &&
                                    "bg-gray-600 border-dashed border-4 -3"
                                }`}
                                ref={dropableProvided.innerRef}
                                {...dropableProvided.droppableProps}>
                                {images.map((image, index) => (
                                    <Draggable
                                        key={image.id}
                                        index={index}
                                        draggableId={image.id}>
                                        {provided => (
                                            <ImgCard
                                                image={{
                                                    id: image.id,
                                                    file: image.file,
                                                }}
                                                handleRemoveImage={
                                                    handleRemoveImage
                                                }
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                                {dropableProvided.placeholder}
                            </div>
                        </article>
                    )}
                </Droppable>
            </DragDropContext>
        </section>
    );
};

export default ImageUploaderGrid;
