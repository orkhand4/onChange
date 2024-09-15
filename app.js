const inpt_tag = document.querySelector('#inpt');
const btn_tag = document.querySelector('#btn');

inpt_tag.addEventListener('input', (event) => {

  console.log(event.target.value)
});

btn_tag.addEventListener('click', (event) => {
  console.log(event.target.innerText)
  
})