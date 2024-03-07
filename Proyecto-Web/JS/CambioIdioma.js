// Cambio de idioma
// Elementos del DOM - Inicio
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var a4 = document.getElementById("a4");
var a5 = document.getElementById("a5");
var textoInicioAcerca = document.getElementById("textoInicio");
var subtituloAcerca = document.getElementById("subtituloInicio");
var DescCV = document.getElementById("DoadCv");

var perfilTitulo = document.getElementById("perfilProfesional");
var perfilTexto = document.getElementById("textoPerfilProfesional");
var misionTitulo = document.getElementById("mision");
var misionTexto = document.getElementById("textoMision");
var visionTitulo = document.getElementById("vision");
var visionTexto = document.getElementById("textoVision");

var tituloHabilidades  = document.getElementById("tituloHabilidades");
var tituloProgramacion  = document.getElementById("tituloProgramacion");
var tituloBD  = document.getElementById("tituloBD");
var tituloDataAnalic = document.getElementById("tituloDataAnalic");
var tituloTools  = document.getElementById("tituloTools");
var tituloConocimientos  = document.getElementById("tituloConocimientos");

var tituloValores =  document.getElementById("tituloValores");
var perseverancia =  document.getElementById("perseverancia");
var perseveranciaTexto =  document.getElementById("perseveranciaTexto");
var liderazgo =  document.getElementById("liderazgo");
var liderazgoTexto =  document.getElementById("liderazgoTexto");
var Excelencia =  document.getElementById("Excelencia");
var ExcelenciaTexto =  document.getElementById("ExcelenciaTexto");
var lealtad =  document.getElementById("Lealtad");
var lealtadTexto =  document.getElementById("LealtadTexto");
var respeto =  document.getElementById("Respeto");
var respetoTexto =  document.getElementById("RespetoTexto");

var cambioIdiomaBtn = document.getElementById("cambioIdiomaBtn");

// Definir textos en español e inglés
var textos = {
  español: {
    a1: "Inicio",
    a2: "Acerca de",
    a3: "Habilidades",
    a4: "Proyectos",
    a5: "Contacto",
    textoInicioAcerca: "Transformando ideas en experiencias digitales",
    subtituloAcerca: "Desarrolladora de Software",
    DescCV:"Descargar CV",

    perfilTitulo: "Perfil Profesional",
    perfilTexto: "Desarrolladora de Software full stack, con experiencia en diversos lenguajes de programación, con conocimientos en distintos frameworks y bases de datos relacionales, apasionada por crear soluciones innovadoras y funcionales que mejoren la experiencia del usuario.",
    misionTitulo: "Misión",
    misionTexto: "Crear soluciones tecnológicas innovadoras que transforman ideas en realidades digitales, aplicándolas con excelencia y respeto por el cliente para proporcionar productos de calidad que generen un impacto positivo.",
    visionTitulo: "Visión",
    visionTexto: "Llegar a ser una líder en el diseño y desarrollo de software, reconocida por la lealtad hacia la excelencia técnica y el compromiso con la innovación, ofreciendo soluciones digitales que inspiran y mejoran la vida de las personas.",
    
    tituloHabilidades: "Habilidades",
    tituloProgramacion: "Programación",
    tituloBD: "Bases de Datos",
    tituloDataAnalic: "Análisis de Datos",
    tituloTools: "Herramientas",
    tituloConocimientos: "Conocimientos",

    tituloValores: "Valores",
    perseverancia: "Perseverancia",
    perseveranciaTexto: "La determinación de seguir adelante, aprender de los fracasos y persistir hasta alcanzar los objetivos.",
    liderazgo: "Liderazgo",
    liderazgoTexto: "Influir positivamente en otros para lograr objetivos comunes. Inspirar, motivar y guiar a los demás con visión, ética y habilidades de comunicación efectivas.",
    Excelencia: "Excelencia",
    ExcelenciaTexto: "Buscar constantemente la mejora y la innovación, entregando resultados de alta calidad que superen las expectativas y contribuyan al éxito.",
    lealtad: "Lealtad",
    lealtadTexto: "Actuar con integridad, honradez y confianza, manteniendo la confidencialidad cuando sea necesario.",
    respeto: "Respeto",
    respetoTexto: "Valorar a los demás, sus opiniones, ideas y contribuciones. Con cortesía, empatía y consideración, creando un ambiente de trabajo positivo y colaborativo."

  },
  inglés: {
    a1: "Home",
    a2: "About us",
    a3: "Skills",
    a4: "Projects",
    a5: "Contact",
    textoInicioAcerca: "Transforming ideas into digital experiences",
    subtituloAcerca: "Software Developer",
    DescCV: "Download CV",

    perfilTitulo: "Professional Profile",
    perfilTexto: "Full stack software developer, with experience in various programming languages, knowledge in different frameworks and relational databases, passionate about creating innovative and functional solutions that improve the user experience.",
    misionTitulo: "Mission",
    misionTexto: "To create innovative technological solutions that transform ideas into digital realities, applying them with excellence and respect for the client to provide quality products that generate a positive impact.",
    visionTitulo: "Vision",
    visionTexto: "To become a leader in software design and development, recognized for loyalty to technical excellence and commitment to innovation, offering digital solutions that inspire and improve people\'s lives.",

    tituloHabilidades: "Skills",
    tituloProgramacion: "Programming",
    tituloBD: "Databases",
    tituloDataAnalic: "Data Analysis",
    tituloTools: "Tools",
    tituloConocimientos: "Knowledge",

    tituloValores: "Values",
    perseverancia: "Perseverance",
    perseveranciaTexto: "The determination to keep going, learn from failures, and persist until goals are achieved.",
    liderazgo: "Leadership",
    liderazgoTexto: "Positively influencing others to achieve common goals. Inspiring, motivating, and guiding others with vision, ethics, and effective communication skills.",
    Excelencia: "Excellence",
    ExcelenciaTexto: "Constantly seeking improvement and innovation, delivering high-quality results that exceed expectations and contribute to success.",
    lealtad: "Loyalty",
    lealtadTexto: "Acting with integrity, honesty, and trust, maintaining confidentiality when necessary.",
    respeto: "Respect",
    respetoTexto: "Valuing others, their opinions, ideas, and contributions. With courtesy, empathy, and consideration, creating a positive and collaborative work environment."
  }
};

