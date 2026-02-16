/**
 * KOLDOGATE ARCHIVES - DATA
 * =========================
 * Datos del caso Koldo para timeline, actores y mapa de conexiones.
 * Fuentes: BOE, Poder Judicial, investigaciones UCO, declaraciones oficiales.
 * Actualizado: 2025-02-17
 */

// ============================================
// TIMELINE EVENTS
// ============================================
const timelineEvents = [
    {
        id: 1,
        date: "2018-06-07",
        dateDisplay: "Junio 2018",
        title: "José Luis Ábalos nombrado Ministro de Fomento",
        description: "Pedro Sánchez nombra a José Luis Ábalos como Ministro de Fomento en funciones. Ábalos se convierte en número tres del PSOE y secretario de Organización.",
        type: "politico",
        amount: null,
        sources: ["https://www.boe.es/diario_boe/txt.php?id=BOE-A-2018-7675"]
    },
    {
        id: 2,
        date: "2018-08-31",
        dateDisplay: "Agosto 2018",
        title: "Primer contacto entre Koldo García y Víctor de Aldama",
        description: "Rubén de Aldama, hermano de Víctor y escolta de Ábalos, envía el contacto de Koldo García a su hermano con el mensaje: 'Lo tienes a huevo para hacer cosas'.",
        type: "investigacion",
        amount: null,
        sources: []
    },
    {
        id: 3,
        date: "2019-02-01",
        dateDisplay: "Febrero 2019",
        title: "Viaje oficial a México",
        description: "Ábalos, Koldo García y Víctor de Aldama viajan a México. Se reúnen con el Secretario de Comunicaciones y Transportes, Javier Jiménez Espriú, para tratar asuntos del Tren Maya.",
        type: "politico",
        amount: null,
        sources: []
    },
    {
        id: 4,
        date: "2019-12-18",
        dateDisplay: "Diciembre 2019",
        title: "Inicio de pagos en efectivo",
        description: "Según la UCO, comienzan los pagos periódicos de 10.000€ en efectivo de Víctor de Aldama a Koldo García. Estos pagos continuarían incluso después del cese de Koldo en julio de 2021.",
        type: "investigacion",
        amount: "€10.000/mes",
        sources: []
    },
    {
        id: 5,
        date: "2020-03-14",
        dateDisplay: "Marzo 2020",
        title: "Estado de Alarma COVID-19",
        description: "El Gobierno declara el estado de alarma. Se activan los procedimientos de emergencia para contratación pública de material sanitario sin los controles habituales.",
        type: "politico",
        amount: null,
        sources: ["https://www.boe.es/diario_boe/txt.php?id=BOE-A-2020-4208"]
    },
    {
        id: 6,
        date: "2020-03-20",
        dateDisplay: "Marzo 2020",
        title: "Primer contrato a Soluciones de Gestión",
        description: "Puertos del Estado, dependiente del Ministerio de Transportes, adjudica el primer contrato de emergencia a Soluciones de Gestión y Apoyo a Empresas S.L. por valor de 5,2 millones de euros.",
        type: "contrato",
        amount: "€5.200.000",
        sources: []
    },
    {
        id: 7,
        date: "2020-04-01",
        dateDisplay: "Abril 2020",
        title: "Contrato del Servicio Canario de Salud",
        description: "El Gobierno de Canarias adjudica un contrato de emergencias por 6,8 millones de euros para 2,7 millones de mascarillas a 2,50€ cada una. La empresa no tenía experiencia en material sanitario.",
        type: "contrato",
        amount: "€6.800.000",
        sources: ["https://www.gobiernodecanarias.org/sanidad/scs/"]
    },
    {
        id: 8,
        date: "2020-04-27",
        dateDisplay: "Abril 2020",
        title: "Detectadas mascarillas defectuosas en Canarias",
        description: "Los servicios de prevención de riesgos laborales de hospitales canarios detectan que las mascarillas son de inferior calidad. El Centro Nacional de Medios de Protección dictamina que no son FFP2 sino FFP1.",
        type: "investigacion",
        amount: null,
        sources: []
    },
    {
        id: 9,
        date: "2020-05-01",
        dateDisplay: "Mayo 2020",
        title: "Contrato del Govern de les Illes Balears",
        description: "El Gobierno balear abona 3,7 millones de euros para suministro de mascarillas FFP2. A pesar de detectar defectos en junio de 2020, califican el pedido como 'satisfactorio'.",
        type: "contrato",
        amount: "€3.700.000",
        sources: []
    },
    {
        id: 10,
        date: "2020-12-01",
        dateDisplay: "Diciembre 2020",
        title: "Informe de la Audiencia de Cuentas de Canarias",
        description: "La Audiencia de Cuentas refleja en un informe que Soluciones de Gestión e Injoo Technology son sociedades cuyo objeto social no se corresponde con la venta de material sanitario.",
        type: "investigacion",
        amount: null,
        sources: []
    },
    {
        id: 21,
        date: "2021-04-18",
        dateDisplay: "Abril 2021",
        title: "Mensajes sobre reunión OMT-Air Europa y Gobierno de España",
        description: "Según conversaciones reveladas, Víctor de Aldama propone una reunión 'privada' entre el ministro Ábalos, Zurab Pololikashvili (OMT) y el presidente de República Dominicana, tras visita a Moncloa. Se mencionan mensajes en que 'Begoña y el presidente' responden a Zurab.",
        type: "investigacion",
        amount: null,
        sources: ["https://archive.ph/xDokv"]
    },
    {
        id: 11,
        date: "2021-07-10",
        dateDisplay: "Julio 2021",
        title: "Cese de José Luis Ábalos",
        description: "Pedro Sánchez cesa a Ábalos como ministro de Transportes sin dar explicaciones. Ábalos pasa a ser portavoz del PSOE en el Congreso. Koldo García deja sus puestos en el ministerio.",
        type: "politico",
        amount: null,
        sources: ["https://www.boe.es/diario_boe/txt.php?id=BOE-A-2021-11856"]
    },
    {
        id: 12,
        date: "2024-02-20",
        dateDisplay: "Febrero 2024",
        title: "Operación Delorme: Detenciones",
        description: "La Guardia Civil detiene a Koldo García, Víctor de Aldama, Patricia Úriz (mujer de Koldo) y otros implicados. Se registra la casa de Ábalos en Madrid.",
        type: "judicial",
        amount: null,
        sources: []
    },
    {
        id: 13,
        date: "2024-02-22",
        dateDisplay: "Febrero 2024",
        title: "Koldo García en libertad",
        description: "Koldo García queda en libertad con la obligación de presentarse en el juzgado cada quince días. La investigación se centra en 53 millones de euros en contratos.",
        type: "judicial",
        amount: "€53.000.000",
        sources: []
    },
    {
        id: 14,
        date: "2024-10-10",
        dateDisplay: "Octubre 2024",
        title: "Víctor de Aldama ingresa en prisión",
        description: "El juez Santiago Pedraz de la Audiencia Nacional decreta el ingreso en prisión incondicional de Víctor de Aldama por su implicación en un fraude del IVA de hidrocarburos de más de 180 millones de euros.",
        type: "judicial",
        amount: "€180.000.000",
        sources: []
    },
    {
        id: 15,
        date: "2024-10-23",
        dateDisplay: "Octubre 2024",
        title: "El Congreso investiga el caso",
        description: "La presidenta del Congreso, Francina Armengol, se ve salpicada por el caso. El PP pide su dimisión. La Comisión de Investigación comienza sus trabajos.",
        type: "politico",
        amount: null,
        sources: ["https://www.congreso.es/"]
    },
    {
        id: 16,
        date: "2025-06-05",
        dateDisplay: "Junio 2025",
        title: "Informe UCO: Santos Cerdán implicado",
        description: "La UCO entrega un informe que sitúa al secretario de Organización del PSOE, Santos Cerdán, como presunto gestor de 620.000 euros en mordidas para Ábalos y Koldo.",
        type: "investigacion",
        amount: "€620.000",
        sources: []
    },
    {
        id: 17,
        date: "2025-06-12",
        dateDisplay: "Junio 2025",
        title: "Registros de la UCO",
        description: "La UCO realiza una batería de registros incluyendo la casa del exministro Ábalos en Valencia. Se investigan adjudicaciones de obra pública además de las mascarillas.",
        type: "judicial",
        amount: null,
        sources: []
    },
    {
        id: 18,
        date: "2025-06-13",
        dateDisplay: "Junio 2025",
        title: "Dimisión de Santos Cerdán",
        description: "Santos Cerdán dimite como secretario de Organización del PSOE y renuncia a su escaño de diputado tras conocerse el informe de la UCO.",
        type: "politico",
        amount: null,
        sources: []
    },
    {
        id: 19,
        date: "2025-07-21",
        dateDisplay: "Julio 2025",
        title: "Imputados Pardo de Vera y Herrero",
        description: "La expresidenta de Adif Isabel Pardo de Vera y el exdirector general de Carreteras Francisco Javier Herrero Lizano declaran como imputados. El juez les retira el pasaporte.",
        type: "judicial",
        amount: null,
        sources: []
    },
    {
        id: 20,
        date: "2025-10-10",
        dateDisplay: "Octubre 2025",
        title: "Descubierta foto de operación con oro de Venezuela",
        description: "La UCO descubre en el ordenador de Víctor de Aldama una foto de la orden de compra-venta de 104 barras de oro por 68,5 millones de dólares del FONDEN venezolano.",
        type: "investigacion",
        amount: "$68.498.254",
        sources: []
    }
];

