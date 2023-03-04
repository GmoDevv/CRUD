'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
    

}

const getLocalStorage =()=> JSON.parse(localStorage.getItem('dbClient')) ?? []
const setLocalStorage =(client)=> localStorage.setItem('dbClient', JSON.stringify(client))

/* Comandos C R U D
=======================*/

//Delete
const deleteClient = (index)=>{
    const dbClient = getLocalStorage()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}
//Update
const updateClient =(index, client) =>{
    const dbClient = getLocalStorage()
    dbClient[index] = client
    setLocalStorage(dbClient)
}
//Read

const readClient =()=> getLocalStorage()

//Create
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}

/*Interação com o client Side
=============================*/
const fieldValidation =()=>{
    return document.getElementById('form').reportValidity()
}
const clearFields =()=>{
    const fields = document.querySelectorAll('.modal-field')    
    fields.forEach(field => field.value = "")
}


const saveClient =()=>{
    if(fieldValidation()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
        closeModal()
    }
}



/*Eventos 
==============*/

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)