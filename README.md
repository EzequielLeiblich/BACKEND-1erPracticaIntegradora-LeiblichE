# 1er Practica Integradora Programación Backend
-------------------------------
##  Leiblich Ezequiel Gaston

## Comision 43345

## E-COMMERCE de repuestos de automóviles

En este proyecto, se han realizado varias tareas para mejorar la persistencia de datos, implementar una nueva funcionalidad de chat y reajustar los 
servicios para funcionar con Mongoose en lugar de FileSystem. A continuación, se detallan las tareas completadas:

1-Agregar el modelo de persistencia de Mongo y Mongoose: Se ha integrado la biblioteca de MongoDB y Mongoose al proyecto para permitir la conexión y la 
interacción con la base de datos MongoDB. Esto incluye la instalación de los paquetes necesarios, la configuración de la conexión a la base de datos y 
está incluido tambien las request de Postman.

![image](https://github.com/EzequielLeiblich/BACKEND-1erPracticaIntegradora-LeiblichE/assets/113488651/725d6539-d22e-45a0-a46b-d79eab53dc22)

2-Crear la base de datos y las colecciones: Se ha creado una base de datos llamada "ecommerce" en MongoDB Atlas. Dentro de esta base de datos, se han 
creado las siguientes colecciones: "carts", "messages" y "products". Además, se han definido los esquemas correspondientes para cada colección 
utilizando Mongoose.

![image](https://github.com/EzequielLeiblich/BACKEND-1erPracticaIntegradora-LeiblichE/assets/113488651/6886c33c-cc5b-4095-bb3e-aabe2c589311)

3-Separar los Managers de FileSystem y MongoDB: Se ha reorganizado la estructura del proyecto para separar los Managers de FileSystem y los Managers 
de MongoDB en una carpeta llamada "dao" (Data Access Object). Dentro de la carpeta "dao", se ha agregado otra carpeta llamada "models" donde se 
encuentran los esquemas de MongoDB, siguiendo la estructura vista en clase.

4-Contener todos los Managers en una carpeta "Dao": Todos los Managers, tanto los de FileSystem como los de MongoDB, se han colocado dentro de la 
carpeta "Dao" para tener una estructura organizada y centralizada para el acceso a datos.

5-Reajustar los servicios para trabajar con Mongoose: Los servicios existentes se han modificado para utilizar Mongoose en lugar de FileSystem como 
el mecanismo de persistencia de datos. Esto implica modificar las operaciones de lectura, escritura, actualización y eliminación para interactuar 
con los modelos de Mongoose en lugar de los archivos del sistema de archivos.

6-Implementar una nueva vista de chat: Se ha agregado una nueva vista llamada "chat.handlebars" utilizando el motor de plantillas Handlebars. 
Esta vista permite implementar un chat similar al visto en clase. Los mensajes enviados por los usuarios se guardan en la colección "messages" de 
MongoDB, utilizando el formato {user: correoDelUsuario, message: mensaje del usuario}.

7-Corroborar la integridad del proyecto: Se ha verificado que todas las funcionalidades existentes en el proyecto sigan funcionando correctamente 
después de realizar los cambios. Se han realizado pruebas exhaustivas para garantizar la integridad y el correcto funcionamiento del sistema.

En resumen, este proyecto ha mejorado la persistencia de datos al agregar MongoDB y Mongoose, se ha creado una nueva funcionalidad de chat 
utilizando MongoDB como almacenamiento, y se han reajustado los servicios existentes para funcionar con Mongoose. El proyecto ha sido probado y 
verificado para asegurar su integridad y correcto funcionamiento.
