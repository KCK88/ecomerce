import { LightweightAuthor, LightweightCategory } from "../../interfaces/IBook";
import { Types } from "mongoose";

export interface IBookMock {
  _id: Types.ObjectId;
  title: string;
  authors: LightweightAuthor[];
  description: string;
  price: number;
  stock: number;
  publisher?: string;
  publishedDate?: Date;
  pageCount?: number;
  language?: string;
  categories: LightweightCategory[];
  coverImage: string;
  images: string[];
  averageRating: number;
  reviewsCount: number;
  featured: boolean;
  discount: number;
  createdAt: Date;
  __v?: number;
}

export const booksMock: IBookMock[] = [
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60b5"),

    title: "O Hobbit",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "J.R.R. Tolkien",
      },
    ],
    description:
      "A aventura de Bilbo Bolseiro, um hobbit que se junta a um grupo de anões para recuperar um tesouro guardado por um dragão.",
    price: 45.9,
    stock: 150,
    publisher: "HarperCollins",
    publishedDate:
      "1937-09-21T00:00:00.000Z" as unknown as Date as unknown as Date,
    pageCount: 310,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Fantasia Épica",
      },
    ],
    coverImage: "https://exemplo.com/capas/o-hobbit.jpg",
    images: [
      "https://exemplo.com/imagens/o-hobbit-1.jpg",
      "https://exemplo.com/imagens/o-hobbit-2.jpg",
    ],
    averageRating: 4.8,
    reviewsCount: 2500,
    featured: true,
    discount: 0.1,
    createdAt: "2023-01-15T08:30:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60b6"),

    title: "Harry Potter e o Prisioneiro de Azkaban",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "J.K. Rowling",
      },
    ],
    description:
      "A terceira parte da jornada de Harry Potter no mundo da magia e em Hogwarts.",
    price: 39.9,
    stock: 200,
    publisher: "Rocco",
    publishedDate: "1997-06-26T00:00:00.000Z" as unknown as Date,
    pageCount: 264,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Fantasia Épica",
      },
    ],
    coverImage: "https://exemplo.com/capas/harry-potter-1.jpg",
    images: [
      "https://exemplo.com/imagens/harry-potter-1-1.jpg",
      "https://exemplo.com/imagens/harry-potter-1-2.jpg",
    ],
    averageRating: 4.9,
    reviewsCount: 1800,
    featured: true,
    discount: 0.15,
    createdAt: "2023-02-20T09:15:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60b7"),

    title: "1984",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "George Orwell",
      },
    ],
    description:
      "Uma distopia sombria sobre um regime totalitário que controla todos os aspectos da vida.",
    price: 35.5,
    stock: 180,
    publisher: "Companhia das Letras",
    publishedDate: "1949-06-08T00:00:00.000Z" as unknown as Date,
    pageCount: 328,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Ficção Científica",
      },
    ],
    coverImage: "https://exemplo.com/capas/1984.jpg",
    images: [
      "https://exemplo.com/imagens/1984-1.jpg",
      "https://exemplo.com/imagens/1984-2.jpg",
    ],
    averageRating: 4.7,
    reviewsCount: 2200,
    featured: true,
    discount: 0.05,
    createdAt: "2023-03-10T10:20:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60b8"),

    title: "Cem Anos de Solidão",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "Gabriel García Márquez",
      },
    ],
    description:
      "A saga da família Buendía na cidade fictícia de Macondo, misturando realidade e fantasia.",
    price: 49.9,
    stock: 120,
    publisher: "Record",
    publishedDate: "1967-05-30T00:00:00.000Z" as unknown as Date,
    pageCount: 432,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Romance Clássico",
      },
    ],
    coverImage: "https://exemplo.com/capas/cem-anos.jpg",
    images: [
      "https://exemplo.com/imagens/cem-anos-1.jpg",
      "https://exemplo.com/imagens/cem-anos-2.jpg",
    ],
    averageRating: 4.9,
    reviewsCount: 1900,
    featured: true,
    discount: 0.1,
    createdAt: "2023-04-05T11:25:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60b9"),

    title: "O Pequeno Príncipe",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "Antoine de Saint-Exupéry",
      },
    ],
    description:
      "Um piloto encontra um pequeno príncipe que viaja de planeta em planeta em busca de respostas.",
    price: 29.9,
    stock: 300,
    publisher: "Agir",
    publishedDate: "1943-04-06T00:00:00.000Z" as unknown as Date,
    pageCount: 96,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Aventuras Infantis",
      },
    ],
    coverImage: "https://exemplo.com/capas/pequeno-principe.jpg",
    images: [
      "https://exemplo.com/imagens/pequeno-principe-1.jpg",
      "https://exemplo.com/imagens/pequeno-principe-2.jpg",
    ],
    averageRating: 4.9,
    reviewsCount: 3500,
    featured: true,
    discount: 0.05,
    createdAt: "2023-05-12T12:30:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60ba"),

    title: "Orgulho e Preconceito",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "Jane Austen",
      },
    ],
    description:
      "A história de Elizabeth Bennet e Mr. Darcy, um dos casais mais icônicos da literatura.",
    price: 37.5,
    stock: 170,
    publisher: "Martin Claret",
    publishedDate: "1813-01-28T00:00:00.000Z" as unknown as Date,
    pageCount: 424,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Romance Clássico",
      },
    ],
    coverImage: "https://exemplo.com/capas/orgulho.jpg",
    images: [
      "https://exemplo.com/imagens/orgulho-1.jpg",
      "https://exemplo.com/imagens/orgulho-2.jpg",
    ],
    averageRating: 4.8,
    reviewsCount: 2100,
    featured: true,
    discount: 0.1,
    createdAt: "2023-06-18T13:35:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60bb"),

    title: "Dom Quixote",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "Miguel de Cervantes",
      },
    ],
    description:
      "As aventuras de um fidalgo que enlouquece após ler muitos romances de cavalaria.",
    price: 55.0,
    stock: 90,
    publisher: "Penguin Classics",
    publishedDate: "1605-01-16T00:00:00.000Z" as unknown as Date,
    pageCount: 863,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Romance Clássico",
      },
    ],
    coverImage: "https://exemplo.com/capas/quixote.jpg",
    images: [
      "https://exemplo.com/imagens/quixote-1.jpg",
      "https://exemplo.com/imagens/quixote-2.jpg",
    ],
    averageRating: 4.7,
    reviewsCount: 1800,
    featured: true,
    discount: 0.05,
    createdAt: "2023-07-22T14:40:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60bc"),

    title: "Crime e Castigo",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "Fiódor Dostoiévski",
      },
    ],
    description:
      "Um estudante comete um assassinato e lida com as consequências psicológicas de seu crime.",
    price: 42.9,
    stock: 110,
    publisher: "Editora 34",
    publishedDate: "1866-01-01T00:00:00.000Z" as unknown as Date,
    pageCount: 576,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Romance Clássico",
      },
    ],
    coverImage: "https://exemplo.com/capas/crime.jpg",
    images: [
      "https://exemplo.com/imagens/crime-1.jpg",
      "https://exemplo.com/imagens/crime-2.jpg",
    ],
    averageRating: 4.8,
    reviewsCount: 2000,
    featured: true,
    discount: 0.1,
    createdAt: "2023-08-30T15:45:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60bd"),

    title: "O Senhor dos Anéis: A Sociedade do Anel",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "J.R.R. Tolkien",
      },
    ],
    description:
      "A jornada de Frodo Bolseiro para destruir o Um Anel e salvar a Terra-média.",
    price: 59.9,
    stock: 140,
    publisher: "Martins Fontes",
    publishedDate: "1954-07-29T00:00:00.000Z" as unknown as Date,
    pageCount: 576,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Fantasia Épica",
      },
    ],
    coverImage: "https://exemplo.com/capas/sociedade.jpg",
    images: [
      "https://exemplo.com/imagens/sociedade-1.jpg",
      "https://exemplo.com/imagens/sociedade-2.jpg",
    ],
    averageRating: 4.9,
    reviewsCount: 2800,
    featured: true,
    discount: 0.15,
    createdAt: "2023-09-10T16:50:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60be"),

    title: "Harry Potter e a Pedra Filosofal",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "J.K. Rowling",
      },
    ],
    description:
      "O primeiro livro da série que apresenta Harry Potter e seu ingresso no mundo da magia.",
    price: 34.9,
    stock: 250,
    publisher: "Rocco",
    publishedDate: "1997-06-26T00:00:00.000Z" as unknown as Date,
    pageCount: 264,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Fantasia Épica",
      },
    ],
    coverImage: "https://exemplo.com/capas/pedra.jpg",
    images: [
      "https://exemplo.com/imagens/pedra-1.jpg",
      "https://exemplo.com/imagens/pedra-2.jpg",
    ],
    averageRating: 4.9,
    reviewsCount: 3000,
    featured: true,
    discount: 0.1,
    createdAt: "2023-10-05T17:55:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60bf"),

    title: "A Revolução dos Bichos",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "George Orwell",
      },
    ],
    description:
      "Uma sátira política sobre uma revolução dos animais contra os humanos.",
    price: 32.5,
    stock: 190,
    publisher: "Companhia das Letras",
    publishedDate: "1945-08-17T00:00:00.000Z" as unknown as Date,
    pageCount: 152,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Ficção Científica",
      },
    ],
    coverImage: "https://exemplo.com/capas/bichos.jpg",
    images: [
      "https://exemplo.com/imagens/bichos-1.jpg",
      "https://exemplo.com/imagens/bichos-2.jpg",
    ],
    averageRating: 4.8,
    reviewsCount: 2400,
    featured: true,
    discount: 0.05,
    createdAt: "2023-11-12T18:00:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60c0"),

    title: "O Amor nos Tempos do Cólera",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "Gabriel García Márquez",
      },
    ],
    description:
      "Uma história de amor que atravessa décadas, repleta de paixão e nostalgia.",
    price: 47.9,
    stock: 130,
    publisher: "Record",
    publishedDate: "1985-03-12T00:00:00.000Z" as unknown as Date,
    pageCount: 368,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Romance Clássico",
      },
    ],
    coverImage: "https://exemplo.com/capas/amor.jpg",
    images: [
      "https://exemplo.com/imagens/amor-1.jpg",
      "https://exemplo.com/imagens/amor-2.jpg",
    ],
    averageRating: 4.7,
    reviewsCount: 1700,
    featured: true,
    discount: 0.1,
    createdAt: "2023-12-20T19:05:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60c1"),

    title: "O Silmarillion",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "J.R.R. Tolkien",
      },
    ],
    description:
      "A mitologia por trás do mundo de O Senhor dos Anéis, contando a história da Terra-média.",
    price: 52.9,
    stock: 100,
    publisher: "HarperCollins",
    publishedDate: "1977-09-15T00:00:00.000Z" as unknown as Date,
    pageCount: 480,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Fantasia Épica",
      },
    ],
    coverImage: "https://exemplo.com/capas/silmarillion.jpg",
    images: [
      "https://exemplo.com/imagens/silmarillion-1.jpg",
      "https://exemplo.com/imagens/silmarillion-2.jpg",
    ],
    averageRating: 4.6,
    reviewsCount: 1500,
    featured: true,
    discount: 0.1,
    createdAt: "2024-01-25T20:10:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60c2"),

    title: "Harry Potter e as Relíquias da Morte",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "J.K. Rowling",
      },
    ],
    description:
      "O último livro da série, onde Harry enfrenta Voldemort em uma batalha final.",
    price: 44.9,
    stock: 180,
    publisher: "Rocco",
    publishedDate: "2007-07-21T00:00:00.000Z" as unknown as Date,
    pageCount: 512,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Fantasia Épica",
      },
    ],
    coverImage: "https://exemplo.com/capas/reliquias.jpg",
    images: [
      "https://exemplo.com/imagens/reliquias-1.jpg",
      "https://exemplo.com/imagens/reliquias-2.jpg",
    ],
    averageRating: 4.9,
    reviewsCount: 2700,
    featured: true,
    discount: 0.15,
    createdAt: "2024-02-15T21:15:00.000Z" as unknown as Date,
    __v: 0,
  },
  {
    _id: new Types.ObjectId("68753f2b930c8147185c60c3"),

    title: "O Processo",
    authors: [
      {
        _id: new Types.ObjectId("686e82bf508e3d440dea8b80"),

        name: "Franz Kafka",
      },
    ],
    description:
      "A história de Josef K., que é preso e processado por um crime que não conhece.",
    price: 38.5,
    stock: 160,
    publisher: "Companhia das Letras",
    publishedDate: "1925-01-01T00:00:00.000Z" as unknown as Date,
    pageCount: 256,
    language: "Português",
    categories: [
      {
        _id: new Types.ObjectId("68717569013eebb2ca6e7857"),

        genre: "Ficção Científica",
      },
    ],
    coverImage: "https://exemplo.com/capas/processo.jpg",
    images: [
      "https://exemplo.com/imagens/processo-1.jpg",
      "https://exemplo.com/imagens/processo-2.jpg",
    ],
    averageRating: 4.5,
    reviewsCount: 1300,
    featured: false,
    discount: 0.05,
    createdAt: "2024-03-10T22:20:00.000Z" as unknown as Date,
    __v: 0,
  },
];
