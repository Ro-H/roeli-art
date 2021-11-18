const form = document.getElementById('form');
const nombre = document.getElementById ('nombre');
const apellido = document.getElementById ('apellido');
const email = document.getElementById ('email');
const telefono = document.getElementById ('telefono');


form.addEventListener('submit', (event) =>{
   email.preventDefault()
   cheeckInputs()
  });

  function cheeckInputs(){
    const nombreValue = nombre.nodeValue.trim()
    const apellidoValue = apellido.nodeValue.trim()
    const telefonoValue = telefono.nodeValue.trim()
    const emailValue = email.nodeValue.trim()

if(nombreValue === ''){
  setErrorFor(nombre, 'Complete este campo');}
  else{
    setSuccesFor(nombre)
  } 

  if(emailValue === ''){
    setErrorFor(email, 'Complete este campo');}
    else if{!isEmail (emailValue){
      setSuccesFor(email, 'No ingresó un email válido');
    } elese{
      setSuccesFor(email);
    } 

    if(telefonoValue === ''){
      setErrorFor(telefono, 'Complete este campo');}
      else{
        setSuccesFor(telefono)
      } 
    

function setErrorFor (input, message){
  const formControl = input.parentElement;
  const small = formControl.queryselector('small');
  formControl.className = 'form-outline error';
  small.innerText = message;
}

function setSuccesFor (input){
  const formControl = input.parentElement;
  formControl.className = 'form-control succes';
}

function isEmail(email){
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
}