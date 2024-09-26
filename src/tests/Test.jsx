// import { useState } from "react"


// export const Test = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [emailDirty, setEmailDirty] = useState(false)
//   const [passwordDirty, setPasswordDirty] = useState(false)
//   const [emailError, setEmailError] = useState('почта не должна быть пустой')
//   const [passwordError, setPasswordError] = useState('Пароль не должен быть пустой')

//   const emailHandler = (e) => {
//     setEmail(e.target.value)
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     if(!re.test(String(e.target.value).toLowerCase())) {
//       setEmailError('Некоректная почта')
//     } else {
//       setEmailError('')
//     }
//   }

//   const passwordHandler = (e) => {
//     setPassword(e.target.value)
//     if(e.target.value.lenght > 3 || e.target.value.lenght < 8) {
//       setPasswordError('Пароль должен быть больше 3 и меньше 8 смиволов')
//       if(!e.target.value) {
//         setPasswordError('Пароль не должен быть пустым')
//       } 
//     } else {
//       setPasswordError('')
//     }
   
//   }

//   const blurHandler = (e) => {
//     switch (e.target.name) {
//       case 'email': 
//         setEmailDirty(true)
//         break
//       case 'password':
//         setPasswordDirty(true) 
//         break
//     }
//   }

//   return (
//     <div>
//       <div className="ml-3 mt-3">
//         <h1>регистрация</h1>
//         <div className="grid w-20">
//           {(emailDirty && emailError) && <div className="text-red-500" >{emailError}</div>}
//           <input onChange={e => emailHandler(e)} value={email} onBlur={e=>blurHandler(e)} name='email' type='text' placeholder="Enter email: "/>
//           {(passwordDirty && passwordError) && <div className="text-red-500" >{passwordError}</div>}
//           <input onChange={e => passwordHandler(e)} value={password} onBlur={e=>blurHandler(e)} name='password' type='password' placeholder="Enter password: "/>
//         </div>
//         <button type="submit" className="bg-slate-300 w-32 rounded h-10 focus:border-2 mt-2 focus:border-green-400 duration-300">Create</button>
//       </div>
//     </div>
//   )
// }


export const Test = () => {
  return (
    <div>Test</div>
  )
}
