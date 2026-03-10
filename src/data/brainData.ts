// ─────────────────────────────────────────────────────────────────────────────
// Cognitive Architecture — Brain Graph Data
// ─────────────────────────────────────────────────────────────────────────────

export type NodeGroup = 'core' | 'cluster' | 'project';
export type ClusterKey = 'core' | 'biomedical' | 'ai' | 'data' | 'civic';

export interface NodeData {
  id: string;
  label: string;
  group: NodeGroup;
  cluster: ClusterKey;
  /** Controls rendered node size via sqrt(val) * scale */
  val: number;
  /** Initial x coordinate in graph space (graph origin = canvas center) */
  initX: number;
  /** Initial y coordinate in graph space */
  initY: number;
  shortDescription: string;
  techStack: string[];
  recruiterMode: { description: string; impact: string[] };
  technicalMode: { description: string; impact: string[] };
  githubLink?: string;
}

export interface LinkData {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: NodeData[];
  links: LinkData[];
}

// ─── Color palette ────────────────────────────────────────────────────────────

export const CLUSTER_COLORS: Record<ClusterKey, string> = {
  core:       '#FFFFFF',
  biomedical: '#10B981',
  ai:         '#3B82F6',
  data:       '#F59E0B',
  civic:      '#8B5CF6',
};

// ─── Graph data ───────────────────────────────────────────────────────────────

