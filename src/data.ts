import { ServiceItem, CaseStudyItem, InfluencerProject, CareerItem, SkillCategory } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'martech-audit',
    title: 'MarTech Stack Audit & Architecture',
    iconName: 'Layers',
    shortDescription: 'Audit chaotic tool ecosystems, optimize licenses, and build seamless integrations to drive data transparency.',
    fullDescription: 'I dive deep into your organization\'s existing systems (Sales, Marketing, Ops) to identify redundant software licenses, data silos, and manual workarounds. You get a fully interactive architecture map and a transition strategy to align tools with actual revenue metrics.',
    keyBenefits: [
      'Eliminate 20% to 40% of wasted SaaS subscription costs',
      'Architect single-source-of-truth customer data profiles',
      'Document clean data flows for engineering and non-technical staff'
    ]
  },
  {
    id: 'crm-governance',
    title: 'CRM Implementation & Governance',
    iconName: 'Database',
    shortDescription: 'End-to-end setups of Zoho CRM and Zendesk Suite. Rigorous SLA triggers and system governance.',
    fullDescription: 'Standardize custom modules, automate lead distribution rules, establish precise user permissions, and connect core business objects (deals, products, tickets). I construct bulletproof Zendesk and Zoho CRM environments with explicit governance rulebooks so data is always high quality.',
    keyBenefits: [
      'Boost CRM field completion compliance by over 80%',
      'Symmetric bi-directional support-to-sales data synchronization',
      'Automate follow-up SLA reporting to catch neglected pipeline'
    ]
  },
  {
    id: 'lead-automation',
    title: 'AI-Powered Lead Automation',
    iconName: 'Zap',
    shortDescription: 'No-code & low-code lead pipelines (Make, Zapier) to enrich, score, and route leads in real-time.',
    fullDescription: 'Build event-driven lead engines that catch leads from Meta, Google, or your website. The engine automatically enriches information (company size, tech stack, industry), evaluates lead score, and assigns it to appropriate sales representatives on WhatsApp or email in seconds.',
    keyBenefits: [
      'Reduce lead response times from hours to under 2 minutes',
      'Filter out non-qualified leads programmatically before manual review',
      'Set automated WhatsApp and email reminders to maximize demo bookings'
    ]
  },
  {
    id: 'digital-roadmaps',
    title: 'SME Digital Transformation Roadmaps',
    iconName: 'TrendingUp',
    shortDescription: 'Structured digital growth blueprints for Singapore and Southeast Asian businesses.',
    fullDescription: 'Practical strategic guides tailored to localized operations in Singapore, Malaysia, and the Philippines. I evaluate your target consumer profile, local shipping / payment gateways (PayNow, HitPay, Boost), and supply chains to lay out a realistic 12-month technology roadmap.',
    keyBenefits: [
      'Clear timelines mapped to internal team execution capabilities',
      'Integration plans for localized payments and ERP suites',
      'Step-by-step digital migration plans with zero operational downtime'
    ]
  },
  {
    id: 'ecommerce-infra',
    title: 'E-commerce Conversion Infrastructure',
    iconName: 'ShoppingCart',
    shortDescription: 'High-conversion Shopify and WooCommerce backend ecosystems integrated with logistics and CRM.',
    fullDescription: 'Optimize checkout speed and tracking pixel integrity. I connect your front-end store with back-end inventory databases, regional shipping fulfillment standard APIs (NinjaVan, J&T), and retention marketing automated databases (Klaviyo, ActiveCampaign).',
    keyBenefits: [
      'Proper technical implementation of Google Tag Manager (GTM) & Meta CAPI',
      'Automated recovery sequences for abandoned checkout flows',
      'Real-time automated multi-channel inventory synchronization'
    ]
  }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'selfiebox-crm',
    title: 'Lead Intake & Automated Routing Governance',
    category: 'CRM',
    client: 'Selfiebox (selfiebox.com.sg)',
    problem: 'High-velocity corporate event inquiries went unanswered during off-peak hours, resulting in missed activation bookings and high pipeline leakage.',
    approach: 'Deployed Zoho CRM automated webhook pipelines connecting website booking engines. Tailored automated availability checks, dynamic package quotation generation, and immediate team notification routing via instant messaging integration.',
    result: 'Optimized speed-to-lead response intervals, successfully capturing high-value corporate holiday activations and booking requests before competitors could reply.',
    metric: '30%',
    metricLabel: 'Booking Velocity Increase'
  },
  {
    id: 'brandable-martech',
    title: 'Multi-Channel Corporate Customization Infrastructure',
    category: 'E-commerce',
    client: 'Brandable (brandable.com.sg)',
    problem: 'Siloed lead intake loops, chaotic inventory tracking, and manual custom-print quoting overhead restricted scale for personalized corporate gifting programs.',
    approach: 'Architected automated custom logo print simulations, multi-tier volume discount quote engines, and built direct integrations passing verified accounts into centralized production and design schedules.',
    result: 'Streamlined corporate client checkout experiences, significantly growing bulk merchandising accounts and supporting strategic IP rollouts (Disney, Pokémon).',
    metric: '45% YoY',
    metricLabel: 'Pipeline Account Expansion'
  },
  {
    id: 'martech-migration',
    title: 'AI-Driven MarTech Architecture Migration',
    category: 'Automation',
    client: 'Accelerato Pte Ltd',
    problem: 'Fragmented customer tracking loops and manual lead transitions across Zoho CRM and Zendesk led to lead-leakage, high latency, and excessive sales workloads.',
    approach: 'Designed and executed the full API integration of custom AI pre-sales agents into Zoho CRM and Zendesk — automating multi-channel digital intent tracking across the full MQL-to-SQL funnel and setting up automated flow actions.',
    result: 'Successfully accelerated lead handover speed and reduced manual overhead, converting qualified prospects in real-time with maximum speed-to-lead precision.',
    metric: '30%',
    metricLabel: 'Pipeline Velocity Boost'
  },
  {
    id: 'retail-scaleup',
    title: 'Cross-Border D2C Retail Scale-Up',
    category: 'E-commerce',
    client: 'Yutopia (Singapore & Malaysia)',
    problem: 'Scaling brick-and-mortar storefronts required a centralized platform with real-time inventory synchronization, cross-border localized POS, and automated tracking.',
    approach: 'Engineered the global system architecture, custom full-stack e-commerce engine (yutopia.com.sg), and automated logistics SOPs that scaled the brand from single roadshows to 10 permanent premium tourist and heartland storefronts with licensed IPs like Disney, Sanrio, and Pokémon.',
    result: 'Centralized multi-channel operations, reducing inventory mismatch discrepancies and streamlining the entire retail and logistics supply-chain reporting.',
    metric: '10',
    metricLabel: 'Permanent Storefronts'
  },
  {
    id: 'bpo-enablement',
    title: 'Global BPO Technical Enablement Programme',
    category: 'CRM',
    client: 'Microsoft Philippines',
    problem: 'SaaS migrations to cloud subscription architectures (Office 365) required rapid onboarding and upskilling of hundreds of support agents under enterprise SLA standards.',
    approach: 'Designed and steered large-scale technical validation curricula to train 1,500+ support representatives on cloud frameworks, directories, and Windows setups, as the active Subject Matter Expert.',
    result: 'Maintained a zero re-escalation rate on Tier-3 advanced escalations while improving average CSAT scores across a floor of 350+ active global support agents.',
    metric: '1,500+',
    metricLabel: 'Agents Certified'
  }
];

