/* ==========================================
   PROYECTO 8 · DATOS DE CONTENIDO
   Actualizado con portafolio institucional
   ========================================== */

const SITE_DATA = {

  /* ---- Presentación Institucional ---- */
  about: {
    intro: 'La Fundación Proyecto 8 Fundación Social es una organización comprometida con el desarrollo integral de la primera infancia, brindando atención educativa y acompañamiento social a niños y niñas de nuestra comunidad.',
    mission: 'Nuestra misión es ofrecer un espacio seguro, educativo y formativo donde los niños reciban acompañamiento en el desarrollo de sus tareas escolares, refuercen su aprendizaje y fortalezcan sus valores. Trabajamos enseñando con amor, paciencia y responsabilidad, orientando a cada niño no solo en el ámbito académico, sino también en su comportamiento, respeto, disciplina y crecimiento personal.',
    vision: 'Nuestra visión es consolidarnos como una institución reconocida en la ciudad de Pasto por nuestra labor educativa y social. Aspiramos a ampliar nuestros proyectos pedagógicos y sociales para beneficiar a más niños y familias, especialmente a aquellos en situación de vulnerabilidad. Buscamos desarrollar programas de apoyo académico, formación en valores y actividades recreativas que contribuyan al bienestar de la niñez, manteniendo siempre nuestro carácter social y sin ánimo de lucro.',
    objectives: [
      'Fortalecer el aprendizaje y desarrollo integral de los niños y niñas atendidos',
      'Brindar acompañamiento educativo y social a familias y cuidadores',
      'Fomentar valores, hábitos saludables y habilidades socioemocionales',
      'Capacitar constantemente al equipo docente para mejorar la calidad educativa',
      'Promover la inclusión y atención a niños con discapacidad o vulnerabilidad',
      'Desarrollar proyectos comunitarios y educativos para la primera infancia, adolescencia y familias'
    ]
  },

  /* ---- Servicios para niños ---- */
  services: [
    {
      icon: 'book',
      title: 'Acompañamiento Escolar',
      desc: 'Apoyo en tareas, refuerzo de habilidades básicas y orientación académica para fortalecer el aprendizaje.'
    },
    {
      icon: 'activity',
      title: 'Actividades Lúdicas',
      desc: 'Juegos didácticos, actividades grupales y dinámicas de integración que estimulan el aprendizaje a través del juego.'
    },
    {
      icon: 'heart',
      title: 'Apoyo Emocional y Social',
      desc: 'Seguimiento afectivo y trabajo en valores como respeto, empatía e inclusión para el desarrollo socioemocional.'
    },
    {
      icon: 'music',
      title: 'Talleres de Creatividad',
      desc: 'Manualidades, actividades artísticas y espacios de juego que fomentan la imaginación y la expresión.'
    },
    {
      icon: 'food',
      title: 'Alimentación Básica',
      desc: 'Refrigerios o apoyo nutricional para el bienestar diario de los niños según programas vigentes.'
    },
    {
      icon: 'users',
      title: 'Inclusión y Discapacidad',
      desc: 'Atención personalizada, actividades sensoriales y juegos educativos inclusivos adaptados a cada niño.'
    }
  ],

  /* ---- Proyectos ---- */
  projects: [
    {
      title: 'Proyecto con Adultos Mayores',
      desc: 'Actividades de manualidades, recreación y apoyo emocional para promover el bienestar de los abuelitos, fortaleciendo vínculos afectivos y manteniendo la actividad cognitiva.',
      icon: 'heart'
    },
    {
      title: 'Proyecto Medio Ambiente',
      desc: 'Actividades con niños y familias sobre reciclaje, cuidado del entorno, siembra y educación ambiental para promover hábitos responsables desde la primera infancia.',
      icon: 'activity'
    },
    {
      title: 'Mujeres Gestantes y Lactantes',
      desc: 'Acompañamiento a mujeres embarazadas a través de talleres sobre maternidad, nutrición, cuidado emocional y crianza inicial.',
      icon: 'heart'
    },
    {
      title: 'Formación Docente',
      desc: 'Capacitaciones dirigidas al equipo de trabajo para actualizar conocimientos pedagógicos, fortalecer competencias y mejorar la atención infantil.',
      icon: 'book'
    }
  ],

  /* ---- Blog ---- */
  blog: [
    {
      date: '15 Jun 2026',
      title: 'Talleres de verano: un espacio para crecer',
      excerpt: 'Más de 80 niños participaron en nuestros talleres de verano, combinando aprendizaje, arte y diversión en un entorno seguro.',
      category: 'Actividades'
    },
    {
      date: '28 May 2026',
      title: 'Jornada de salud familiar',
      excerpt: 'En alianza con el centro de salud local, realizamos una jornada integral de chequeos médicos para niños y sus familias.',
      category: 'Salud'
    },
    {
      date: '10 May 2026',
      title: 'Nuevo programa de apoyo escolar',
      excerpt: 'Fortalecemos nuestro programa de acompañamiento académico para garantizar que ningún niño se quede atrás.',
      category: 'Educación'
    },
    {
      date: '22 Abr 2026',
      title: 'Voluntarios que inspiran',
      excerpt: 'Conoce la historia de nuestros voluntarios y cómo su dedicación está cambiando vidas en Pasto.',
      category: 'Voluntariado'
    },
    {
      date: '5 Abr 2026',
      title: 'Entrega de útiles escolares',
      excerpt: 'Gracias a las donaciones, entregamos kits escolares completos para el inicio del ciclo lectivo.',
      category: 'Donaciones'
    },
    {
      date: '18 Mar 2026',
      title: 'Campaña de alimentación saludable',
      excerpt: 'Lanzamos una campaña de concientización sobre alimentación saludable para las familias de nuestra comunidad.',
      category: 'Nutrición'
    }
  ],

  /* ---- Galería ---- */
  gallery: [
    { id: 1, label: 'Apoyo escolar', color: '#19437d' },
    { id: 2, label: 'Actividades recreativas', color: '#318ecb' },
    { id: 3, label: 'Talleres de arte', color: '#dd6b2d' },
    { id: 4, label: 'Juegos inclusivos', color: '#92ae40' },
    { id: 5, label: 'Convivencia familiar', color: '#466228' },
    { id: 6, label: 'Espacios de juego', color: '#ef6117' },
    { id: 7, label: 'Proyecto medio ambiente', color: '#92ae40' },
    { id: 8, label: 'Formación docente', color: '#19437d' },
    { id: 9, label: 'Talleres con abuelitos', color: '#dd6b2d' },
    { id: 10, label: 'Alimentación', color: '#f7ab31' },
    { id: 11, label: 'Acompañamiento emocional', color: '#318ecb' },
    { id: 12, label: 'Celebrandonos juntos', color: '#ef6117' }
  ],

  /* ---- Equipo de Trabajo ---- */
  team: [
    {
      name: 'Julia González Tovar',
      role: 'Directora de la Fundación',
      desc: 'Técnica en Auxiliar de Preescolar, diplomada en Pedagogía y Educación Inclusiva. Estudiante de Básica Primaria en la Universidad Mariana.'
    },
    {
      name: 'Johana González',
      role: 'Subdirectora',
      desc: 'Administradora Pública, especialista en Gerencia Financiera. Diplomada en Finanzas Corporativas y Reestructuración Empresarial.'
    },
    {
      name: 'Paula de la Cruz',
      role: 'Coordinadora Académica',
      desc: 'Licenciada en Lengua Castellana y Literatura, magíster en Pedagogía por la Universidad Mariana.'
    },
    {
      name: 'Francisco Yaqueno Jurado',
      role: 'Representante de Asamblea',
      desc: 'Biólogo de la Universidad de Nariño, coordinador de Proyectos Ambientales.'
    },
    {
      name: 'Luz Dary',
      role: 'Docente',
      desc: 'Auxiliar de Preescolar, comprometida con la educación y el bienestar infantil.'
    },
    {
      name: 'Yesica Imbajoa',
      role: 'Docente',
      desc: 'Formación en Primera Infancia y profesora de Matemáticas, dedicada a fortalecer el aprendizaje de los niños.'
    }
  ],

  /* ---- Testimonios ---- */
  testimonials: [
    {
      quote: 'Gracias a Proyecto 8, mi hijo ha mejorado enormemente en la escuela. Ahora lee con confianza y está motivado.',
      author: 'Madre de familia',
      role: 'Familia beneficiaria',
      initials: 'MF'
    },
    {
      quote: 'El acompañamiento que reciben nuestros hijos va más allá de las tareas. Les enseñan valores, respeto y a ser mejores personas.',
      author: 'Padre de familia',
      role: 'Comunidad',
      initials: 'PF'
    },
    {
      quote: 'Ser practicante aquí me ha dado experiencia real y me ha enseñado el verdadero significado de la educación con amor.',
      author: 'Estudiante en práctica',
      role: 'Aliado universitario',
      initials: 'EP'
    },
    {
      quote: 'Los talleres de creatividad son el momento favorito de mi hija. Aquí encontró un espacio para expresarse y ser feliz.',
      author: 'Madre de familia',
      role: 'Familia beneficiaria',
      initials: 'MF'
    }
  ],

  /* ---- Estadísticas ---- */
  stats: {
    families: 200,
    children: 150,
    programs: 6,
    projects: 4
  }
};
