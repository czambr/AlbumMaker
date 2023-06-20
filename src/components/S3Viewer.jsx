// ---------------------------------------------------------
//  ==> Import de Credenciales de AWS
// ---------------------------------------------------------
// En el modo desarrollo, hacer uso de un .json para almacenar las
// credenciales desde otros componentes
// import {
//     AWS_ACCESS_KEY_ID,
//     AWS_SECRET_ACCESS_KEY,
//     AWS_REGION,
//     AWS_SESSION_TOKEN,
//     AWS_BUCKET_NAME,
// } from "../../credentials-aws.json";

// ---------------------------------------------------------
//  ==> Import de las dependencias
// ---------------------------------------------------------
import React, { useEffect } from "react";
import AWS from "aws-sdk";
import { useState } from "react";

// ---------------------------------------------------------

AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
    sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN,
});

export const S3Viewer = () => {
    const [listFiles, setListFiles] = useState([]);
    const [s3Domain, setS3Domain] = useState("");
    const s3 = new AWS.S3();

    const getFromS3 = e => {
        const params = {
            Bucket: "albummakerreact",
        };
        s3.listObjectsV2(params, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            } else {
                console.log(data);
                setS3Domain(data.Name);
                setListFiles(data.Contents);
            }
        });
    };

    useEffect(() => {
        getFromS3();
    }, []);

    const formatUrl = name => {
        const url =
            "https://" +
            s3Domain +
            ".s3.amazonaws.com/" +
            name.replaceAll(" ", "+");
        console.log(url);
        return url;
    };

    return (
        <section className="m-8 px-4">
            {/* {listFiles.length == 0 && <h3>No hay objetos que mostrar</h3>} */}
            <article className="bg-gray-800 my-8 py-1 rounded-md">
                <div className="flex p-4">
                    <h1 className="text-lg text-gray-200 grow">
                        Visualizar todos los objetos de un bucket
                    </h1>
                    <button
                        className="bg-gray-200  hover:bg-green-300 font-bold py-2 px-4 rounded flex-none"
                        onClick={getFromS3}>
                        Recargar
                    </button>
                </div>
                {listFiles.length > 0 ? (
                    <div
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-3 my-8 p-2
                        bg-gray-800 border-dashed border-4">
                        {listFiles.map((name, index) => (
                            <div className="grow mb-2">
                                <img
                                    key={index}
                                    src={formatUrl(name.Key)}></img>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h3 className="text-center my-8 text-gray-200">
                        No hay objetos que mostrar
                    </h3>
                )}
            </article>
        </section>
    );
};
