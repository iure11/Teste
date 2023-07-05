import { useState } from "react"
import emailjs from '@emailjs/browser'
import './css/styles.css'

export default function Form() {

    const [nome, setNome]= useState("");
    const [email, setEmail]= useState("");
    const [msg, setMsg]= useState("");

    function validar() {
        if (nome == "" && email == "" && msg == "")
        alert("Todos os campos devem ser preenchidos");

        const templateParams = {
            from_name: nome,
            email: email,
            message: msg
          }
    
        emailjs.send("service_leo3s3c", "template_t53alur", templateParams, "VvZtuDi-pFK69_csI")
          .then((response) => {
            console.log("Email enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMsg('')
          }, (err) => {
            console.log("Erro: ", err)
          })


    }


    return(
      <section className="sectionForm" id="contatos">
        <form action="" className="formulario container">
          <h2 className="tituloForm">Contate-nos</h2>
            <input type="text" value={nome} className="nomeForm" placeholder="Seu nome" onChange={(e)=>setNome(e.target.value)} />

            <input type="text" value={email} className="telefoneForm" placeholder="Telefone" onChange={(e)=>setEmail(e.target.value)}/>

            <textarea name="" value={msg} cols="30" rows="10" className="textForm" placeholder="Digite sua mensagem aqui" onChange={(e)=>setMsg(e.target.value)}></textarea>

            <input className="botaoForm" type="button" value="Enviar" onClick={()=>validar()}/>
        </form>
        </section>
    )
    
}