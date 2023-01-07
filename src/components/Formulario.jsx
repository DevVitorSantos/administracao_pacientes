import { data } from 'autoprefixer'
import { useState , useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [ nombre, setNombre ] = useState('')
  const [ proprietario, setProprietario ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ fecha, setFecha] = useState('')
  const [ sintomas, setSintomas] = useState('')
 
  const [error, setError] = useState(false)

  

  useEffect( () => {

    if( Object.keys(paciente).length > 0) {
      console.log(paciente)

      setNombre(paciente.nombre)
      setProprietario(paciente.proprietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])
  

  const gerarID = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }
  
  function handleSumit(e){
    e.preventDefault()
   

    // validar formulario
    if([ nombre, proprietario, email, fecha , sintomas].includes('')){
      console.log("Tem um campo vazio");
      setError(true)
      return
    }

    setError(false)

    // construir objeto de paciente
    const objetoPaciente = {
      nombre, 
      proprietario, 
      email, 
      fecha , 
      sintomas,
      
    }
    
    if(paciente.id){
      console.log('editando paciente', paciente)
      objetoPaciente.id = paciente.id
      const pacientesAtualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente :pacienteState )

      setPacientes( pacientesAtualizados)
      //limpar o objeto paciente a cada vez que editarmos 
      setPaciente( {})

    }else{
      console.log('criando novo paciente');

      objetoPaciente.id = gerarID()
      setPacientes([...pacientes, objetoPaciente])
    }

    

    // reiniciar o formulario
    setNombre('')
    setProprietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimento Pacientes</h2>
      <p className="text-lg mt-5 text-center"> Anade Pacientes y { '' }
      <span className="text-indigo-600 
                      font-bold mb-10
                      "> Administralos</span></p>

      <form 
        onSubmit={handleSumit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-3 ">
        
        {error && 
          <Error> 
            <p>Todos os campos são obrigatórios </p> 
          </Error>
        }

        <div className="mb-5">
          <label 
            htmlFor="mascota" 
            className="block text-gray-700 uppercase font-bold">
            Nombre Mascota</label>

          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="proprietario" 
            className="block text-gray-700 uppercase font-bold">
            Nombre Proprietario</label>

          <input 
            id="proprietario"
            type="text" 
            placeholder="Nombre de proprietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={proprietario}
            onChange={ (e) => setProprietario(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="email" 
            className="block text-gray-700 uppercase font-bold">
            Email</label>

          <input 
            id="email"
            type="email" 
            placeholder="Email de contato proprietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="alta" 
            className="block text-gray-700 uppercase font-bold">
            Alta data</label>

          <input 
            id="alta"
            type="date" 
            
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label 
            htmlFor="sintomas" 
            className="block text-gray-700 uppercase font-bold">
            sintomas</label>

          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descreva os sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
            />

        </div>

        <input type="submit"
          className="bg-indigo-600 w-full p-3
                   text-white uppercase font-bold
                   hover:bg-indigo-700 cursor-pointer 
                   transition-all"
          value={ paciente.id ? " Atualizar Paciente" : "Agregar Paciente"} />

      </form>
    </div>
    
  )
}

export default Formulario