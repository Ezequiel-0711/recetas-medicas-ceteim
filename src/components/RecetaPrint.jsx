import { useEffect } from "react";
import { X } from "lucide-react";

function RecetaPrint({ formData, analiticas, tipo, onClose }) {
  useEffect(() => {
    const handleAfterPrint = () => onClose();
    window.addEventListener("afterprint", handleAfterPrint);
    return () =>
      window.removeEventListener("afterprint", handleAfterPrint);
  }, [onClose]);

  const nombresAnaliticas = {
    hemograma: "Hemograma Completo",
    glicemia: "Glicemia en Ayunas",
    hemoglobinaGlucosilada: "Hemoglobina Glucosilada",
    examenOrina: "Examen de Orina",
    urea: "Urea",
    creatinina: "Creatinina",
    acidoUrico: "Ácido Úrico",
    pcr: "Proteína C Reactiva (PCR)",
    aso: "ASO",
    eritrosedimentacion: "Eritrosedimentación",
    hepatitisB: "Hepatitis B",
    hepatitisC: "Hepatitis C",
    vdrl: "VDRL",
    tp: "TP",
    tpt: "TPT",
    tipificacion: "Tipificación",
    vih: "VIH",
    tgo: "TGO",
    tgp: "TGP",
    urea: "Urea",
    creatinina: "creatinina",
    perfilLipidico: "Perfil Lipidico",
    otros: formData.otros || "",
  };

  const seleccionadas = Object.entries(analiticas)
  .filter(([_, v]) => v)
  .map(([k]) => nombresAnaliticas[k])
  .filter(nombre => nombre && nombre.trim() !== "");

  const formatDate = (d) =>
    d ? new Date(d).toISOString().slice(0, 10) : "__/__/____";

  return (
    <div className="bg-white p-4">
      <button
        onClick={onClose}
        className="mb-4 flex items-center text-gray-600 hover:text-gray-800 print:hidden"
      >
        <X className="w-5 h-5 mr-2" /> Volver
      </button>

      <div
        id="receta"
        className="mx-auto bg-white p-8 border border-[#1E40AF] rounded-xl relative"
        style={{
          maxWidth: "900px",
          height: "calc(100vh - 8rem)",
          boxSizing: "border-box",
        }}
      >
        {/* ENCABEZADO */}
        <div className="text-center mb-4 pb-3 border-b border-[#1E3A8A]">
          {/* LOGO */}
          <div className="flex justify-center items-center mb-2">
            <img 
              src="/public/logo ceteim_page-0001.jpg" 
              alt="Logo CETEIM" 
              className="h-20 w-auto"
            />
          </div>

          <h1 className="text-xl font-bold text-[#1E40AF]">CETEIM</h1>
          <p className="text-xs tracking-wide text-[#1E3A8A]">
            CENTRO TERAPÉUTICO Y DE IMÁGENES MÉDICAS
          </p>

          <p className="text-[10px] mt-1 text-blue-900">Rehabilitación en General</p>
          <p className="text-[10px] text-blue-900">
            Consultas de Ortopedia – Consultas de Fisiatría – Imágenes Médicas
          </p>
          <p className="text-[10px] font-semibold mt-1 text-blue-900">
            Pedro Brand, Santo Domingo
          </p>
        </div>

        {/* INFO PACIENTE */}
        <div className="flex gap-6 mb-4">
          <div className="text-5xl font-bold text-[#1E40AF]">
            R<span className="text-3xl">x</span>
          </div>

          <div className="flex-1 space-y-1 text-blue-900 text-sm">
            <p><b>Paciente:</b> {formData.nombre || "___________________"}</p>
            <p><b>Edad:</b> {formData.edad || "__"}</p>
            <p><b>Fecha:</b> {formatDate(formData.fecha)}</p>
            <p><b>Diagnóstico:</b> {formData.diagnostico || "___________________"}</p>
          </div>
        </div>

        {/* ANALÍTICAS */}
        <div className="mt-4 p-3 border border-blue-800 rounded-lg">
          <p className="font-bold text-base mb-2 text-blue-900">
            Analíticas Indicadas:
          </p>

          <ul className="text-sm space-y-1 ml-4 text-blue-900">
            {seleccionadas.length ? (
              seleccionadas.map((a, i) => <li key={i}>• {a}</li>)
            ) : (
              <li className="italic text-gray-600">
                Ninguna analítica seleccionada
              </li>
            )}
          </ul>
        </div>

        {/* FIRMA MÉDICO Y EXEQUÁTUR - ABAJO DERECHA */}
        <div className="absolute bottom-8 right-12">
          <div className="text-right">
            <div className="border-t border-blue-800 w-48"></div>
            <p className="text-xs text-gray-600 mt-1">Firma del Médico</p>
            {formData.exequatur && (
              <p className="text-xs text-blue-900 mt-1 font-semibold">
                Exequátur: {formData.exequatur}
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          #receta {
            border: 2px solid #1E40AF !important;
            border-radius: 12px !important;
            height: calc(100vh - 0.8cm) !important;
            page-break-inside: avoid !important;
          }

          @page {
            size: letter;
            margin: 0.4cm;
          }
        }
      `}</style>
    </div>
  );
}

export default RecetaPrint;


// import { useEffect } from "react";
// import { X } from "lucide-react";

// function RecetaPrint({ formData, analiticas, tipo, onClose }) {
//   useEffect(() => {
//     const handleAfterPrint = () => onClose();
//     window.addEventListener("afterprint", handleAfterPrint);
//     return () =>
//       window.removeEventListener("afterprint", handleAfterPrint);
//   }, [onClose]);

//   const nombresAnaliticas = {
//     hemograma: "Hemograma Completo",
//     glicemia: "Glicemia en Ayunas",
//     hemoglobinaGlucosilada: "Hemoglobina Glucosilada",
//     examenOrina: "Examen de Orina",
//     urea: "Urea",
//     creatinina: "Creatinina",
//     acidoUrico: "Ácido Úrico",
//     pcr: "Proteína C Reactiva (PCR)",
//     aso: "ASO",
//     eritrosedimentacion: "Eritrosedimentación",
//     hepatitisB: "Hepatitis B",
//     hepatitisC: "Hepatitis C",
//     vdrl: "VDRL",
//     tp: "TP",
//     tpt: "TPT",
//     tipificacion: "Tipificación",
//     vih: "VIH",
//     otros: formData.otros || "",
//   };

//   const seleccionadas = Object.entries(analiticas)
//     .filter(([_, v]) => v)
//     .map(([k]) => nombresAnaliticas[k]);

//   const formatDate = (d) =>
//     d ? new Date(d).toISOString().slice(0, 10) : "__/__/____";

//   return (
//     <div className="bg-white p-4">
//       <button
//         onClick={onClose}
//         className="mb-4 flex items-center text-gray-600 hover:text-gray-800 print:hidden"
//       >
//         <X className="w-5 h-5 mr-2" /> Volver
//       </button>

//       <div
//         id="receta"
//         className="mx-auto bg-white p-8 border border-[#1E40AF] rounded-xl relative"
//         style={{
//           maxWidth: "900px",
//           height: "calc(100vh - 8rem)",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* ENCABEZADO */}
//         <div className="text-center mb-4 pb-3 border-b border-[#1E3A8A]">
//           <div className="flex justify-center items-center mb-1">
//             <div className="text-4xl font-bold text-[#1E40AF]">✚</div>
//           </div>

//           <h1 className="text-xl font-bold text-[#1E40AF]">CETEIM</h1>
//           <p className="text-xs tracking-wide text-[#1E3A8A]">
//             CENTRO TERAPÉUTICO Y DE IMÁGENES MÉDICAS
//           </p>

//           <p className="text-[10px] mt-1 text-blue-900">Rehabilitación en General</p>
//           <p className="text-[10px] text-blue-900">
//             Consultas de Ortopedia – Consultas de Fisiatría – Imágenes Médicas
//           </p>
//           <p className="text-[10px] font-semibold mt-1 text-blue-900">
//             Pedro Brand, Santo Domingo
//           </p>
//         </div>

//         {/* INFO PACIENTE */}
//         <div className="flex gap-6 mb-4">
//           <div className="text-5xl font-bold text-[#1E40AF]">
//             R<span className="text-3xl">x</span>
//           </div>

//           <div className="flex-1 space-y-1 text-blue-900 text-sm">
//             <p><b>Paciente:</b> {formData.nombre || "___________________"}</p>
//             <p><b>Edad:</b> {formData.edad || "__"}</p>
//             <p><b>Fecha:</b> {formatDate(formData.fecha)}</p>
//             <p><b>Diagnóstico:</b> {formData.diagnostico || "___________________"}</p>
            
//           </div>
//         </div>

//         {/* ANALÍTICAS */}
//         <div className="mt-4 p-3 border border-blue-800 rounded-lg">
//           <p className="font-bold text-base mb-2 text-blue-900">
//             Analíticas Indicadas:
//           </p>

//           <ul className="text-sm space-y-1 ml-4 text-blue-900">
//             {seleccionadas.length ? (
//               seleccionadas.map((a, i) => <li key={i}>• {a}</li>)
//             ) : (
//               <li className="italic text-gray-600">
//                 Ninguna analítica seleccionada
//               </li>
//             )}
//           </ul>
//         </div>

//         {/* RP
//         <div className="mt-6">
//           <p className="font-bold text-lg text-blue-900">Rp/</p>
//           <p className="text-gray-600 mt-1 text-sm">Sin medicamentos indicados</p>
//         </div> */}

//         {/* FIRMA MÉDICO - ABAJO DERECHA */}
//         <div className="absolute bottom-8 right-12">
//           <div className="text-right">
//             <div className="border-t border-blue-800 w-48"></div>
//             <p className="text-xs text-gray-600 mt-1">Firma del Médico</p>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media print {
//           body {
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//           }

//           #receta {
//             border: 2px solid #1E40AF !important;
//             border-radius: 12px !important;
//             height: calc(100vh - 0.8cm) !important;
//             page-break-inside: avoid !important;
//           }

//           @page {
//             size: letter;
//             margin: 0.4cm;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default RecetaPrint;

