import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const es = {
  nav: {
    home:       'Inicio',
    about:      'Nosotros',
    units:      'Unidades',
    coverage:   'Cobertura',
    contact:    'Contacto',
  },
  hero: {
    tagline:    'Viento favorable',
    tagline2:   'desde el oeste.',
    desc:       'Grupo logístico y portuario con operaciones en Manzanillo y Ensenada. Soluciones integrales para la cadena de suministro del Pacífico mexicano.',
    cta_units:  'Nuestras unidades',
    cta_contact:'Contáctanos',
  },
  about: {
    label:  'Quiénes somos',
    title:  'El grupo logístico del Pacífico',
    body:   'Western Group es una holding con más de 20 años de experiencia en operaciones portuarias y logística integral. Integramos cuatro unidades especializadas bajo una sola identidad: confiables, ágiles y comprometidos con la seguridad operacional y el cuidado del medio ambiente.',
    stat1_num: '+20',
    stat1_lbl: 'años de experiencia',
    stat2_num: '2',
    stat2_lbl: 'puertos de operación',
    stat3_num: '4',
    stat3_lbl: 'unidades de negocio',
  },
  units: {
    label: 'Nuestras unidades',
    title: 'Servicios para toda la cadena logística',
    cta:   'Conocer más',
    container: {
      name:    'Container Services',
      tagline: 'Patios de contenedores',
      desc:    'Almacenamiento, manejo y servicios especializados para contenedores de carga marítima en Manzanillo y Ensenada.',
      ports:   'Manzanillo · Ensenada',
    },
    stevedoring: {
      name:    'Stevedoring',
      tagline: 'Maniobras portuarias',
      desc:    'Estiba y desestiba con equipos de alto tonelaje y personal certificado en los principales puertos del Pacífico.',
      ports:   'Ensenada',
    },
    logistics: {
      name:    'Logistics Services',
      tagline: 'Forwarding y transporte',
      desc:    'Gestión integral de carga, forwarding, transporte terrestre y soluciones a la medida para importadores y exportadores.',
      ports:   'Manzanillo · Ensenada',
    },
    tankcare: {
      name:    'Tank Care',
      tagline: 'Servicios a isotanques',
      desc:    'Limpieza técnica especializada, mantenimiento y reparación de isotanques (FG y Químicos). A 5.5 km del puerto de Manzanillo.',
      ports:   'Manzanillo',
    },
  },
  coverage: {
    label: 'Cobertura',
    title: 'Presencia en el Pacífico mexicano',
    desc:  'Operamos desde los dos puertos más importantes del Pacífico mexicano, con conectividad directa a terminales, patios y vías terrestres.',
    manzanillo: {
      title: 'Manzanillo, Colima',
      desc:  'Puerto más activo del Pacífico. Sede principal de Tank Care, Container Services y Stevedoring.',
      units: 'Container Services · Stevedoring · Tank Care · Logistics',
    },
    ensenada: {
      title: 'Ensenada, Baja California',
      desc:  'Puerto estratégico en el noroeste del país con conexión directa a EE.UU. y rutas transpacíficas.',
      units: 'Container Services · Stevedoring · Logistics',
    },
  },
  contact: {
    label:    'Contacto',
    title:    'Trabajemos juntos',
    desc:     'Cuéntanos sobre tu operación. Nuestro equipo está listo para diseñar la solución logística que necesitas.',
    whatsapp: 'Escríbenos por WhatsApp',
    phone:    'Llámanos',
    email:    'Envía un correo',
    placeholder_wa:    '+52 312 112 43 44',
    placeholder_tel:   '+52 314 101 02 11',
    placeholder_email: 'cgerencia.zlo@tankcare.westerngroup.mx',
  },
  footer: {
    tagline: 'Somos el viento a favor.',
    rights:  'Todos los derechos reservados.',
  },
}

const en = {
  nav: {
    home:     'Home',
    about:    'About',
    units:    'Units',
    coverage: 'Coverage',
    contact:  'Contact',
  },
  hero: {
    tagline:    'Favorable winds',
    tagline2:   'from the west.',
    desc:       'Logistics and port operations group with presence in Manzanillo and Ensenada. Integral solutions for the Mexican Pacific supply chain.',
    cta_units:  'Our units',
    cta_contact:'Contact us',
  },
  about: {
    label:  'About us',
    title:  'The Pacific logistics group',
    body:   'Western Group is a holding company with over 20 years of experience in port operations and integrated logistics. We bring together four specialized units under one identity: reliable, agile, and committed to operational safety and environmental responsibility.',
    stat1_num: '+20',
    stat1_lbl: 'years of experience',
    stat2_num: '2',
    stat2_lbl: 'ports of operation',
    stat3_num: '4',
    stat3_lbl: 'business units',
  },
  units: {
    label: 'Our units',
    title: 'Services across the logistics chain',
    cta:   'Learn more',
    container: {
      name:    'Container Services',
      tagline: 'Container yards',
      desc:    'Storage, handling and specialized services for maritime cargo containers in Manzanillo and Ensenada.',
      ports:   'Manzanillo · Ensenada',
    },
    stevedoring: {
      name:    'Stevedoring',
      tagline: 'Port operations',
      desc:    'Loading and unloading with heavy-tonnage equipment and certified personnel at major Pacific ports.',
      ports:   'Manzanillo · Ensenada',
    },
    logistics: {
      name:    'Logistics Services',
      tagline: 'Forwarding & transport',
      desc:    'Full cargo management, forwarding, ground transport and custom solutions for importers and exporters.',
      ports:   'Manzanillo · Ensenada',
    },
    tankcare: {
      name:    'Tank Care',
      tagline: 'Isotank services',
      desc:    'Specialized technical cleaning, maintenance and repair of isotanks (FG & Chemicals). 5.5 km from Manzanillo port.',
      ports:   'Manzanillo',
    },
  },
  coverage: {
    label: 'Coverage',
    title: 'Presence on the Mexican Pacific',
    desc:  'We operate from the two most important ports on the Mexican Pacific, with direct connectivity to terminals, yards and ground routes.',
    manzanillo: {
      title: 'Manzanillo, Colima',
      desc:  'Most active Pacific port. Main base for Tank Care, Container Services and Stevedoring.',
      units: 'Container Services · Stevedoring · Tank Care · Logistics',
    },
    ensenada: {
      title: 'Ensenada, Baja California',
      desc:  'Strategic northwest port with direct connection to the US and transpacific routes.',
      units: 'Container Services · Stevedoring · Logistics',
    },
  },
  contact: {
    label:    'Contact',
    title:    "Let's work together",
    desc:     "Tell us about your operation. Our team is ready to design the logistics solution you need.",
    whatsapp: 'Message us on WhatsApp',
    phone:    'Call us',
    email:    'Send an email',
    placeholder_wa:    '+52 (000) 000-0000',
    placeholder_tel:   '+52 (000) 000-0000',
    placeholder_email: 'contacto@westerngroup.mx',
  },
  footer: {
    tagline: 'We are the wind in your favor.',
    rights:  'All rights reserved.',
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n