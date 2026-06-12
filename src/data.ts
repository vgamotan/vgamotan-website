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
    id: 'real-estate-automation',
    title: 'Speed-to-Lead Automation for Premium Real Estate Brokerage',
    category: 'Real Estate',
    client: 'Apex Residences (Singapore & Malaysia)',
    problem: '65% of social media advertising leads went unanswered for more than 4 hours, resulting in low site tour booking conversions.',
    approach: 'Engineered a real-time lead pipeline using Make.com and custom webhook receivers. Wired Meta Leads Ads directly into Zoho CRM. Implemented an instant SMS & WhatsApp notification routing matrix using Twilio, assigning leads dynamically based on active agent schedules.',
    result: 'Drastically reduced lead response time. Secured faster customer touchpoints, triggering immediate follow-ups which translated directly to a marked increase in property viewing bookings within the regional portfolio.',
    metric: '90s',
    metricLabel: 'Response Time'
  },
  {
    id: 'ecommerce-attribution',
    title: 'Server-Side Analytics & Meta Conversions API Deployment',
    category: 'E-commerce',
    client: 'Kailor Care (Southeast Asia DTC Brand)',
    problem: 'iOS 14 privacy limitations caused severe browser-side pixel tracking degradation, leading to incorrect ad attribution and inflated acquisition costs.',
    approach: 'Implemented Google Tag Manager Server-Side container hosted on Google Cloud. Bound Shopify webhook events to trigger server-side Meta Conversions API (CAPI) and GA4 purchase signals, applying robust event deduplication logic.',
    result: 'Improved event match quality score to 8.9/10, allowing the algorithm to optimize targeting dynamically. Significantly lowered customer acquisition costs and improved sales attribution.',
    metric: '28%',
    metricLabel: 'Reduction in CPA'
  },
  {
    id: 'logistics-crm',
    title: 'Regional Logistics CRM Consolidation & Customer Services Revamp',
    category: 'CRM',
    client: 'TransPacific Supply Chain (SG & Philippines)',
    problem: 'Customer support teams and sales agents operated on isolated mailboxes, causing lost shipment inquiries, delayed service SLA, and missed follow-ups.',
    approach: 'Configured a unified Zendesk Suite interconnected with Zoho CRM. Set up automated ticket triggers based on order shipping status, structured an escalation playbook with customized SLA views, and trained the multi-country logistics team on systematic ticketing protocols.',
    result: 'Streamlined ticket queues, increased sales team visibility into logistics bottlenecks, and ensured regular updates to the pipeline on high-value retail client issues.',
    metric: '45%',
    metricLabel: 'YoY Pipeline Growth'
  },
  {
    id: 'tech-revops',
    title: 'B2B RevOps Overhaul & Automated Lead Scoring Machine',
    category: 'Automation',
    client: 'Aegis Security (ASEAN Enterprise SaaS)',
    problem: 'Sales personnel spent 35% of their day calling micro-leads that did not meet their target corporate profile, stalling enterprise sales cycles.',
    approach: 'Integrated Clearbit data enrichment with HubSpot forms. Devised a scoring matrix based on employee count, geography, and web actions. Configured auto-routing rules that instantly assigned qualified accounts to senior reps.',
    result: 'Saves hours of manual lead filtering. Amplified marketing-to-sales handoff efficiency, generating higher-quality bookings for the key account management tier.',
    metric: '38%',
    metricLabel: 'MQL-to-SQL Conversion'
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
    role: 'Principal MarTech & RevOps Consultant',
    company: 'Independent SME Practice (Verge Consulting)',
    location: 'Singapore & Malaysia',
    period: '2021 — Present',
    descriptionPoints: [
      'Provide boutique consultancy services for Southeast Asian SMEs in real estate, professional services, and retail commerce.',
      'Surgical audit and architectural mapping of clients\' SaaS ecosystems, eliminating software redundancy and standardizing CRM databases.',
      'Construct automated event and webhook architectures to seamlessly pass valuable business signals between ads, websites, and sales desks.'
    ],
    keyAchievements: [
      'Averaged a 25% reduction in yearly software licensing costs for consulting clients.',
      'Supervised the custom deployment of 15+ comprehensive Zoho CRM and Zendesk environments with clear localized workflow rulebooks.',
      'Built automated speed-to-lead notification bridges for 3 property brokerages, dropping sales response delays by over 90%.'
    ]
  },
  {
    id: 'career-2',
    role: 'Digital Operations Manager',
    company: 'Logistics Scale-up (Southeast Asia Operations)',
    location: 'Singapore & Malaysia',
    period: '2018 — 2021',
    descriptionPoints: [
      'Led the cross-department Operations and Marketing technology alignment to serve multi-border merchant transactions.',
      'Administered advanced CRM systems (HubSpot/Salesforce) and configured advanced pipelines tracking merchant onboarding, compliance checks, and parcel SLAs.',
      'Coordinated technical cross-team integrations involving customer support triggers and transactional automated messaging.'
    ],
    keyAchievements: [
      'Accelerated client onboarding cycle times by 40% using automated form triggers and integration with internal operations databases.',
      'Established regional governance principles that unified lead scoring profiles for sales teams based in Singapore and Kuala Lumpur.'
    ]
  },
  {
    id: 'career-3',
    role: 'Senior Digital Marketing Solutions Architect',
    company: 'Apex Digital Solutions Partner',
    location: 'Manila, Philippines',
    period: '2014 — 2018',
    descriptionPoints: [
      'Architected digital customer acquisition setups for high-tier real estate groups and retail brands expanding in the APAC market.',
      'Managed custom web tracking infrastructures (Google Analytics, custom server setups) to ensure perfect attribution across multi-stage funnels.'
    ],
    keyAchievements: [
      'Designed lead generation configurations generating more than 5,000 qualified real-estate inquiries monthly.',
      'Deployed multi-step nurture drip campaign integrations that boosted sales discovery calls by 2.5x.'
    ]
  },
  {
    id: 'career-4',
    role: 'MarTech Specialist & CRM Administrator',
    company: 'Envision Growth Group',
    location: 'Manila, Philippines',
    period: '2010 — 2014',
    descriptionPoints: [
      'Supported SME clients with hands-on CRM platform management, sales routing systems, email marketing campaign setups, and landing page engineering.'
    ],
    keyAchievements: [
      'Built and maintained 30+ segmented subscriber newsletter profiles, improving average email open rates to 32%.'
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
