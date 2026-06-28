// ===================== BANCO DE PALABRAS =====================
// Estructura: cada palabra tiene 3 niveles de pista para el impostor
// facil   -> da bastante info, casi se nota la relación
// medio   -> relación más indirecta
// dificil -> pista muy alejada, casi una palabra "trampa"
 
// ---------- MODO GENERAL (neutro, sin modismos locales) ----------
const WORD_BANK_GENERAL = [
  { palabra: "Playa", pistas: { facil: "Arena", medio: "Vacaciones", dificil: "Sombrilla" } },
  { palabra: "Aeropuerto", pistas: { facil: "Avión", medio: "Maleta", dificil: "Pasaporte" } },
  { palabra: "Hospital", pistas: { facil: "Médico", medio: "Emergencia", dificil: "Bata blanca" } },
  { palabra: "Pizza", pistas: { facil: "Comida italiana", medio: "Queso derretido", dificil: "Caja de cartón" } },
  { palabra: "Mochila", pistas: { facil: "Para cargar cosas", medio: "Escuela", dificil: "Cierre" } },
  { palabra: "Paraguas", pistas: { facil: "Lluvia", medio: "Se abre", dificil: "Mango" } },
  { palabra: "Profesor", pistas: { facil: "Enseña", medio: "Pizarrón", dificil: "Tarea" } },
  { palabra: "Computadora", pistas: { facil: "Pantalla", medio: "Teclado", dificil: "Internet" } },
  { palabra: "Bicicleta", pistas: { facil: "Dos ruedas", medio: "Pedalear", dificil: "Casco" } },
  { palabra: "Restaurante", pistas: { facil: "Comer afuera", medio: "Mesero", dificil: "Propina" } },
  { palabra: "Cine", pistas: { facil: "Película", medio: "Pantalla grande", dificil: "Palomitas" } },
  { palabra: "Supermercado", pistas: { facil: "Comprar comida", medio: "Carrito", dificil: "Cajero" } },
  { palabra: "Gato", pistas: { facil: "Mascota", medio: "Maúlla", dificil: "Bigotes" } },
  { palabra: "Cumpleaños", pistas: { facil: "Celebración anual", medio: "Pastel", dificil: "Velas" } },
  { palabra: "Boda", pistas: { facil: "Celebración de amor", medio: "Anillo", dificil: "Vestido blanco" } },
  { palabra: "Gimnasio", pistas: { facil: "Ejercicio", medio: "Pesas", dificil: "Sudor" } },
  { palabra: "Funeral", pistas: { facil: "Despedida triste", medio: "Flores", dificil: "Silencio" } },
  { palabra: "Examen", pistas: { facil: "Evaluación", medio: "Estudiar", dificil: "Nervios" } },
  { palabra: "Concierto", pistas: { facil: "Música en vivo", medio: "Escenario", dificil: "Multitud" } },
  { palabra: "Hotel", pistas: { facil: "Dormir de viaje", medio: "Recepción", dificil: "Llave de cuarto" } },
  { palabra: "Granja", pistas: { facil: "Animales y cultivos", medio: "Tractor", dificil: "Establo" } },
  { palabra: "Zoológico", pistas: { facil: "Animales en exhibición", medio: "Jaulas", dificil: "Boletos" } },
  { palabra: "Avión", pistas: { facil: "Vuela", medio: "Turbulencia", dificil: "Asiento de pasillo" } },
  { palabra: "Banco", pistas: { facil: "Dinero", medio: "Cajero automático", dificil: "Fila larga" } },
  { palabra: "Iglesia", pistas: { facil: "Lugar religioso", medio: "Campanas", dificil: "Bancas" } },
  { palabra: "Doctor", pistas: { facil: "Cuida la salud", medio: "Estetoscopio", dificil: "Receta" } },
  { palabra: "Selfie", pistas: { facil: "Foto de uno mismo", medio: "Cámara frontal", dificil: "Filtro" } },
  { palabra: "Internet", pistas: { facil: "Conexión digital", medio: "WiFi", dificil: "Contraseña" } }
];
 