export const influencerData: InfluencerProject[] = [
  {
    id: 'tiktok-advocacy',
    title: 'Short-Form Tech & Automation Advocacy',
    brandName: '@pappiverge',
    platform: 'TikTok',
    reachStat: '18.1K Followers',
    date: 'Ongoing',
    description: 'Bite-sized visual guides and real-time breakdowns of workspace productivity tools, Make.com setups, and automated business processes designed for modern digital entrepreneurs.',
    category: 'Advocacy',
    url: 'https://www.tiktok.com/@pappiverge'
  },
  {
    id: 'instagram-advocacy',
    title: 'Operations Optimization & Tech Talk Series',
    brandName: '@vergetalks',
    platform: 'Instagram',
    reachStat: '14.9K Followers',
    date: 'Ongoing',
    description: 'Educational social carousels and reels explaining CRM governance, speed-to-lead mechanics, and pipeline building to non-technical business founders.',
    category: 'Educator',
    url: 'https://www.instagram.com/vergetalks'
  },
  {
    id: 'tech-content',
    title: 'SME Productivity & Automation Campaign',
    brandName: 'Workspace Boost',
    platform: 'LinkedIn & YouTube',
    reachStat: '45K+ Impressions',
    date: 'Jan 2026',
    description: 'Designed a 4-part video walk-through displaying how regional business owners can set up Make.com workflows to save 10 hours a week in administration tasks. Sponsored by a productivity suite brand.',
    category: 'Campaign'
  },
  {
    id: 'digital-advocacy',
    title: 'Regional Webflow & No-Code SME Masterclass',
    brandName: 'SGP Founders Circle',
    platform: 'In-Person & Podcast',
    reachStat: '150+ SME Founders',
    date: 'Nov 2025',
    description: 'Hosted a practical, non-tech development workshop on creating conversion-optimized, professional landing pages with lightning-fast localized page speeds without writing complex code.',
    category: 'Speaking'
  },
  {
    id: 'newsletter-collab',
    title: '"Verge Bits" Automation Newsletter',
    brandName: 'Self-Published Project',
    platform: 'Substack',
    reachStat: '3.2K Active Subscribers',
    date: 'Ongoing',
    description: 'Weekly breakdowns of modern MarTech architecture, pricing traps to avoid, and step-by-step visual automation tricks designed strictly for non-enterprise growth-focused founders.',
    category: 'Media'
  }
];

