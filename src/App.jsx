import React, { useState } from "react";
import { S3Uploader } from "./components/S3Uploader";
import { S3Viewer } from "./components/S3Viewer";
import Header from "./components/Header";
import ImageUploaderGrid from "./components/ImageUploaderGrid";

export const albumContext = React.createContext();
export const formFacturaContext = React.createContext();

function App() {
    const [listImages, setImages] = useState([]);
    const [formulario, setFormulario] = useState({
        form: [],
        files: false,
    });

    return (
        <div
            className="min-h-screen transition-all duration-1000 
                    dark:bg-gray-950">
            <Header />

            <albumContext.Provider value={[listImages, setImages]}>
                <main className="m-8 px-4 ">
                    <ImageUploaderGrid />
                    {listImages.length > 0 && <S3Uploader />}
                </main>
            </albumContext.Provider>
            <S3Viewer />
        </div>
    );
}

export default App;
