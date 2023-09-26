# Delivery

A delivery service, also known as a delivery service, is a system that allows consumers to order and receive products or services directly to their homes or locations of choice, rather than physically visiting a store, restaurant or service provider. This business model offers customers convenience, saves time, and is often a convenient option for meeting shopping or dining needs.

![image](https://github.com/WeslleyIvis/Delivery/assets/79803635/884c21ab-3371-44d9-b06f-dc3a93ded881)

<hr>

<h1> Start APP </h1>

<div>
  <p>Para concluir este passo é necessario ter o Git instalado na sua maquina</p>
  <ol>
    <li>Crie uma pasta para onde ira clonar o repositorio</li>
    <li>Pelo terminal entre no diretorio que foi criado</li>
    <li>Digite: "git clone https://github.com/WeslleyIvis/Delivery.git"</li>
  </ol>
 
 
 <br>
 <p >Ficara assim: </p>
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
    <ul>
      <li>Chave ATLAS > <b>Deployment</b> > <b>Database</b> > <b>Connect</b> > <b>Drives</b> > Copy connection string into your application code</li>
      <li>Crie uma variavel no .env: <b>ATLAS_URI</b>= 'mongodb+srv://example:password@cluster0.seg7lu2.mongodb.net/?retryWrites=true&w=majority'</li>
    </ul>
    <br>
   <img src="https://github.com/WeslleyIvis/Delivery/assets/79803635/b393aea2-1265-43c4-a022-b0cd0fa1a4a5">
 </ol>

<br>
<h3>Front End</h3>
<ol>
  <li>Entre no diretorio <b>my-app</b></li>
  <li>Abra o terminal CMD / PowerShell > npm install</li>
  <br>
  <img src="https://github.com/WeslleyIvis/Delivery/assets/79803635/6b425a03-9a35-4d68-9205-7d5b33571568">
</ol>

<h3>Run APP</h3>
<p>depois de fazer todos esses passos, agora é possivel rodar o APP</p>
<ol>
  <li>Ligar a API</li>
    <ul>
      <li>Vá até o diretorio Raiz do Delivery ex: RepoClone/Delivery</li>
      <li>No terminal: npm start</li>
    </ul>
  <li>Ligar o Front</li>
    <ul>
      <li>No diretorio RepoClone/Delivery/my-app</li>
      <li>npm start</li>
    </ul>
</ol>

<br>
<h3>Para adicionar Dados</h3>
<ul>
  <li>Adicione diretamente pelo ATLAS</li>
  <li>Adicione dados com algum APP de Request como Insomnia / Postman</li>
    <ul>
      <li>http://localhost:3333</li>
      <li>Portas</li>
        <ul>
          <li><b>GET</b>: /project/product > Pega todos os dados</li>
          <li><b>POST</b>: /project/product > Cria novos dados</li>
          <li><b>DELETE</b>: /project/product/id > Deleta um dado </li>
          <li><b>PATCH</b>: /project/product/id > Edita um dado </li>
          <br>
        </ul>
    </ul>
  <br>
   <ul>
    <li>
    Schema dos Produtos    
      
    
     const ProductSchema = new mongoose.Schema<ProductTypes>({
        name: {type: String, required: true},
        value: {type: String, required: true},
        category: {type: String, required: true},
        image: {type: String, required: false}
    })
   </ul>
  
  <img src="https://github.com/WeslleyIvis/Delivery/assets/79803635/7a0f57e8-b5ee-4e70-b8fd-95f51f416238">
</ul>
</div>
  <hr>
 
