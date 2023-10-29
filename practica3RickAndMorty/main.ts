/**
 * PARA MI :
 *
 * Listar todos los characteres de manera paginada
 * Obtener un carácter especifico por id
 *
 * Listar todos las localizaciones de manera paginada
 * Obtener una localización especifico por id
 *
 * Filtrar characteres. opciones para filtrar: Status, Gender. Se deberá usar la memoria interna
 * Filtrar localizacione. opciones para filtrar: Type, Dimension. Se deberá usar la memoria interna
 *
 * Eliminar characteres por id
 * Eliminar localizaciones por id
 */

import express, { Request, Response } from "npm:express@4.18.2";

import { Character, Location } from "./types.ts";

const personajes: Character[] = []; //array donde guardo los personajes
const location: Location[] = []; //array donde guardo la localizacion

const app = express();
const BASE_URL = `https://rickandmortyapi.com/api`;

// Obetener un personaje especifico por su id donde mostrara su informacion
app.get(
  "/character/:id",
  async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const url = `${BASE_URL}/character/${id}`;
    try {
      const data = await fetch(url);
      const json = await data.json();
      res.json({
        ID: json.id,
        Name: json.name,
        Status: json.status,
        Species: json.species,
        Gender: json.gender,
        Origin: json.origin.name,
        Location: json.location.name,
        Created: json.created,
      });
    } catch (error) {
      res.status(400).json({ message: "Personaje no encontrado" });
    }
  },
);

//obtener una locaclizacion especifica por id del personaje donde mostrara la info de la localizacion
app.get("/location/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const url = `${BASE_URL}/location/${id}`;
  try {
    const data = await fetch(url);
    const json = await data.json();
    res.json({
      ID: json.id,
      Name: json.name,
      Type: json.type,
      Dimension: json.dimension,
      Created: json.created,
    });
  } catch (error) {
    res.status(400).json({
      message: "Personaje no encontrado por localizacion",
    });
  }
});

// Uso de metodo POST para agregar a nuestros arrays los personajes en array personajes y locations

app.post("/character", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await fetch(`${BASE_URL}/character/${id}`);
    const json = await data.json();
    personajes.push(json);
  } catch (error) {
    res.status(400).json({
      message: " No se ha agreagdo el personaje al array personajes!!",
    });
  }
});

app.post("/location", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = await fetch(`${BASE_URL}/location/${id}`);
    const json = await data.json();
    location.push(json);
  } catch (error) {
    res.status(400).json({
      message: " No se ha agreagdo el personaje al array personajes!!",
    });
  }
});

//Eliminar character por id
/**
 * en esta funcion he usado ifnormacion de la pagina:
 * https://www.tutorialspoint.com/typescript/typescript_array_splice.htm
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */
app.delete("/character/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const borradoPersonaje = personajes.findIndex((character) =>
    character.id === id
  );
  try {
    personajes.splice(borradoPersonaje, 1);
  } catch (error) {
    res.status(400).json({ message: "Personaje no encontrado" });
  }
});

//Eliminar Localizacion por id
app.delete("/location/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const borradoLocation = location.findIndex((location) => location.id === id);
  try {
    location.splice(borradoLocation, 1);
  } catch (error) {
    res.status(400).json({ message: "Localizacion no se encontro" });
  }
});

//Filtrar por Status y Gender
app.get("/character/:status/:gender", async (req: Request, res: Response) => {
  const status = req.params.status;
  const gender = req.params.gender;

  const personajeFiltrado = personajes.filter((personaje) =>
    personaje.gender === gender && personaje.status === status
  );
  res.json(personajeFiltrado);
});

//filtrar por Type y Dimension
app.get("/location/:type/:dimension", async (req: Request, res: Response) => {
  const type = req.params.type;
  const dimension = req.params.dimension;

  const locationFiltrado = location.filter((location) =>
    location.type === type && location.dimension === dimension
  );
  res.json(locationFiltrado);
});

app.listen(3000, () => {
  console.log("Funciona");
});
