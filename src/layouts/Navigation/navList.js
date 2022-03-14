import {
  DashboardOutlined,
  Person,
  FolderOpen,
  BorderColor,
  CalendarMonth,
  Group
} from "@mui/icons-material";

const navBarList = [
  {
    icon: DashboardOutlined,
    desc: "Inicio",
    secondDesc: "",
    badge: 0,
    subList: [],
    link: "/",
  },
  {
    icon: CalendarMonth,
    desc: "Calendario",
    secondDesc: "",
    badge: 0,
    subList: [],
    link: "/calendario"
  },
  {
    icon: FolderOpen,
    desc: "Matricula",
    secondDesc: "Message from andi",
    link: "/matricula"
  },
  {
    icon: Group,
    desc: "Grupos",
    secondDesc: "",
    badge: 0,
    subList: [],
    link: "/grupos"
  },
  {
    icon: Person,
    desc: "Estudiantes",
    secondDesc: "",
    badge: 0,
    subList: [],
    link: "/estudiantes"
  },
  {
    icon: BorderColor,
    desc: "Editar",
    secondDesc: "",
    badge: 0,
    subList: [],
    link: "/editar"
  },
];

export default navBarList