// ============================================
// ACTORS DATA
// ============================================
const actorsData = [
    {
        id: "abalos",
        name: "José Luis Ábalos",
        position: "Ex-Ministro de Transportes (2018-2021)",
        role: "politico",
        status: "investigado",
        statusLabel: "Investigado / Imputado",
        description: "Ex-ministro de Transportes, Movilidad y Agenda Urbana. Secretario de Organización del PSOE hasta 2022. La UCO investiga su presunta participación en una organización criminal dedicada al cobro de comisiones ilegales.",
        wikipedia: "https://es.wikipedia.org/wiki/Jos%C3%A9_Luis_%C3%81balos"
    },
    {
        id: "koldo",
        name: "Koldo García Íñigo",
        position: "Ex-asesor de Ábalos / Ex-consejero de Renfe",
        role: "intermediario",
        status: "imputado",
        statusLabel: "Imputado / Investigado",
        description: "Exconcejal de Huarte (Navarra). 'Chico para todo' de Ábalos. Consejero de Renfe Mercancías y vocal de Puertos del Estado. La UCO le señala como 'elemento de conexión' entre la Administración y las empresas. Cuadruplicó sus ingresos hasta 1,5M€.",
        wikipedia: "https://es.wikipedia.org/wiki/Koldo_Garc%C3%ADa_%C3%8D%C3%B1igo"
    },
    {
        id: "aldama",
        name: "Víctor de Aldama",
        position: "Empresario / Presidente Zamora CF",
        role: "empresario",
        status: "imputado",
        statusLabel: "En prisión preventiva",
        description: "Empresario de Soluciones de Gestión y Apoyo a Empresas S.L. La UCO le identifica como el 'nexo corruptor'. Presunto autor de pagos en metálico a Koldo. En prisión desde octubre 2024 por fraude del IVA de hidrocarburos (180M€).",
        wikipedia: "https://es.wikipedia.org/wiki/V%C3%ADctor_de_Aldama"
    },
    {
        id: "cerdan",
        name: "Santos Cerdán",
        position: "Ex-Secretario de Organización del PSOE",
        role: "politico",
        status: "investigado",
        statusLabel: "Dimitido / Investigado",
        description: "Secretario de Organización del PSOE desde 2022. Diputado navarro. La UCO le señala como gestor de 620.000€ en mordidas. Dimite en junio de 2025 tras conocerse el informe policial.",
        wikipedia: "https://es.wikipedia.org/wiki/Santos_Cerd%C3%A1n"
    },
    {
        id: "uriz",
        name: "Patricia Úriz",
        position: "Ayudante de secretaría Ministerio de Transportes",
        role: "funcionario",
        status: "imputado",
        statusLabel: "Imputada",
        description: "Mujer de Koldo García. Fue detenida en febrero de 2024. Trabajó como ayudante de secretaría en el Ministerio de Transportes. Vinculada al entorno de Ábalos desde su época en el PSN.",
        wikipedia: null
    },
    {
        id: "armengol",
        name: "Francina Armengol",
        position: "Presidenta del Congreso / Ex-presidenta Baleares",
        role: "politico",
        status: "testigo",
        statusLabel: "Investigada administración",
        description: "Presidenta del Congreso de los Diputados. Su administración como presidenta del Govern balear adjudicó 3,7M€ en contratos. El PP pide su dimisión aunque no hay vinculación personal directa.",
        wikipedia: "https://es.wikipedia.org/wiki/Francina_Armengol"
    },
    {
        id: "pardo",
        name: "Isabel Pardo de Vera",
        position: "Ex-presidenta de Adif",
        role: "funcionario",
        status: "imputado",
        statusLabel: "Imputada",
        description: "Expresidenta de Adif (Administrador de Infraestructuras Ferroviarias). Imputada en julio de 2025. Se investiga si prestó asistencia a las directrices de Ábalos para conseguir contratos millonarios.",
        wikipedia: "https://es.wikipedia.org/wiki/Isabel_Pardo_de_Vera"
    },
    {
        id: "herrero",
        name: "Francisco Javier Herrero Lizano",
        position: "Ex-Director General de Carreteras",
        role: "funcionario",
        status: "imputado",
        statusLabel: "Imputado",
        description: "Ex-director general de Carreteras del Ministerio de Transportes. Imputado en julio de 2025. Investigado por presunta colaboración en adjudicaciones irregulares de obras públicas.",
        wikipedia: null
    },
    {
        id: "merino",
        name: "Fernando Agustín Merino",
        position: "Ex-directivo de Acciona",
        role: "intermediario",
        status: "investigado",
        statusLabel: "Investigado",
        description: "Ex-directivo de Acciona Construcción y Acciona Infraestructuras. Se investiga su influencia sobre Koldo García para obtener adjudicaciones de obra pública a cambio de contraprestaciones.",
        wikipedia: null
    },
    {
        id: "anton",
        name: "Joseba Antxón Alonso Egurrola",
        position: "Empresario navarro",
        role: "empresario",
        status: "investigado",
        statusLabel: "Investigado",
        description: "Empresario navarro, fundador de Noran Coop y Servinabar. Apodado 'Guipuchi' por Koldo. Se investiga si abonó contraprestaciones a Koldo y Ábalos. Vinculado a Cerdán desde 2015.",
        wikipedia: null
    },
    {
        id: "ruz",
        name: "José Ruz Martínez",
        position: "Accionista de LIC (Levantina)",
        role: "empresario",
        status: "investigado",
        statusLabel: "Investigado",
        description: "Accionista de Levantina, Ingeniería y Construcción (LIC). Se investiga si participó en el pago de contraprestaciones a Koldo y Ábalos. Koldo intercedió ante Pardo de Vera y Herrero para obtener obras.",
        wikipedia: null
    },
    {
        id: "villalba",
        name: "Rubén Villalba",
        position: "Coronel de la Guardia Civil",
        role: "funcionario",
        status: "imputado",
        statusLabel: "Imputado",
        description: "Coronel de la Guardia Civil. Se le atribuye haber conectado la trama con cuerpos de seguridad. Recibió pagos de 88.119€ según la UCO. Organizó una red de agentes para la trama.",
        wikipedia: null
    }
];

