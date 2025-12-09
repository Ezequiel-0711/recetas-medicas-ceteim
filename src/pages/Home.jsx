import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#e8f1ff] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8 md:p-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-blue-100 rounded-full p-6">
            <Heart className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-blue-900">CETEIM</h1>
            <p className="text-xl text-gray-700 font-medium">
              Centro Terapéutico y de Imágenes Médicas
            </p>
            <p className="text-sm text-gray-500">
              Sistema de Recetas Médicas
            </p>
          </div>

          <div className="w-full space-y-4 pt-4">
            <button
              onClick={() => navigate('/rutina')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-colors shadow-md"
            >
              Paciente de Rutina
            </button>

            <button
              onClick={() => navigate('/cirugia')}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-colors shadow-md"
            >
              Pre Quirurgico
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 w-full">
            <div className="text-sm text-gray-600 space-y-1">
              <p className="font-semibold text-gray-800">Información de Contacto</p>
              <p>Residencial Flor De Loto, Manz S-5, Km 24 aut duarte, Pedro Brand</p>
              <p>Tel: (809) 559-8416 | (849) 477-8416</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
