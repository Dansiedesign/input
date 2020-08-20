function output() {
  var fName = document.getElementById('firstName').value;
  var lName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var age = document.getElementById('age').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  alert( 'Is this information correct?' +' ' +fName + ' ' + lName +' '+ email +' ' +age+' ' +phone+' ' +password);
  
}






















// let info = [];
//         const addInfo = (ev)=>{
//             ev.preventDefault();  //to stop the form submitting
//             let data = {
//                 First: document.getElementById('firstName').value,
//                 Last: document.getElementById('lastName').value,
//                 Age: document.getElementById('age').value,
//                 Pass: document.getElementById('password').value
//             }
//             info.push(data);
//             document.querySelector('form').reset();

//             console.warn('added' , {info} );
            
//             // let pre = document.querySelector('#information pre');
//             // pre.textContent = '\n' + JSON.stringify(info, '\t', 2);

//           }


        
//         // document.addEventListener('DOMContentLoaded', ()=>{
//         //     document.getElementById('button')
//         //     document.addEventListener('click', addInfo);
//         // });



// // var info

// // function setup() {
// //   info = createInput();
// //   info.input(newInfo);

// // }
 
// // function newInfo() {
// //   createP(information.value)
  
// // }














// // const fName = document.getElementById('firstName')
// // const lName = document.getElementById('lastName')
// // const password = document.getElementById('password')
// // const form = document.getElementById('form')
// // const errorElement = document.getElementById('error')

// // form.addEventListener('submit', (e) => {
// //   let messages = []
// //   if (name.value === '' || name.value == null) {
// //     messages.push('Name is required')
// //   }

// //   if (password.value.length <= 6) {
// //     messages.push('Password must be longer than 6 characters')
// //   }

// //   if (password.value.length >= 20) {
// //     messages.push('Password must be less than 20 characters')
// //   }

// //   if (password.value === 'password') {
// //     messages.push('Password cannot be password')
// //   }

// //   if (messages.length > 0) {
// //     e.preventDefault()
// //     errorElement.innerText = messages.join(', ')
// //   }
// // })