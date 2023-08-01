import USB_1 from "../../assets/usb_1.png";
import USB_2 from "../../assets/usb_2.png";
import USB_3 from "../../assets/usb_3.png";
import Mother from "../../assets/motherboard_1.png";
import Placa_1 from "../../assets/placa_1.png";
import Placa_2 from "../../assets/placa_2.png";
import Berry_1 from "../../assets/berry_1.png";
import Berry_2 from "../../assets/berry_2.png";
import Sensor from "../../assets/sensor_1.png";
import VGA from "../../assets/vga_1.png";
import CPU_1 from "../../assets/procesador_1.png";
import CPU_2 from "../../assets/procesador_2.png";
import CPU_3 from "../../assets/procesador_3.png";
import Pila_1 from "../../assets/pila_1.png";
import Pila_2 from "../../assets/pila_2.png";
import Pila_3 from "../../assets/pila_3.png";


const Articulos = [
  {
    id: 1,
    nombre: "Cable Cargador Micro Usb",
    imagen: USB_1,
    desc: "Este cable es blanco.",
    categoria: "Cables",
    precio: 500,
  },
  {
    id: 2,
    nombre: "Cable USB blanco",
    imagen: USB_2,
    desc: "Este cable es tipo C.",
    categoria: "Cables",
    precio: 300,
  },
  {
    id: 3,
    nombre: "Cable USB tipo C mallado",
    imagen: USB_3,
    desc: "Este cable es mallado y caro.",
    categoria: "Cables",
    precio: 800,
  },
  {
    id: 4,
    nombre: "Placa madre moderna",
    imagen: Mother,
    desc: "Placa madre de computadora de escritorio.",
    categoria: "Placa Madre",
    precio: 8000,
  },
  {
    id: 5,
    nombre: "Arduino New Model",
    imagen: Placa_1,
    desc: "Placa Arduino, ideal para programación.",
    categoria: "Placa Programación",
    precio: 18000,
  },
  {
    id: 6,
    nombre: "Arduino",
    imagen: Placa_2,
    desc: "Placa Arduino, ideal para programación un poco mas economico.",
    categoria: "Placa Programación",
    precio: 12000,
  },
  {
    id: 7,
    nombre: "Raspberry Potente",
    imagen: Berry_1,
    desc: "Minicomputadora, para multiples usos y extremadamente portatil, potente.",
    categoria: "MiniPC",
    precio: 24000,
  },
  {
    id: 8,
    nombre: "Raspberry",
    imagen: Berry_2,
    desc: "Minicomputadora, para usos muy básicos.",
    categoria: "MiniPC",
    precio: 20000,
  },
  {
    id: 9,
    nombre: "Sensor de sonido",
    imagen: Sensor,
    desc: "Sensor que capta sonidos.",
    categoria: "Placa Soporte",
    precio: 3000,
  },
  {
    id: 10,
    nombre: "Cable VGA",
    imagen: VGA,
    desc: "Cable VGA para computadoras antiguas.",
    categoria: "Cables de Imagén",
    precio: 1000,
  },
  {
    id: 11,
    nombre: "Intel Core I3",
    imagen: CPU_1,
    desc: "Procesador para PC gama baja.",
    categoria: "Procesadores",
    precio: 20000,
  },
  {
    id: 12,
    nombre: "Intel Core I5",
    imagen: CPU_3,
    desc: "Procesador para PC gama media.",
    categoria: "Procesadores",
    precio: 40000,
  },
  {
    id: 13,
    nombre: "Intel Core I7",
    imagen: CPU_2,
    desc: "Procesador para PC gama alta.",
    categoria: "Procesadores",
    precio: 80000,
  },
  {
    id: 14,
    nombre: "Bateria Electrica",
    imagen: Pila_1,
    desc: "Pila recargable de alta capacidad",
    categoria: "Pilas",
    precio: 1500,
  },
  {
    id: 15,
    nombre: "Pila Energizer Doble A",
    imagen: Pila_2,
    desc: "Pila marca Energizer ideal para aparatos pequeños",
    categoria: "Pilas",
    precio: 1800,
  },
  {
    id: 16,
    nombre: "Pila Energizer 9V",
    imagen: Pila_3,
    desc: "Pila de alcalino marca Energizer",
    categoria: "Pilas",
    precio: 2150,
  },
];

export default Articulos;
