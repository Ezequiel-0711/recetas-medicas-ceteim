import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';
import RecetaPrint from '../components/RecetaPrint';

function Rutina() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    fecha: '',
    exequatur: '',
    diagnostico: '',
    otros: '',
  });
  const [showPrint, setShowPrint] = useState(false);

  const [analiticas, setAnaliticas] = useState({
    hemograma: false,
    glicemia: false,
    hemoglobinaGlucosilada: false,
    examenOrina: false,
    urea: false,
    creatinina: false,
    factorReumatoide: false,
    aso: false,
    pcr: false,
    eritrosedimentacion: false,
    hepatitisB: false,
    hepatitisC: false,
    acidoUrico: false,
    ana: false,
    antiCCP: false,
    otros: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAnaliticas((prev) => ({ ...prev, [name]: checked }));
  };

  const handlePrint = () => {
    setShowPrint(true);
    setTimeout(() => window.print(), 100);
  };

  if (showPrint) {
    return <RecetaPrint formData={formData} analiticas={analiticas} tipo="Rutina" onClose={() => setShowPrint(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#e8f1ff] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors shadow-md"
            >
              <Printer className="w-5 h-5 mr-2" />
              Imprimir Receta
            </button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-900">Paciente de Rutina</h1>
            <p className="text-gray-600 mt-2">Complete los datos del paciente</p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Información del Paciente
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese el nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Edad <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese la edad"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Fecha</label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Exequatur</label>
                  <input
                    type="text"
                    name="exequatur"
                    value={formData.exequatur}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese el exequatur"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Diagnóstico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="diagnostico"
                    value={formData.diagnostico}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese el diagnóstico"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                Analíticas disponibles para Paciente de Rutina
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { key: 'hemograma', label: 'Hemograma' },
                  { key: 'glicemia', label: 'Glicemia' },
                  { key: 'hemoglobinaGlucosilada', label: 'Hemoglobina Glucosilada' },
                  { key: 'examenOrina', label: 'Examen de Orina' },
                  { key: 'urea', label: 'Urea' },
                  { key: 'creatinina', label: 'Creatinina' },
                  { key: 'factorReumatoide', label: 'Factor Reumatoide' },
                  { key: 'aso', label: 'ASO' },
                  { key: 'pcr', label: 'PCR' },
                  { key: 'eritrosedimentacion', label: 'Eritro Sedimentación' },
                  { key: 'hepatitisB', label: 'Hepatitis B' },
                  { key: 'hepatitisC', label: 'Hepatitis C' },
                  { key: 'acidoUrico', label: 'Ácido Úrico' },
                  { key: 'ana', label: 'ANA' },
                  { key: 'antiCCP', label: 'Anti CCP' },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      name={item.key}
                      checked={analiticas[item.key]}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-800 font-medium">{item.label}</span>
                  </label>
                ))}

                <div className="md:col-span-2">
                  <label className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                    <input
                      type="checkbox"
                      name="otros"
                      checked={analiticas.otros}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 mt-1"
                    />
                    <div className="flex-1">
                      <span className="text-gray-800 font-medium block mb-2">Otros</span>
                      {analiticas.otros && (
                        <input
                          type="text"
                          name="otros"
                          value={formData.otros}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Especifique otras analíticas"
                        />
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rutina;
