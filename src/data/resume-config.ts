import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'David Buchanan',
    // photo : auto-détectée depuis public/images/ — ne pas renseigner ici
    photoBackEmoji: '🚀',
    title: {
      en: 'Delivery Lead',
      fr: 'Delivery Lead',
    },
    subtitle: {
      en: '10+ years of experience',
      fr: 'Plus de 10 ans d\'expérience',
    },
    location: 'Anglet, France 64600',
  },

  // ===== SEO =====
  seo: {
    title: 'David Buchanan — Delivery Lead',
    description: 'Interactive resume of David Buchanan, Release Train Engineer & Scrum Master with 10+ years of experience in Agile delivery.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'linkedin', label: 'David Buchanan', href: 'https://www.linkedin.com/in/davidbuchanan-value-delivery/' },
    { type: 'email', label: 'davidbuchanaemail@gmail.com' },
    { type: 'phone', label: '+33 6 95 00 11 71' },
    { type: 'location', label: 'Anglet, France 64600' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Agile & Framework Leadership', fr: 'Leadership Agile & Framework' },
      type: 'text',
      items: [
        { name: { en: 'SAFe Framework & PI Optimization, Cross-Functional Team Leadership, SMART Objective Formulation, Data-Driven Process Optimization', fr: 'Framework SAFe & Optimisation PI, Leadership d\'équipes transverses, Formulation d\'objectifs SMART, Optimisation des processus par la donnée' } },
      ],
    },
    {
      title: { en: 'Release Governance & Execution', fr: 'Gouvernance & Exécution des Releases' },
      type: 'text',
      items: [
        { name: { en: 'End-to-End Release Scheduling, Production Change Management, Risk & Dependency Mitigation, Defect Lifecycle, Supplier Alignment', fr: 'Planification de release de bout en bout, Gestion des changements en production, Mitigation des risques et dépendances, Cycle de vie des défauts, Alignement fournisseurs' } },
      ],
    },
    {
      title: { en: 'Stakeholder & Team Alignment', fr: 'Alignement Parties Prenantes & Équipes' },
      type: 'text',
      items: [
        { name: { en: 'Executive Stakeholder Management, Cross-Departmental Communication', fr: 'Gestion des parties prenantes exécutives, Communication inter-départements' } },
      ],
    },
    {
      title: { en: 'Agile & Portfolio Management', fr: 'Gestion Agile & Portefeuille' },
      type: 'badges',
      items: [
        { name: 'Jira' },
        { name: 'VersionOne' },
        { name: 'ZohoSprints' },
      ],
    },
    {
      title: { en: 'Facilitation & Documentation', fr: 'Facilitation & Documentation' },
      type: 'badges',
      items: [
        { name: 'Confluence' },
        { name: 'Klaxoon' },
      ],
    },
    {
      title: { en: 'Automation & Scripting', fr: 'Automatisation & Scripting' },
      type: 'badges',
      items: [
        { name: 'Google Apps Script' },
        { name: 'API Integrations' },
        { name: 'Advanced Excel/Sheets' },
      ],
    },
    {
      title: { en: 'DevOps & Version Control', fr: 'DevOps & Contrôle de Version' },
      type: 'badges',
      items: [
        { name: 'GIT' },
        { name: 'GitHub' },
      ],
    },
    {
      title: { en: 'Collaboration', fr: 'Collaboration' },
      type: 'badges',
      items: [
        { name: 'Google Workspace' },
        { name: 'MS Teams' },
        { name: 'Slack' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'msi-experts-rte',
      company: { en: 'MSI Experts (at Airbus Cybersecurity)', fr: 'MSI Experts (chez Airbus Cybersecurity)' },
      role: { en: 'Release Train Engineer (RTE)', fr: 'Release Train Engineer (RTE)' },
      period: { en: 'July 2024 - Present', fr: 'Juillet 2024 - Présent' },
      description: {
        en: 'Serving as the central Agile authority for four cross-functional Cybersecurity teams across three countries, architecting end-to-end Agile governance and driving delivery excellence.',
        fr: 'Autorité Agile centrale pour quatre équipes Cybersécurité transverses réparties dans trois pays, en charge de la gouvernance Agile de bout en bout et de l\'excellence de livraison.',
      },
      techs: ['Jira', 'Confluence', 'Klaxoon'],
      isHighlighted: true,
      details: {
        tasks: {
          en: [
            'Re-architected PI Planning, compressing a 3-day event into a single high-impact day (66% efficiency gain) while increasing stakeholder alignment',
            'Partnered with leadership to realign Epics and Capabilities, achieving an 86% success rate (478 of 557 objectives delivered)',
            'Established a framework to decompose strategy into 11,261 actionable user stories, normalizing capacity planning and velocity across 89 iterations',
          ],
          fr: [
            'Refonte totale du PI Planning, transformant un événement de 3 jours en une seule journée à fort impact (gain d\'efficacité de 66%) tout en renforçant l\'alignement des parties prenantes',
            'Collaboration avec la direction pour réaligner les Epics et Capabilities, atteignant un taux de réussite de 86% (478 objectifs livrés sur 557)',
            'Mise en place d\'un cadre pour décomposer la stratégie en 11 261 user stories actionnables, normalisant la planification de capacité et la vélocité sur 89 itérations',
          ],
        },
        env: {
          en: 'Jira / Confluence / SAFe / Klaxoon',
          fr: 'Jira / Confluence / SAFe / Klaxoon',
        },
      },
    },
    {
      id: 'amaris-scrum-master',
      company: { en: 'Amaris (at Airbus Cybersecurity)', fr: 'Amaris (chez Airbus Cybersecurity)' },
      role: { en: 'Scrum Master', fr: 'Scrum Master' },
      period: { en: 'September 2019 - June 2024', fr: 'Septembre 2019 - Juin 2024' },
      description: {
        en: 'Directed delivery pipelines for four high-impact functions: Software Maintenance, Detection Engineering, Operations/Run Request Management, and Organisational Data Compliance.',
        fr: 'Pilotage des pipelines de livraison pour quatre fonctions à fort impact : Maintenance Logicielle, Ingénierie de Détection, Opérations/Gestion des Demandes, et Conformité des Données Organisationnelles.',
      },
      techs: ['Jira', 'Confluence', 'ZohoSprints', 'Slack'],
      details: {
        tasks: {
          en: [
            'Orchestrated core Agile ceremonies and managed end-to-end iteration lifecycles for four teams, from capacity planning and story refinement to delivery tracking and risk mitigation',
            'Directed over 2,000 daily standups to maintain team alignment and rapid resolution of impediments',
            'Led weekly synchronization with cybersecurity vendors to resolve bugs and feature requests; chaired department-wide showcases',
            'Directed the Change Advisory Board (CAB) pipeline, overseeing 1,202 production deployments and resolving 1,155 technical defects with a zero-incident deployment culture',
            'Standardized departmental workflows and managed cross-functional PI-cycle logistics',
          ],
          fr: [
            'Organisation des cérémonies Agile clés et gestion du cycle de vie complet des itérations pour quatre équipes, de la planification de capacité au suivi de livraison et à la mitigation des risques',
            'Animation de plus de 2 000 daily standups pour maintenir l\'alignement des équipes et la résolution rapide des blocages',
            'Synchronisation hebdomadaire avec les fournisseurs cybersécurité pour résoudre bugs et demandes de fonctionnalités ; animation des showcases inter-départements',
            'Pilotage du pipeline du Change Advisory Board (CAB), supervision de 1 202 déploiements en production et résolution de 1 155 défauts techniques avec une culture de déploiement zéro incident',
            'Standardisation des processus départementaux et gestion de la logistique cross-fonctionnelle des cycles PI',
          ],
        },
        env: {
          en: 'Jira / Confluence / ZohoSprints / Slack',
          fr: 'Jira / Confluence / ZohoSprints / Slack',
        },
      },
    },
    {
      id: 'invesco-implementation-lead',
      company: { en: 'Invesco', fr: 'Invesco' },
      role: { en: 'Implementation Lead (SaaS)', fr: 'Implementation Lead (SaaS)' },
      period: { en: '2015 - 2019', fr: '2015 - 2019' },
      description: {
        en: 'Owned the full project lifecycle for major banks, investment firms, and insurers, translating complex client needs into technical configurations that worked for their business.',
        fr: 'Responsable du cycle de vie complet des projets pour de grandes banques, sociétés d\'investissement et assureurs, traduisant des besoins clients complexes en configurations techniques adaptées à leur activité.',
      },
      details: {
        tasks: {
          en: [
            'Acted as the bridge between clients and developers, turning high-level goals into clear technical requirements',
            'Set up simple, clear frameworks for project charters, risks, and internal roles',
            'Managed multiple implementation projects simultaneously, identifying bottlenecks early and coordinating between support teams and client stakeholders',
            'Served as the voice of the customer, driving product adoption and shaping future product strategy',
          ],
          fr: [
            'Interface entre clients et développeurs, traduisant des objectifs de haut niveau en exigences techniques claires',
            'Mise en place de cadres simples et clairs pour les chartes de projet, les risques et les rôles internes',
            'Gestion simultanée de plusieurs projets d\'implémentation, identification précoce des blocages et coordination entre équipes support et parties prenantes clients',
            'Porte-voix du client, favorisant l\'adoption produit et orientant la stratégie produit future',
          ],
        },
      },
    },
    {
      id: 'jemstep-product-owner',
      company: { en: 'Jemstep', fr: 'Jemstep' },
      role: { en: 'Product Owner', fr: 'Product Owner' },
      period: { en: '2008 - 2014', fr: '2008 - 2014' },
      description: {
        en: 'Product Owner role at Jemstep.',
        fr: 'Poste de Product Owner chez Jemstep.',
      },
    },
  ],

  // ===== EDUCATION & CERTIFICATIONS =====
  education: [
    {
      school: { en: 'Scrum.org', fr: 'Scrum.org' },
      degree: { en: 'Professional Scrum Master (PSM I)', fr: 'Professional Scrum Master (PSM I)' },
      period: '',
    },
    {
      school: { en: 'Wits Business School', fr: 'Wits Business School' },
      degree: { en: 'Postgraduate Diploma in Management (PDM)', fr: 'Postgraduate Diploma in Management (PDM)' },
      period: '',
    },
    {
      school: { en: 'University of the Witwatersrand', fr: 'University of the Witwatersrand' },
      degree: { en: 'Certificate in Project Management', fr: 'Certificat en Gestion de Projet' },
      period: '',
    },
    {
      school: { en: 'Damelin', fr: 'Damelin' },
      degree: { en: 'Bachelor of Commerce (BCom)', fr: 'Bachelor of Commerce (BCom)' },
      specialty: { en: 'Marketing & Business Management', fr: 'Marketing & Gestion d\'Entreprise' },
      period: '',
    },
  ],

  // ===== THEME =====
  theme: {
    preset: 'minimal',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
