import interestelar from "../components/interestelar.jpg";
import padrino from "../components/el padrino.jpg";
import parasitos from "../components/parasitos.jpg";
import coco from "../components/coco.jpeg";
import madmax from "../components/mad max.jpg";
import chihiro from "../components/chihiro.jpg";
import dejameSalir from "../components/dejame salir.jpg";
import amelie from "../components/amelie.jpg";
import lalaland from "../components/La_La_Land.png";
import bladeRunner from "../components/blade runner.jpg";

const movies = [
  { id: 1, title: "Interestelar", genre: "Ciencia ficción", year: 2014, rating: 8.7,
    image: interestelar,
    description: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad." },
  { id: 2, title: "El Padrino", genre: "Drama", year: 1972, rating: 9.2,
    image: padrino,
    description: "El patriarca de una familia mafiosa transfiere el control de su imperio a su hijo más reacio." },
  { id: 3, title: "Parásitos", genre: "Suspenso", year: 2019, rating: 8.5,
    image: parasitos,
    description: "Una familia pobre se infiltra poco a poco en la vida de una familia adinerada, con consecuencias inesperadas." },
  { id: 4, title: "Coco", genre: "Animación", year: 2017, rating: 8.4,
    image: coco,
    description: "Miguel sueña con ser músico y termina en la Tierra de los Muertos, donde descubre la historia de su familia." },
  { id: 5, title: "Mad Max: Furia en el camino", genre: "Acción", year: 2015, rating: 8.1,
    image: madmax,
    description: "En un desierto postapocalíptico, una guerrera y un prisionero huyen de un tirano en una persecución sin pausa." },
  { id: 6, title: "El viaje de Chihiro", genre: "Fantasía", year: 2001, rating: 8.6,
    image: chihiro,
    description: "Una niña queda atrapada en un mundo de espíritus y debe trabajar en unos baños para salvar a sus padres." },
  { id: 7, title: "Déjame salir", genre: "Terror", year: 2017, rating: 7.7,
    image: dejameSalir,
    description: "Un joven fotógrafo visita a la familia de su novia y empieza a notar que algo anda muy mal." },
  { id: 8, title: "Amélie", genre: "Comedia", year: 2001, rating: 8.3,
    image: amelie,
    description: "Una camarera parisina decide mejorar en secreto la vida de quienes la rodean mientras busca su propio amor." },
  { id: 9, title: "La La Land", genre: "Musical", year: 2016, rating: 8.0,
    image: lalaland,
    description: "Una aspirante a actriz y un pianista de jazz persiguen sus sueños en Los Ángeles y se enamoran en el camino." },
  { id: 10, title: "Blade Runner 2049", genre: "Ciencia ficción", year: 2017, rating: 8.0,
    image: bladeRunner,
    description: "Un nuevo replicante descubre un secreto que podría hundir lo que queda de la sociedad." },
];

export default movies;