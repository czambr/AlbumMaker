import { useState } from "react";
import { S3Uploader } from "./components/S3Uploader";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <S3Uploader />
            <Formulario />
        </>
    );
}

export default App;
