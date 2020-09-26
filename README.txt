Generalidades
---------------------------------------------------------------------------------------------------------------------
*Backend: Construido en node y mySql la base de datos 
*Frontend: Construido en Angular

Importante
---------------------------------------------------------------------------------------------------------------------
El Archivo README.md es la documentacion de cabecera para github
es complementario al README.txt

Iniciar Proyecto
---------------------------------------------------------------------------------------------------------------------
* Backend: INICIAR
navegar a carpeta \server
>npm start: inicia el server de node (node src/index.js): esto esta definido en el package.json del server

* Frontend: INICIAR
navegar a carpeta \client
>npm start: inicia el server de angular (ng server): esto esta definido en package.json del client

Base de Datos
---------------------------------------------------------------------------------------------------------------------
En la carpeta server\database se encuentra un script para le creacion de las tablas y bd:
-Se debe crear en algun hosting la base de datos db_Birras (mySql)

Tablas: Pense en 3 tablas para almacenar la info de las meetups
las cuales se detallan a continuación:
-Meetups: almacena las meetups agendadas
-Miembros: almacena los miembros en general, los que se seran asistentes a las diferentes meetups
-Asistentes: almacena el miembro inscripto en una meetup

Funcionalidades Realizadas
---------------------------------------------------------------------------------------------------------------------
*Backend
Contiene todas las rutas para servir a la aplicacion frontend
-GET    localhost:8000/api/temp: devuelve la temperatura de la fecha-hora requerida
-GET    localhost:8000/api/birras: devuelve la cantidad de cajas a comprar segun de la fecha-hora-asistentes requerida

-GET    localhost:8000/api/meetups: devuelve la lista (array json) de las meetups guardadas
-GET    localhost:8000/api/meetup/#: devuelve un json de la meetup consultada
-POST   localhost:8000/api/meetup: agrega una nueva meetup (json)
-PUT    localhost:8000/api/meetup/#: edita una meetup (json)
-DELETE localhost:8000/api/meetup/#: borra una meetup (json)

LAS RUTAS DE MIEMBROS Y ASISTENTES SON SIMILARES A ESTAS

*Frontend
-Componente meetup-form: formulario para cargar/editar las meetup (ya programado)
-Componente meetup-list: lista de las meetups guardadas (ya programado)

Pendientes
---------------------------------------------------------------------------------------------------------------------

* Frontend
-Agregar al componente meetup-form una funcionalidad para consultar la temperatura de la meetup que se esta agregando
-Agregar al componente meetup-list una funcionalidad para consultar la temperatura de la meetup ya grabada (boton en la fila)

-Agregar al componente meetup-list una funcionalidad para calcular la cantidad de cajas segun la fecha-hora y la 
 cantidad de asistentes en ese momento (boton en la fila)

-Al grabar un nueva meetup tengo que disparar la funcionalidad para notificar a los miembros sobre la nueva meetup
 es decir recupero el array de miembros y envio un mail a cada unos de ellos

-Checkin asistente
 -se puede diseñar un componente donde el asistente informe que estuvo en una meetup
  elije el asistente / o el asistente logueado
  elige la meetup
  confirma asistencia
  esto actualiza el campo checkin de Tabla Asistenes en 'S'

-Componente miembro-form: formulario para cargar los miembros (elijo el nombre y mail)
-Componente miembro-list: lista de las miembros guardados
-Componente asistente-form: formulario para cargar los asistentes (elijo el miembro y la meetup)
-Componente asistente-list: lista de los asistentes

-Validaciones de campos oblidatorios en la carga

-Agregar opciones al menu para incoporar las rutas a asistentes y miembros

Deploy
---------------------------------------------------------------------------------------------------------------------
*Frontend
navegar a carpeta \client
>npm build: genera el build de la app para ser copiado en el server : esto esta definido en package.json del client

