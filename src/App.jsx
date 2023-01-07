import { useState , useEffect} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {
  
  const initialState  = JSON.parse( localStorage.getItem('pacientes')) ?? []
  const [ pacientes, setPacientes] = useState(initialState)

  // editar ou deletar paciente , será passado via props para outros components
  const [ paciente, setPaciente] = useState({})

  

  // carrega a primeira vez quando carrega o componente
  // e também toda vez que modifica o parametro (pacientes)
  // atualizando o local storage
  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))

    console.log('estou executando para mudar o status do paciente');
  }, [ pacientes ])



  //eliminar paciente
  const eliminarPaciente = (id) => {
    const pacientesAtualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesAtualizados)
    
  }

  
  
 
  return (

    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
     

      
    </div>
  )
}

export default App
