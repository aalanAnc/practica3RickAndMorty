# practica3RickAndMorty
Para esta segunda practica se va a realizar un API que permita al usuario acceder a los datos del API de Rick And Morty: https://rickandmortyapi.com/documentation
La aplicación va a constar de las siguientes funcionalidades:
Listar todos los caracteres de manera paginada
· Este apartado el API deberá devolver los nombres de los caracteres y debera permitir paginacion. Es decir, acceder mediante la URL a cada pagina por separado
Obtener un carácter especifico
· Este apartado el API deberá leer el ID del carácter que quiera obtener y una vez se haya obtenido el resultado de mostrara la información siguiendo el siguiente formato.
En caso de que este mismo carácter este en la memoria interna se deberá mostrar sin hacer la llamada
ID -> ...
Name -> ...
Status -> ...
Species -> ...
Gender -> ...
Origin -> ...
Location -> ...
Created -> ... (formato fecha -> DD:MM:YYYY)
Si un campo no estuviera se saltaría
Además debemos guardar en memoria interna el caracter
· Listar todos las localizaciones de manera paginada
Debe funcionar exactamente igual que para los caracteres
· Obtener una localización especifico 
Este apartado el API deberá leer el ID localización que quiera obtener y una vez se haya obtenido el resultado de mostrara la información siguiendo el siguiente formato
En caso de que la localización este en memoria interna se deberá mostrar sin hacer la llamada
ID -> ...
Name -> ...
Type -> ...
Dimension -> ...
Created -> ... (formato fecha -> DD:MM:YYYY)
Si un campo no estuviera se saltaría
Ademas se debe guardar en memoria interna la localizacion
· Filtrar caracteres
opciones para filtrar: Status, Gender
Se deberá usar la memoria interna
· Filtrar localizaciones 
opciones para filtrar: Type, Dimension
Se deberá usar la memoria interna
· Eliminar caracteres 
Se debera poder eliminar el recurso mediante su ID
· Eliminar localizaciones
Se debera poder eliminar el recurso mediante su ID