// ============================================
// GRAPH DATA (D3.js)
// ============================================
const graphData = {
    nodes: [
        // Políticos
        { id: "abalos", name: "José Luis Ábalos", group: "politico", radius: 25 },
        { id: "cerdan", name: "Santos Cerdán", group: "politico", radius: 20 },
        { id: "armengol", name: "Francina Armengol", group: "politico", radius: 18 },
        { id: "sanchez", name: "Pedro Sánchez", group: "politico", radius: 22 },
        
        // Intermediarios
        { id: "koldo", name: "Koldo García", group: "intermediario", radius: 23 },
        { id: "merino", name: "Fernando Merino", group: "intermediario", radius: 15 },
        { id: "pombo", name: "Jacobo Pombo", group: "intermediario", radius: 14 },
        
        // Empresarios
        { id: "aldama", name: "Víctor de Aldama", group: "empresario", radius: 21 },
        { id: "anton", name: "Joseba Antxón Alonso", group: "empresario", radius: 16 },
        { id: "ruz", name: "José Ruz", group: "empresario", radius: 15 },
        { id: "fernandez", name: "Hermanos Fernández", group: "empresario", radius: 15 },
        { id: "cueto", name: "Juan Carlos Cueto", group: "empresario", radius: 14 },
        
        // Funcionarios
        { id: "pardo", name: "Isabel Pardo de Vera", group: "funcionario", radius: 17 },
        { id: "herrero", name: "Javier Herrero", group: "funcionario", radius: 16 },
        { id: "villalba", name: "Rubén Villalba", group: "funcionario", radius: 15 },
        { id: "uriz", name: "Patricia Úriz", group: "funcionario", radius: 14 },
        { id: "gomez", name: "Jesús Manuel Gómez", group: "funcionario", radius: 14 },
        { id: "sanchez_alvaro", name: "Álvaro Sánchez", group: "funcionario", radius: 13 },
        
        // Organismos/Empresas
        { id: "soluciones", name: "Soluciones de Gestión SL", group: "organismo", radius: 19 },
        { id: "adif", name: "Adif", group: "organismo", radius: 18 },
        { id: "puertos", name: "Puertos del Estado", group: "organismo", radius: 17 },
        { id: "renfe", name: "Renfe", group: "organismo", radius: 16 },
        { id: "ineco", name: "INECO", group: "organismo", radius: 15 },
        { id: "acciona", name: "Acciona", group: "organismo", radius: 17 },
        { id: "azvi", name: "Grupo AZVI", group: "organismo", radius: 15 },
        { id: "lic", name: "LIC", group: "organismo", radius: 14 },
        { id: "opr", name: "OPR", group: "organismo", radius: 13 },
        { id: "servinabar", name: "Servinabar", group: "organismo", radius: 13 },
        { id: "noran", name: "Noran Coop", group: "organismo", radius: 12 },
        
        // Nuevos nodos (OMT/Air Europa/Zurab/Abinader)
        { id: "omt", name: "OMT (UNWTO)", group: "organismo", radius: 18 },
        { id: "air_europa", name: "Air Europa", group: "organismo", radius: 17 },
        { id: "zurab", name: "Zurab Pololikashvili", group: "funcionario", radius: 16 },
        { id: "abinader", name: "Luis Abinader", group: "politico", radius: 20 }
    ],
    links: [
        // Relaciones políticas
        { source: "sanchez", target: "abalos", value: 3, type: "politica" },
        { source: "sanchez", target: "cerdan", value: 3, type: "politica" },
        { source: "abalos", target: "cerdan", value: 2, type: "politica" },
        { source: "armengol", target: "abalos", value: 1, type: "politica" },
        
        // Relaciones Koldo
        { source: "koldo", target: "abalos", value: 5, type: "directa" },
        { source: "koldo", target: "cerdan", value: 4, type: "directa" },
        { source: "koldo", target: "aldama", value: 5, type: "corrupcion" },
        { source: "koldo", target: "merino", value: 3, type: "corrupcion" },
        { source: "koldo", target: "anton", value: 3, type: "corrupcion" },
        { source: "koldo", target: "ruz", value: 3, type: "corrupcion" },
        { source: "koldo", target: "fernandez", value: 3, type: "corrupcion" },
        { source: "koldo", target: "uriz", value: 4, type: "familiar" },
        
        // Relaciones empresarios
        { source: "aldama", target: "soluciones", value: 5, type: "empresarial" },
        { source: "aldama", target: "cueto", value: 4, type: "empresarial" },
        { source: "anton", target: "servinabar", value: 5, type: "empresarial" },
        { source: "anton", target: "noran", value: 4, type: "empresarial" },
        { source: "ruz", target: "lic", value: 5, type: "empresarial" },
        { source: "fernandez", target: "opr", value: 5, type: "empresarial" },
        
        // Relaciones funcionarios
        { source: "pardo", target: "abalos", value: 3, type: "jerarquica" },
        { source: "pardo", target: "koldo", value: 3, type: "corrupcion" },
        { source: "herrero", target: "abalos", value: 3, type: "jerarquica" },
        { source: "herrero", target: "koldo", value: 3, type: "corrupcion" },
        { source: "villalba", target: "koldo", value: 3, type: "corrupcion" },
        { source: "villalba", target: "aldama", value: 2, type: "corrupcion" },
        { source: "gomez", target: "abalos", value: 3, type: "jerarquica" },
        { source: "sanchez_alvaro", target: "puertos", value: 4, type: "jerarquica" },
        
        // Relaciones organismos
        { source: "adif", target: "pardo", value: 5, type: "jerarquica" },
        { source: "puertos", target: "abalos", value: 4, type: "jerarquica" },
        { source: "renfe", target: "koldo", value: 4, type: "jerarquica" },
        { source: "ineco", target: "transportes", value: 4, type: "dependencia" },
        { source: "acciona", target: "merino", value: 5, type: "empresarial" },
        { source: "azvi", target: "aldama", value: 3, type: "corrupcion" },
        { source: "lic", target: "ruz", value: 5, type: "empresarial" },
        { source: "opr", target: "fernandez", value: 5, type: "empresarial" },
        { source: "servinabar", target: "acciona", value: 3, type: "colaboracion" },
        
        // Contratos
        { source: "soluciones", target: "puertos", value: 4, type: "contrato" },
        { source: "soluciones", target: "armengol", value: 3, type: "contrato" },
        { source: "acciona", target: "adif", value: 3, type: "contrato" },
        { source: "azvi", target: "adif", value: 3, type: "contrato" },
        { source: "lic", target: "adif", value: 3, type: "contrato" },
        { source: "opr", target: "carreteras", value: 3, type: "contrato" }
        ,
        // OMT / Air Europa / Reunión propuesta
        { source: "zurab", target: "omt", value: 5, type: "jerarquica" },
        { source: "omt", target: "air_europa", value: 3, type: "colaboracion" },
        { source: "aldama", target: "omt", value: 3, type: "colaboracion" },
        { source: "aldama", target: "air_europa", value: 3, type: "empresarial" },
        { source: "abalos", target: "zurab", value: 2, type: "politica" },
        { source: "abalos", target: "abinader", value: 2, type: "politica" }
    ]
};