// Inicializar idioma en español
var idiomaActual = "español";


// Función para cambiar idioma
function cambiarIdioma() {
  idiomaActual = idiomaActual === "español" ? "inglés" : "español";
  a1.textContent = textos[idiomaActual].a1;
  a2.textContent = textos[idiomaActual].a2;
  a3.textContent = textos[idiomaActual].a3;
  a4.textContent = textos[idiomaActual].a4;
  a5.textContent = textos[idiomaActual].a5;
  textoInicioAcerca.textContent = textos[idiomaActual].textoInicioAcerca;
  subtituloAcerca.textContent = textos[idiomaActual].subtituloAcerca;
  DescCV.textContent = textos[idiomaActual].DescCV;

  perfilTitulo.textContent  = textos[idiomaActual].perfilTitulo;
  perfilTexto.textContent = textos[idiomaActual].perfilTexto;
  misionTitulo.textContent = textos[idiomaActual].misionTitulo;
  misionTexto.textContent = textos[idiomaActual].misionTexto;
  visionTitulo.textContent = textos[idiomaActual].visionTitulo;
  visionTexto.textContent = textos[idiomaActual].visionTexto;

  tituloHabilidades.textContent  = textos[idiomaActual].tituloHabilidades;
  tituloProgramacion.textContent = textos[idiomaActual].tituloProgramacion;
  tituloBD.textContent = textos[idiomaActual].tituloBD;
  tituloDataAnalic.textContent = textos[idiomaActual].tituloDataAnalic;
  tituloTools.textContent = textos[idiomaActual].tituloTools;
  tituloConocimientos.textContent = textos[idiomaActual].tituloConocimientos;

  tituloValores.textContent = textos[idiomaActual].tituloValores;
  perseverancia.textContent = textos[idiomaActual].perseverancia;
  perseveranciaTexto.textContent = textos[idiomaActual].perseveranciaTexto;
  liderazgo.textContent = textos[idiomaActual].liderazgo;
  liderazgoTexto.textContent = textos[idiomaActual].liderazgoTexto;
  Excelencia.textContent = textos[idiomaActual].Excelencia;
  ExcelenciaTexto.textContent = textos[idiomaActual].ExcelenciaTexto;
  lealtad.textContent = textos[idiomaActual].lealtad;
  lealtadTexto.textContent = textos[idiomaActual].LealtadTexto;
  respeto.textContent = textos[idiomaActual].Respeto;
  respetoTexto.textContent = textos[idiomaActual].RespetoTexto;
}

// Evento clic del botón para cambiar idioma
cambioIdiomaBtn.addEventListener("click", cambiarIdioma);

cambiarIdioma();