import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'David Buchanan',
    photoBackEmoji: '🏆',
    title: {
      en: 'Agile Transformation Lead · Enterprise Delivery',
      fr: 'Agile Transformation Lead · Enterprise Delivery',
    },
    location: 'Anglet, France 64600',
  },
  // ===== SEO =====
  seo: {
    title: 'David Buchanan — Agile Transformation Lead',
    description: 'Interactive resume of David Buchanan, Agile Transformation Lead & Enterprise Delivery expert with 15+ years of experience.',
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
    en: 'Scrum Master (Release Train Engineer) with 15+ years of experience in complex project delivery...',
    fr: "Scrum Master (Release Train Engineer) fort de plus de 15 ans d'expérience dans la livraison de projets complexes. Je m'attache à construire des systèmes de livraison réellement efficaces, en traduisant une stratégie de haut niveau en une exécution prévisible et fiable. Tout au long de mon parcours, je suis passé de la gestion de la livraison au niveau des équipes à la conception de cadres Agile à l'échelle de l'organisation. Mon approche est simple : je structure le désordre, je lève les blocages et je m'appuie sur les données pour identifier les axes d'amélioration. Dans mon poste actuel, mes équipes ont livré plus de 11 000 user stories et 1 200 déploiements en production (avec un souci constant de la qualité plutôt que de la quantité). J'ai optimisé le processus de PI Planning, réduisant la durée de l'événement de 66 % tout en maintenant un taux de réalisation des objectifs de 86 %. Je suis le plus efficace lorsque je fais le lien entre la stratégie de la direction et la réalité opérationnelle des équipes, en veillant à ce qu'elles disposent d'un chemin clair pour créer de la valeur, sans les frictions habituelles liées à la bureaucratie d'entreprise.",
  },
  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Agile & Framework Leadership', fr: 'Leadership Agile & Frameworks' },
      type: 'text',
      items: [
        { name: { en: 'SAFe Framework & PI Optimization, Cross-Functional Team Leadership, SMART Objective Formulation, Data-Driven Process Optimization', fr: 'Framework SAFe & Optimisation PI · Management d’équipes pluridisciplinaires · Formulation d’objectifs SMART · Optimisation des processus axée sur les données' } },
      ],
    },
    {
      title: { en: 'Release Governance & Execution', fr: 'Gouvernance & Exécution des Mises en Ligne' },
      type: 'text',
      items: [
        { name: { en: 'End-to-End Release Scheduling, Production Change Management, Risk & Dependency Mitigation, Defect Lifecycle, Supplier Alignment', fr: 'Planification de releases de bout en bout · Gestion des changements en production · Atténuation des risques et des dépendances · Cycle de vie des anomalies · Alignement des fournisseurs' } },
      ],
    },
    {
      title: { en: 'Stakeholder & Team Alignment', fr: 'Alignement des Parties Prenantes & des Équipes' },
      type: 'text',
      items: [
        { name: { en: 'Executive Stakeholder Management, Cross-Departmental Communication', fr: 'Gestion des parties prenantes exécutives · Communication interministérielle' } },
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
      id: 'konectiv-airbus',
      role: { en: 'Scrum Master / RTE', fr: 'Scrum Master / RTE' },
      company: { en: 'Konectiv | Airbus Cybersecurity', fr: 'Konectiv | Airbus Cybersecurity' },
      period: { en: 'July 2024 – Present', fr: 'Juillet 2024 – Présent' },
      description: {
        en: 'Focus: Setting up how the teams work together and keeping our strategy on track.',
        fr: 'Focus : Structuration de la collaboration entre les équipes et suivi de la trajectoire stratégique.',
      },
      techs: ['Jira', 'Confluence', 'Klaxoon', 'SAFe'],
      details: {
        context: {
          en: 'Serving as the central Agile authority for four cross-functional Cybersecurity teams across three countries. Responsible for architecting end-to-end Agile governance and driving delivery excellence.',
          fr: 'Référent Agile central pour quatre équipes de cybersécurité pluridisciplinaires réparties sur trois pays. Responsable de l’architecture de la gouvernance Agile de bout en bout et de l’excellence opérationnelle.',
        },
        tasks: {
          en: [
            'PI Optimisation: Orchestrated a total re-architecture of PI Planning; eliminated redundant overhead, compressing a 3-day event into a single high-impact day (66% efficiency gain) while increasing stakeholder alignment.',
            'Strategic Alignment: Partnered with leadership to realign Epics and Capabilities, accelerating roadmap execution and achieving an 86% success rate (478 of 557 objectives delivered).',
            'Governance & Scaling: Established a robust framework to decompose high-level strategy into 11,261 actionable user stories; normalized capacity planning and velocity across 89 iterations to instill high-predictability delivery across the ART.',
          ],
          fr: [
            'Optimisation PI : Orchestration de la réarchitecture complète de la planification PI ; suppression des redondances pour condenser un événement de 3 jours en une seule journée à fort impact (gain d’efficacité de 66 %) tout en renforçant l’alignement des parties prenantes.',
            'Alignement Stratégique : Partenariat avec la direction pour réaligner les Epics et les Capabilities, accélérant l’exécution de la roadmap et atteignant un taux de réussite de 86 % (478 objectifs livrés sur 557).',
            'Gouvernance & Passage à l’Échelle : Mise en place d’un cadre robuste pour décomposer la stratégie de haut niveau en 11,261 user stories exploitables ; normalisation de la planification de la capacité et de la vélocité sur 89 itérations afin d’instaurer une livraison hautement prévisible au sein du Release Train (ART).',
          ],
        },
      },
    },
    {
      id: 'mantu-airbus',
      role: { en: 'Scrum Master', fr: 'Scrum Master' },
      company: { en: 'Mantu | Airbus Cybersecurity', fr: 'Mantu | Airbus Cybersecurity' },
      period: { en: 'September 2019 – June 2024', fr: 'Septembre 2019 – Juin 2024' },
      description: {
        en: 'Focus: Keeping our delivery pipelines moving and helping the different teams hit their goals.',
        fr: 'Focus : Fluidification des pipelines de livraison et soutien aux équipes pour l’atteinte de leurs objectifs.',
      },
      techs: ['Jira', 'Confluence', 'ZohoSprints', 'Slack'],
      details: {
        context: {
          en: 'Directed delivery pipelines for four high-impact functions: Software Maintenance, Detection Engineering, Operations/Run, and Organisational Data Compliance.',
          fr: 'Direction des pipelines de livraison pour quatre fonctions à fort impact : Maintenance logicielle, Ingénierie de détection, Gestion des opérations/RUN et Conformité des données organisationnelles.',
        },
        tasks: {
          en: [
            'Agile Governance: Orchestrated core Agile ceremonies and managed end-to-end iteration lifecycles for four teams from initial capacity planning and story refinement to tracking delivery, mitigating risks, and reporting on velocity. Directed over 2,000 daily standups to maintain team alignment and rapid resolution of impediments.',
            'Vendor & Stakeholder Management: Led weekly synchronization with cybersecurity vendors to resolve bugs and feature requests. Chaired department-wide showcases, ensuring leadership alignment on risk reduction and business value.',
            'Release Governance & Operations: Directed the Change Advisory Board (CAB) pipeline; oversaw 1,202 production deployments and resolved 1,155 technical defects, maintaining operational stability and a zero-incident deployment culture.',
            'Operational Optimization: Standardised departmental workflows, authored critical operational communications, and managed cross-functional PI-cycle logistics to ensure continuity across diverse team functions.',
          ],
          fr: [
            'Gouvernance Agile : Animation des cérémonies Agile clés et gestion du cycle de vie des itérations de bout en bout pour quatre équipes, de la planification initiale de la capacité et du raffinement des user stories au suivi de la livraison, à la mitigation des risques et au reporting de vélocité. Pilotage de plus de 2000 daily standups pour garantir l’alignement des équipes et la résolution rapide des points de blocage.',
            'Gestion des Fournisseurs & des Parties Prenantes : Animation de synchronisations hebdomadaires avec les fournisseurs de cybersécurité pour résoudre les bugs et demandes d’évolution. Animation de démonstrations à l’échelle du département, assurant l’alignement de la direction sur la réduction des risques et la valeur commerciale.',
            'Gouvernance des Mises en Ligne & Opérations : Pilotage du processus du comité de validation des changements (CAB) ; supervision de 1202 déploiements en production et résolution de 1155 anomalies techniques, maintenant la stabilité opérationnelle et une culture du déploiement zéro incident.',
            'Optimisation Opérationnelle : Standardisation des flux de travail départementaux, rédaction de communications opérationnelles clés et gestion de la logistique des cycles PI interfonctionnels pour assurer la continuité entre diverses fonctions d’équipe.',
          ],
        },
      },
    },
    {
      id: 'invesco-implementation-lead',
      role: { en: 'Project Manager - SaaS Implementations', fr: 'Chef de Projet - Implémentation (SaaS)' },
      company: { en: 'Invesco', fr: 'Invesco' },
      period: { en: 'January 2015 – June 2019', fr: 'Janv. 2015 – Juin 2019' },
      description: {
        en: 'Focus: Helping major financial institutions get the most out of our software and making sure our implementation projects actually crossed the finish line.',
        fr: 'Focus : Accompagnement d’institutions financières majeures dans l’optimisation de l’utilisation de nos logiciels et garantie de l’aboutissement des projets d’implémentation.',
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
            'Implémentation de Bout en Bout : Prise en charge du cycle de vie complet des projets pour de grandes banques, sociétés d’investissement et assureurs. Gestion de projets de 6 à 12 mois par la traduction de besoins clients complexes en configurations techniques adaptées à leur activité.',
            'Interface entre Métier et Technique : Rôle d’intermédiaire entre les clients et les développeurs. Traduction des objectifs stratégiques des clients en exigences claires, garantissant que l’équipe de développement construise ce dont le client avait réellement besoin, au-delà de la simple expression de besoin initiale.',
            'Gouvernance de Projet : Simplification des structures de projet grâce à la mise en place de cadres clairs pour les notes de cadrage, la gestion des risques et les rôles internes, permettant aux équipes d’identifier précisément les livrables et les échéances.',
            'Résolution de Problèmes Opérationnels : Gestion simultanée de plusieurs projets d’implémentation. Maintien de la dynamique de projet par l’identification précoce des goulots d’étranglement et la coordination entre les équipes de support internes et les parties prenantes clientes.',
            'Croissance & Promotion du Produit : Porte-parole des clients en interne. Stimulation de l’adoption du produit et identification de nouvelles
