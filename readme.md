1. npm i 


2.  --->  cd \dist 
        --->  cd \src   
            ---> cd \backend


3. nodemon \Server.js

Una vez hecho esto, entrar en el local host 3000 o el proporcionado por el mismo programa (se mostrara por la consola).

Funcionalidades: 
    -validador de usuario y sala de chat (la sala de chat solo   puede ser del 1 al 10 ).
    -no permite escribir mensajes si previamente no te has loggeado.
    -una vez logged se vera en todo momento la sala en la que te encuentras.
    -si ya se han escrito mensajes anteriormente en la sala de chat N, y despues de cerrar el servidor se vuelve a entrar, estos datos apareceran por pantalla ya que la informacion se almacena en una base d datos (mongoDB Atlas).