# Delivery

A delivery service, also known as a delivery service, is a system that allows consumers to order and receive products or services directly to their homes or locations of choice, rather than physically visiting a store, restaurant or service provider. This business model offers customers convenience, saves time, and is often a convenient option for meeting shopping or dining needs.

![image](https://github.com/WeslleyIvis/Delivery/assets/79803635/884c21ab-3371-44d9-b06f-dc3a93ded881)

<hr>

<h1> Start APP </h1>

<div>
  <p>Para concluir este passo é necessario ter o Git instalado na sua maquina</p>
  <ol>
    <li><strong>Crie uma pasta para onde ira clonar o repositorio</strong></li>
    <li><strong>Entre nesta pasta pelo terminal</strong></li>
    <li><strong>Digite: "git clone https://github.com/WeslleyIvis/Delivery.git"</strong></li>
  </ol>
 
 
 <br>
 <p >Com o repositorio clonado, ficara assim: </p>
  <img src="https://github.com/WeslleyIvis/Delivery/assets/79803635/836d9ab1-4bfe-4867-a869-6c362b0c62ae">

 <h4 style="color:blue;">Instalando dependencias</h4>
 <p>Para concluir este passo é necessario ter <b>NodeJS</b> instalado</p>
 <ol>
   <li>Entre no diretorio que principal do "CLONE" por exempo: <b>"RepoClone/Delivery", esteja ciente de estar na diretorio correto</b></li>
   <li><b>Abra um terminal CMD / Powershell</b></li>
   <ul>
     <li>Caso não tenha <b>YARN</b>, utilize <b>NPM</b></li>
     <li>Comando: <b>yarn install</b></li>
     <li>Comando: <b>npm install</b></li>
   </ul>
   <li>Com a instalação das dependencias, aparecera a pasta <b>"node_modules"</b></li>
   <img src="https://github.com/WeslleyIvis/Delivery/assets/79803635/0e90def4-a924-4c8b-97fb-9c49d25b6f4d">
 </ol>

 <br>
 <h3>Configurando o DataBase (MongoDB ATLAS)</h3>
 <ol>
   <li>Crie uma conta no MongoDB ATLAS</li> 
    <ul>
      <li>https://cloud.mongodb.com/v2#/org/648fb544c998c4246b95bfb3/projects</li>
      <li>Crie um novo projeto</li>
      <li>Crie o banco: <b>Overview > Create a deployment</b></li>
      <li>Plano: M0 FREE > Provider: <b>AWS</b> > Region <b>São Paulo (Se-east-1) </b> > Name: Cluster0 </li>
      <li>Crie um User: Username e uma senha de sua preferencia</li>
      <li>Finish and close</li>
      <li>Vá na Aba: <b>Security</b> > <b>Network Acess</b> > <b>+ADD IP ADDRESS</b> > <b>Allow Access From Anywhere</b> > <b>Confirm</b></li>
    </ul>
    <br>
  
   <li>Crie um arquivo chama <b>.env</b></li>
   <img src="https://github.com/WeslleyIvis/Delivery/assets/79803635/b393aea2-1265-43c4-a022-b0cd0fa1a4a5">
   <li></li>
 </ol>
 
</div>
  <hr>
 
### Back-end
- Typescript
- NodeJS
- Express
- MongoDB (Atlas)
- bcryptjs
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

<hr>

### Front-end
- HTML
- CSS
- Javascript
- React
- Typescript

