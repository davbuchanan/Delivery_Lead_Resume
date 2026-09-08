import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'David Buchanan',
    photoBackEmoji: '🏆',
    title: {
      en: 'Release Train Engineer',
      fr: 'Release Train Engineer',
    },
    subtitle: {
      en: 'Fixing the organizational, product and delivery constraints that prevent teams from achieving their goals.',
      fr: 'Résoudre les blocages organisationnels, produit et de livraison qui empêchent les équipes d\'atteindre leurs objectifs.',
    },
    location: 'Anglet, France 64600',
  },
  // ===== SEO =====
  seo: {
    title: 'David Buchanan — Release Train Engineer',
    description: 'Interactive resume of David Buchanan, Release Train Engineer with 11+ years of Agile/Scrum leadership, including 7 years leading a multi-country Airbus Cybersecurity Agile Release Train.',
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
    { type: 'github', label: 'GitHub', href: 'https://github.com' },
    { type: 'email', label: 'davidbuchananemail@gmail.com' },
    { type: 'phone', label: '+33695001171' },
    { type: 'location', label: 'Anglet, France 64600' },
  ],
  // ===== SUMMARY / ABOUT =====
  summary: {
    en: 'Release Train Engineer with 11+ years of Agile/Scrum leadership, including 7 years of continuous delivery leadership on a single large-scale, multi-country Data Loss Prevention (DLP) Cybersecurity Agile Release Train (Airbus), preceded by 4 years as a self-taught Scrum Master who introduced Agile practices to a fintech organization from scratch. Currently serve as both RTE and embedded Scrum Master across 4 teams (32 people total), running team-level ceremonies alongside ART-level PI Planning and governance. Re-architected PI Planning to cut event duration by 66% (3 days → 1 day) while achieving an 86% objective success rate (478/557). Delivered 11,261 completed user stories and governed 1,200+ production releases with zero-incident change management.',
    fr: "Release Train Engineer avec plus de 11 ans d'expérience en leadership Agile/Scrum, dont 7 ans à la tête d'un Agile Release Train (ART) Cybersécurité/Data Loss Prevention (DLP) de grande envergure et multi-pays chez Airbus, précédés de 4 ans comme Scrum Master autodidacte, à l'origine de l'introduction des pratiques Agiles dans une organisation fintech partie de zéro. Assure aujourd'hui un double rôle de RTE et Scrum Master, entre animation des cérémonies au niveau équipe et pilotage de la planification et de la gouvernance au niveau ART. PI Planning repensé pour réduire la durée de l'événement de 66 % (3 jours → 1 jour) tout en maintenant un taux de réussite des objectifs de 86 % (478/557). Plus de 11 261 user stories livrées et plus de 1 200 mises en production gouvernées, sans incident de déploiement.",
  },
  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'ART Leadership & Planning', fr: 'Leadership ART & Planification' },
      type: 'text',
      items: [
        { name: { en: 'Agile Release Train (ART) Leadership, PI Planning & Execution, Cross-Team Dependency & Risk Management, Delivery Predictability & Velocity Governance', fr: "Leadership d'Agile Release Train (ART) · Planification et Exécution des PI · Gestion des dépendances et risques inter-équipes · Prédictibilité de la livraison & Gouvernance de la vélocité" } },
      ],
    },
    {
      title: { en: 'Release Governance & Stakeholders', fr: 'Gouvernance des Mises en Ligne & Parties Prenantes' },
      type: 'text',
      items: [
        { name: { en: 'Release Governance & Defect Management (CAB), Distributed Team Leadership (Multi-Country), Executive & Cross-Departmental Stakeholder Management, Vendor Management', fr: 'Gouvernance des mises en production (CAB) & Gestion des anomalies · Leadership d\'équipes distribuées multi-pays · Gestion des parties prenantes exécutives et interservices · Gestion des fournisseurs' } },
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
  ],
  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'konectiv-airbus',
      role: { en: 'Release Train Engineer', fr: 'Release Train Engineer' },
      company: { en: 'Konectiv | Airbus Cybersecurity', fr: 'Konectiv | Airbus Cybersecurity' },
      period: { en: 'July 2024 – Present', fr: 'Juillet 2024 – Présent' },
      description: {
        en: 'Focus: Serving as both RTE and embedded Scrum Master across 4 teams (32 people total), running team-level ceremonies alongside ART-level PI Planning and governance.',
        fr: "Focus : Double rôle de RTE et Scrum Master intégré pour 4 équipes (32 personnes au total), entre animation des cérémonies au niveau équipe et pilotage de la planification et de la gouvernance au niveau ART.",
      },
      techs: ['Jira', 'Confluence', 'Klaxoon', 'SAFe'],
      details: {
        context: {
          en: 'Agile leadership on the Airbus Cybersecurity DLP account since September 2019, across two consecutive service-provider engagements: Mantu (2019–2024) and Konectiv (2024–present).',
          fr: "Leadership Agile sur le compte Airbus Cybersecurity DLP depuis septembre 2019, à travers deux prestataires successifs (Mantu 2019–2024, puis Konectiv depuis 2024).",
        },
        tasks: {
          en: [
            'Re-architected PI Planning end-to-end, cutting the event from 3 days to 1 day (66% reduction) across 4 teams in 3 countries.',
            'Partnered with leadership to realign Epics and Capabilities with strategic priorities, improving planning clarity for downstream teams.',
            'Governed delivery execution across the ART, achieving an 86% objective success rate (478 of 557 committed objectives).',
            'Established the governance framework of capacity planning, velocity tracking, and iteration cadence that enabled the ART to complete 11,261 user stories across 89 iterations, sustaining high-predictability delivery.',
            'Serve as both RTE and embedded Scrum Master across all 4 teams (32 people total), running team-level ceremonies alongside ART-level PI Planning and governance, with no intermediate Scrum Master layer.',
            'Govern ART delivery accountability across internal teams, subcontractors, and vendor partners.',
          ],
          fr: [
            "Le PI Planning a été entièrement repensé pour des équipes réparties dans 3 pays, avec une durée réduite de 66 % (3 jours → 1 jour).",
            "Travail avec les PMs pour réaligner Epics et Capabilities sur les priorités stratégiques, ce qui a clarifié la planification pour les équipes en aval.",
            "Taux de réussite des objectifs de 86 % (478 sur 557) au niveau ART.",
            "Mise en place de la gouvernance de capacité, de vélocité et de cadence des itérations, permettant la livraison de 11 261 user stories sur 89 itérations.",
            "Rôles combinés de RTE et Scrum Master intégré pour plusieurs équipes, sans échelon intermédiaire de Scrum Master.",
            "Responsabilité de la livraison à l'échelle de l'ART, incluant équipes internes, sous-traitants et partenaires fournisseurs.",
          ],
        },
      },
    },
    {
      id: 'mantu-airbus',
      role: { en: 'Scrum Master (ART-Level Delivery Lead)', fr: 'Scrum Master (Responsable de livraison au niveau ART)' },
      company: { en: 'Mantu | Airbus Cybersecurity', fr: 'Mantu | Airbus Cybersecurity' },
      period: { en: 'September 2019 – June 2024', fr: 'Septembre 2019 – Juin 2024' },
      description: {
        en: 'Focus: Keeping our delivery pipelines moving and helping the different teams hit their goals.',
        fr: "Focus : Fluidification des pipelines de livraison et soutien aux équipes pour l'atteinte de leurs objectifs.",
      },
      techs: ['Jira', 'Confluence', 'ZohoSprints', 'Slack'],
      details: {
        context: {
          en: 'Directed delivery pipelines for four high-impact functions: Software Maintenance, Detection Engineering, Operations/Run, and Organisational Data Compliance.',
          fr: 'Direction des pipelines de livraison pour quatre fonctions à fort impact : Maintenance logicielle, Ingénierie de détection, Gestion des opérations/RUN et Conformité des données organisationnelles.',
        },
        tasks: {
          en: [
            'Directed Agile ceremonies and iteration lifecycles across 4 teams (Software Maintenance, Detection Engineering, Operations/Run, Data Compliance) - capacity planning, refinement, delivery tracking, and velocity reporting; ran 2,000+ daily standups.',
            'Owned the Change Advisory Board (CAB) pipeline, governing 1,202 production deployments and resolving 1,155 defects with zero-incident deployment outcomes.',
            'Led weekly stakeholder synchronization with cybersecurity technology vendors on product bugs, feature requests, and roadmap alignment; chaired department-wide showcases for leadership visibility into risk and business value.',
            'Standardized departmental workflows and managed cross-functional PI-cycle logistics across all 4 functions - effectively running ART-level cadence and governance ahead of formal RTE title.',
          ],
          fr: [
            "Cérémonies Agiles et cycles d'itération pilotés pour 4 équipes (Maintenance logicielle, Ingénierie de détection, Opérations/Run, Conformité des données) ; plus de 2 000 daily standups animés.",
            "Pipeline du Change Advisory Board (CAB) géré : 1 202 mises en production supervisées, 1 155 anomalies résolues, sans incident de déploiement majeur.",
            "Synchronisation hebdomadaire avec les fournisseurs de cybersécurité sur anomalies, demandes de fonctionnalités et roadmap ; showcases départementaux animés pour la direction.",
            "Processus départementaux standardisés et logistique inter-équipes des cycles de PI gérée pour les 4 fonctions — remplissant en pratique le rôle de RTE avant l'obtention formelle du titre.",
          ],
        },
      },
    },
    {
      id: 'invesco-implementation-lead',
      role: { en: 'Implementation Lead (SaaS)', fr: 'Implementation Lead (SaaS)' },
      company: { en: 'Invesco', fr: 'Invesco' },
      period: { en: 'January 2015 – June 2019', fr: 'Janvier 2015 – Juin 2019' },
      description: {
        en: 'Focus: Helping major financial institutions get the most out of our software and making sure our implementation projects actually crossed the finish line.',
        fr: "Focus : Accompagnement d'institutions financières majeures dans l'optimisation de l'utilisation de nos logiciels et garantie de l'aboutissement des projets d'implémentation.",
      },
      techs: ['Excel'],
      details: {
        context: {
          en: 'Jemstep was acquired by Invesco in 2015, continued in an implementation and client-onboarding capacity building on existing product knowledge.',
          fr: 'Jemstep racheté par Invesco en 2015 ; poursuite de la mission en tant que responsable d\'implémentation et d\'intégration client.',
        },
        tasks: {
          en: [
            'Owned full project lifecycle for banking, investment, and insurance clients on 6–12 month SaaS implementation engagements, translating client requirements into working technical configurations.',
            'Acted as the primary liaison between clients and developers, converting high-level business goals into requirements that matched actual client needs.',
            'Built standardized project governance frameworks (charters, risk registers, role definitions) to keep multi-project delivery on schedule.',
            'Fed client feedback into product strategy, functioning as an internal voice of the customer.',
          ],
          fr: [
            "Cycle de vie complet piloté pour des projets d'implémentation de 6 à 12 mois auprès de clients bancaires, financiers et assurantiels.",
            "Interface assurée entre clients et développeurs, traduisant des objectifs business en exigences techniques claires.",
            "Cadres de gouvernance de projet mis en place (chartes, registres de risques, définition des rôles) pour clarifier les livrables attendus.",
            "Retours clients intégrés à la stratégie produit en interne.",
          ],
        },
      },
    },
    {
      id: 'jemstep-product-owner',
      role: { en: 'Product Owner, Digital Wealth Management', fr: 'Product Owner, Digital Wealth Management' },
      company: { en: 'Jemstep', fr: 'Jemstep' },
      period: { en: 'June 2012 – December 2014', fr: 'Juin 2012 – Décembre 2014' },
      description: {
        en: 'Focus: Pivoting and scaling a B2B2C SaaS platform.',
        fr: "Focus : Réorientation stratégique et passage à l'échelle d'une plateforme SaaS B2B2C.",
      },
      details: {
        context: {
          en: '',
          fr: '',
        },
        tasks: {
          en: [
            'Led the platform\'s transition from B2C to enterprise B2B2C SaaS for major US investment advisors, including product design for the new offering.',
            'Owned the end-to-end product lifecycle (research → design → build → test → measure → iterate) using story mapping and backlog grooming.',
            'Directed product delivery across 5 distributed squads (US, South America, South Africa, India) under hybrid Agile/Waterfall.',
            'Project-managed client onboarding ("whitelisting") of major American investment houses onto the new B2B platform, drawing on deep product knowledge from having designed it.',
            'Enforced quality gates via UAT and KPI tracking; drove adoption through company-wide training and client demonstrations.',
          ],
          fr: [
            "Transition de la plateforme pilotée d'un modèle B2C vers un modèle B2B2C d'entreprise pour les principaux conseillers en investissement américains, y compris la conception produit de la nouvelle offre.",
            "Cycle de vie produit complet piloté (recherche → conception → développement → test → mesure → itération), via story mapping et raffinement du backlog.",
            "Livraison dirigée à travers 5 équipes distribuées (États-Unis, Amérique du Sud, Afrique du Sud, Inde) en méthodologie hybride Agile/Waterfall.",
            "Intégration de grandes maisons d'investissement américaines pilotée sur la nouvelle plateforme B2B, en s'appuyant sur une connaissance approfondie du produit.",
            "Points de contrôle qualité mis en œuvre (UAT, suivi de KPI) ; adoption favorisée via formations internes et démonstrations client.",
          ],
        },
      },
    },
    {
      id: 'jemstep-scrum-master',
      role: { en: 'Scrum Master (International FinTech Product)', fr: 'Scrum Master (Produit FinTech international)' },
      company: { en: 'Jemstep', fr: 'Jemstep' },
      period: { en: 'April 2008 – May 2012', fr: 'Avril 2008 – Mai 2012' },
      description: {
        en: 'Focus: Self-taught introduction of Agile/Scrum practices to a fintech organization, from scratch.',
        fr: "Focus : Introduction autodidacte des pratiques Agile/Scrum dans une organisation fintech, en partant de zéro.",
      },
      details: {
        context: {
          en: 'Joined Jemstep at inception as a financial investment researcher, evaluating and classifying investments for a ranking engine, and became the primary liaison between the South Africa and US teams. Promoted to Project Manager, then self-taught Agile/Scrum from the ground up and became the company\'s first Scrum Master, introducing Agile practices to the organization with no prior internal framework to follow.',
          fr: "Entré chez Jemstep dès sa création comme analyste en investissements financiers, avant de devenir l'interlocuteur principal entre les équipes d'Afrique du Sud et des États-Unis. Promu Project Manager, puis autodidacte en Agile/Scrum, devenu le premier Scrum Master de l'entreprise, sans cadre interne préexistant pour s'appuyer.",
        },
        tasks: {
          en: [
            'Introduced and guided Agile practices across the whole organization, as the company\'s first Agile implementation, self-taught and self-led.',
            'Worked with Product Owners to keep the backlog prioritized, writing clear acceptance criteria and definitions of done for epics, stories, and bugs.',
            'Ran all planning sessions, including effort estimation and confidence voting; tracked velocity, capacity, planned vs. accepted effort, and burn-down metrics to drive continuous improvement.',
            'Set quality standards for test and defect tracking, shipping reliable code on a two-week cadence for a US subscription platform.',
          ],
          fr: [
            "Pratiques Agiles introduites et pilotées au sein de l'organisation, en autodidacte et de sa propre initiative.",
            "Collaboration avec les Product Owners sur un backlog priorisé, avec rédaction de critères d'acceptation et de définitions de « fini » pour epics, user stories et anomalies.",
            "Sessions de planification animées (estimation, vote de confiance), suivi de la vélocité, de la capacité et des burn-down charts pour l'amélioration continue.",
            "Standards qualité définis pour le suivi des tests et anomalies, permettant une livraison fiable en cadence bimensuelle pour une plateforme d'abonnement américaine.",
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
      period: '2019',
    },
    {
      school: { en: 'University of the Witwatersrand', fr: 'University of the Witwatersrand' },
      degree: { en: 'Certificate in Project Management', fr: 'Certificat en Gestion de Projet' },
      period: '2010',
    },
    {
      school: { en: 'Wits Business School', fr: 'Wits Business School' },
      degree: { en: 'Postgraduate Diploma in Management (PDM)', fr: 'Postgraduate Diploma in Management (PDM)' },
      period: '2006',
    },
    {
      school: { en: 'Damelin', fr: 'Damelin' },
      degree: { en: 'Bachelor of Commerce (BCom) in Marketing & Business Management', fr: "Bachelor of Commerce (BCom) en Marketing & Gestion d'Entreprise" },
      period: '2003-2005',
    },
  ],
  // ===== HOBBIES / VALUES =====
  hobbies: [
    {
      title: { en: 'Core Values', fr: 'Valeurs fondamentales' },
      details: [
        { en: 'Fairness and equality, transparency, empathy, encouragement, collaboration', fr: "Équité et égalité, transparence, empathie, encouragement et esprit de collaboration" },
      ],
    },
    {
      title: { en: 'Interests', fr: "Centres d'intérêt" },
      details: [
        { en: 'Health and wellness, food and coffee, cycling and rugby', fr: 'Santé et bien-être, gastronomie et café, cyclisme et rugby' },
      ],
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
      hobbies: { en: 'HOBBIES', fr: "VALEURS & CENTRES D'INTÉRÊT" },
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
