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
import React from "react";
import AWS from "aws-sdk";
import { useState } from "react";

// ---------------------------------------------------------

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION,
    sessionToken: AWS_SESSION_TOKEN,
});

export const S3Uploader = () => {
    const s3 = new AWS.S3();
    const [imageUrl, setImageUrl] = useState(null);
    const [file, setFile] = useState(null);

    const handleFileSelect = e => {
        setFile(e.target.files[0]);
    };

    const uploadToS3 = async () => {
        if (!file) {
            return;
        }
        const params = {
            Bucket: AWS_BUCKET_NAME,
            Key: `${Date.now()}.${file.name}`,
            Body: file,
        };
        const { Location } = await s3.upload(params).promise();
        setImageUrl(Location);
        console.log("cargando a s3", Location);
    };
    return (
        <div className="Container my-4">
            <h1>Subida de archivo simple</h1>
            <input type="file" onChange={handleFileSelect} />
            {file && (
                <div style={{ marginTop: "10px" }}>
                    <button onClick={uploadToS3}>Upload</button>
                </div>
            )}
            {imageUrl && (
                <div style={{ marginTop: "10px" }}>
                    <img src={imageUrl} alt="uploaded" />
                </div>
            )}
        </div>
    );
};
