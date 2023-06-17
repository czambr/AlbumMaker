// ------------------------------------------
//      Importacion de Contexto
// ------------------------------------------
import { albumContext } from "../App";
// ---------------------------------------------------------
//  ==> Import de Credenciales de AWS
// ---------------------------------------------------------
import {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_REGION,
    AWS_SESSION_TOKEN,
    AWS_BUCKET_NAME,
} from "../../credentials-aws.json";

// ---------------------------------------------------------
//  ==> Import de las dependencias
// ---------------------------------------------------------
import AWS from "aws-sdk";
import React, { useState, useContext } from "react";

// ---------------------------------------------------------
//  Configuration  AWS
// ---------------------------------------------------------
AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION,
    sessionToken: AWS_SESSION_TOKEN,
});
// ---------------------------------------------------------

export const S3Uploader = () => {
    const s3 = new AWS.S3();
    const [imageUrls, setImageUrls] = useState([]);

    const [files, setFiles] = useContext(albumContext);
    const uploadToS3 = async () => {
        if (files.length === 0) {
            return;
        }
        try {
            const imageUrls = [];
            for (const img of files) {
                console.log(img);

                const params = {
                    Bucket: AWS_BUCKET_NAME,
                    Key: `${Date.now()}.${img.file.name}`,
                    Body: img.file,
                };
                const { Location } = await s3.upload(params).promise();
                imageUrls.push(Location);
            }
            setImageUrls(imageUrls);
            console.log("Cargando a S3:", imageUrls);
        } catch (error) {
            console.error("Error al cargar a S3:", error);
        }
    };

    return (
        <div className="flex m-4">
            {files.length > 0 && (
                <h2 className="text-white">Subir {files.length} archivos</h2>
            )}
            {files && (
                <button
                    className="bg-gray-800  hover:bg-green-300 text-white font-bold py-2 px-4 rounded flex-none"
                    onClick={uploadToS3}>
                    Upload
                </button>
            )}
        </div>
    );
};
