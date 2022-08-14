import bowl from '../assets/img/bowl.jpg'
import chamber from '../assets/img/chamber.webp'
import cocochip from '../assets/img/cocochip.jpg'
import madriguera from '../assets/img/madriguera.webp'
import papel from '../assets/img/papel.webp'
import puente from '../assets/img/puente.webp'
import rueda from '../assets/img/rueda.jpg'
import terrario1 from '../assets/img/terrario1.webp'
import terrario2 from '../assets/img/terrario2.webp'
import tunel from '../assets/img/tunel.webp'


export const ITEMS = [
    {
		id: '1',
		title: 'Multi Chamber',
		description: 'Laberinto de hámster de múltiples cámaras realizada con material reciclado: viene con 2 entradas y 6 habitaciones, todas las habitaciones y la plataforma del techo son de fácil acceso como un túnel subterráneo y un sistema de laberinto mediante una abertura conectada, imitan altamente la madriguera salvaje de los hámsteres para estimular su instinto de esconderse y explorar',
		category: 'escondite',
		img: chamber,
		price: 400,
		stock: 4,
	},
    {
		id: '2',
		title: 'Terrarium',
		description: 'Gran vista y diseño moderno: fabricado con vidrio templado, diseñamos 3 ventanas de vista que logran su observación desde muchos ángulos y en cualquier momento. La característica de color fresco y aspecto moderno combina con el entorno de tu hogar de forma natural, enriquece la vida de tu hamster. La decoración en jaulass se vende por separado, no incluida',
		category: 'jaulass',
		img: terrario1,
		price: 820,
		stock: 3,
	},
    {
		id: '3',
		title: 'Rueda silenciosa',
		description: 'Fabricada en acrílico o bambú. La superficie suave de la pista brinda una experiencia agradable para las patas al correr. Materiales son duraderos y resistentes a las rozaduras.',
		category: 'ruedas',
		img: rueda,
		price: 220,
		stock: 10,
	},
    {
		id: '4',
		title: 'Pulpa de papel',
		description: 'Pulpa natural para la jaulas o terrario de tu hamster hecha con papel de algodón, es absorbente y retiene olores. Colores a elección',
		category: 'ambientacion',
		img: papel,
		price: 180,
		stock: 8,
	},
    {
		id: '5',
		title: 'Túnel',
		description: 'Túneles hechos a mano con carton para imitar el hábitat salvaje de los hámsters para construir una madriguera de aspecto natural y sistemas de túneles subterráneos para que explore y se esconda. Estimularlos a hacer ejercicio y cavar para mejorar su salud física y mental.',
		category: 'accesorios',
		img: tunel,
		price: 100,
		stock: 12,
	},
    {
		id: '6',
		title: 'Madriguera',
		description: 'La casa escondite con ventana y puerta trae mucho aire fresco para tu amigo peludo. Además, la espaciosa habitación enriquece las actividades de las pequeñas mascotas. Hecho con carton rígido decorado con pintura aantihumedad apta para roedores',
		category: 'escondite',
		img: madriguera,
		price: 80,
		stock: 9,
	},
    {
		id: '7',
		title: 'Coco Chips',
		description: 'Hecho de chips y gránulos de fibra de coco natural seleccionados. Fomenta la excavación natural y la madriguera de las mascotas roedoras.',
		category: 'ambientacion',
		img: cocochip,
		price: 160,
		stock: 1,
	},
    {
		id: '8',
		title: 'Puente',
		description: 'Hecho a mano y duradero: los palos de madera de álamo se secan a alta temperatura, duran mucho, son beneficiosos para los dientes de las mascotas al masticar y son un gran juguete para los hamsters.',
		category: 'accesorios',
		img: puente,
		price: 200,
		stock: 3,
	},
    {
		id: '9',
		title: 'Bowl',
		description: 'Fácil de limpiar: la superficie lisa del tazón de comida para mascotas está pulida a mano, por lo que es fácil de limpiar o lavar.',
		category: 'accesorios',
		img: bowl,
		price: 100,
		stock: 10,
	},
    {
		id: '10',
		title: 'Terrarium de madera',
		description: 'Jaula de hámster espaciosa. Presenta mucha ventilación a través de las ranuras curvas en la parte superior de la jaulas.',
		category: 'jaulas',
		img: terrario2,
		price: 1000,
		stock: 2,
	},
]