from sqlite3 import Cursor
from pymongo import MongoClient

## Aqui empezamos a conectarse

print ("hasta aquí todo bien")
client = MongoClient ("mongodb://localhost:27017")
print ("conexión exitosa")

##Procedemos a conectarnos

db = client ["_JoshepDataBase"]
print ("conectado a la base de datos")

##Procedemos a conectarnos a la colección de la base de datos

col = db ["001"]
print ("conectados a la colección")

##Procedemos a descargar coleccion "001" mostrando solo el primer conjunto

##x = col.find_one ()

##print (x)

##Procedemos a descargar coleccion "001" mostrando solo el conjunto que coincida con lo indicado entre {}

##x = col.find_one ({"Tema" : "Apocalipsis now"})

##print (x)

##Procedemos a descargar coleccion "001" mostrando todos los conjuntos

Cursor = col.find({})

for document in Cursor:

    ##Importante tabulación

    print (document)