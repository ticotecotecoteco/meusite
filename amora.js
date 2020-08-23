
console.log('Oioioioi mm  beleza')

$('form').submit(event=>{
    event.preventDefault();

   const nome = event.target.nome.value
   alert('Oi '+nome+', eu sou o robo como que vai')
})