export const GRAPH_DATA: GraphData = {
  nodes: [

    // ── Core ──────────────────────────────────────────────────────────────────
    {
      id: 'nikhil',
      label: 'Nikhil Sangamkar',
      group: 'core',
      cluster: 'core',
      val: 38,
      initX: 0,
      initY: 0,
      shortDescription: 'Interdisciplinary engineer at the intersection of AI, biotech, data, and civic systems.',
      techStack: ['Python', 'TypeScript', 'Next.js', 'React', 'PyTorch'],
      recruiterMode: {
        description:
          'Full-stack engineer and researcher with deep experience building AI systems, biomedical data pipelines, civic tech platforms, and scalable data infrastructure. Focused on systems that matter at the intersection of technology and impact.',
        impact: [
          'Led cross-functional projects spanning 4 technical domains',
          'Built production systems serving thousands of users',
          'Contributed to research at the intersection of AI and biomedicine',
        ],
      },
      technicalMode: {
        description:
          'Systems-oriented engineer specializing in ML-integrated architecture, EEG/BCI signal processing, LLM orchestration with LangChain and RAG pipelines, geospatial civic data systems, and Snowflake-backed data platforms. Operates from model internals to infrastructure to product.',
        impact: [
          'Architected multi-modal data pipelines across structured and unstructured sources',
          'Implemented RAG pipelines with hybrid retrieval and reranking at production scale',
          'Developed real-time EEG classification loops and BCI feedback systems',
        ],
      },
    },

    // ── Cluster nodes ─────────────────────────────────────────────────────────
    {
      id: 'cluster-biomedical',
      label: 'Neural & Biomedical',
      group: 'cluster',
      cluster: 'biomedical',
      val: 22,
      initX: -265,
      initY: -175,
      shortDescription: 'EEG systems, biomedical data analysis, and clinical health platforms.',
      techStack: ['Python', 'MNE-Python', 'PyTorch', 'FHIR'],
      recruiterMode: {
        description:
          'Applied neuroscience and biomedical systems work spanning brain-computer interfaces, epidemiological analysis, and clinical care platforms. Research-grade rigor paired with product-level execution.',
        impact: [
          'Built EEG signal processing and classification systems',
          'Analyzed epidemiological datasets for disease pattern detection',
          'Developed HIPAA-adjacent care management tooling for clinical workflows',
        ],
      },
      technicalMode: {
        description:
          'Biomedical domain encompassing EEG/BCI signal acquisition and preprocessing pipelines, disease surveillance with multivariate time series, and FHIR R4-compatible clinical data modeling for care coordination systems.',
        impact: [
          'Implemented ICA, bandpass filtering, and CSP feature extraction on EEG signals',
          'Built cross-validated classifiers for neural state detection',
          'Designed FHIR R4 Patient, Encounter, and CarePlan resource schemas',
        ],
      },
    },
    {
      id: 'cluster-ai',
      label: 'AI & Language Systems',
      group: 'cluster',
      cluster: 'ai',
      val: 22,
      initX: 265,
      initY: -175,
      shortDescription: 'LLMs, RAG architectures, and language model orchestration systems.',
      techStack: ['LangChain', 'OpenAI', 'PyTorch', 'Hugging Face'],
      recruiterMode: {
        description:
          'End-to-end AI/ML engineering across language model application development, retrieval-augmented generation, and intelligent automation. Built systems that move well beyond demos into production.',
        impact: [
          'Designed and deployed LLM-powered applications at scale',
          'Built retrieval pipelines significantly improving answer precision',
          'Developed AI alignment research tooling and evaluation harnesses',
        ],
      },
      technicalMode: {
        description:
          'LLM systems engineering: RAG pipeline design with dense and sparse retrieval, LangChain agent orchestration via LCEL, embedding model fine-tuning, RLHF-adjacent alignment research, and eval-driven development with LangSmith.',
        impact: [
          'Implemented hybrid retrieval (BM25 + dense embeddings) with RRF fusion and reranking',
          'Designed LangChain LCEL chains with conditional branching and stateful memory',
          'Built evaluation harnesses measuring LLM output quality across multiple dimensions',
        ],
      },
    },
    {
      id: 'cluster-data',
      label: 'Data Infrastructure',
      group: 'cluster',
      cluster: 'data',
      val: 22,
      initX: 265,
      initY: 175,
      shortDescription: 'Scalable data pipelines, cloud warehousing, and backend architecture.',
      techStack: ['Snowflake', 'PostgreSQL', 'Supabase', 'dbt'],
      recruiterMode: {
        description:
          'Data infrastructure engineering across cloud warehouses, backend APIs, and analytics pipelines. Focused on building reliable foundations that underpin both product and research workflows.',
        impact: [
          'Architected data warehousing solutions for enterprise and startup clients',
          'Reduced query latency and warehouse compute costs through optimization',
          'Built robust backend APIs serving multiple production frontend products',
        ],
      },
      technicalMode: {
        description:
          'Data platform engineering: Snowflake data modeling with dbt transformation layers, Supabase/PostgreSQL schema design with RLS, REST/GraphQL API architecture, BullMQ job queues, Redis caching, and structured observability.',
        impact: [
          'Designed star-schema Snowflake models with incremental dbt materializations',
          'Implemented multi-tenant RLS policies with row-level tenant isolation',
          'Built type-safe API layers with Zod validation and OpenAPI documentation',
        ],
      },
    },
    {
      id: 'cluster-civic',
      label: 'Civic Systems',
      group: 'cluster',
      cluster: 'civic',
      val: 22,
      initX: -265,
      initY: 175,
      shortDescription: 'Civic technology, community resource systems, and nonprofit data infrastructure.',
      techStack: ['Next.js', 'PostGIS', 'Supabase', 'Python'],
      recruiterMode: {
        description:
          'Civic tech and public interest technology work building geospatial resource mapping systems, community engagement platforms, and data infrastructure for nonprofits and open government initiatives.',
        impact: [
          'Built geospatial resource directories serving underserved communities',
          'Designed data systems for civic engagement and open government programs',
          'Developed open-source tooling for nonprofit data operations',
        ],
      },
      technicalMode: {
        description:
          'Civic systems architecture: geospatial pipelines with PostGIS, HSDS/AIRS resource taxonomy standardization, open data normalization, accessible SSR/ISR Next.js applications, and admin CMS for community-maintained data pipelines.',
        impact: [
          'Implemented PostGIS ST_DWithin proximity queries with GiST spatial indexes',
          'Built HSDS taxonomy mapping across heterogeneous dataset sources',
          'Designed admin CMS enabling non-technical community stewards to maintain data',
        ],
      },
    },

    // ── Biomedical projects ───────────────────────────────────────────────────
    {
      id: 'zika-dengue',
      label: 'Zika-Dengue Analysis',
      group: 'project',
      cluster: 'biomedical',
      val: 10,
      initX: -390,
      initY: -115,
      shortDescription: 'Epidemiological analysis of Zika and Dengue co-circulation patterns using multi-year surveillance data.',
      techStack: ['Python', 'Pandas', 'GeoPandas', 'R'],
      recruiterMode: {
        description:
          'Epidemiological research analyzing the co-circulation of Zika and Dengue viruses using multi-year disease surveillance datasets. Identified geographic and temporal co-infection patterns with direct public health implications.',
        impact: [
          'Analyzed multi-year surveillance data across 15+ geographic regions',
          'Identified statistically significant temporal co-infection patterns',
          'Findings informed public health response and resource allocation planning',
        ],
      },
      technicalMode: {
        description:
          'Cross-sectional epidemiological study using Moran\'s I and Getis-Ord Gi* spatial statistics, ARIMA time series modeling, and multivariate regression on longitudinal disease surveillance data with climate covariates from NOAA.',
        impact: [
          'Applied spatial autocorrelation analysis (Moran\'s I, Getis-Ord Gi*) for cluster detection',
          'Built seasonal decomposition and ARIMA models on incidence time series',
          'Integrated NOAA climate and environmental covariate data for regression modeling',
        ],
      },
    },
    {
      id: 'eeg-bci',
      label: 'EEG / BCI Work',
      group: 'project',
      cluster: 'biomedical',
      val: 11,
      initX: -205,
      initY: -295,
      shortDescription: 'Brain-computer interface development using EEG signal acquisition and real-time neural classification.',
      techStack: ['Python', 'MNE-Python', 'PyTorch', 'MATLAB'],
      recruiterMode: {
        description:
          'Brain-computer interface research using EEG signal acquisition, preprocessing pipelines, and real-time neural state classification. Built systems for motor imagery detection and assistive technology applications.',
        impact: [
          'Developed real-time EEG classification achieving above-baseline accuracy',
          'Built end-to-end signal processing pipeline from raw acquisition to features',
          'Applied findings to assistive technology and neurofeedback use cases',
        ],
      },
      technicalMode: {
        description:
          'EEG processing pipeline: bandpass filtering (0.5–40 Hz) → ICA artifact removal → epoch segmentation → CSP feature extraction → LDA/SVM and EEGNet deep learning classifiers. Real-time feedback loop via serial protocol.',
        impact: [
          'Implemented CSP + LDA pipeline for two-class motor imagery classification',
          'Built EEGNet-based classifier with custom PyTorch training and k-fold CV',
          'Achieved >95% artifact rejection rate via automated ICA component labeling',
        ],
      },
    },
    {
      id: 'bmo-care',
      label: 'BMO Care',
      group: 'project',
      cluster: 'biomedical',
      val: 9,
      initX: -345,
      initY: -250,
      shortDescription: 'HIPAA-adjacent clinical care management platform for behavioral health organizations.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'FHIR R4'],
      recruiterMode: {
        description:
          'Clinical care management web application designed for behavioral health organizations. Streamlines care coordination, patient tracking, and clinical documentation while maintaining HIPAA-adjacent data standards.',
        impact: [
          'Reduced care coordinator administrative overhead through workflow automation',
          'Built HIPAA-adjacent data handling with encryption and audit logging',
          'Deployed to active clinical users in behavioral health settings',
        ],
      },
      technicalMode: {
        description:
          'Full-stack clinical platform: React frontend, Node.js API layer, PostgreSQL with row-level security, FHIR R4 resource modeling (Patient, Encounter, CarePlan), JWT auth with refresh rotation, and Postgres LISTEN/NOTIFY for real-time care alerts.',
        impact: [
          'Designed FHIR R4 resource schemas with custom extension profiles',
          'Implemented RBAC with JWT + refresh token rotation and session revocation',
          'Built real-time care alert system using Postgres LISTEN/NOTIFY via WebSocket bridge',
        ],
      },
    },
    {
      id: 'patchlab',
      label: 'PatchLab',
      group: 'project',
      cluster: 'biomedical',
      val: 9,
      initX: -185,
      initY: -150,
      shortDescription: 'Multimodal AI platform bridging biomedical imaging analysis with structured LLM-generated diagnostic output.',
      techStack: ['Python', 'FastAPI', 'OpenAI', 'React'],
      recruiterMode: {
        description:
          'AI-powered platform for biomedical image analysis and diagnostic assistance. Combines computer vision with large language models to produce structured, citation-grounded diagnostic insights from pathology and imaging data.',
        impact: [
          'Integrated LLM report generation with imaging analysis in a single pipeline',
          'Built structured output system for reliable diagnostic categorization',
          'Designed for clinical research and pathology education use cases',
        ],
      },
      technicalMode: {
        description:
          'Multimodal AI platform: GPT-4V vision encoder fusion for pathology slide analysis, FastAPI async inference pipeline with Redis job queue, JSON schema enforcement via OpenAI function calling, and React visualization layer for structured diagnostic reporting.',
        impact: [
          'Implemented vision + LLM fusion pipeline for H&E stained slide analysis',
          'Built async inference queue with Redis + worker pool and result caching layer',
          'Enforced structured diagnostic output via JSON schema and OpenAI function calling',
        ],
      },
    },

    // ── AI projects ───────────────────────────────────────────────────────────
    {
      id: 'project-align',
      label: 'Project ALIGN',
      group: 'project',
      cluster: 'ai',
      val: 12,
      initX: 390,
      initY: -105,
      shortDescription: 'AI alignment research infrastructure for value learning, preference modeling, and evaluation.',
      techStack: ['Python', 'PyTorch', 'Hugging Face TRL', 'RLHF'],
      recruiterMode: {
        description:
          'Research project developing tooling and frameworks for AI alignment evaluation and value learning. Focused on building practical, reproducible systems for measuring and improving alignment properties in language models.',
        impact: [
          'Built evaluation benchmarks for alignment properties across model families',
          'Developed preference datasets and supervised fine-tuning pipelines',
          'Contributed tooling to open-source alignment research infrastructure',
        ],
      },
      technicalMode: {
        description:
          'Alignment research stack: Bradley-Terry reward model training on human preference pairs, PPO implementation with KL-divergence penalty, constitutional AI evaluation harnesses, and automated red-teaming via adversarial prompt generation.',
        impact: [
          'Trained reward models using Bradley-Terry loss on curated preference pair datasets',
          'Implemented PPO with KL penalty and advantage normalization using Hugging Face TRL',
          'Designed automated red-teaming pipeline generating adversarial prompts for safety evaluation',
        ],
      },
    },
    {
      id: 'rag-systems',
      label: 'RAG Systems',
      group: 'project',
      cluster: 'ai',
      val: 10,
      initX: 200,
      initY: -305,
      shortDescription: 'Production retrieval-augmented generation pipelines for enterprise document search and question answering.',
      techStack: ['LangChain', 'Pinecone', 'OpenAI', 'FastAPI'],
      recruiterMode: {
        description:
          'Designed and deployed retrieval-augmented generation systems for enterprise document search and Q&A. Production-grade pipelines covering chunking, embedding, retrieval, reranking, and generation stages.',
        impact: [
          'Significantly improved document retrieval precision over baseline keyword search',
          'Reduced hallucination rate through retrieval grounding and source citation',
          'Deployed to production serving hundreds of daily active users',
        ],
      },
      technicalMode: {
        description:
          'RAG pipeline: recursive document chunking with semantic boundary detection, hybrid BM25 + dense retrieval with RRF fusion, cross-encoder reranking (ms-marco-MiniLM), streaming LLM generation with inline source attribution. Pinecone vector store, FastAPI serving.',
        impact: [
          'Implemented hybrid retrieval with BM25 + dense vector fusion via Reciprocal Rank Fusion',
          'Added cross-encoder reranking improving MRR@10 by a meaningful margin',
          'Built streaming generation endpoint with real-time source citation in UI',
        ],
      },
    },
    {
      id: 'aora',
      label: 'AORA',
      group: 'project',
      cluster: 'ai',
      val: 9,
      initX: 360,
      initY: -255,
      shortDescription: 'Autonomous orchestration and reasoning agent with episodic memory and self-reflection.',
      techStack: ['Python', 'LangChain', 'OpenAI', 'Redis'],
      recruiterMode: {
        description:
          'Autonomous AI agent framework for complex multi-step reasoning and task orchestration. Designed for research workflows requiring dynamic tool use, long-horizon planning, and adaptive re-execution on failure.',
        impact: [
          'Enabled multi-step task automation across heterogeneous data sources',
          'Built persistent planning and memory components for stateful agent execution',
          'Substantially reduced manual research workflow time for targeted use cases',
        ],
      },
      technicalMode: {
        description:
          'Autonomous reasoning agent with custom ReAct loop, type-safe Pydantic tool registry, episodic memory via vector store with recency-weighted retrieval, and reflection module that scores execution traces and triggers dynamic replanning on failure.',
        impact: [
          'Designed tool-calling registry with Pydantic v2 input/output schema enforcement',
          'Implemented episodic memory with recency-weighted retrieval and periodic summarization',
          'Built reflection module scoring execution traces and triggering plan revision on failure',
        ],
      },
    },
    {
      id: 'langchain-work',
      label: 'LangChain Work',
      group: 'project',
      cluster: 'ai',
      val: 8,
      initX: 178,
      initY: -140,
      shortDescription: 'Production LangChain integrations, LCEL chains, and agent tooling across multiple projects.',
      techStack: ['LangChain', 'Python', 'OpenAI', 'Anthropic Claude'],
      recruiterMode: {
        description:
          'Extensive production experience building LangChain-based applications, custom chains, and multi-provider integrations. Practical depth across the LangChain ecosystem from simple chains to complex agentic workflows.',
        impact: [
          'Built custom LangChain chains for domain-specific research and product workflows',
          'Developed reusable tooling patterns applied across multiple production projects',
          'Integrated OpenAI, Anthropic, and open-source LLMs via unified abstraction layers',
        ],
      },
      technicalMode: {
        description:
          'LangChain ecosystem: LCEL runnable composition with parallel branches, ConversationBufferWindowMemory with Redis-backed persistence, custom document loader implementations, multi-provider LLM abstraction, and LangSmith tracing with automated eval pipelines.',
        impact: [
          'Built LCEL chains with RunnableBranch for conditional workflow routing',
          'Implemented Redis-backed ConversationBufferWindowMemory for persistent sessions',
          'Configured LangSmith project tracing and automated evaluation runs for quality regression testing',
        ],
      },
    },

    // ── Data Infrastructure projects ──────────────────────────────────────────
    {
      id: 'datasmart',
      label: 'DataSmart',
      group: 'project',
      cluster: 'data',
      val: 11,
      initX: 380,
      initY: 105,
      shortDescription: 'AI-powered analytics and data intelligence platform for small and medium businesses.',
      techStack: ['Next.js', 'Python', 'Snowflake', 'OpenAI'],
      recruiterMode: {
        description:
          'Full-stack data analytics platform bringing AI-powered insights to small and medium businesses. Combines cloud data warehousing, automated reporting, and a natural language query interface accessible to non-technical users.',
        impact: [
          'Reduced business reporting time from hours to minutes for end users',
          'Built natural language query interface for non-technical stakeholder access',
          'Deployed to production with active paying customers and recurring revenue',
        ],
      },
      technicalMode: {
        description:
          'Analytics platform: Snowflake warehouse with dbt transformation layer, schema-aware NL2SQL system using table/column context injection and Zod validation, Next.js frontend with Recharts, and Python FastAPI analytics backend.',
        impact: [
          'Implemented schema-aware NL2SQL with dynamic context injection and SQL validation guard',
          'Built dbt incremental models with Snowflake clustering key optimization',
          'Designed type-safe API layer with Zod + tRPC for end-to-end type safety',
        ],
      },
    },
    {
      id: 'snowflake-systems',
      label: 'Snowflake Systems',
      group: 'project',
      cluster: 'data',
      val: 9,
      initX: 195,
      initY: 288,
      shortDescription: 'Enterprise Snowflake data modeling, dbt transformation layers, and analytics engineering.',
      techStack: ['Snowflake', 'dbt', 'SQL', 'Python'],
      recruiterMode: {
        description:
          'Enterprise data warehousing and analytics engineering on Snowflake. Designed scalable data models, optimized query performance, and built reliable dbt transformation pipelines for business intelligence workflows.',
        impact: [
          'Reduced warehouse compute costs through query and model optimization',
          'Implemented data quality monitoring and SLA alerting systems',
          'Onboarded engineering teams to dbt development patterns and best practices',
        ],
      },
      technicalMode: {
        description:
          'Snowflake data platform: star/snowflake schema modeling, dbt model layering (staging → intermediate → mart), incremental materializations, clustering key selection for micro-partition pruning, SCD Type 2 with dbt snapshots, and Snowflake Streams for CDC.',
        impact: [
          'Reduced scan volume >60% via micro-partition pruning and clustering key tuning',
          'Implemented SCD Type 2 history tracking using dbt snapshot strategy',
          'Built CDC pipeline using Snowflake Streams + Tasks for near-real-time downstream updates',
        ],
      },
    },
    {
      id: 'backend-architecture',
      label: 'Backend Architecture',
      group: 'project',
      cluster: 'data',
      val: 9,
      initX: 355,
      initY: 240,
      shortDescription: 'Scalable API design and backend systems across multiple production applications.',
      techStack: ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis'],
      recruiterMode: {
        description:
          'Backend systems architecture across multiple production applications. Designed RESTful and GraphQL APIs, authentication systems, Redis caching layers, and async job processing infrastructure deployed on Vercel and Railway.',
        impact: [
          'Architected backends currently serving thousands of daily active users',
          'Implemented optimizations reducing p95 API latency measurably',
          'Built CI/CD pipelines and deployment infrastructure for multiple products',
        ],
      },
      technicalMode: {
        description:
          'Backend stack: REST + GraphQL API design, JWT auth with refresh rotation and session revocation, Redis cache-aside pattern with TTL and tag-based invalidation, BullMQ job queues, Postgres query optimization with EXPLAIN ANALYZE, and structured OpenTelemetry logging.',
        impact: [
          'Implemented Redis cache-aside with TTL-based expiry and tag-based granular invalidation',
          'Optimized N+1 query patterns using DataLoader batching across GraphQL resolvers',
          'Built health check and readiness probe endpoints for container-compatible deployment',
        ],
      },
    },
    {
      id: 'supabase-postgres',
      label: 'Supabase / Postgres',
      group: 'project',
      cluster: 'data',
      val: 8,
      initX: 180,
      initY: 148,
      shortDescription: 'Supabase and PostgreSQL application backends with real-time capabilities and spatial queries.',
      techStack: ['Supabase', 'PostgreSQL', 'PostGIS', 'TypeScript'],
      recruiterMode: {
        description:
          'Application database engineering using Supabase and PostgreSQL across multiple projects. Implemented row-level security, real-time subscriptions, edge functions, and PostGIS spatial queries for production applications.',
        impact: [
          'Built HIPAA-adjacent compliant data handling with row-level security policies',
          'Implemented real-time collaboration features using Supabase Realtime channels',
          'Reduced backend surface area by leveraging Supabase Auth, Storage, and Edge Functions',
        ],
      },
      technicalMode: {
        description:
          'Supabase/Postgres application layer: complex RLS policy design with auth.uid() and role predicates, pg_cron scheduled jobs, plpgsql stored procedures, Supabase Edge Functions (Deno runtime), PostGIS spatial indexing, and Supabase Realtime for live data.',
        impact: [
          'Designed multi-tenant RLS policies with per-row tenant isolation using auth.uid()',
          'Implemented pg_cron + plpgsql for automated nightly aggregation and cleanup jobs',
          'Used PostGIS ST_DWithin with GiST index achieving sub-50ms p95 proximity queries',
        ],
      },
    },

    // ── Civic projects ────────────────────────────────────────────────────────
    {
      id: 'florida-resource-map',
      label: 'Florida Resource Map',
      group: 'project',
      cluster: 'civic',
      val: 11,
      initX: -380,
      initY: 105,
      shortDescription: 'Geospatial community resource directory for Florida social services and public assistance programs.',
      techStack: ['Next.js', 'Supabase', 'PostGIS', 'Mapbox GL JS'],
      recruiterMode: {
        description:
          'Community resource mapping application providing geospatial access to social services, food assistance, healthcare, and housing resources across Florida. Built for underserved communities with accessibility and low-bandwidth performance as primary constraints.',
        impact: [
          'Mapped hundreds of community resources across dozens of Florida counties',
          'Built accessible interface usable on low-end mobile devices and slow connections',
          'Partnered with community organizations for ongoing data stewardship and maintenance',
        ],
      },
      technicalMode: {
        description:
          'Geospatial full-stack application: Mapbox GL JS rendering, Supabase PostGIS backend with ST_DWithin proximity search and GiST indexes, HSDS resource taxonomy standardization, SSR with ISR revalidation strategy, and admin CMS for non-technical community data stewards.',
        impact: [
          'Implemented HSDS (Human Services Data Specification) taxonomy for cross-dataset normalization',
          'Built PostGIS ST_DWithin query with GiST index achieving <80ms p95 API response',
          'Designed ISR strategy with 6-hour revalidation balancing resource freshness and performance',
        ],
      },
    },
    {
      id: 'citycamp',
      label: 'CityCamp',
      group: 'project',
      cluster: 'civic',
      val: 9,
      initX: -205,
      initY: 285,
      shortDescription: 'Open government and civic innovation event platform with real-time community participation.',
      techStack: ['Next.js', 'Supabase', 'TypeScript', 'Vercel Edge'],
      recruiterMode: {
        description:
          'Digital platform for CityCamp civic innovation events enabling community members to propose, vote on, and collaborate around civic challenges. Prioritizes accessible open government participation and low-friction contribution.',
        impact: [
          'Enabled community-driven civic innovation at scale across multiple events',
          'Built real-time voting and discussion infrastructure for live event facilitation',
          'Supported open government transparency initiatives with zero-cost data access',
        ],
      },
      technicalMode: {
        description:
          'Real-time civic event platform: Supabase Realtime channels for live vote aggregation, optimistic UI updates for session/topic management, Vercel Edge Function moderation layer, anonymous participation with browser fingerprint-based deduplication.',
        impact: [
          'Implemented live vote aggregation via Supabase Realtime broadcast channels',
          'Built anonymous session participation with fingerprint-based duplicate prevention',
          'Deployed on Vercel Edge Runtime achieving <100ms TTFB globally',
        ],
      },
    },
    {
      id: 'nonprofit-data',
      label: 'Nonprofit Data Systems',
      group: 'project',
      cluster: 'civic',
      val: 8,
      initX: -355,
      initY: 245,
      shortDescription: 'Lightweight data infrastructure and analytics tooling for resource-constrained nonprofit organizations.',
      techStack: ['Python', 'PostgreSQL', 'Metabase', 'dbt'],
      recruiterMode: {
        description:
          'Data systems and analytics infrastructure built for nonprofit organizations with limited technical resources. Focused on sustainable, maintainable pipelines and self-serve reporting tools that outlast individual contributors.',
        impact: [
          'Replaced manual spreadsheet workflows with automated, documented data pipelines',
          'Built reporting dashboards enabling data-driven program management decisions',
          'Trained non-technical program staff on data tooling for long-term sustainability',
        ],
      },
      technicalMode: {
        description:
          'Lightweight data stack for resource-constrained orgs: Python ETL pipelines integrating Google Sheets, Salesforce REST API, and program databases; dbt + PostgreSQL transformation layer with documentation; Metabase dashboards with embedded row-level filtering.',
        impact: [
          'Built Python + Pandas ETL with Salesforce REST API integration and error recovery',
          'Implemented dbt models for program outcome metrics with auto-generated docs',
          'Deployed Metabase with row-level filtering for multi-program visibility isolation',
        ],
      },
    },
  ],

  // ── Links ──────────────────────────────────────────────────────────────────
  links: [
    // Core → clusters
    { source: 'nikhil', target: 'cluster-biomedical' },
    { source: 'nikhil', target: 'cluster-ai' },
    { source: 'nikhil', target: 'cluster-data' },
    { source: 'nikhil', target: 'cluster-civic' },

    // Biomedical cluster → projects
    { source: 'cluster-biomedical', target: 'zika-dengue' },
    { source: 'cluster-biomedical', target: 'eeg-bci' },
    { source: 'cluster-biomedical', target: 'bmo-care' },
    { source: 'cluster-biomedical', target: 'patchlab' },

    // AI cluster → projects
    { source: 'cluster-ai', target: 'project-align' },
    { source: 'cluster-ai', target: 'rag-systems' },
    { source: 'cluster-ai', target: 'aora' },
    { source: 'cluster-ai', target: 'langchain-work' },

    // Data cluster → projects
    { source: 'cluster-data', target: 'datasmart' },
    { source: 'cluster-data', target: 'snowflake-systems' },
    { source: 'cluster-data', target: 'backend-architecture' },
    { source: 'cluster-data', target: 'supabase-postgres' },

    // Civic cluster → projects
    { source: 'cluster-civic', target: 'florida-resource-map' },
    { source: 'cluster-civic', target: 'citycamp' },
    { source: 'cluster-civic', target: 'nonprofit-data' },

    // Intelligent cross-links
    { source: 'zika-dengue',          target: 'cluster-data' },
    { source: 'datasmart',            target: 'cluster-ai' },
    { source: 'project-align',        target: 'cluster-biomedical' },
    { source: 'florida-resource-map', target: 'cluster-data' },
    { source: 'patchlab',             target: 'cluster-ai' },
  ],
};
