# Album Marker

1. Crear proyecto react. Para este caso usamos el modulo de Vite.

    ```
     npm create vite@latest AlbumMaker
    ```

2. Descargar credenciales para conexión con AWS Account. Ir a sección AWS Details > AWS CLI.

    Estas credenciales serán puestas en el archivo "credentials-aws.json" que se encuentra en la raiz del proyecto. Este archivo contiene las credenciales de tu AWS para que le **permita a los componentes** la conexion co **AWS**.

    ```
    {
     "AWS_ACCESS_KEY_ID": "tu_acces_key_id",
     "AWS_SECRET_ACCESS_KEY": "tu_secret_key_id",
     "AWS_REGION": "region_tu_bucket",
     "AWS_SESSION_TOKEN": "tu_session_token"
     "AWS_BUCKET_NAME": "nombre_de_tu_bucket"
    }
    ```

3. Verifique que su componente tenga la importación del archivo.

4. Instalar AWS SDK.

    ```
    npm i aws-sdk --save
    ```

5. Añadir import en componente a usar AWS

    ```
    import AWS from 'aws-sdk';
    ```

6. Instanciar una conexión con AWS, llenar las credenciales importadas desde el archivo "credentials-aws.json".

    ```
    AWS.config.update({
     accessKeyId: '',
     secretAccessKey: '',
     region: 'us-east-1',
     sessionToken: ''
     });
    ```

7. Crear objeto para interactuar con AWS
    ```
    const s3 = new AWS.S3();
    ```

# Poner bucket público

1. Configurar ACL del bucket

    ```
    {
     "Version": "2012-10-17",
     "Statement": [
         {
             "Effect": "Allow",
             "Principal": "*",
             "Action": [
                 "s3:GetObject",
                 "s3:PutObject"
             ],
             "Resource": [
                 "arn:aws:s3:::<Your-Bucket-name>",
                 "arn:aws:s3:::<Your-Bucket-name>/*"
             ]
         }
         ]
     }
    ```

2. Configurar CORS

    ```
    [
        {
            "AllowedHeaders": [
                "*"
            ],
            "AllowedMethods": [
                "PUT",
                "POST",
                "GET"
            ],
            "AllowedOrigins": [
                "*"
            ],
            "ExposeHeaders": [
                "ETag"
            ]
        }
    ]

    ```

# Pruebas de desarrollo

1. Luego de clonar el respositorio ejecute los siguientes comandos:

    Para instalar las dependencias declaradas en el archivo package.json

    ```
        npm install
    ```

    Para instanciar las pruebas en modo desarrollo

    ```
       npm run dev
    ```

2. En caso de tener problemas en la compilación, asegurese de que el archivo **vite.config.js** tenga las siguientes configuraciones.

    ```
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    // https://vitejs.dev/config/
    export default defineConfig({
        plugins: [react()],
        define: {
            global: {},
        },
        resolve: {
            alias: {
                "./runtimeConfig": "./runtimeConfig.browser",
            },
        },
        build: {
            commonjsOptions: { include: [] },
            chunkSizeWarningLimit: 100000,
        },
        optimizeDeps: {
            disabled: false,
        },
    });
    ```
