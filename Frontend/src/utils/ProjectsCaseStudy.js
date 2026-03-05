export const caseStudies = [

    {
        id: 1,
        title: "Preface",
        subtitle: "Distraction-Free Reading & Short Fiction Publishing Platform",
        liveLink: "https://preface.vercel.app/",
        githubLink: "https://github.com/Abhinav6423/Story-Verse",

        overview:
            "Preface is a minimal reading and publishing ecosystem designed to encourage focused reading and creative freedom. The platform enables writers to publish short fiction while readers discover stories through curated collections and distraction-free interfaces optimized for deep reading.",

        problem:
            "Most online writing platforms are optimized for engagement loops, notifications, and feeds rather than immersive storytelling. Writers struggle to build a consistent audience while readers find it difficult to focus on long-form content due to cluttered interfaces.",

        solution:
            "Preface provides a distraction-free reading environment paired with structured writer profiles and curated story collections. The platform focuses on clean typography, fast navigation, and a reader-first experience that encourages deeper engagement with narrative fiction.",

        features: [
            {
                title: "Distraction-Free Reader",
                desc: "Minimal reading interface optimized for long-form focus and typography."
            },
            {
                title: "Writer Profiles",
                desc: "Dedicated author pages where writers can manage stories and build a reader base."
            },
            {
                title: "Story Collections",
                desc: "Readers can organize and discover stories through curated reading lists."
            },
            {
                title: "Fast Content Delivery",
                desc: "Optimized page navigation with sub-300ms transitions between stories."
            }
        ],

        architecture:
            "Preface uses a client-server architecture where a React frontend communicates with a Node.js/Express backend through REST APIs. Story content and user data are stored in MongoDB. Authentication is handled using JWT tokens to maintain secure sessions while enabling scalable user interactions.",

        decisions: [
            {
                topic: "Database Choice",
                decision: "MongoDB",
                reason: "Story content structures vary in length and format, making a flexible document-based database ideal for managing narrative content."
            },
            {
                topic: "UI Framework",
                decision: "TailwindCSS",
                reason: "Allowed rapid iteration of typography-focused UI components while maintaining a consistent minimal design system."
            }
        ],

        challenges:
            "The main challenge was ensuring that reading experiences remained fast even when rendering long story content. Initially, story pages experienced noticeable load delays. This was solved by optimizing API responses and reducing unnecessary state updates, resulting in faster navigation between chapters.",

        results: [
            { metric: "300ms", label: "Average Page Navigation Time" },
            { metric: "1000+", label: "Stories Supported in Database" },
            { metric: "95%", label: "Performance Score (Lighthouse)" }
        ]
    },

    {
        id: 2,
        title: "PressFlix",
        subtitle: "Instant Landing Page & Startup Pitch Generator",
        liveLink: "https://press-flix.vercel.app/",
        githubLink: "https://github.com/Abhinav6423/Press-Flix",

        overview:
            "PressFlix allows founders to generate ready-to-share landing pages and startup pitch pages in under 30 seconds. The platform includes built-in analytics for tracking page views, user engagement, and CTA clicks to help founders validate product ideas quickly.",

        problem:
            "Early-stage founders often need landing pages to validate ideas quickly. However, traditional website builders are slow, bloated, and lack built-in analytics for measuring early traction. Founders spend days building a page when they should be talking to users.",

        solution:
            "PressFlix enables founders to generate structured landing pages from a simple input form. The platform automatically creates a public shareable page along with built-in analytics dashboards to track visitor engagement and conversion signals.",

        features: [
            {
                title: "Instant Generation",
                desc: "Sub-30 second landing page creation using modular UI components."
            },
            {
                title: "Built-in Analytics",
                desc: "Tracks page views, unique visitors, and CTA interactions."
            },
            {
                title: "Dynamic Share Links",
                desc: "Automatically generated public URLs for product pitches."
            },
            {
                title: "Template Rendering",
                desc: "Dynamic landing page layouts generated from structured user input."
            }
        ],

        architecture:
            "PressFlix follows a full-stack architecture with a React frontend communicating with Node.js REST APIs. MongoDB stores landing page data and analytics events. TanStack Query handles server state and caching on the client, ensuring fast dashboard updates and minimal API calls.",

        decisions: [
            {
                topic: "State Management",
                decision: "TanStack Query",
                reason: "Provided built-in caching and async state management without Redux complexity."
            },
            {
                topic: "Backend Design",
                decision: "REST APIs with Express",
                reason: "Simple API structure allowed rapid development and easier analytics event tracking."
            }
        ],

        challenges:
            "Rendering dynamic landing pages while maintaining fast load times proved challenging. Early implementations caused noticeable delays when loading pitch pages. Optimizing API responses and caching frequently accessed templates reduced load times significantly.",

        results: [
            { metric: "30s", label: "Landing Page Generation Time" },
            { metric: "100ms", label: "Average API Response Time" },
            { metric: "1000+", label: "Landing Pages Supported" }
        ]
    },

    {
        id: 3,
        title: "Avishaft",
        subtitle: "Learning Productivity & Knowledge Retention System",
        githubLink: "https://github.com/Abhinav6423/Avi-Shaft-",

        overview:
            "Avishaft is a learning productivity system designed to improve knowledge retention through active recall, habit tracking, and AI-assisted feedback. The platform helps students move beyond passive note-taking toward structured learning workflows.",

        problem:
            "Students forget a large percentage of learned material due to passive note-taking and lack of structured reinforcement systems. Traditional study tools rarely incorporate active recall or habit-building mechanisms.",

        solution:
            "Avishaft integrates learning workflows with habit tracking and AI-based feedback loops. The system encourages active recall and spaced reinforcement while allowing users to monitor learning consistency over time.",

        features: [
            {
                title: "Active Recall Tools",
                desc: "Interactive learning prompts designed to reinforce memory retention."
            },
            {
                title: "Habit Tracking",
                desc: "Study streak monitoring and productivity analytics."
            },
            {
                title: "AI Feedback",
                desc: "AI-assisted insights for improving learning efficiency."
            },
            {
                title: "Learning Dashboard",
                desc: "Centralized system to track study progress and performance metrics."
            }
        ],

        architecture:
            "Avishaft uses a React frontend communicating with Node.js APIs for learning workflows and progress tracking. MongoDB stores user learning data and habit logs while AI-based feedback modules process learning inputs to generate personalized insights.",

        decisions: [
            {
                topic: "Architecture",
                decision: "Modular REST API Structure",
                reason: "Allowed independent scaling of learning modules and habit tracking services."
            },
            {
                topic: "AI Integration",
                decision: "API-driven AI feedback",
                reason: "Enabled lightweight integration of AI without complex infrastructure."
            }
        ],

        challenges:
            "Balancing AI feedback with lightweight application performance required careful optimization. Early prototypes slowed down during analysis of user inputs. This was improved by batching AI requests and optimizing frontend state updates.",

        results: [
            { metric: "60%", label: "Potential Retention Improvement Target" },
            { metric: "100+", label: "Learning Sessions Tracked" },
            { metric: "95%", label: "System Performance Score" }
        ]
    },

    {
        id: 4,
        title: "URL Shortener",
        subtitle: "Link Management & Analytics Platform",
        githubLink: "https://github.com/Abhinav6423/url-shortener",

        overview:
            "A full-stack link management platform that generates short URLs and provides analytics dashboards for tracking click behavior, traffic sources, and geographic activity.",

        problem:
            "Most free URL shorteners offer only basic redirection features without meaningful analytics. Users cannot easily analyze traffic patterns or visualize engagement metrics.",

        solution:
            "This platform combines URL shortening with analytics dashboards, allowing users to generate links, track click activity, and visualize engagement data through interactive charts.",

        features: [
            {
                title: "Short Link Generation",
                desc: "Instant creation of shareable short URLs."
            },
            {
                title: "Click Analytics",
                desc: "Tracks traffic sources and user engagement data."
            },
            {
                title: "QR Code Generation",
                desc: "Automatically generates QR codes for sharing links."
            },
            {
                title: "Analytics Dashboard",
                desc: "Interactive charts visualizing link performance."
            }
        ],

        architecture:
            "The system uses a React frontend with Node.js REST APIs responsible for link creation and analytics tracking. MongoDB stores URL mappings and click events. Recharts is used on the frontend to visualize analytics data through dynamic dashboards.",

        decisions: [
            {
                topic: "Analytics Visualization",
                decision: "Recharts",
                reason: "Provided lightweight charting capabilities suitable for interactive dashboards."
            },
            {
                topic: "URL Generation",
                decision: "Random Hashing Algorithm",
                reason: "Ensures unique short links while minimizing collisions."
            }
        ],

        challenges:
            "Handling concurrent link redirections while tracking click analytics required careful backend handling. The system was optimized to record click events asynchronously to avoid slowing down redirect responses.",

        results: [
            { metric: "<80ms", label: "Average Redirect Time" },
            { metric: "100k+", label: "Clicks Trackable" },
            { metric: "99%", label: "Successful Redirect Rate" }
        ]
    }

];