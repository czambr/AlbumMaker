// import Swal from "sweetalert2";
// import { useState } from "react";
// import Factura from "./Factura";

// const Fomulario = () => {
//     const [toDo, setTodo] = useState({
//         title: "",
//         description: "",
//         state: "Pendiente",
//         priority: true,
//     });

//     const { title, description, state, priority } = toDo;
//     const handelSubmit = e => {
//         e.preventDefault();
//         if (!title.trim() || !description.trim()) {
//             return Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Titulo y descripción obligatorios",
//             });
//         } else {
//             addToDo({
//                 id: Date.now(),
//                 ...toDo,
//                 state: state === "Completado",
//             });
//             Swal.fire({
//                 position: "center",
//                 icon: "success",
//                 title: "ToDo agregado correctamente",
//                 showConfirmButton: false,
//                 timer: 1500,
//             });
//         }
//     };

//     const handleChange = e => {
//         const { name, type, checked, value } = e.target;
//         setTodo({
//             ...toDo,
//             [name]: type === "checkbox" ? checked : value,
//         });

//         if (type === "checkbox") {
//             const facturaAdicional = document.getElementById("datosFactura");
//             checked
//                 ? facturaAdicional.classList.add("d-none")
//                 : facturaAdicional.classList.remove("d-none");
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="my-4">Facturación y Entrega</h2>
//             <form className="" onSubmit={handelSubmit}>
//                 <label htmlFor="">Cliente:</label>
//                 <input
//                     className="form-control mb-2"
//                     placeholder="Juan Leon"
//                     type="text"
//                     name="client"
//                     value={title}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="">Cedula de Identidad:</label>
//                 <input
//                     className="form-control mb-2"
//                     placeholder="13157093343"
//                     type="text"
//                     pattern="\d*"
//                     maxLength="10"
//                     name="identification"
//                     value={title}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="">Correo Electrónico:</label>
//                 <input
//                     className="form-control mb-2"
//                     placeholder="example@mail.com"
//                     type="email"
//                     name="mail"
//                     value={title}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="">Teléfono móvil:</label>
//                 <input
//                     className="form-control mb-2"
//                     placeholder="09934345345"
//                     type="text"
//                     pattern="\d*"
//                     maxLength="10"
//                     name="phone"
//                     value={title}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="">Dirección de Entrega:</label>
//                 <input
//                     className="form-control mb-2"
//                     placeholder="Guayaquil, Cdla: Alborada"
//                     type="text"
//                     name="direction"
//                     value={title}
//                     onChange={handleChange}
//                 />
//                 <div className="form-check mb-2">
//                     <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="inputCheck"
//                         name="factura"
//                         checked={priority}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="inputCheck">
//                         ¿Usar los mismos datos para la facturación?
//                     </label>
//                 </div>
//                 <div className="d-none" id="datosFactura">
//                     <h2 className="my-4">Datos para la facturación</h2>
//                     <Factura />
//                 </div>
//             </form>
//             <button className="btn btn-primary" type="submit">
//                 Resumen del pedido
//             </button>
//         </div>
//     );
// };

// export default Fomulario;
