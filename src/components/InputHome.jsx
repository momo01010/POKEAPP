import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setName } from '../store/slices/nameUser.slice'

const InputHome = ({setIsLogged}) => {

    const { handleSubmit, reset, register } = useForm ()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = data => {
        dispatch(setName(data.nameUser))
        reset({
            nameUser: ''
        })
        navigate('/pokedex')
    }

    const clickLogged = () => setIsLogged(true)
    

  return (
    <form onSubmit={ handleSubmit (submit) }>
        <input type="text" placeholder='Enter your name...' { ...register('nameUser') }/>
        <button onClick={clickLogged}>Go!</button>
    </form>
  )
}

export default InputHome