export interface Sale {
  id: string;
  product: {
    name: string;
    image: string;
    id: string;
  };
  customer: {
    name: string;
    email: string;
  };
  delivery: {
    country: string;
    address: string;
  };
  status: "shipped" | "processing" | "cancelled";
  subtotal: string;
  shipping: string;
  total: string;
}

export const salesData: Sale[] = [
  {
    id: "1",
    product: {
      name: "Macbook Pro",
      image: "",
      id: "10-3290-08",
    },
    customer: {
      name: "Rodney Cannon",
      email: "rodney.cannon@gmail.com",
    },
    delivery: {
      country: "United Kingdom",
      address: "193 Cole Plains Suite 649, 891203",
    },
    status: "shipped",
    subtotal: "$100.00",
    shipping: "$18.00",
    total: "$118.00",
  },
  {
    id: "2",
    product: {
      name: "Dell Laptop",
      image: "",
      id: "10-3290-09",
    },
    customer: {
      name: "Mike Franklin",
      email: "mike.franklin@gmail.com",
    },
    delivery: {
      country: "United States",
      address: "123 Main St, 12345",
    },
    status: "processing",
    subtotal: "$180.00",
    shipping: "$28.00",
    total: "$208.00",
  },
  {
    id: "3",
    product: {
      name: "Macbook Air",
      image: "",
      id: "10-3290-10",
    },
    customer: {
      name: "Louis Franklin",
      email: "louis.franklin@gmail.com",
    },
    delivery: {
      country: "Germany",
      address: "456 Berlin St, 54321",
    },
    status: "processing",
    subtotal: "$100.00",
    shipping: "$18.00",
    total: "$118.00",
  },
  {
    id: "4",
    product: {
      name: "Macbook",
      image: "",
      id: "10-3290-11",
    },
    customer: {
      name: "Dominic Love",
      email: "dominic.love@gmail.com",
    },
    delivery: {
      country: "Spain",
      address: "789 Madrid Ave, 67890",
    },
    status: "shipped",
    subtotal: "$560.00",
    shipping: "$18.00",
    total: "$578.00",
  },
  {
    id: "5",
    product: {
      name: "LG Laptop",
      image: "",
      id: "10-3290-12",
    },
    customer: {
      name: "Adrian Drake",
      email: "adrian.drake@gmail.com",
    },
    delivery: {
      country: "United Kingdom",
      address: "321 London Rd, 98765",
    },
    status: "cancelled",
    subtotal: "$340.00",
    shipping: "$34.00",
    total: "$374.00",
  },
  {
    id: "6",
    product: {
      name: "Macbook Pro",
      image: "",
      id: "10-3290-13",
    },
    customer: {
      name: "Walter Quinn",
      email: "walter.quinn@gmail.com",
    },
    delivery: {
      country: "United States",
      address: "654 New York St, 11223",
    },
    status: "shipped",
    subtotal: "$180.00",
    shipping: "$40.00",
    total: "$220.00",
  },
  {
    id: "7",
    product: {
      name: "Macbook Pro",
      image: "",
      id: "10-3290-14",
    },
    customer: {
      name: "Victor Roberson",
      email: "victor.roberson@gmail.com",
    },
    delivery: {
      country: "Germany",
      address: "987 Munich Blvd, 44556",
    },
    status: "shipped",
    subtotal: "$680.00",
    shipping: "$18.00",
    total: "$698.00",
  },
  {
    id: "8",
    product: {
      name: "HP Pavilion",
      image: "",
      id: "10-3290-15",
    },
    customer: {
      name: "Sarah Mitchell",
      email: "sarah.mitchell@gmail.com",
    },
    delivery: {
      country: "France",
      address: "123 Paris St, 75001",
    },
    status: "processing",
    subtotal: "$450.00",
    shipping: "$25.00",
    total: "$475.00",
  },
  {
    id: "9",
    product: {
      name: "Lenovo ThinkPad",
      image: "",
      id: "10-3290-16",
    },
    customer: {
      name: "James Anderson",
      email: "james.anderson@gmail.com",
    },
    delivery: {
      country: "Canada",
      address: "456 Toronto Ave, M5H 2N2",
    },
    status: "shipped",
    subtotal: "$720.00",
    shipping: "$30.00",
    total: "$750.00",
  },
  {
    id: "10",
    product: {
      name: "ASUS ZenBook",
      image: "",
      id: "10-3290-17",
    },
    customer: {
      name: "Emily Johnson",
      email: "emily.johnson@gmail.com",
    },
    delivery: {
      country: "Australia",
      address: "789 Sydney Rd, 2000",
    },
    status: "shipped",
    subtotal: "$890.00",
    shipping: "$45.00",
    total: "$935.00",
  },
  {
    id: "11",
    product: {
      name: "Macbook Air",
      image: "",
      id: "10-3290-18",
    },
    customer: {
      name: "David Brown",
      email: "david.brown@gmail.com",
    },
    delivery: {
      country: "United States",
      address: "321 Los Angeles St, 90001",
    },
    status: "processing",
    subtotal: "$999.00",
    shipping: "$35.00",
    total: "$1034.00",
  },
  {
    id: "12",
    product: {
      name: "Dell XPS",
      image: "",
      id: "10-3290-19",
    },
    customer: {
      name: "Lisa Martinez",
      email: "lisa.martinez@gmail.com",
    },
    delivery: {
      country: "Mexico",
      address: "654 Mexico City Blvd, 06000",
    },
    status: "cancelled",
    subtotal: "$1200.00",
    shipping: "$50.00",
    total: "$1250.00",
  },
  {
    id: "13",
    product: {
      name: "Macbook Pro",
      image: "",
      id: "10-3290-20",
    },
    customer: {
      name: "Robert Taylor",
      email: "robert.taylor@gmail.com",
    },
    delivery: {
      country: "United Kingdom",
      address: "987 Manchester St, M1 1AA",
    },
    status: "shipped",
    subtotal: "$1500.00",
    shipping: "$20.00",
    total: "$1520.00",
  },
  {
    id: "14",
    product: {
      name: "Acer Swift",
      image: "",
      id: "10-3290-21",
    },
    customer: {
      name: "Jennifer White",
      email: "jennifer.white@gmail.com",
    },
    delivery: {
      country: "Italy",
      address: "123 Rome Ave, 00118",
    },
    status: "processing",
    subtotal: "$550.00",
    shipping: "$28.00",
    total: "$578.00",
  },
  {
    id: "15",
    product: {
      name: "Microsoft Surface",
      image: "",
      id: "10-3290-22",
    },
    customer: {
      name: "Michael Garcia",
      email: "michael.garcia@gmail.com",
    },
    delivery: {
      country: "Spain",
      address: "456 Barcelona St, 08001",
    },
    status: "shipped",
    subtotal: "$1100.00",
    shipping: "$32.00",
    total: "$1132.00",
  },
  {
    id: "16",
    product: {
      name: "LG Gram",
      image: "",
      id: "10-3290-23",
    },
    customer: {
      name: "Amanda Lee",
      email: "amanda.lee@gmail.com",
    },
    delivery: {
      country: "Japan",
      address: "789 Tokyo St, 100-0001",
    },
    status: "shipped",
    subtotal: "$950.00",
    shipping: "$55.00",
    total: "$1005.00",
  },
  {
    id: "17",
    product: {
      name: "Macbook",
      image: "",
      id: "10-3290-24",
    },
    customer: {
      name: "Christopher Wilson",
      email: "christopher.wilson@gmail.com",
    },
    delivery: {
      country: "United States",
      address: "321 Chicago Ave, 60601",
    },
    status: "processing",
    subtotal: "$750.00",
    shipping: "$22.00",
    total: "$772.00",
  },
  {
    id: "18",
    product: {
      name: "Dell Laptop",
      image: "",
      id: "10-3290-25",
    },
    customer: {
      name: "Patricia Moore",
      email: "patricia.moore@gmail.com",
    },
    delivery: {
      country: "Netherlands",
      address: "654 Amsterdam Rd, 1012 AB",
    },
    status: "shipped",
    subtotal: "$480.00",
    shipping: "$26.00",
    total: "$506.00",
  },
  {
    id: "19",
    product: {
      name: "HP EliteBook",
      image: "",
      id: "10-3290-26",
    },
    customer: {
      name: "Daniel Jackson",
      email: "daniel.jackson@gmail.com",
    },
    delivery: {
      country: "Sweden",
      address: "987 Stockholm St, 111 22",
    },
    status: "cancelled",
    subtotal: "$650.00",
    shipping: "$30.00",
    total: "$680.00",
  },
  {
    id: "20",
    product: {
      name: "Macbook Pro",
      image: "",
      id: "10-3290-27",
    },
    customer: {
      name: "Nancy Thompson",
      email: "nancy.thompson@gmail.com",
    },
    delivery: {
      country: "Switzerland",
      address: "123 Zurich Ave, 8001",
    },
    status: "shipped",
    subtotal: "$1800.00",
    shipping: "$40.00",
    total: "$1840.00",
  },
  {
    id: "21",
    product: {
      name: "Lenovo Yoga",
      image: "",
      id: "10-3290-28",
    },
    customer: {
      name: "Kevin Davis",
      email: "kevin.davis@gmail.com",
    },
    delivery: {
      country: "Belgium",
      address: "456 Brussels Blvd, 1000",
    },
    status: "processing",
    subtotal: "$820.00",
    shipping: "$24.00",
    total: "$844.00",
  },
  {
    id: "22",
    product: {
      name: "ASUS ROG",
      image: "",
      id: "10-3290-29",
    },
    customer: {
      name: "Michelle Harris",
      email: "michelle.harris@gmail.com",
    },
    delivery: {
      country: "Poland",
      address: "789 Warsaw St, 00-001",
    },
    status: "shipped",
    subtotal: "$1350.00",
    shipping: "$38.00",
    total: "$1388.00",
  },
  {
    id: "23",
    product: {
      name: "Macbook Air",
      image: "",
      id: "10-3290-30",
    },
    customer: {
      name: "Steven Clark",
      email: "steven.clark@gmail.com",
    },
    delivery: {
      country: "Portugal",
      address: "321 Lisbon Rd, 1000-001",
    },
    status: "shipped",
    subtotal: "$1100.00",
    shipping: "$28.00",
    total: "$1128.00",
  },
  {
    id: "24",
    product: {
      name: "Dell Inspiron",
      image: "",
      id: "10-3290-31",
    },
    customer: {
      name: "Laura Rodriguez",
      email: "laura.rodriguez@gmail.com",
    },
    delivery: {
      country: "Greece",
      address: "654 Athens Ave, 104 31",
    },
    status: "processing",
    subtotal: "$420.00",
    shipping: "$27.00",
    total: "$447.00",
  },
  {
    id: "25",
    product: {
      name: "HP Spectre",
      image: "",
      id: "10-3290-32",
    },
    customer: {
      name: "Ryan Lewis",
      email: "ryan.lewis@gmail.com",
    },
    delivery: {
      country: "Norway",
      address: "987 Oslo St, 0150",
    },
    status: "shipped",
    subtotal: "$1400.00",
    shipping: "$42.00",
    total: "$1442.00",
  },
  {
    id: "26",
    product: {
      name: "Macbook Pro",
      image: "",
      id: "10-3290-33",
    },
    customer: {
      name: "Karen Walker",
      email: "karen.walker@gmail.com",
    },
    delivery: {
      country: "Denmark",
      address: "123 Copenhagen Rd, 1050",
    },
    status: "cancelled",
    subtotal: "$1600.00",
    shipping: "$35.00",
    total: "$1635.00",
  },
  {
    id: "27",
    product: {
      name: "Acer Predator",
      image: "",
      id: "10-3290-34",
    },
    customer: {
      name: "Jason Hall",
      email: "jason.hall@gmail.com",
    },
    delivery: {
      country: "Finland",
      address: "456 Helsinki Ave, 00100",
    },
    status: "shipped",
    subtotal: "$1250.00",
    shipping: "$33.00",
    total: "$1283.00",
  },
  {
    id: "28",
    product: {
      name: "Microsoft Surface Pro",
      image: "",
      id: "10-3290-35",
    },
    customer: {
      name: "Betty Allen",
      email: "betty.allen@gmail.com",
    },
    delivery: {
      country: "Ireland",
      address: "789 Dublin St, D02 AF30",
    },
    status: "processing",
    subtotal: "$980.00",
    shipping: "$29.00",
    total: "$1009.00",
  },
  {
    id: "29",
    product: {
      name: "LG Ultra",
      image: "",
      id: "10-3290-36",
    },
    customer: {
      name: "Edward Young",
      email: "edward.young@gmail.com",
    },
    delivery: {
      country: "Austria",
      address: "321 Vienna Blvd, 1010",
    },
    status: "shipped",
    subtotal: "$870.00",
    shipping: "$31.00",
    total: "$901.00",
  },
  {
    id: "30",
    product: {
      name: "Macbook",
      image: "",
      id: "10-3290-37",
    },
    customer: {
      name: "Helen King",
      email: "helen.king@gmail.com",
    },
    delivery: {
      country: "Czech Republic",
      address: "654 Prague St, 110 00",
    },
    status: "shipped",
    subtotal: "$920.00",
    shipping: "$26.00",
    total: "$946.00",
  },
];
