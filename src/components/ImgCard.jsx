import React from "react";

const ImgCard = React.forwardRef(
    ({ image, handleRemoveImage, ...props }, ref) => {
        return (
            <div
                className="flex flex-col items-center relative my-4"
                {...props}
                ref={ref}>
                <div className="grow mb-2 ">
                    <img
                        className="rounded-lg "
                        src={URL.createObjectURL(image.file)}
                        alt={image.id}
                    />
                </div>
                <button
                    className="bg-blue-600 hover:bg-red-300 text-white font-bold py-2 px-4 rounded flex-none"
                    onClick={() => handleRemoveImage(image.id)}>
                    Remover
                </button>
            </div>
        );
    }
);

export default ImgCard;
