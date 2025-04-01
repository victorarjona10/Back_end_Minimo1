# EA-Node

## Instalar dependencias

Swagger
```
npm i swagger jsdoc
npm i swagger-ui-express
```
Express
```
npm i express
npm i @types/express -D
```
Mongoose
```
npm i mongoose
npm i @types/mongoose -D
```
Nodemon
```
npm i nodemon
```

## Ejecutar sin necesidad de pasar por JS
```
npm install ts-node --save-dev
```
para runnearlo npx ts-node app.ts


---------------------------------------------------------------------------------------------------------------------------
De la parte del backend y mongoDB esta

- neuva coleccion
- la relacion con userID que se refiere a USER
- 3 tipos de datos diferentes (objectId DEL USERID, NUMBER Y STRING)
- NUEVO ENDPOINT, NUEVO MODELO, LAS OPERACIONES CRUD

DE ANGULAR ESTA

- NUEVO COMPONENTE
- NUEVO SERVICIO
- USO DE LAS LLAMDAS AL NUEVO ENDPOINT

PROBLEMAS Y COSAS QUE NO ESTAN

nose porque, al hacer un post de confianza en el nuevo endpoint desde angular no funciona pero desde postman si que funciona. Osea que las interacciones a la BBDD funcionan solo que la post desde angular no. 

Listado de paginas y buscador no he hecho nada

y lo del nuevo modelo, al final confianza es algo nuevo pero no hemos usado modelos en nuestro proyecto