export const careerData: CareerItem[] = [
  {
    id: 'career-1',
    role: 'Senior Marketing Technology & Client Operations Lead',
    company: 'Accelerato Pte Ltd',
    location: 'Singapore',
    period: 'Oct 2020 — Present',
    descriptionPoints: [
      'Led customer operations and digital transformation initiatives supporting multiple business units across retail, recruitment, and marketing services, improving operational productivity by 30%.',
      'Managed enterprise CRM ecosystems integrating Zoho CRM and Zendesk, enabling automated customer engagement, lead qualification, and service workflows that accelerated sales pipeline velocity by 30%.',
      'Directed cross-functional teams of 50+ marketers, engineers, creatives, and support specialists to ensure consistent service delivery, operational alignment, and client satisfaction.',
      'Oversaw strategic partnerships and licensing negotiations with global brands including Disney, Sanrio, and Pokémon, contributing to successful retail expansion from 0 to 10 permanent storefront locations across Singapore and Malaysia.',
      'Built scalable operational systems supporting e-commerce, logistics, customer support, and reporting functions for multi-location retail operations.',
      'Launched AI-driven recruitment and customer engagement workflows supporting regional workforce deployment across Southeast Asia, Australia, Hong Kong, and the Middle East.',
      'Overhauled CRM, lead scoring, and logistics workflows for four sister brands (Printcity, Selfiebox, Brandable & Ergocollections) — mapping pre-sales digital intent to post-delivery customer experience, reducing pipeline-to-close friction across all business units.'
    ],
    keyAchievements: [
      'Transformed fragmented operational systems into a centralized customer and revenue operations ecosystem.',
      'Expanded marketing-attributable pipeline contributions by 45% YoY.',
      'Pivoted to white-label Recruitment-as-a-Service platforms deploying AI-driven sourcing pipelines for 100+ remote sales professionals.'
    ]
  },
  {
    id: 'career-2',
    role: 'Group Technical & Marketing Technology Lead',
    company: 'Invesso Pte Ltd',
    location: 'Singapore, Malaysia & Philippines',
    period: 'Aug 2018 — Aug 2020',
    descriptionPoints: [
      'Governed centralized MarTech architecture and automated marketing operations engine across 3 business units — Printcity Products Pte Ltd, The Verticals Consultancy Pte Ltd, and Invesso Malaysia — ensuring unified data visibility and cross-brand campaign performance.',
      'Orchestrated full international expansion of Kuala Lumpur digital agency office, recruiting and leading a 20-person cross-functional team of developers, content creators, video editors, and Sales Development Representatives (SDRs) from zero.',
      'Architected and delivered custom full-stack web platforms, CRM systems, and demand generation pipelines for a global client portfolio across North America, Hong Kong, the Middle East, and Asia — spanning SaaS, HR, professional services, and real estate verticals.',
      'Served as Lead Technical Project Manager for enterprise application builds including corporate operations software and automated medical patient record tracking systems — delivering on-time, within scope for regulated industries.',
      'Delivered technology and marketing strategy consulting to Singapore SMEs including premium country clubs and the Retail Association of Singapore, driving measurable improvements in customer lifetime value through structured digital transformation roadmaps.'
    ],
    keyAchievements: [
      'Scaled regional operations from startup phase into structured multi-country service org.',
      'Orchestrated KL agency office recruiting and leading a 20-person regional cross-functional team.',
      'Architected and delivered custom corporate operations software and patient tracking solutions for regulated verticals.'
    ]
  },
  {
    id: 'career-3',
    role: 'ICT Manager',
    company: 'Noble Manhattan Coaching Ltd (UK)',
    location: 'Remote / United Kingdom',
    period: 'Apr 2013 — Jan 2017',
    descriptionPoints: [
      'Managed end-to-end ICT infrastructure and website deployments for a global executive coaching organization — administering multi-regional server networks and interactive digital learning platforms.',
      'Overhauled authentication matrices and system frameworks, improving data security compliance and operational workflow efficiency for cross-border remote workforces.',
      'Served as a key escalation point for technical and operational support issues affecting internal users and external stakeholders.'
    ],
    keyAchievements: [
      'Restructured internal workflows and strengthened infrastructure governance.',
      'Supported seamless connectivity and business continuity for distributed international teams.'
    ]
  },
  {
    id: 'career-4',
    role: 'Culture & Product Associate Trainer & Escalation Specialist',
    company: 'Microsoft Corporation',
    location: 'Philippines',
    period: 'Apr 2009 — Apr 2013',
    descriptionPoints: [
      'Directed training delivery and operational quality standards for a 350+ agent operational site serving North American enterprise markets across voice and chat support channels.',
      'Designed and delivered technical curricula that certified 1,500+ representatives in Windows systems, BPO infrastructure, and enterprise technical support — one of the largest single-cohort training initiatives at the site.',
      'Served as primary SME and Red Hat specialist for all Tier-3 escalations, resolving critical OS, Office Applications and directory server issues with zero re-escalation rate.',
      'Spearheaded enterprise-wide workforce readiness campaigns, successfully migrating legacy perpetual software users to Microsoft\'s cloud-based SaaS subscription architecture (Office 365).'
    ],
    keyAchievements: [
      'Maintained a zero re-escalation rate on Tier-3 advanced escalations.',
      'Certified and upskilled over 1,500 customer support representatives.'
    ]
  },
  {
    id: 'career-5',
    role: 'Technical Support Specialist',
    company: 'Time Warner Cable',
    location: 'Philippines',
    period: 'Apr 2008 — Apr 2009',
    descriptionPoints: [
      'Delivered frontline technical support and issue resolution for telecom and internet service customers.',
      'Consistently achieved strong customer satisfaction scores through effective root-cause analysis and SLA adherence.',
      'Handled high-volume support interactions while maintaining quality and resolution standards.'
    ],
    keyAchievements: [
      'Maintained top-tier diagnostic resolution metrics.',
      'Consistently scored highest customer CSAT ratios on the floor.'
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: 'MarTech Stack Tools',
    skills: ['ActiveCampaign', 'HubSpot Marketing Hub', 'Klaviyo', 'MailerLite', 'Google Tag Manager', 'GA4 Server-Side Analytics', 'Meta Conversions API']
  },
  {
    category: 'CRM & RevOps Platforms',
    skills: ['Zoho CRM & Creator Suite', 'Zendesk Suite', 'HubSpot Sales Hub', 'Pipedrive CRM', 'Salesforce Admin Essentials', 'SLA Trigger Management']
  },
  {
    category: 'Automation & Integration Engine',
    skills: ['Make.com (Integromat)', 'Zapier Specialist', 'Webhooks & REST APIs', 'Twilio Messaging APIs', 'Delay-to-Lead Routing Engines', 'Lead Scoring Logic']
  },
  {
    category: 'Web & E-commerce Tech',
    skills: ['Shopify Professional Backend', 'WooCommerce setups', 'Webflow Developer', 'HTML5 / Modern Styling', 'HitPay / PayNow API Connects', 'Database Foundations']
  }
];