// ---------- MODO DIALECTO (palabras y modismos por país) ----------
const WORD_BANKS = {
  argentina: [
    { palabra: "Boludo", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Che" } },
    { palabra: "Mate", pistas: { facil: "Infusión típica", medio: "Se toma con bombilla", dificil: "Yerba" } },
    { palabra: "Quilombo", pistas: { facil: "Lío grande", medio: "Todo se complicó", dificil: "Bardo" } },
    { palabra: "Laburo", pistas: { facil: "Donde uno trabaja", medio: "Lunes temprano", dificil: "Jefe" } },
    { palabra: "Pibe", pistas: { facil: "Persona joven", medio: "Se usa para un chico", dificil: "Botija" } },
    { palabra: "Bondi", pistas: { facil: "Transporte público", medio: "Hay que pagar boleto", dificil: "Parada" } },
    { palabra: "Chamuyo", pistas: { facil: "Hablar para convencer", medio: "No siempre es sincero", dificil: "Verso" } },
    { palabra: "Garrón", pistas: { facil: "Mala situación", medio: "Justo a uno le toca", dificil: "Yeta" } },
    { palabra: "Morfar", pistas: { facil: "Acción diaria necesaria", medio: "Se hace en la mesa", dificil: "Tenedor" } },
    { palabra: "Birra", pistas: { facil: "Bebida con espuma", medio: "Se sirve fría", dificil: "Lúpulo" } },
    { palabra: "Fiaca", pistas: { facil: "Ganas de no hacer nada", medio: "El sillón es su lugar favorito", dificil: "Domingo" } },
    { palabra: "Choripán", pistas: { facil: "Comida de asado", medio: "Va en un pan", dificil: "Chimichurri" } },
    { palabra: "Trucho", pistas: { facil: "No es original", medio: "Parece pero no es", dificil: "Copia" } },
    { palabra: "Bárbaro", pistas: { facil: "Algo muy bueno", medio: "Reacción positiva", dificil: "Aplausos" } },
    { palabra: "Posta", pistas: { facil: "Confirmar que algo es cierto", medio: "Sin mentiras", dificil: "Juramento" } }
  ],
  bolivia: [
    { palabra: "Yapa", pistas: { facil: "Un poquito extra gratis", medio: "El vendedor lo regala", dificil: "Feria" } },
    { palabra: "Chaqui", pistas: { facil: "Sensación del día después de tomar", medio: "Dolor de cabeza", dificil: "Agua" } },
    { palabra: "Pucha", pistas: { facil: "Expresión de fastidio", medio: "Se dice sin pensar", dificil: "Suspiro" } },
    { palabra: "Misk'i", pistas: { facil: "Sabor agradable", medio: "Lo contrario de amargo", dificil: "Postre" } },
    { palabra: "Caserita", pistas: { facil: "Cliente habitual de un puesto", medio: "El vendedor la conoce bien", dificil: "Mercado" } },
    { palabra: "Chompa", pistas: { facil: "Prenda de abrigo", medio: "Se usa cuando hace frío", dificil: "Lana" } },
    { palabra: "Pasanaku", pistas: { facil: "Ahorro grupal por turnos", medio: "Cada mes le toca a alguien distinto", dificil: "Confianza" } },
    { palabra: "Wawa", pistas: { facil: "Persona muy pequeña", medio: "Llora si tiene hambre", dificil: "Cuna" } },
    { palabra: "Surubí", pistas: { facil: "Animal acuático grande", medio: "Se pesca en los ríos", dificil: "Filete" } },
    { palabra: "Tojorí", pistas: { facil: "Bebida caliente de maíz", medio: "Se toma en las mañanas frías", dificil: "Desayuno" } }
  ],
  chile: [
    { palabra: "Guagua", pistas: { facil: "Persona muy pequeña", medio: "Llora si tiene hambre", dificil: "Cuna" } },
    { palabra: "Carrete", pistas: { facil: "Reunión animada con amigos", medio: "Hay música y baile", dificil: "Sábado en la noche" } },
    { palabra: "Pega", pistas: { facil: "Donde uno cumple un horario", medio: "Lunes a las 9", dificil: "Sueldo" } },
    { palabra: "Pololo", pistas: { facil: "Relación sin compromiso formal", medio: "Salir juntos", dificil: "Aniversario" } },
    { palabra: "Fome", pistas: { facil: "Algo sin gracia", medio: "Nadie quiere ir", dificil: "Bostezo" } },
    { palabra: "Cahuín", pistas: { facil: "Conversación sobre otros", medio: "Se cuenta en voz baja", dificil: "Secreto" } },
    { palabra: "Pituto", pistas: { facil: "Ayuda por conocer a alguien", medio: "No hiciste fila para conseguirlo", dificil: "Contacto" } },
    { palabra: "Bacán", pistas: { facil: "Algo que gusta mucho", medio: "Reacción positiva", dificil: "Aplausos" } },
    { palabra: "Caña", pistas: { facil: "Sensación del día después de tomar", medio: "Dolor de cabeza", dificil: "Agua" } },
    { palabra: "Pucho", pistas: { facil: "Se enciende y se fuma", medio: "Deja olor en la ropa", dificil: "Ceniza" } },
    { palabra: "Choro", pistas: { facil: "Persona con actitud atrevida", medio: "No le teme a nada", dificil: "Desafío" } },
    { palabra: "Sopaipilla", pistas: { facil: "Comida frita típica", medio: "Se come en días de lluvia", dificil: "Zapallo" } },
    { palabra: "Completo", pistas: { facil: "Comida rápida con muchos ingredientes encima", medio: "Lleva salchicha", dificil: "Palta" } },
    { palabra: "Al lote", pistas: { facil: "Sin ningún orden", medio: "Nadie organizó nada", dificil: "Caos" } },
    { palabra: "Achuntar", pistas: { facil: "Lograr algo correctamente", medio: "Justo en el blanco", dificil: "Suerte" } }
  ],
  colombia: [
    { palabra: "Parce", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Llave" } },
    { palabra: "Chévere", pistas: { facil: "Algo que gusta mucho", medio: "Reacción positiva", dificil: "Bacano" } },
    { palabra: "Guayabo", pistas: { facil: "Sensación del día después de tomar", medio: "Dolor de cabeza", dificil: "Agua" } },
    { palabra: "Rumba", pistas: { facil: "Reunión animada con amigos", medio: "Hay música y baile", dificil: "Sábado en la noche" } },
    { palabra: "Camello", pistas: { facil: "Donde uno cumple un horario", medio: "Lunes a las 9", dificil: "Sueldo" } },
    { palabra: "Tinto", pistas: { facil: "Bebida caliente y oscura", medio: "Se toma en la mañana", dificil: "Cafetera" } },
    { palabra: "Vaina", pistas: { facil: "Palabra para referirse a algo sin nombrarlo", medio: "Puede ser cualquier cosa", dificil: "Objeto" } },
    { palabra: "Parche", pistas: { facil: "Plan o reunión informal", medio: "Se organiza con poco aviso", dificil: "Grupo" } },
    { palabra: "Mecato", pistas: { facil: "Comida pequeña entre comidas", medio: "Se compra en la tienda", dificil: "Bolsa" } },
    { palabra: "Chimba", pistas: { facil: "Algo que impresiona positivamente", medio: "Reacción de sorpresa buena", dificil: "Aplausos" } },
    { palabra: "Polas", pistas: { facil: "Bebidas con espuma", medio: "Se sirven frías", dificil: "Lúpulo" } },
    { palabra: "Verraquera", pistas: { facil: "Cosa impresionante", medio: "Deja a todos sorprendidos", dificil: "Hazaña" } },
    { palabra: "Cantaleta", pistas: { facil: "Regaño que se repite mucho", medio: "Lo dice siempre la misma persona", dificil: "Mamá" } },
    { palabra: "Berraco", pistas: { facil: "Persona muy capaz", medio: "No se rinde fácil", dificil: "Esfuerzo" } },
    { palabra: "Bacano", pistas: { facil: "Algo agradable", medio: "Cae bien", dificil: "Sonrisa" } }
  ],
  costa_rica: [
    { palabra: "Mae", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice en casi toda frase", dificil: "Tico" } },
    { palabra: "Pura vida", pistas: { facil: "Forma de saludar o responder bien", medio: "Resume la actitud del país", dificil: "Filosofía" } },
    { palabra: "Tuanis", pistas: { facil: "Algo que está muy bien", medio: "Reacción positiva", dificil: "Aprobación" } },
    { palabra: "Goma", pistas: { facil: "Sensación del día después de tomar", medio: "Dolor de cabeza", dificil: "Agua" } },
    { palabra: "Chunche", pistas: { facil: "Palabra para algo sin nombre", medio: "Puede ser cualquier cosa", dificil: "Objeto" } },
    { palabra: "Birra", pistas: { facil: "Bebida con espuma", medio: "Se sirve fría", dificil: "Lúpulo" } },
    { palabra: "Brete", pistas: { facil: "Donde uno cumple un horario", medio: "Lunes a las 9", dificil: "Sueldo" } },
    { palabra: "Soda", pistas: { facil: "Lugar pequeño para comer", medio: "Comida casera", dificil: "Menú del día" } },
    { palabra: "Carajillo", pistas: { facil: "Persona muy joven", medio: "Aún no es adulto", dificil: "Travieso" } },
    { palabra: "Diay", pistas: { facil: "Expresión que se usa para todo", medio: "Inicia muchas frases", dificil: "Costumbre" } }
  ],
  cuba: [
    { palabra: "Asere", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Saludo" } },
    { palabra: "Jinetero", pistas: { facil: "Persona que busca turistas para negocios informales", medio: "Conoce bien las calles", dificil: "Comisión" } },
    { palabra: "Guagua", pistas: { facil: "Transporte público", medio: "Se espera en la parada", dificil: "Boleto" } },
    { palabra: "Fiana", pistas: { facil: "Autoridad que vigila el orden", medio: "Lleva uniforme", dificil: "Patrulla" } },
    { palabra: "Jamar", pistas: { facil: "Acción diaria necesaria", medio: "Se hace en la mesa", dificil: "Tenedor" } },
    { palabra: "Yuma", pistas: { facil: "Persona que viene de afuera", medio: "Habla distinto al resto", dificil: "Visa" } },
    { palabra: "Bonche", pistas: { facil: "Reunión animada con amigos", medio: "Hay música y baile", dificil: "Sábado en la noche" } },
    { palabra: "Pinchar", pistas: { facil: "Donde uno cumple un horario", medio: "Lunes a las 9", dificil: "Sueldo" } },
    { palabra: "Tumbao", pistas: { facil: "Forma particular de caminar o moverse", medio: "Tiene ritmo propio", dificil: "Estilo" } }
  ],
  ecuador: [
    { palabra: "Ñaño", pistas: { facil: "Forma cercana de llamar a alguien", medio: "Se usa entre hermanos o amigos", dificil: "Familia" } },
    { palabra: "Chuchaqui", pistas: { facil: "Sensación del día después de tomar", medio: "Dolor de cabeza", dificil: "Agua" } },
    { palabra: "Pana", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Confianza" } },
    { palabra: "Chévere", pistas: { facil: "Algo que gusta mucho", medio: "Reacción positiva", dificil: "Aplausos" } },
    { palabra: "Choclo", pistas: { facil: "Vegetal amarillo común en sopas", medio: "Se da en mazorca", dificil: "Granos" } },
    { palabra: "Guambra", pistas: { facil: "Persona joven", medio: "Aún no es adulto", dificil: "Travieso" } },
    { palabra: "Caleta", pistas: { facil: "Mucha cantidad de algo", medio: "Más de lo esperado", dificil: "Abundancia" } },
    { palabra: "Chumado", pistas: { facil: "Estado luego de tomar de más", medio: "Camina raro", dificil: "Tambaleo" } },
    { palabra: "Vacán", pistas: { facil: "Algo agradable", medio: "Cae bien", dificil: "Sonrisa" } }
  ],
  el_salvador: [
    { palabra: "Cipote", pistas: { facil: "Persona muy joven", medio: "Aún juega mucho", dificil: "Travieso" } },
    { palabra: "Chero", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Confianza" } },
    { palabra: "Bicho", pistas: { facil: "Forma de referirse a un niño o joven", medio: "Aún no es adulto", dificil: "Travieso" } },
    { palabra: "Pupusa", pistas: { facil: "Comida típica de maíz rellena", medio: "Se come con curtido", dificil: "Comal" } },
    { palabra: "Chivo", pistas: { facil: "Algo que está muy bien", medio: "Reacción positiva", dificil: "Aprobación" } },
    { palabra: "Vergo", pistas: { facil: "Mucha cantidad de algo", medio: "Más de lo esperado", dificil: "Abundancia" } },
    { palabra: "Guanaco", pistas: { facil: "Forma de llamarse entre compatriotas", medio: "Identidad nacional", dificil: "Orgullo" } }
  ],
  espana: [
    { palabra: "Tío", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Confianza" } },
    { palabra: "Guay", pistas: { facil: "Algo que gusta mucho", medio: "Reacción positiva", dificil: "Aplausos" } },
    { palabra: "Curro", pistas: { facil: "Donde uno cumple un horario", medio: "Lunes a las 9", dificil: "Sueldo" } },
    { palabra: "Mola", pistas: { facil: "Algo que gusta", medio: "Cae bien", dificil: "Sonrisa" } },
    { palabra: "Botellón", pistas: { facil: "Reunión al aire libre para beber entre amigos", medio: "Se hace en la calle o plaza", dificil: "Vasos" } },
    { palabra: "Resaca", pistas: { facil: "Sensación del día después de tomar", medio: "Dolor de cabeza", dificil: "Agua" } },
    { palabra: "Flipar", pistas: { facil: "Reacción de mucha sorpresa", medio: "No se lo esperaba", dificil: "Asombro" } },
    { palabra: "Piso", pistas: { facil: "Lugar donde se vive", medio: "Tiene alquiler mensual", dificil: "Llaves" } },
    { palabra: "Movida", pistas: { facil: "Situación o plan que está pasando", medio: "Algo se está organizando", dificil: "Lío" } },
    { palabra: "Chaval", pistas: { facil: "Persona joven", medio: "Aún no es adulto", dificil: "Travieso" } },
    { palabra: "Vale", pistas: { facil: "Forma de decir que sí", medio: "Se usa para confirmar algo", dificil: "Acuerdo" } },
    { palabra: "Currante", pistas: { facil: "Persona que trabaja mucho", medio: "Llega cansado a casa", dificil: "Esfuerzo" } }
  ],
  guatemala: [
    { palabra: "Chapín", pistas: { facil: "Forma de llamarse entre compatriotas", medio: "Identidad nacional", dificil: "Orgullo" } },
    { palabra: "Pisto", pistas: { facil: "Necesario para comprar cosas", medio: "Se guarda en la billetera", dificil: "Ahorro" } },
    { palabra: "Chucho", pistas: { facil: "Animal de compañía común en la calle", medio: "Ladra", dificil: "Correa" } },
    { palabra: "Patojo", pistas: { facil: "Persona muy joven", medio: "Aún juega mucho", dificil: "Travieso" } },
    { palabra: "Cheles", pistas: { facil: "Personas de piel y cabello claro", medio: "Se nota a simple vista", dificil: "Rasgos" } },
    { palabra: "Shute", pistas: { facil: "Persona que se mete donde no debe", medio: "Pregunta demasiado", dificil: "Curiosidad" } },
    { palabra: "Chilero", pistas: { facil: "Algo que está muy bien", medio: "Reacción positiva", dificil: "Aprobación" } }
  ],
  honduras: [
    { palabra: "Catracho", pistas: { facil: "Forma de llamarse entre compatriotas", medio: "Identidad nacional", dificil: "Orgullo" } },
    { palabra: "Maje", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Confianza" } },
    { palabra: "Pepiar", pistas: { facil: "Decir cosas para llamar la atención de alguien", medio: "Suele ser en la calle", dificil: "Coqueteo" } },
    { palabra: "Pacha", pistas: { facil: "Objeto que usan los bebés para tomar líquidos", medio: "Tiene tetina", dificil: "Leche" } },
    { palabra: "Cheque", pistas: { facil: "Forma de decir que está bien", medio: "Confirmación", dificil: "Acuerdo" } },
    { palabra: "Guaro", pistas: { facil: "Bebida fuerte típica", medio: "Se toma en fiestas", dificil: "Botella" } }
  ],
  mexico: [
    { palabra: "Chamba", pistas: { facil: "Donde uno cumple un horario", medio: "Lunes a las 9", dificil: "Sueldo" } },
    { palabra: "Chido", pistas: { facil: "Algo que gusta mucho", medio: "Reacción positiva", dificil: "Aplausos" } },
    { palabra: "Antro", pistas: { facil: "Lugar para bailar de noche", medio: "Hay luces y música fuerte", dificil: "Entrada con cover" } },
    { palabra: "Chela", pistas: { facil: "Bebida con espuma", medio: "Se sirve fría", dificil: "Lúpulo" } },
    { palabra: "Neta", pistas: { facil: "Se usa para confirmar algo cierto", medio: "Sin mentiras", dificil: "Juramento" } },
    { palabra: "Chamaco", pistas: { facil: "Persona muy joven", medio: "Aún juega mucho", dificil: "Travieso" } },
    { palabra: "Cruda", pistas: { facil: "Sensación del día después de tomar", medio: "Dolor de cabeza", dificil: "Agua" } },
    { palabra: "Fresa", pistas: { facil: "Persona algo presumida", medio: "Le importa mucho su imagen", dificil: "Marca" } },
    { palabra: "Wey", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Confianza" } },
    { palabra: "Chafa", pistas: { facil: "Algo de mala calidad", medio: "No dura mucho", dificil: "Imitación" } },
    { palabra: "Torta", pistas: { facil: "Comida rápida con pan", medio: "Se come a mediodía", dificil: "Aguacate" } },
    { palabra: "Naco", pistas: { facil: "De mal gusto según algunos", medio: "Opinión sobre el estilo de alguien", dificil: "Crítica" } },
    { palabra: "Órale", pistas: { facil: "Expresión de sorpresa", medio: "Se dice sin pensar", dificil: "Reacción" } },
    { palabra: "Chavo", pistas: { facil: "Persona joven", medio: "Aún no es adulto", dificil: "Travieso" } }
  ],
  nicaragua: [
    { palabra: "Chunche", pistas: { facil: "Palabra para algo sin nombre", medio: "Puede ser cualquier cosa", dificil: "Objeto" } },
    { palabra: "Maje", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Confianza" } },
    { palabra: "Nica", pistas: { facil: "Forma de llamarse entre compatriotas", medio: "Identidad nacional", dificil: "Orgullo" } },
    { palabra: "Vaho", pistas: { facil: "Comida tradicional envuelta en hojas", medio: "Se cocina al vapor", dificil: "Plátano" } },
    { palabra: "Chayul", pistas: { facil: "Insecto pequeño que vuela de noche", medio: "Le atrae la luz", dificil: "Alas" } }
  ],
  panama: [
    { palabra: "Chuleta", pistas: { facil: "Expresión de sorpresa", medio: "Se dice sin pensar", dificil: "Reacción" } },
    { palabra: "Pelao", pistas: { facil: "Forma de llamar a alguien sin usar su nombre", medio: "Se usa entre conocidos", dificil: "Apodo" } },
    { palabra: "Fulo", pistas: { facil: "Persona de piel y cabello claro", medio: "Se nota a simple vista", dificil: "Rasgos" } },
    { palabra: "Vaina", pistas: { facil: "Palabra para algo sin nombre", medio: "Puede ser cualquier cosa", dificil: "Objeto" } },
    { palabra: "Jeva", pistas: { facil: "Forma de referirse a la pareja", medio: "Salen juntos", dificil: "Aniversario" } }
  ],
  paraguay: [
    { palabra: "Ñembo", pistas: { facil: "Hacer algo de forma exagerada o fingida", medio: "No es del todo sincero", dificil: "Actuación" } },
    { palabra: "Tereré", pistas: { facil: "Bebida fría que se toma con bombilla", medio: "Se prepara con yerba", dificil: "Termo" } },
    { palabra: "Kuñataí", pistas: { facil: "Forma de referirse a una mujer joven", medio: "Aún no es adulta", dificil: "Belleza" } },
    { palabra: "Mitai", pistas: { facil: "Persona muy pequeña", medio: "Llora si tiene hambre", dificil: "Cuna" } },
    { palabra: "Vyro", pistas: { facil: "Persona que actúa sin pensar", medio: "Hace travesuras", dificil: "Imprudencia" } }
  ],
  peru: [
    { palabra: "Pata", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Confianza" } },
    { palabra: "Chamba", pistas: { facil: "Donde uno cumple un horario", medio: "Lunes a las 9", dificil: "Sueldo" } },
    { palabra: "Jato", pistas: { facil: "Lugar donde se vive", medio: "Tiene llave de entrada", dificil: "Cuarto" } },
    { palabra: "Roche", pistas: { facil: "Sensación de pena o vergüenza", medio: "Sube el calor a la cara", dificil: "Risas ajenas" } },
    { palabra: "Causa", pistas: { facil: "Forma cercana de llamar a un amigo", medio: "Se usa con confianza", dificil: "Lealtad" } },
    { palabra: "Mostro", pistas: { facil: "Persona admirada por lo que hace", medio: "Destaca entre los demás", dificil: "Talento" } },
    { palabra: "Chibolo", pistas: { facil: "Persona muy joven", medio: "Aún juega mucho", dificil: "Travieso" } },
    { palabra: "Yapa", pistas: { facil: "Un poquito extra gratis", medio: "El vendedor lo regala", dificil: "Mercado" } },
    { palabra: "Combi", pistas: { facil: "Transporte público pequeño", medio: "Se espera en la calle", dificil: "Cobrador" } }
  ],
  puerto_rico: [
    { palabra: "Chacho", pistas: { facil: "Expresión que se usa para casi todo", medio: "Inicia muchas frases", dificil: "Costumbre" } },
    { palabra: "Wepa", pistas: { facil: "Expresión de alegría o celebración", medio: "Se grita con entusiasmo", dificil: "Fiesta" } },
    { palabra: "Janguear", pistas: { facil: "Salir a pasar el rato con amigos", medio: "No siempre hay un plan fijo", dificil: "Tarde libre" } },
    { palabra: "Chévere", pistas: { facil: "Algo que gusta mucho", medio: "Reacción positiva", dificil: "Aplausos" } },
    { palabra: "Bregar", pistas: { facil: "Lidiar con una situación difícil", medio: "Toma tiempo resolverlo", dificil: "Paciencia" } },
    { palabra: "Mahones", pistas: { facil: "Prenda de tela resistente para las piernas", medio: "Vienen de varios colores", dificil: "Bolsillos" } }
  ],
  republica_dominicana: [
    { palabra: "Tato", pistas: { facil: "Forma de decir que todo está bien", medio: "Confirmación rápida", dificil: "Acuerdo" } },
    { palabra: "Vaina", pistas: { facil: "Palabra para algo sin nombre", medio: "Puede ser cualquier cosa", dificil: "Objeto" } },
    { palabra: "Jevita", pistas: { facil: "Forma de referirse a una chica", medio: "Aún no es adulta", dificil: "Belleza" } },
    { palabra: "Guagua", pistas: { facil: "Transporte público", medio: "Se espera en la parada", dificil: "Boleto" } },
    { palabra: "Tíguere", pistas: { facil: "Persona astuta y atrevida", medio: "Sabe cómo resolver cualquier lío", dificil: "Calle" } },
    { palabra: "Concho", pistas: { facil: "Carro de transporte compartido", medio: "Para varios pasajeros con destinos distintos", dificil: "Tarifa" } }
  ],
  uruguay: [
    { palabra: "Botija", pistas: { facil: "Persona muy joven", medio: "Aún juega mucho", dificil: "Travieso" } },
    { palabra: "Mate", pistas: { facil: "Infusión típica", medio: "Se toma con bombilla", dificil: "Yerba" } },
    { palabra: "Bondi", pistas: { facil: "Transporte público", medio: "Se espera en la parada", dificil: "Boleto" } },
    { palabra: "Pucho", pistas: { facil: "Se enciende y se fuma", medio: "Deja olor en la ropa", dificil: "Ceniza" } },
    { palabra: "Gurí", pistas: { facil: "Forma de llamar a un niño", medio: "Aún no es adulto", dificil: "Travieso" } },
    { palabra: "Chiviar", pistas: { facil: "Engañar con malicia", medio: "Saca ventaja sin que se note", dificil: "Trampa" } }
  ],
  venezuela: [
    { palabra: "Pana", pistas: { facil: "Forma de llamar a un amigo", medio: "Se dice mucho en una charla", dificil: "Confianza" } },
    { palabra: "Chamo", pistas: { facil: "Persona joven", medio: "Aún no es adulto", dificil: "Travieso" } },
    { palabra: "Arrecho", pistas: { facil: "Puede significar molesto o increíble, según el tono", medio: "Cambia de sentido con la situación", dificil: "Doble uso" } },
    { palabra: "Bochinche", pistas: { facil: "Desorden o chisme", medio: "Todos están hablando de lo mismo", dificil: "Rumor" } },
    { palabra: "Cotufa", pistas: { facil: "Snack que se come en el cine", medio: "Es de maíz inflado", dificil: "Sal" } },
    { palabra: "Jeva", pistas: { facil: "Forma de referirse a la pareja", medio: "Salen juntos", dificil: "Aniversario" } },
    { palabra: "Ladilla", pistas: { facil: "Algo o alguien fastidioso", medio: "No deja de molestar", dificil: "Paciencia" } },
    { palabra: "Burda", pistas: { facil: "Mucha cantidad de algo", medio: "Más de lo esperado", dificil: "Abundancia" } },
    { palabra: "Guachimán", pistas: { facil: "Persona que cuida un lugar", medio: "Trabaja de noche generalmente", dificil: "Silbato" } },
    { palabra: "Catira", pistas: { facil: "Mujer de cabello claro", medio: "Se nota a simple vista", dificil: "Rasgos" } },
    { palabra: "Zumbado", pistas: { facil: "Persona algo loca o atrevida", medio: "Hace cosas inesperadas", dificil: "Impulso" } }
  ]
};
 
const COUNTRY_NAMES = {
  argentina: "Argentina",
  bolivia: "Bolivia",
  chile: "Chile",
  colombia: "Colombia",
  costa_rica: "Costa Rica",
  cuba: "Cuba",
  ecuador: "Ecuador",
  el_salvador: "El Salvador",
  espana: "España",
  guatemala: "Guatemala",
  honduras: "Honduras",
  mexico: "México",
  nicaragua: "Nicaragua",
  panama: "Panamá",
  paraguay: "Paraguay",
  peru: "Perú",
  puerto_rico: "Puerto Rico",
  republica_dominicana: "República Dominicana",
  uruguay: "Uruguay",
  venezuela: "Venezuela"
};
 
const DIFFICULTY_NAMES = {
  facil: "Fácil",
  medio: "Medio",
  dificil: "Difícil"
};
