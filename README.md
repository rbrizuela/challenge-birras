# Challenge Meetups Birras 🍺

_Backend que permite recuperar data para la organizacion de meetups_

## Informacion General 🚀

* _Temperatura del dia de la meetup_
* _Cantidad de Cajas de Birras a comprar_

## Correr el proyecto ⚙️

Correr el Backend

_Inicia el proyecto de node, llamando al index.js_

```
npm start
```

Correr el Backend con nodemon

_Inicia el proyecto tambien pero con el server de nodemon_

_Cualquier cambio durante el desarrollo, cuando guardo, reinicia automáticamente el server de node_

```
npm run dev
```

## Request al Backend ⚙️

***ruta inicial***

```
http://localhost:8000/api
```

***Api (GET): temp***

Retorna la temperatura del día y hora consultado

_Input los parametros seran recibidos en (req.query):_
* _fecha=yyyy-mm-dd_
* _hora=hh:nn:ss_

_Output:_

* {"Temp (°C)": 16.5}

_Ejemplo:_

```
http://localhost:8000/api/temp?fecha=2020-08-26&hora=18:00:00
```

***Api (GET): birras***

Retorna la cantidad de cajas de birras a comprar, según temperatura del día y cantidad de personas

_Input los parametros seran recibidos en (req.query):_
* _fecha=yyyy-mm-dd_
* _hora=hh:nn:ss_ 
* _personas=number_

_Output_

* {"Cajas": 4}

_Ejemplo:_

```
http://localhost:8000/api/birras?fecha=2020-08-26&hora=18:00:00&personas=25
```

***Api (POST): meetups***

Agrega una nueva meetup

_Input los parametros seran recibidos en (req.body):_

* _fecha=yyyy-mm-dd_
* _hora=hh:nn:ss_ 
* _descripcion=descripcion de la meetup_
* _lugar=lugar de la meetup_

_Output_

* { "Nueva Meetup : Id": nro }

_Ejemplo:_

```
http://localhost:8000/api/meetups
```

***Api (POST): asistentes***

Agrega un nuevo asistente

_Input los parametros seran recibidos en (req.body):_

* _idMiembro=id del miembro ya registrado_
* _idMeetup=id de la meetup_ 

_Output_

* { "Nueva Asistente : Id": nro }

_Ejemplo:_

```
http://localhost:8000/api/asistentes
```

***Api (POST): miembros***

Agrega un nuevo miembro

_Input los parametros seran recibidos en (req.body):_

* _nombre=nombre del nuevo miembro_

_Output_

* { "Nuevo Miembro : Id": nro }

_Ejemplo:_

```
http://localhost:8000/api/miembros
```

## Deploy 📦

_Agrega notas adicionales sobre como hacer deploy_

## Stack 🛠️

_Herramientas utilizadas para crear el proyecto_

* **Node**: *El server esta costruido en Node* 
* **Npm**: *Manejador de dependencias*
* **Git**: *Control de versiones*

### Dependencias 🔧

* **Axios**: *Promise based HTTP client for the browser and Node.js.*
* **Cors**: *Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.*
* **Express**: *Web application framework for Node.js.*
* **Morgan**: *HTTP request logger middleware for Node.js.*
* **MySql**: *Node.js driver for mysql*
* **Nodemon**: *Utility that will monitor for any changes in your source and automatically restart your server (dev).*

### APIs 🔍

* **Open Weather Map**: 

  https://rapidapi.com/community/api/open-weather-map

  _Get weather and weather forecasts for multiple cities, 5 day / 3 hour forecast data_

## Autor ✒️

* **Roberto Brizuela** - *Desarrollo y documentación* - [rbrizuela](https://github.com/rbrizuela)

## Licencia 📄

[MIT](https://choosealicense.com/licenses/mit/)
