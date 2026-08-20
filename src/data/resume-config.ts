import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'David Buchanan',
    photoBackEmoji: '🏆',
    title: {
      en: 'Delivery Lead, Agile Transformation',
      fr: 'Delivery Lead, Transformation Agile',
    },
    location: 'Anglet, France 64600',
  },
  // ===== SEO =====
  seo: {
    title: 'David Buchanan — Delivery Lead',
    description: 'Interactive resume of David Buchanan, Release Train Engineer & Scrum Master with 15+ years of experience in Agile delivery.',
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
    { type: 'email', label: 'davidbuchananemail@gmail.com' },
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
      role: { en: 'Release Train Engineer (RTE)', fr: 'Release Train Engineer (RTE)' },
      company: { en: 'MSI Experts | Airbus Cybersecurity', fr: 'MSI Experts | Airbus Cybersecurity' },
      period: { en: 'July 2024 – Present', fr: 'Juillet 2024 – Présent' },
      description: {
        en: 'Focus: Setting up how the teams work together and keeping our strategy on track.',
        fr: 'Focus : Structuration de la collaboration entre les équipes et suivi de la trajectoire stratégique.',
      },
      techs: ['Jira', 'Confluence', 'Klaxoon', 'SAFe'],
      details: {
        context: {
          en: 'Serving as the central Agile authority for four cross-functional Cybersecurity teams across three countries. Responsible for architecting end-to-end Agile governance and driving delivery excellence.',
          fr: 'Autorité Agile centrale pour quatre équipes de cybersécurité pluridisciplinaires réparties dans trois pays. Responsable de l\'architecture de la gouvernance Agile de bout en bout et de l\'excellence de la livraison.',
        },
        tasks: {
          en: [
            'PI Optimisation: Orchestrated a total re-architecture of PI Planning; eliminated redundant overhead, compressing a 3-day event into a single high-impact day (66% efficiency gain) while increasing stakeholder alignment.',
            'Strategic Alignment: Partnered with leadership to realign Epics and Capabilities, accelerating roadmap execution and achieving an 86% success rate (478 of 557 objectives delivered).',
            'Governance & Scaling: Established a robust framework to decompose high-level strategy into 11,261 actionable user stories; normalized capacity planning and velocity across 89 iterations to instill high-predictability delivery across the ART.',
          ],
          fr: [
            'Optimisation PI : Réarchitecture complète de la planification PI ; élimination des redondances, compression d\'un événement de 3 jours à une seule journée à fort impact (gain d\'efficacité de 66 %) tout en renforçant l\'alignement des parties prenantes.',
            'Alignement Stratégique : Partenariat avec la direction pour réaligner les Epics et les Capabilities, accélérant l\'exécution de la feuille de route et atteignant un taux de réussite de 86 % (478 objectifs livrés sur 557).',
            'Gouvernance & Passage à l\'Échelle : Établissement d\'un cadre robuste pour décomposer la stratégie de haut niveau en 11 261 user stories exploitables ; normalisation de la planification de la capacité et de la vélocité sur 89 itérations pour insuffler une livraison à haute prévisibilité au sein de l\'ART.',
          ],
        },
      },
    },
    {
      id: 'amaris-scrum-master',
      role: { en: 'Scrum Master', fr: 'Scrum Master' },
      company: { en: 'Amaris | Airbus Cybersecurity', fr: 'Amaris | Airbus Cybersecurity' },
      period: { en: 'September 2019 – June 2024', fr: 'Septembre 2019 – Juin 2024' },
      description: {
        en: 'Keeping our delivery pipelines moving and helping four different teams hit their goals.',
        fr: 'Maintien du dynamisme des pipelines de livraison et accompagnement de quatre équipes différentes dans l\'atteinte de leurs objectifs.',
      },
      techs: ['Jira', 'Confluence', 'ZohoSprints', 'Slack'],
      details: {
        context: {
          en: 'Directed delivery pipelines for four high-impact functions: Software Maintenance, Detection Engineering, Operations/Run Request Management, and Organisational Data Compliance.',
          fr: 'Direction des pipelines de livraison pour quatre fonctions à fort impact : Maintenance Logicielle, Ingénierie de Détection, Gestion des Opérations/Run, et Conformité des Données Organisationnelles.',
        },
        tasks: {
          en: [
            'Agile Governance: Orchestrated core Agile ceremonies and managed end-to-end iteration lifecycles for four teams from initial capacity planning and story refinement to tracking delivery, mitigating risks, and reporting on velocity. Directed over 2,000 daily standups to maintain team alignment and rapid resolution of impediments.',
            'Vendor & Stakeholder Management: Led weekly synchronization with cybersecurity vendors to resolve bugs and feature requests. Chaired department-wide showcases, ensuring leadership alignment on risk reduction and business value.',
            'Release Governance & Operations: Directed the Change Advisory Board (CAB) pipeline; oversaw 1,202 production deployments and resolved 1,155 technical defects, maintaining operational stability and a zero-incident deployment culture.',
            'Operational Optimization: Standardised departmental workflows, authored critical operational communications, and managed cross-functional PI-cycle logistics to ensure continuity across diverse team functions.',
          ],
          fr: [
            'Gouvernance Agile : Orchestration des cérémonies Agiles clés et gestion du cycle de vie des itérations de bout en bout pour quatre équipes, de la planification initiale des capacités et du raffinement des user stories jusqu\'au suivi de la livraison, à l\'atténuation des risques et au reporting de vélocité. Pilotage de plus de 2 000 réunions debout quotidiennes pour maintenir l\'alignement des équipes et la résolution rapide des obstacles.',
            'Gestion des Fournisseurs & des Parties Prenantes : Animation de synchronisations hebdomadaires avec les fournisseurs de cybersécurité pour résoudre les bugs et les demandes de fonctionnalités. Présentation de bilans à l\'échelle du département, garantissant l\'alignement de la direction sur la réduction des risques et la valeur commerciale.',
            'Gouvernance & Opérations de Livraison : Pilotage du pipeline du Comité Consultatif des Changements (CAB) ; supervision de 1 202 déploiements en production et résolution de 1 155 défauts techniques, maintenant ainsi la stabilité opérationnelle et une culture de déploiement zéro incident.',
            'Optimisation Opérationnelle : Standardisation des flux de travail départementaux, rédaction de communications opérationnelles critiques et gestion de la logistique du cycle PI interfonctionnel pour assurer la continuité entre diverses fonctions d\'équipe.',
          ],
        },
      },
    },
    {
      id: 'invesco-implementation-lead',
      role: { en: 'Implementation Lead (SaaS)', fr: 'Chef de Projet Implémentation (SaaS)' },
      company: { en: 'Invesco', fr: 'Invesco' },
      period: { en: '2015 – 2019', fr: '2015 – 2019' },
      description: {
        en: 'Helping major financial institutions get the most out of our software and making sure our implementation projects actually crossed the finish line.',
        fr: 'Accompagnement des principales institutions financières pour tirer le meilleur parti de notre logiciel et garantie de l\'aboutissement de nos projets de mise en œuvre.',
      },
      details: {
        context: {
          en: '',
          fr: '',
        },
        tasks: {
          en: [
            'End-to-End Implementation: Owned the full project lifecycle for major banks, investment firms, and insurers. Managed 6–12 month projects by translating complex client needs into technical configurations that actually worked for their business.',
            'Bridging Business & Tech: Acted as the go-between for clients and developers. I took high-level client goals and turned them into clear requirements, ensuring the development team built what the client actually needed, not just what was requested.',
            'Project Governance: Cut through project clutter by setting up simple, clear frameworks for project charters, risks, and internal roles, making it easy for teams to know exactly what needed to get done and when.',
            'Operational Problem Solving: Managed multiple implementation projects at once. I kept things moving by identifying bottlenecks early and coordinating between internal support teams and client stakeholders to keep momentum high.',
            'Product Growth & Advocacy: Served as the voice of the customer. I drove product adoption and identified new opportunities by listening to client feedback and using that data to help shape future product strategy.',
          ],
          fr: [
            'Implémentation de Bout en Bout : Prise en charge du cycle de vie complet des projets pour des banques de premier plan, des sociétés d\'investissement et des assureurs. Gestion de projets de 6 à 12 mois en traduisant des besoins clients complexes en configurations techniques adaptées à leur activité.',
            'Mise en Relation entre Métier et Technologie : Rôle d\'intermédiaire entre les clients et les développeurs. Transformation des objectifs clients de haut niveau en exigences claires, garantissant que l\'équipe de développement construisait ce dont le client avait réellement besoin, et non seulement ce qui avait été demandé.',
            'Gouvernance de Projet : Simplification des structures de projet grâce à la mise en place de cadres clairs pour les chartes de projet, les risques et les rôles internes, permettant aux équipes de savoir exactement ce qui devait être fait et quand.',
            'Résolution de Problèmes Opérationnels : Gestion simultanée de plusieurs projets d\'implémentation. Maintien de la dynamique grâce à l\'identification précoce des goulets d\'étranglement et à la coordination entre les équipes de support interne et les parties prenantes clientes.',
            'Croissance et Promotion du Produit : Rôle de porte-parole des clients. Stimulation de l\'adoption du produit et identification de nouvelles opportunités en écoutant les retours des clients et en utilisant ces données pour façonner la stratégie future du produit.',
          ],
        },
      },
      techs: ['Excel'],
    },
    {
      id: 'jemstep-product-owner',
      role: { en: 'Product Owner (Digital Wealth Management)', fr: 'Product Owner (Gestion de Patrimoine Digitale)' },
      company: { en: 'Jemstep', fr: 'Jemstep' },
      period: { en: 'June 2012 – December 2014', fr: 'Juin 2012 – Décembre 2014' },
      description: {
        en: 'Pivoting and scaling a B2B2C SaaS platform.',
        fr: 'Pivotement et mise à l\'échelle d\'une plateforme SaaS B2B2C.',
      },
      details: {
        context: {
          en: '',
          fr: '',
        },
        tasks: {
          en: [
            'Strategic Pivot: Led the transition of a wealth management platform from B2C to an enterprise B2B2C SaaS model for major US investment advisors.',
            'Product Lifecycle & Design: Owned the end-to-end product value stream (Research → Design → Build → Test → Measure → Iterate), leveraging story mapping and detailed backlog grooming to translate user journeys into precise engineering specs.',
            'Global Team Leadership: Directed product delivery across five distributed squads (US, South America, South Africa, India) using hybrid Agile/Waterfall frameworks.',
            'Stakeholder & Quality Governance: Acted as the central product authority for prioritization and scope, enforcing strict quality gates via UAT and KPI tracking to drive continuous iteration.',
            'Enablement: Drove organizational adoption through company-wide product training and client demonstrations.',
          ],
          fr: [
            'Pivot Stratégique : Direction de la transition d\'une plateforme de gestion de patrimoine du B2C vers un modèle SaaS B2B2C d\'entreprise pour de grands conseillers en investissement américains.',
            'Cycle de Vie & Conception Produit : Prise en charge du flux de valeur produit de bout en bout (Recherche → Conception → Construction → Test → Mesure → Itération), en s\'appuyant sur le story mapping et un raffinement détaillé du backlog pour traduire les parcours utilisateurs en spécifications techniques précises.',
            'Leadership d\'Équipes Globales : Pilotage de la livraison produit à travers cinq équipes distribuées (États-Unis, Amérique du Sud, Afrique du Sud, Inde) en utilisant des frameworks hybrides Agile/Waterfall.',
            'Gouvernance des Parties Prenantes & Qualité : Rôle d\'autorité produit centrale pour la priorisation et le périmètre, en appliquant des contrôles qualité stricts via les tests UAT et le suivi des KPI pour piloter l\'amélioration continue.',
            'Enablement : Stimulation de l\'adoption organisationnelle à travers des formations produit à l\'échelle de l\'entreprise et des démonstrations clients.',
          ],
        },
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
