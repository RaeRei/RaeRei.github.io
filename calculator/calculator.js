const calculator = document.querySelector('.calculator')
const button = calculator.querySelector('.calculator_button')

   button.addEventListener('onclick', e => {
       if(e.target.matches('button')){

        const button = e.target
        const action = button.dataset.action
       }
   })

   if (!action) {
        console.log('value button!')
    

   }

   if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
        console.log('button mathButton!')
  }

  if (action === "C") {
    console.log('button clearButton!')

  }
  i if (action === "calculate") {
    console.log('eval!')
  }