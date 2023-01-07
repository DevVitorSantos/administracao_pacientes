
import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
          Listado de Pacientes</h2>
          <p className="text-xl mt-5  text-center">
          Administrar tus {''}
          <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
          </p>
          { pacientes.map ( (paciente) => (
          <Paciente 
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
          ))}
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
          Não hay pacientes</h2>

          <p className="text-xl mt-5  text-center">
          Adicione tus {''}
          <span className="text-indigo-600 font-bold ">Pacientes para administrar</span>
          </p>
         
        </>
      )}

      

      
     
    </div>
    
  )
}

export default ListadoPacientes