// ============================================
// RSS FEED DATA
// ============================================
const rssData = {
    title: "KoldoGate Archives",
    description: "Actualizaciones del archivo investigativo sobre el Caso Koldo",
    link: "https://koldogate-archives.github.io",
    lastBuildDate: new Date().toUTCString(),
    items: [
        {
            title: "Mensajes sobre reunión OMT-Air Europa y Gobierno de España",
            description: "Conversaciones revelan propuesta de reunión privada entre Ábalos, Zurab (OMT) y el presidente de República Dominicana; se menciona respuesta de 'Begoña y el presidente' a Zurab.",
            link: "#timeline",
            pubDate: "Sun, 18 Apr 2021 00:00:00 GMT",
            guid: "item-2021-04-18"
        },
        {
            title: "Santos Cerdán dimite tras informe de la UCO",
            description: "El secretario de Organización del PSOE dimite tras conocerse el informe que le vincula con la gestión de 620.000€ en mordidas.",
            link: "#timeline",
            pubDate: "Fri, 13 Jun 2025 00:00:00 GMT",
            guid: "item-2025-06-13"
        },
        {
            title: "La UCO registra la casa de Ábalos en Valencia",
            description: "Nuevos registros en el marco de la investigación sobre adjudicaciones de obra pública.",
            link: "#timeline",
            pubDate: "Thu, 12 Jun 2025 00:00:00 GMT",
            guid: "item-2025-06-12"
        },
        {
            title: "Imputados Pardo de Vera y Herrero Lizano",
            description: "La expresidenta de Adif y el exdirector general de Carreteras declaran como imputados. El juez les retira el pasaporte.",
            link: "#timeline",
            pubDate: "Mon, 21 Jul 2025 00:00:00 GMT",
            guid: "item-2025-07-21"
        },
        {
            title: "Descubierta foto de operación con oro venezolano",
            description: "La UCO encuentra en el ordenador de De Aldama evidencia de operación con 104 barras de oro del FONDEN venezolano.",
            link: "#timeline",
            pubDate: "Fri, 10 Oct 2025 00:00:00 GMT",
            guid: "item-2025-10-10"
        }
    ]
};

// ============================================
// SEARCH INDEX DATA (for Fuse.js)
// ============================================
const searchIndexData = [
    ...timelineEvents.map(e => ({
        id: `event-${e.id}`,
        title: e.title,
        description: e.description,
        type: "event",
        date: e.date,
        url: "#timeline"
    })),
    ...actorsData.map(a => ({
        id: `actor-${a.id}`,
        title: a.name,
        description: a.description,
        type: "actor",
        role: a.role,
        url: "#actores"
    }))
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { timelineEvents, actorsData, graphData, rssData, searchIndexData };
}
