import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'David Buchanan',
    // photo : auto-détectée depuis public/images/ — ne pas renseigner ici
    photoBackEmoji: '🏆',
    title: {
      en: 'Delivery Lead',
      fr: 'Delivery Lead',
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
        { name: 'Google Apps Script (JavaScript)' },
        { name: 'API Integrations' },
        { name: 'Advanced Excel/Sheets (Pivot Tables, Query)' },
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
        context: {
          en: 'Setting up how the teams work together and keeping our strategy on track.',
          fr: 'Mise en place du fonctionnement des équipes et maintien de la stratégie sur la bonne voie.',
        },
        tasks: {
          en: [
            'Orchestrated a total re-architecture of PI Planning; eliminated redundant overhead, compressing a 3-day event into a single high-impact day (66% efficiency gain) while increasing stakeholder alignment.',
            'Partnered with leadership to realign Epics and Capabilities, accelerating roadmap execution and achieving an 86% success rate (478 of 557 objectives delivered).',
            'Established a robust framework to decompose high-level strategy into 11,261 actionable user stories; normalized capacity planning and velocity across 89 iterations to instill high-predictability delivery across the ART.',
          ],
          fr: [
            'Refonte totale du PI Planning, transformant un événement de 3 jours en une seule journée à fort impact (gain d\'efficacité de 66%) tout en renforçant l\'alignement des parties prenantes.',
            'Collaboration avec la direction pour réaligner les Epics et Capabilities, atteignant un taux de réussite de 86% (478 objectifs livrés sur 557).',
            'Mise en place d\'un cadre pour décomposer la stratégie en 11 261 user stories actionnables, normalisant la planification de capacité et la vélocité sur 89 itérations.',
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
        context: {
          en: 'Keeping our delivery pipelines moving and helping four different teams hit their goals.',
          fr: 'Maintien des pipelines de livraison et accompagnement de quatre équipes différentes vers leurs objectifs.',
        },
        tasks: {
          en: [
            'Orchestrated core Agile ceremonies and managed end-to-end iteration lifecycles for four teams from initial capacity planning and story refinement to tracking delivery, mitigating risks, and reporting on velocity. Directed over 2,000 daily standups to maintain team alignment and rapid resolution of impediments.',
            'Led weekly synchronization with cybersecurity vendors to resolve bugs and feature requests. Chaired department-wide showcases, ensuring leadership alignment on risk reduction and business value.',
            'Directed the Change Advisory Board (CAB) pipeline; oversaw 1,202 production deployments and resolved 1,155 technical defects, maintaining operational stability and a zero-incident deployment culture.',
            'Standardised departmental workflows, authored critical operational communications, and managed cross-functional PI-cycle logistics to ensure continuity across diverse team functions.',
          ],
          fr: [
            'Organisation des cérémonies Agile clés et gestion du cycle de vie complet des itérations pour quatre équipes.',
            'Animation de plus de 2 000 daily standups pour maintenir l\'alignement des équipes.',
            'Synchronisation hebdomadaire avec les fournisseurs cybersécurité pour résoudre bugs et demandes de fonctionnalités.',
            'Pilotage du pipeline du Change Advisory Board (CAB), supervision de 1 202 déploiements en production et résolution de 1 155 défauts techniques.',
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
        fr: 'Responsable du cycle de vie complet des projets pour de grandes banques, sociétés d\'investissement et assureurs.',
      },
      details: {
        context: {
          en: 'Helping major financial institutions get the most out of our software and making sure our implementation projects actually crossed the finish line.',
          fr: 'Aider les grandes institutions financières à tirer le meilleur parti du logiciel.',
        },
        tasks: {
          en: [
            'End-to-End Implementation: Owned the full project lifecycle for major banks, investment firms, and insurers. Managed 6-12 month projects by translating complex client needs into technical configurations that actually worked for their business.',
            'Bridging Business & Tech: Acted as the go-between for clients and developers. I took high-level client goals and turned them into clear requirements, ensuring the development team built what the client actually needed.',
            'Project Governance: Cut through project clutter by setting up simple, clear frameworks for project charters, risks, and internal roles.',
            'Operational Problem Solving: Managed multiple implementation projects at once, identifying bottlenecks early and coordinating between internal support teams and client stakeholders.',
            'Product Growth & Advocacy: Served as the voice of the customer, driving product adoption and identifying new opportunities by listening to client feedback.',
          ],
          fr: [
            'Implémentation de bout en bout pour de grandes banques et institutions financières.',
            'Interface entre clients et développeurs pour traduire les objectifs en exigences techniques.',
          ],
        },
        env: {
          en: 'Advanced Excel/Sheets / Project Management Tools',
          fr: 'Excel/Sheets avancé / Outils de gestion de projet',
        },
      },
      techs: ['Excel'],
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
      techs: [],
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
      degree: { en: 'Bachelor of Commerce (BCom) in Marketing & Business Management', fr: 'Bachelor of Commerce (BCom) en Marketing & Gestion d\'Entreprise' },
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
      education: { en: 'EDUCATION & CERTIFICATIONS', fr: 'FORMATION & CERTIFICATIONS' },
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
