export const caseStudies = [
    {
        title: "Wazuh SIEM Tuning & CIS Benchmark Hardening",
        tag: "DETECTION",
        accent: "cyan",
        metricLabel: "MEAN TIME TO DETECT",
        metric: "45m → 8m",
        images: [
            "/assets/images/Case Studies/Wazuh/Wazuh-1.png",
            "/assets/images/Case Studies/Wazuh/Wazuh-2.png",
            "/assets/images/Case Studies/Wazuh/Wazuh-3.png",
            "/assets/images/Case Studies/Wazuh/Wazuh-4.png",
            "/assets/images/Case Studies/Wazuh/Wazuh-5.png",
            "/assets/images/Case Studies/Wazuh/Wazuh-6.png",
            "/assets/images/Case Studies/Wazuh/Wazuh-7.png",
            "/assets/images/Case Studies/Wazuh/Wazuh-8.png",
        ],
        desc: "Enhanced SOC detection capability by combining Wazuh rule tuning with CIS-based endpoint hardening and GPO-driven baseline enforcement aligned with banking compliance standards.",

        summary:
            "This initiative focused on improving detection fidelity while strengthening endpoint security posture. By reducing alert noise, enforcing CIS benchmarks through Group Policy, and aligning configurations with banking compliance expectations, the environment moved from reactive monitoring toward structured, audit-ready security operations.",

        context:
            "The environment generated a high volume of SIEM alerts and needed better signal quality for operational triage. At the same time, endpoint configurations required stronger baseline enforcement to align with banking compliance and internal audit expectations.",

        objective:
            "Improve SIEM detection quality, reduce false positives, and enforce endpoint hardening through CIS benchmark controls and centralized policy management.",

        methodology: [
            "Identified noisy Level 3 alerts and analyzed rule behavior to reduce alert fatigue",
            "Reviewed CIS benchmark findings to identify endpoint hardening gaps",
            "Applied centralized GPO-based enforcement for endpoint baseline settings",
            "Used local rule logic and rule dependency structure to suppress known-safe activity without losing visibility",
            "Mapped key detections to MITRE ATT&CK techniques for clearer triage and investigation",
            "Validated agent status, hygiene, and endpoint posture through dashboard review and SCA alignment checks",
        ],

        pipeline: [
            {
                title: "Alert analysis",
                desc: "Reviewed alert volume and event patterns to identify noisy rules, repeated detections, and weak signal quality.",
            },
            {
                title: "Rule tuning",
                desc: "Refined Wazuh rules and thresholds, including child-rule logic and frequency-based handling, to reduce false positives and improve signal clarity.",
            },
            {
                title: "Baseline hardening",
                desc: "Used CIS benchmark findings and Group Policy enforcement to strengthen endpoint security posture and improve consistency.",
            },
            {
                title: "Detection mapping",
                desc: "Aligned high-value detections with MITRE ATT&CK techniques, including command and scripting activity such as obfuscated PowerShell patterns.",
            },
            {
                title: "Operational validation",
                desc: "Checked dashboard visibility, agent health, endpoint hygiene, and SCA results to confirm ongoing effectiveness.",
            },
        ],

        evidence: [
            "Wazuh dashboard screenshots",
            "Alert tuning outputs",
            "CIS benchmark findings",
            "Agent health and endpoint hygiene views",
            "SCA checks aligned to banking baseline requirements",
        ],

        visualization: [
            "Alert reduction trends",
            "Endpoint hygiene dashboards",
            "Agent status visibility",
            "Detection coverage tracking",
            "Security configuration assessment views",
        ],

        outcomes: [
            "Reduced alert noise and improved signal clarity",
            "Strengthened endpoint hardening through CIS benchmark alignment",
            "Improved SOC triage speed and consistency",
            "Created a more audit-friendly security posture",
        ],

        metrics: [
            "Mean time to detect improved from 45m to 8m",
            "Lower false positive volume",
            "Better visibility into endpoint health and compliance",
        ],

        scope: "SOC / Endpoint Security",
        focus: "Detection Engineering & Hardening",
        status: "Completed",

        bullets: [
            "Identified noisy Level 3 alerts and tuned rule logic to reduce noise",
            "Optimized CIS benchmark findings for stronger endpoint hardening",
            "Improved dashboard visibility for IT hygiene, alerts, and agent status",
            "Strengthened SOC triage quality through cleaner signal and better prioritization",
            "Validated known-safe activity without sacrificing real threat visibility",
        ],

        tags: [
            "Wazuh",
            "SIEM",
            "CIS Benchmark",
            "GPO",
            "MITRE ATT&CK",
            "SOC Operations",
            "Compliance",
        ],

        relatedProjects: [
            "PC Inventory & Risk Analysis Platform",
            "Banking Branch Security Hardening",
            "Active Directory Migration & Automation",
        ],

        specificChallenge:
            "A legitimate backup activity was initially generating a noisy alert pattern. I introduced rule dependency logic and controlled suppression so the safe activity stayed visible for context, while unnecessary repetition was removed from the analyst queue.",
    },

    {
        title: "FortiAnalyzer Monitoring & Log Correlation",
        tag: "MONITORING",
        accent: "green",
        metricLabel: "LOG VISIBILITY",
        metric: "Centralized Analysis",
        images: [
            "/assets/images/Case Studies/FortiAnalyzer/FortiAnalyzer-1.png",
            "/assets/images/Case Studies/FortiAnalyzer/FortiAnalyzer-2.png",
            "/assets/images/Case Studies/FortiAnalyzer/FortiAnalyzer-3.png",
            "/assets/images/Case Studies/FortiAnalyzer/FortiAnalyzer-4.png",
            "/assets/images/Case Studies/FortiAnalyzer/FortiAnalyzer-5.png",
        ],
        desc: "Used FortiAnalyzer to build centralized visibility through custom log correlation, structured review workflows, and incident grouping for operational security support.",

        summary:
            "This case study focused on operationalizing FortiAnalyzer as an investigation and visibility platform rather than using it only as a dashboard. The work supported triage, event review, and incident grouping by turning raw firewall and security logs into usable operational context.",

        context:
            "Security events and firewall-generated logs needed a consistent review process so that monitoring could support triage, investigation, and operational oversight more effectively.",

        objective:
            "Improve centralized visibility into security activity, correlate logs across dashboards and event monitors, and support faster operational review.",

        methodology: [
            "Built structured review views for centralized visibility",
            "Investigated threat events and event monitor outputs",
            "Correlated logs across time and source to trace security activity",
            "Used custom datasets or query logic to organize related events into a single investigation flow",
            "Validated firewall-to-SOC event flow for triage support",
        ],

        pipeline: [
            {
                title: "Dashboard review",
                desc: "Checked centralized dashboards to understand current security activity and system state.",
            },
            {
                title: "Event investigation",
                desc: "Reviewed threat events and event monitor outputs to identify notable activity and suspicious patterns.",
            },
            {
                title: "Log correlation",
                desc: "Connected logs and events to support investigation and incident review, grouping related records into meaningful operational context.",
            },
            {
                title: "Operational validation",
                desc: "Confirmed that firewall-to-SOC event flow was visible, searchable, and usable for triage.",
            },
        ],

        evidence: [
            "FortiAnalyzer dashboard screenshots",
            "Threat event review views",
            "Event monitor outputs",
            "Security log correlation views",
            "Custom report or dataset outputs",
        ],

        visualization: [
            "Threat activity dashboards",
            "Event monitor timelines",
            "Log correlation flows",
            "Centralized SOC visibility views",
            "Incident-style grouped event views",
        ],

        outcomes: [
            "Improved operational visibility across security logs",
            "Made event review and triage easier to follow",
            "Strengthened understanding of firewall-to-SOC event flow",
            "Supported centralized monitoring and review workflows",
        ],

        metrics: [
            "Centralized analysis of security logs",
            "Better visibility into threat activity",
            "Improved correlation for triage support",
        ],

        scope: "SOC / Log Monitoring",
        focus: "Monitoring & Correlation",
        status: "Completed",

        bullets: [
            "Built centralized review workflows instead of only passively viewing dashboards",
            "Investigated threat events and event monitor outputs",
            "Correlated logs to support triage and incident review",
            "Improved understanding of firewall-to-SOC event flow",
            "Used structured queries or datasets to group related logs into a cleaner investigation path",
        ],

        tags: [
            "FortiAnalyzer",
            "Monitoring",
            "Log Correlation",
            "SOC Operations",
            "Threat Review",
            "Centralized Visibility",
        ],

        relatedProjects: [
            "Wazuh SIEM Tuning & CIS Benchmark Hardening",
            "PC Inventory & Risk Analysis Platform",
            "Active Directory Migration & Automation",
        ],

        specificChallenge:
            "A practical challenge was separating routine firewall chatter from events that deserved investigation. I structured the review flow so related logs could be grouped into a single incident view instead of forcing analysts to inspect every record manually.",
    },

    {
        title: "FortiGate Policy, Interface & Traffic Review",
        tag: "NETWORK",
        accent: "violet",
        metricLabel: "PERIMETER CONTROL",
        metric: "Policy & Traffic Review",
        images: [
            "/assets/images/Case Studies/FortiGate/FortiGate-1.png",
            "/assets/images/Case Studies/FortiGate/FortiGate-2.png",
            "/assets/images/Case Studies/FortiGate/FortiGate-3.png",
            "/assets/images/Case Studies/FortiGate/FortiGate-4.png",
            "/assets/images/Case Studies/FortiGate/FortiGate-5.png",
        ],
        desc: "Reviewed FortiGate interfaces, address objects, application visibility, and security policies to improve perimeter control and branch network security.",

        summary:
            "This case study focused on reviewing and organizing FortiGate configuration to improve perimeter control, simplify policy management, and increase visibility into branch traffic behavior. The work supported both operational stability and security review.",

        context:
            "Branch firewall environments required consistent review of interfaces, address objects, policies, and application behavior so that connectivity and security control could be validated together.",

        objective:
            "Improve visibility into FortiGate perimeter configuration, confirm policy structure, identify unauthorized or shadow IT activity, and analyze traffic flow for branch security operations.",

        methodology: [
            "Checked interfaces and perimeter connectivity status",
            "Reviewed address objects to simplify and standardize policy logic",
            "Analyzed forward traffic and application control logs for operational insight",
            "Identified unauthorized or shadow IT activity where present",
            "Supported firewall hardening and branch network control",
        ],

        pipeline: [
            {
                title: "Interface review",
                desc: "Validated interface status and perimeter connectivity to confirm branch network reachability.",
            },
            {
                title: "Policy analysis",
                desc: "Reviewed address objects and security policy structure to understand access control logic and reduce unnecessary complexity.",
            },
            {
                title: "Traffic observation",
                desc: "Analyzed forward traffic and application activity for operational insight, suspicious usage, and unauthorized behavior.",
            },
            {
                title: "Control validation",
                desc: "Supported firewall hardening and confirmed branch network control effectiveness.",
            },
        ],

        evidence: [
            "FortiGate interface screenshots",
            "Policy table review views",
            "Address object review screenshots",
            "Forward traffic monitoring views",
            "Application control log views",
        ],

        visualization: [
            "Interface status dashboards",
            "Policy flow diagrams",
            "Traffic analysis views",
            "Perimeter control review screens",
            "Application usage visibility",
        ],

        outcomes: [
            "Improved confidence in branch perimeter configuration",
            "Made policy structure easier to review",
            "Strengthened firewall hardening validation",
            "Improved traffic visibility for operational support",
        ],

        metrics: [
            "Perimeter control review completed",
            "Policy structure simplified",
            "Traffic flow observed for operational insight",
        ],

        scope: "Network Security",
        focus: "Firewall Policy Review",
        status: "Completed",

        bullets: [
            "Checked interfaces and perimeter connectivity status",
            "Reviewed address objects and security policy structure",
            "Analyzed forward traffic and application activity for operational insight",
            "Supported firewall hardening and branch network control",
            "Used address objects and policy grouping to reduce policy table complexity",
        ],

        tags: [
            "FortiGate",
            "Firewall",
            "Network Security",
            "Policy Review",
            "Traffic Analysis",
            "Branch Operations",
        ],

        relatedProjects: [
            "FortiAnalyzer Monitoring & Log Correlation",
            "Wazuh SIEM Tuning & CIS Benchmark Hardening",
            "Active Directory Migration & Automation",
        ],

        specificChallenge:
            "One practical issue was policy sprawl. I used address objects and cleaner grouping logic to simplify review and reduce the number of rules that had to be mentally processed during branch firewall validation.",
    },

    {
        title: "PC Inventory Deep Scan & Audit Reporting",
        tag: "DETECTION",
        accent: "amber",
        metricLabel: "RISK MAPPED TO MITRE",
        metric: "Endpoint Risk Scoring",
        images: [
            "/assets/images/Projects/PC-Inventory/PC-Inventory-1.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-2.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-3.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-4.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-5.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-6.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-7.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-8.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-9.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-10.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-11.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-12.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-13.png",
            "/assets/images/Projects/PC-Inventory/PC-Inventory-14.png",
        ],
        desc: "Built a two-stage inventory platform with network discovery, deep endpoint inspection, and audit-ready reporting.",
        summary:
            "This project delivered a two-stage endpoint visibility and risk analysis platform designed for distributed environments. It combined network discovery, deep device inspection, and audit-ready reporting to make endpoint posture easier to review and map to remediation priorities.",
        context:
            "Distributed branches needed a unified way to scan networks, inspect endpoints deeply, and generate structured audit outputs with clear risk visibility.",
        objective:
            "Build an inventory and risk analysis platform that could discover devices, inspect endpoint posture, calculate risk, and produce audit-ready reports.",
        methodology: [
            "Full network scan plus deep scan for detailed endpoint intelligence",
            "Risk calculated from patching, OS version, AV, services, RAM, hardware, and domain state",
            "Generated branch-specific and enterprise-wide audit outputs with LAN diagrams",
            "Mapped findings to MITRE techniques for structured remediation",
        ],
        pipeline: [
            {
                title: "Network discovery",
                desc: "Identified devices across the environment through a first-pass scan.",
            },
            {
                title: "Deep endpoint inspection",
                desc: "Collected detailed system and security data from endpoints for analysis.",
            },
            {
                title: "Risk scoring",
                desc: "Calculated risk using patching, AV, services, hardware, and domain posture.",
            },
            {
                title: "Audit reporting",
                desc: "Produced branch and enterprise reports with diagrams and remediation context.",
            },
        ],
        evidence: [
            "Inventory dashboard screenshots",
            "Deep scan result views",
            "Risk scoring outputs",
            "Audit export and LAN diagram views",
        ],
        visualization: [
            "Endpoint risk heatmaps",
            "Branch device maps",
            "Audit report layouts",
            "MITRE-mapped findings view",
        ],
        outcomes: [
            "Improved asset visibility across distributed environments",
            "Standardized endpoint posture analysis for audit use",
            "Reduced manual inventory and reporting workload",
            "Created clearer remediation priorities through risk mapping",
        ],
        metrics: [
            "Two-stage discovery and inspection workflow",
            "Risk scoring mapped to MITRE",
            "Audit-ready output generation",
        ],
        scope: "Endpoint Security / Asset Management",
        focus: "Inventory & Risk Analysis",
        status: "Completed",
        bullets: [
            "Full network scan plus deep scan for detailed endpoint intelligence",
            "Risk calculated from patching, OS version, AV, services, RAM, hardware, and domain state",
            "Generated branch-specific and enterprise-wide audit outputs with LAN diagrams",
            "Mapped findings to MITRE techniques for structured remediation",
        ],
        tags: [
            "Python",
            "PowerShell",
            "React",
            "MITRE ATT&CK",
            "Risk Scoring",
            "Audit Reporting",
        ],
        relatedProjects: [
            "Wazuh SIEM Tuning & CIS Benchmark Hardening",
            "SafeOps Endpoint Health Review",
            "Active Directory Migration & Automation",
        ],
    },

    {
        title: "Attendance Sync Reliability Pipeline",
        tag: "AUTOMATION",
        accent: "blue",
        metricLabel: "CONSISTENCY CONTROL",
        metric: "Thread-Safe Sync",
        image: "/assets/images/attendance-sync.png",
        desc: "Automated ZKTeco attendance collection with duplicate prevention and reliable HR system synchronization.",
        summary:
            "This pipeline improved attendance synchronization by introducing controlled polling, duplicate prevention, and thread-safe record handling. It was built to support reliable HR data transfer while avoiding inconsistent or repeated records.",
        context:
            "Attendance collection from hardware devices needed to be reliable, consistent, and safe from duplicate imports before reaching the HR system.",
        objective:
            "Automate attendance polling, prevent duplicate records, and synchronize clean data into the HR application consistently.",
        methodology: [
            "Thread pool based device polling for speed and scale",
            "Atomic locking and duplicate checks for data consistency",
            "Frontend monitoring for uptime, reachability, and historical data validation",
            "Synchronized clean data into the HR app with duplication safeguards",
        ],
        pipeline: [
            {
                title: "Device polling",
                desc: "Collected records from ZKTeco devices on a scheduled basis.",
            },
            {
                title: "Duplicate prevention",
                desc: "Used atomic locking and checks to avoid re-importing the same entry.",
            },
            {
                title: "Local validation",
                desc: "Verified collected data before passing it onward to the HR system.",
            },
            {
                title: "HR synchronization",
                desc: "Sent clean and validated attendance data into the HR application.",
            },
        ],
        evidence: [
            "Attendance sync dashboard screenshot",
            "Duplicate prevention logic views",
            "Polling status views",
            "HR sync confirmation views",
        ],
        visualization: [
            "Thread pool activity views",
            "Sync consistency panels",
            "Device reachability indicators",
            "Historical validation screens",
        ],
        outcomes: [
            "Reduced data inconsistency during sync",
            "Improved reliability of attendance collection",
            "Increased operational visibility across branches",
            "Prevented duplicate attendance records from reaching HR",
        ],
        metrics: [
            "Thread-safe sync process",
            "Duplicate prevention enabled",
            "Improved reliability of attendance collection",
        ],
        scope: "Automation / HR Systems",
        focus: "Sync Reliability",
        status: "Completed",
        bullets: [
            "Thread pool based device polling for speed and scale",
            "Atomic locking and duplicate checks for data consistency",
            "Frontend monitoring for uptime, reachability, and historical data validation",
            "Synchronized clean data into the HR app with duplication safeguards",
        ],
        tags: [
            "Flask",
            "Python",
            "ThreadPool",
            "MySQL",
            "Automation",
            "HR Sync",
        ],
        relatedProjects: [
            "DVR Fleet Administration & Monitoring",
            "Active Directory Migration & Automation",
            "SafeOps Endpoint Health Review",
        ],
    },

    {
        title: "DVR Fleet Administration & Monitoring",
        tag: "ENGINEERING",
        accent: "indigo",
        metricLabel: "DEVICE CONTROL",
        metric: "Full-Stack Managed",

        image: "/assets/images/dvr-fleet.png",

        desc:
            "Full-stack DVR management platform combining React control dashboard, Python orchestration backend, and PowerShell automation for Hikvision fleet operations.",

        summary:
            "This case study demonstrates a full-stack DVR fleet management system designed for heterogeneous Hikvision firmware environments. It integrates a React-based operational dashboard, Python orchestration backend, and PowerShell execution layer to manage time synchronization, bulk password operations, and system health monitoring across distributed banking branches.",

        context:
            "Hikvision DVR devices across distributed branches exhibited inconsistent firmware behaviors, particularly in authentication logic, admin identity naming conventions, and API response structures. This made uniform automation unreliable without a full-stack orchestration approach.",

        objective:
            "Build a centralized full-stack control system for DVR fleet management with reliable automation, firmware-aware execution logic, and real-time operational visibility.",

        methodology: [
            "Built React-based dashboard for DVR fleet monitoring and control",
            "Analyzed firmware inconsistencies across Hikvision device models",
            "Implemented fallback admin identity resolution for authentication variability",
            "Developed PowerShell automation layer for device-level execution",
            "Built Python orchestration backend for execution control and aggregation",
            "Standardized responses using structured JSON output model",
            "Integrated device memory and storage monitoring for health tracking",
        ],

        pipeline: [
            {
                title: "React control dashboard",
                desc: "Provides centralized UI for fleet monitoring, execution control, and operational visibility.",
            },
            {
                title: "Firmware behavior analysis",
                desc: "Identified inconsistencies in authentication and admin identity handling across device variants.",
            },
            {
                title: "Adaptive authentication logic",
                desc: "Implemented fallback admin identity resolution for heterogeneous DVR models.",
            },
            {
                title: "PowerShell execution layer",
                desc: "Executes device-level password and configuration changes through PowerShell automation.",
            },
            {
                title: "Python orchestration backend",
                desc: "Manages execution flow, retries, and aggregates results into structured JSON responses.",
            },
            {
                title: "System health monitoring",
                desc: "Tracks DVR memory usage and storage availability for operational awareness.",
            },
        ],

        evidence: [
            "React dashboard UI screenshots",
            "DVR configuration control views",
            "Automation execution logs",
            "NTP enforcement status panels",
            "Backend JSON response outputs",
        ],

        visualization: [
            "Fleet health dashboard (React UI)",
            "Device uptime and status panels",
            "Time sync drift indicators",
            "Configuration execution history",
        ],

        outcomes: [
            "Improved automation reliability across mixed firmware DVR environments",
            "Reduced manual intervention in branch-level device operations",
            "Standardized password and configuration management across fleet",
            "Enhanced operational visibility through full-stack monitoring system",
        ],

        metrics: [
            "Full-stack DVR control system deployed",
            "Improved execution reliability across heterogeneous devices",
            "Centralized monitoring and orchestration achieved",
        ],

        scope: "Full-Stack Device Management",
        focus: "Automation Engineering & Fleet Control",
        status: "Completed",

        tags: [
            "React",
            "Python Backend",
            "PowerShell",
            "Hikvision API",
            "Automation",
            "Device Management",
            "Full-Stack Systems",
        ],

        relatedProjects: [
            "FortiGate Policy, Interface & Traffic Review",
            "Wazuh SIEM Tuning & CIS Benchmark Hardening",
            "Active Directory Migration & Automation",
        ],
    },

    {
        title: "SafeOps Endpoint Health Review",
        tag: "OPERATIONS",
        accent: "violet",
        metricLabel: "HEALTH STATUS",
        metric: "Real-Time Visibility",
        image: "/assets/images/safeops-health.png",
        desc: "Internal system for endpoint health monitoring, audit preparation, operational readiness checks, and critical update validation.",
        summary:
            "This internal tool was built to surface endpoint health and readiness information in a way that support teams and auditors could use quickly. It improved visibility into status, validation, and remediation guidance across branches.",
        context:
            "Branches needed a fast way to verify endpoint health, readiness, and update status while preparing for audits and operational review.",
        objective:
            "Provide real-time endpoint health visibility, support readiness checks, and improve validation workflows for operations and audits.",
        methodology: [
            "Branch-wise scanning for distributed infrastructure visibility",
            "Real-time health status display across endpoints",
            "Remediation guidance aligned with SOP and audit workflows",
            "Useful for readiness checks and support validation",
        ],
        pipeline: [
            {
                title: "Branch scanning",
                desc: "Collected endpoint data across distributed infrastructure.",
            },
            {
                title: "Health validation",
                desc: "Displayed real-time endpoint health and status information for review.",
            },
            {
                title: "Remediation guidance",
                desc: "Aligned findings with SOP-based follow-up and audit workflows.",
            },
            {
                title: "Operational readiness",
                desc: "Used by support teams to confirm system readiness and critical update status.",
            },
        ],
        evidence: [
            "Endpoint health dashboard screenshot",
            "Readiness validation views",
            "Audit preparation output",
            "Status monitoring screens",
        ],
        visualization: [
            "Real-time health panels",
            "Branch readiness views",
            "Update validation dashboards",
            "Support workflow screens",
        ],
        outcomes: [
            "Improved endpoint readiness checks",
            "Helped operational support teams validate status quickly",
            "Added visibility for audit and remediation workflows",
            "Reduced time spent confirming branch health",
        ],
        metrics: [
            "Real-time visibility",
            "Branch-wise scanning",
            "Operational readiness support",
        ],
        scope: "Operations / Endpoint Monitoring",
        focus: "Health Visibility",
        status: "Completed",
        bullets: [
            "Branch-wise scanning for distributed infrastructure visibility",
            "Real-time health status display across endpoints",
            "Remediation guidance aligned with SOP and audit workflows",
            "Useful for readiness checks and support validation",
        ],
        tags: [
            "Python",
            "Health Checks",
            "Operations",
            "Support",
            "Endpoint Monitoring",
        ],
        relatedProjects: [
            "PC Inventory Deep Scan & Audit Reporting",
            "Attendance Sync Reliability Pipeline",
            "Active Directory Migration & Automation",
        ],
    },

    {
        title: "Active Directory Migration & Automation",
        tag: "INFRASTRUCTURE",
        accent: "indigo",
        metricLabel: "DEPLOYMENT SCALE",
        metric: "125+ Branches",
        images: [
            "/assets/images/Case Studies/AD/AD-1.png",
            "/assets/images/Case Studies/AD/AD-2.png",
            "/assets/images/Case Studies/AD/AD-3.png",
            "/assets/images/Case Studies/AD/AD-4.png",
            "/assets/images/Case Studies/AD/AD-5.png",
        ],
        desc: "Executed large-scale Active Directory migration with automated post-deployment configuration, GPO baseline enforcement, and policy updates aligned with banking compliance requirements.",
        summary:
            "This migration initiative moved endpoints from workgroup environments into centralized domain management across a large branch footprint. Automation was used to reduce downtime, standardize workstation setup, restore user environments after migration, and keep Group Policy aligned with enterprise banking security requirements.",
        context:
            "A large number of distributed branch systems needed to be migrated into a domain-managed environment without disrupting day-to-day work. The environment also required ongoing Group Policy creation and updates to support compliance, baseline hardening, and audit readiness.",
        objective:
            "Migrate workgroup endpoints into Active Directory, automate post-deployment configuration, create and maintain GPO baselines, and standardize settings across all branches in line with banking ICT policy, ISMS, and secure configuration best practice.",
        methodology: [
            "Migrated endpoints from workgroup to domain across 125+ branches",
            "Developed reusable PowerShell automation for post-domain configuration",
            "Created and updated Group Policy Objects for password policy, Windows security settings, update behavior, and user restrictions",
            "Aligned GPO baselines with banking compliance expectations and secure configuration standards",
            "Applied centralized policy enforcement across Organizational Units to reduce drift",
            "Restored user environments and system configurations seamlessly",
            "Standardized domain setup aligned with organizational policies",
        ],
        pipeline: [
            {
                title: "Pre-migration review",
                desc: "Assessed branch endpoints, identified workgroup systems, and prepared migration steps for each site.",
            },
            {
                title: "Domain migration",
                desc: "Moved workgroup systems into centralized Active Directory management.",
            },
            {
                title: "GPO creation and baseline design",
                desc: "Created Group Policy Objects for password policy, Windows Update behavior, user restrictions, endpoint hardening, and other compliance-aligned controls.",
            },
            {
                title: "Policy update and enforcement",
                desc: "Updated existing GPOs over time to reflect enterprise change requests, audit findings, and banking security requirements.",
            },
            {
                title: "Automation phase",
                desc: "Applied PowerShell automation for post-domain configuration, policy enforcement, and branch standardization.",
            },
            {
                title: "User restoration",
                desc: "Recovered user desktops, documents, shortcuts, and environment settings after migration.",
            },
            {
                title: "Validation and audit",
                desc: "Validated policy application, domain state, and branch consistency using endpoint checks and compliance review.",
            },
        ],
        evidence: [
            "AD migration screenshots",
            "PowerShell automation views",
            "GPO enforcement screenshots",
            "Policy result / RSoP validation views",
            "Post-migration environment views",
        ],
        visualization: [
            "Branch rollout progress",
            "Domain join status",
            "Policy enforcement views",
            "User restoration flow diagrams",
            "GPO baseline coverage tracking",
        ],
        outcomes: [
            "Standardized workstation configuration at scale",
            "Reduced migration downtime and manual setup effort",
            "Improved consistency across branches",
            "Created a repeatable AD migration process",
            "Strengthened compliance alignment through controlled GPO updates",
        ],
        metrics: [
            "125+ branches migrated",
            "Post-domain automation used",
            "Standardized domain configuration",
            "Baseline GPOs created and updated for compliance",
        ],
        scope: "Infrastructure / Identity Management",
        focus: "Migration & Automation",
        status: "Completed",
        bullets: [
            "Migrated endpoints from workgroup to domain across 125+ branches",
            "Developed reusable PowerShell automation for post-domain configuration",
            "Created and updated Group Policy Objects for secure baseline enforcement",
            "Automated software installation, licensing, and policy enforcement",
            "Restored user environments and system configurations seamlessly",
            "Standardized domain setup aligned with organizational policies and banking compliance expectations",
        ],
        tags: [
            "PowerShell",
            "Active Directory",
            "GPO",
            "Deployment Automation",
            "Enterprise",
            "Compliance",
            "Security Baseline",
        ],
        relatedProjects: [
            "SafeOps Endpoint Health Review",
            "PC Inventory Deep Scan & Audit Reporting",
            "Wazuh SIEM Tuning & CIS Benchmark Hardening",
        ],
        specificChallenge:
            "The main challenge was keeping hundreds of endpoints consistent while policies changed over time. I used centralized GPO creation and updates to keep the branch estate aligned with banking security requirements without breaking daily operations.",
    },

    {
        title: "Legacy System Upgrade & Hardware Optimization",
        tag: "OPERATIONS",
        accent: "red",
        metricLabel: "SYSTEM MODERNIZATION",
        metric: "Win7 → Secure OS",
        images: ["/assets/images/legacy-upgrade-case.png"],
        desc: "Led remediation of legacy systems by upgrading unsupported Windows environments and optimizing hardware usage.",
        summary:
            "This case study focused on reducing legacy exposure by identifying outdated systems, improving hardware where possible, and replacing unsupported operating systems with secure alternatives. The goal was to extend system life while improving security and maintaining continuity.",
        context:
            "Several branch systems were still running legacy Windows 7 environments or hardware that could not support modern security requirements.",
        objective:
            "Remove unsupported operating systems, modernize endpoints where feasible, and keep operational continuity through safer platform choices.",
        methodology: [
            "Identified and audited legacy Windows 7 systems across branches",
            "Performed hardware upgrades to support modern operating systems",
            "Deployed Linux alternatives for low-resource systems where upgrades were not feasible",
            "Improved security posture by eliminating unsupported OS usage",
            "Extended system lifecycle while maintaining operational continuity",
        ],
        pipeline: [
            {
                title: "Asset identification",
                desc: "Audited branch systems to find unsupported operating systems and aging hardware.",
            },
            {
                title: "Upgrade decision",
                desc: "Determined whether systems could be upgraded or needed replacement alternatives.",
            },
            {
                title: "Remediation",
                desc: "Applied hardware upgrades or deployed Linux-based alternatives as needed.",
            },
            {
                title: "Security validation",
                desc: "Confirmed unsupported OS exposure was removed and continuity was maintained.",
            },
        ],
        evidence: [
            "Legacy system audit views",
            "Upgrade and remediation screenshots",
            "Linux fallback deployment evidence",
            "Post-remediation environment validation",
        ],
        visualization: [
            "Before/after OS posture views",
            "Hardware readiness tracking",
            "Legacy exposure reduction views",
            "Lifecycle optimization flow",
        ],
        outcomes: [
            "Reduced unsupported OS exposure",
            "Extended usable hardware lifecycle",
            "Improved endpoint security posture",
            "Balanced security, cost, and operational continuity",
        ],
        metrics: [
            "Win7 systems remediated",
            "Unsupported OS usage reduced",
            "Hardware lifecycle extended",
        ],
        scope: "Endpoint Modernization / Operations",
        focus: "Legacy Remediation",
        status: "Completed",
        bullets: [
            "Identified and audited legacy Windows 7 systems across branches",
            "Performed hardware upgrades to support modern operating systems",
            "Deployed Linux alternatives for low-resource systems where upgrades were not feasible",
            "Improved security posture by eliminating unsupported OS usage",
            "Extended system lifecycle while maintaining operational continuity",
        ],
        tags: [
            "Windows",
            "Linux",
            "Hardware",
            "Operations",
            "Legacy Remediation",
        ],
        relatedProjects: [
            "SafeOps Endpoint Health Review",
            "PC Inventory Deep Scan & Audit Reporting",
            "Banking Branch Security Hardening",
        ],
    },

    {
        title: "Security & Infrastructure Automation",
        tag: "ENGINEERING",
        accent: "orange",
        metricLabel: "DEPLOYMENT EFFICIENCY",
        metric: "Hours → Minutes",
        images: [
            "/assets/images/Case Studies/Automation/Automation-1.png",
            "/assets/images/Case Studies/Automation/Automation-2.png",
            "/assets/images/Case Studies/Automation/Automation-3.png",
            "/assets/images/Case Studies/Automation/Automation-4.png",
        ],
        desc: "Built reusable automation frameworks for infrastructure provisioning, endpoint standardization, and operational support.",
        summary:
            "This initiative focused on reducing manual infrastructure work through reusable automation patterns. It supported endpoint standardization, post-deployment configuration, and operational tasks across a large branch footprint.",
        context:
            "Repeated infrastructure and support tasks were consuming too much manual effort and introducing configuration inconsistency across branches.",
        objective:
            "Create reusable automation frameworks that reduced manual deployment time and improved consistency in infrastructure and endpoint operations.",
        methodology: [
            "Automated post-domain configuration and user environment restoration",
            "Standardized software deployment, licensing, and system baselines across 125+ branches",
            "Developed reusable scripts for monitoring, reporting, and endpoint validation",
            "Reduced deployment time and eliminated manual configuration inconsistencies",
        ],
        pipeline: [
            {
                title: "Workflow analysis",
                desc: "Identified repeatable infrastructure and support tasks suitable for automation.",
            },
            {
                title: "Script design",
                desc: "Built reusable scripts and process flows for standardized deployment and validation.",
            },
            {
                title: "Branch rollout",
                desc: "Applied automation across multiple branches to support consistent setups.",
            },
            {
                title: "Efficiency validation",
                desc: "Confirmed lower deployment effort and reduced manual inconsistency.",
            },
        ],
        evidence: [
            "Automation script screenshots",
            "Deployment workflow views",
            "Monitoring/reporting outputs",
            "Endpoint validation views",
        ],
        visualization: [
            "Automation flow diagrams",
            "Deployment efficiency tracking",
            "Endpoint standardization views",
            "Branch rollout progress views",
        ],
        outcomes: [
            "Reduced deployment time",
            "Eliminated manual configuration inconsistencies",
            "Improved consistency across branches",
            "Created reusable automation patterns",
        ],
        metrics: [
            "Hours reduced to minutes",
            "125+ branch scale support",
            "Reusable automation framework",
        ],
        scope: "Infrastructure Automation",
        focus: "Deployment Efficiency",
        status: "Completed",
        bullets: [
            "Automated post-domain configuration and user environment restoration",
            "Standardized software deployment, licensing, and system baselines across 125+ branches",
            "Developed reusable scripts for monitoring, reporting, and endpoint validation",
            "Reduced deployment time and eliminated manual configuration inconsistencies",
        ],
        tags: [
            "PowerShell",
            "Automation",
            "Deployment",
            "Operations",
            "Enterprise",
        ],
        relatedProjects: [
            "Active Directory Migration & Automation",
            "Attendance Sync Reliability Pipeline",
            "SafeOps Endpoint Health Review",
        ],
    },

    {
        title: "SOC Automation & Incident Response Acceleration",
        tag: "DETECTION",
        accent: "green",
        metricLabel: "RESPONSE TIME",
        metric: "−74%",
        images: ["/assets/images/security-automation.png"],
        desc: "Designed automation workflows to accelerate security triage, alert enrichment, and incident response across SOC operations.",
        summary:
            "This case study focused on speeding up SOC operations by automating repetitive response tasks and improving alert context. The result was a faster and more consistent incident handling workflow across common threat scenarios.",
        context:
            "Security analysts needed better triage support and faster response workflows for recurring incidents such as phishing, malware, and brute-force activity.",
        objective:
            "Reduce incident response time, improve alert enrichment, and standardize SOC handling through automation workflows.",
        methodology: [
            "Built response playbooks for phishing, malware, and brute-force scenarios",
            "Automated alert enrichment with contextual data for faster triage",
            "Streamlined correlation between logs, alerts, and endpoint signals",
            "Reduced analyst fatigue and improved consistency in incident handling",
        ],
        pipeline: [
            {
                title: "Alert intake",
                desc: "Collected incoming alerts from security tools and monitoring sources.",
            },
            {
                title: "Context enrichment",
                desc: "Added supporting data to make triage decisions faster and more reliable.",
            },
            {
                title: "Playbook execution",
                desc: "Applied automated response actions for common incident types.",
            },
            {
                title: "Outcome review",
                desc: "Measured improved response speed and consistency across incidents.",
            },
        ],
        evidence: [
            "SOC automation screenshots",
            "Incident playbook outputs",
            "Alert enrichment views",
            "Correlation and response workflow views",
        ],
        visualization: [
            "Incident response timelines",
            "Alert enrichment panels",
            "Playbook execution views",
            "SOC workflow diagrams",
        ],
        outcomes: [
            "Reduced analyst fatigue",
            "Improved consistency in incident handling",
            "Accelerated triage with contextual alert enrichment",
            "Cut response time substantially",
        ],
        metrics: [
            "Response time reduced by 74%",
            "Playbooks standardized",
            "Alert triage accelerated",
        ],
        scope: "SOC Operations / Incident Response",
        focus: "Automation & Triage",
        status: "Completed",
        bullets: [
            "Built response playbooks for phishing, malware, and brute-force scenarios",
            "Automated alert enrichment with contextual data for faster triage",
            "Streamlined correlation between logs, alerts, and endpoint signals",
            "Reduced analyst fatigue and improved consistency in incident handling",
        ],
        tags: [
            "SOC",
            "Automation",
            "Incident Response",
            "Alert Enrichment",
            "Detection",
        ],
        relatedProjects: [
            "Wazuh SIEM Tuning & CIS Benchmark Hardening",
            "FortiAnalyzer Monitoring & Log Correlation",
            "SafeOps Endpoint Health Review",
        ],
    },

    {
        title: "Banking Branch Security Hardening",
        tag: "COMPLIANCE",
        accent: "amber",
        metricLabel: "AUDIT READINESS",
        metric: "Baseline Enforced",
        image: "/assets/images/branch-hardening.png",

        desc: "Standardized security baselines across distributed banking branches through Group Policy enforcement, compliance-driven hardening, audit readiness controls, and remediation tracking.",

        summary:
            "This case study focused on improving branch security posture across a distributed banking environment by enforcing consistent endpoint baselines, reducing configuration drift, and strengthening audit readiness. Group Policy, secure configuration standards, and operational validation were used to bring branch systems under centralized governance.",

        context:
            "Branch environments operated with inconsistent configurations across endpoints, creating audit gaps, policy drift, outdated settings, and increased security exposure. Internal audit requirements and enterprise ICT governance called for stronger baseline control with measurable enforcement.",

        objective:
            "Establish a centrally managed security baseline across branch endpoints, align controls with banking ICT governance requirements, and maintain audit-ready visibility through policy enforcement and remediation workflows.",

        methodology: [
            "Audited branch endpoint configurations against internal standards and regulatory expectations",
            "Identified policy drift across branches, departments, and workstation groups",
            "Designed hardened baseline configurations for users, devices, and operating systems",
            "Created and updated Group Policy Objects for password policy, account lockout, firewall, USB restrictions, update controls, and user restrictions",
            "Applied OU-based GPO linking to align branch systems with organizational structure",
            "Validated enforcement through endpoint checks, gpresult / RSoP review, and operational audits",
            "Tracked exceptions and remediation items until closure",
        ],

        pipeline: [
            {
                title: "Security baseline assessment",
                desc: "Reviewed endpoint posture across branches to identify missing controls, outdated settings, and configuration inconsistencies.",
            },
            {
                title: "Control mapping",
                desc: "Mapped required controls from enterprise ICT policy, banking governance requirements, and security best practice into enforceable endpoint configurations.",
            },
            {
                title: "GPO engineering",
                desc: "Created structured Group Policy Objects for password complexity, screen lock, firewall state, Windows updates, software restrictions, device control, and user hardening settings.",
            },
            {
                title: "Branch deployment",
                desc: "Linked policies to Organizational Units based on branch hierarchy, system roles, and user groups for scalable enforcement.",
            },
            {
                title: "Validation and evidence collection",
                desc: "Validated applied settings through endpoint checks, gpresult / RSoP, screenshots, and audit evidence packs.",
            },
            {
                title: "Continuous improvement",
                desc: "Updated policies over time to address audit findings, emerging risks, and operational feedback.",
            },
        ],

        evidence: [
            "Group Policy configuration snapshots",
            "Audit compliance reports for branch endpoints",
            "gpresult / RSoP enforcement validation outputs",
            "Before-and-after configuration comparisons",
            "Exception tracking and remediation records",
        ],

        visualization: [
            "Branch compliance status dashboards",
            "Policy coverage tracking across endpoints",
            "Audit readiness indicators",
            "Remediation closure trends",
            "Security baseline maturity progress",
        ],

        outcomes: [
            "Achieved consistent baseline security across distributed branches",
            "Reduced configuration drift through centralized enforcement",
            "Improved audit readiness with verifiable evidence and reporting",
            "Raised endpoint security posture aligned with enterprise expectations",
            "Reduced manual branch-by-branch hardening effort",
        ],

        metrics: [
            "Baseline enforcement completed across reviewed branches",
            "Significant reduction in policy violations",
            "Improved visibility into endpoint security posture",
            "Centralized baseline coverage across branch infrastructure",
        ],

        scope: "125+ Branches",
        focus: "GPO Hardening & Compliance Enforcement",
        status: "Completed",

        bullets: [
            "Group Policy-based baseline enforcement across branch endpoints",
            "Created and updated GPOs for password, firewall, update, and user security controls",
            "Automated audit reporting and remediation tracking",
            "Reduced configuration drift through centralized governance",
            "Aligned branch environments with regulatory and operational requirements",
        ],

        tags: [
            "Group Policy",
            "Windows Security",
            "Compliance",
            "Audit Readiness",
            "Endpoint Hardening",
            "Branch Operations",
            "Enterprise Governance",
        ],

        relatedProjects: [
            "Active Directory Migration & Automation",
            "Wazuh SIEM Tuning & CIS Benchmark Hardening",
            "PC Inventory & Risk Analysis Platform",
        ],

        specificChallenge:
            "One major challenge was balancing strict security controls with branch usability. Policies were phased, tested, and adjusted so controls improved compliance without interrupting teller, operations, or day-to-day branch workflows.",
    },

    {
        title: "AppSec Code Review",
        tag: "APPSEC",
        accent: "sky",
        metricLabel: "CRITICAL FIXES",
        metric: "Issues Resolved",
        images: ["/assets/images/appsec-review.png"],
        desc: "Identified and remediated application security issues through manual and AI-assisted code review.",

        summary:
            "This case study focused on source code review for common security weaknesses and logic-based flaws. Manual analysis and AI-assisted checks were used to identify risky patterns, validate findings, and support secure development improvements before release.",

        context:
            "Applications needed practical review support to identify insecure patterns, weak validation, and logic problems before deployment.",

        objective:
            "Detect and resolve application security issues through structured code review and secure development feedback.",

        methodology: [
            "OWASP Top 10 and logic flaw identification",
            "Manual and AI-assisted analysis techniques",
            "Review of input handling, auth logic, and output handling where applicable",
            "Secure development feedback and remediation validation",
        ],

        pipeline: [
            {
                title: "Code inspection",
                desc: "Reviewed application code paths for security weaknesses, validation issues, and logic flaws.",
            },
            {
                title: "Issue validation",
                desc: "Confirmed exploitability where possible and prioritized vulnerabilities for remediation.",
            },
            {
                title: "Secure feedback",
                desc: "Provided code-level recommendations to improve secure development practices.",
            },
            {
                title: "Retest",
                desc: "Re-checked fixes and validated that issues were resolved correctly.",
            },
        ],

        evidence: [
            "Code review screenshots",
            "Issue notes and findings",
            "Remediation validation views",
            "OWASP-aligned review outputs",
        ],

        visualization: [
            "Security finding breakdowns",
            "Issue severity panels",
            "Code flow review screens",
            "Validation checklists",
        ],

        outcomes: [
            "Resolved application security issues identified during review",
            "Improved secure coding awareness",
            "Reduced vulnerability exposure before release",
            "Supported stronger development practices",
        ],

        metrics: [
            "Security issues identified and remediated",
            "OWASP-aligned review",
            "Manual and AI-assisted analysis",
        ],

        scope: "Application Security",
        focus: "Code Review & Remediation",
        status: "Completed",

        bullets: [
            "OWASP Top 10 and logic flaw identification",
            "Manual and AI-assisted analysis techniques",
            "Improved secure development practices",
        ],

        tags: [
            "AppSec",
            "OWASP",
            "Code Review",
            "Secure Development",
            "AI-Assisted",
        ],

        relatedProjects: [
            "Security & Infrastructure Automation",
            "PC Inventory Deep Scan & Audit Reporting",
            "Vulnerability Assessment",
        ],
    },

    {
        title: "Network Security Audit",
        tag: "NETWORK",
        accent: "slate",
        metricLabel: "POLICY REVIEW",
        metric: "Findings Identified",
        images: ["/assets/images/network-audit.png"],
        desc: "Performed firewall, segmentation, and traffic review across enterprise environments and hardened configurations based on findings.",

        summary:
            "This case study focused on network security review across firewall policy, segmentation, and IDS/IPS behavior. The goal was to improve perimeter posture and identify policy issues that could weaken enforcement or visibility.",

        context:
            "Enterprise network environments needed structured review of firewall rules, segmentation design, and intrusion detection settings.",

        objective:
            "Identify policy gaps, improve segmentation, and harden the network security posture based on audit findings.",

        methodology: [
            "Firewall rule review and optimization",
            "Segmentation strategy improvements",
            "IDS/IPS tuning for real-world traffic",
        ],

        pipeline: [
            {
                title: "Firewall review",
                desc: "Inspected rule sets and control points to identify policy weaknesses.",
            },
            {
                title: "Segmentation analysis",
                desc: "Reviewed network segmentation strategy to improve separation and access control.",
            },
            {
                title: "Detection tuning",
                desc: "Adjusted IDS/IPS settings to better fit real-world traffic patterns.",
            },
            {
                title: "Hardening follow-up",
                desc: "Applied configuration improvements based on audit findings.",
            },
        ],

        evidence: [
            "Firewall audit screenshots",
            "Segmentation review outputs",
            "IDS/IPS tuning views",
            "Network policy issue records",
        ],

        visualization: [
            "Policy review dashboards",
            "Segmentation flow diagrams",
            "Traffic tuning views",
            "Firewall hardening panels",
        ],

        outcomes: [
            "Improved firewall rule quality",
            "Strengthened segmentation posture",
            "Better IDS/IPS tuning for operational traffic",
            "Reduced policy issues across review areas",
        ],

        metrics: [
            "Policy issues identified and reviewed",
            "Segmentation improvements applied",
            "IDS/IPS tuning completed",
        ],

        scope: "Network Security",
        focus: "Audit and Hardening",
        status: "Completed",

        bullets: [
            "Firewall rule review and optimization",
            "Segmentation strategy improvements",
            "IDS/IPS tuning for real-world traffic",
        ],

        tags: [
            "Network",
            "Firewall",
            "Segmentation",
            "IDS/IPS",
            "Audit",
        ],

        relatedProjects: [
            "FortiGate Policy, Interface & Traffic Review",
            "FortiAnalyzer Monitoring & Log Correlation",
            "Banking Branch Security Hardening",
        ],
    },

    {
        title: "Vulnerability Assessment",
        tag: "PENTEST",
        accent: "red",
        metricLabel: "RISK REDUCTION",
        metric: "Critical → Controlled",
        images: ["/assets/images/vapt.png"],
        desc: "Conducted banking-sector vulnerability assessment and penetration testing across network devices and security platforms, with structured validation, risk scoring, and remediation planning.",

        summary:
            "This case study covered controlled vulnerability assessment and penetration testing for SBAC Bank infrastructure, including internal and external network-facing assets. The engagement validated exploitable weaknesses, prioritized findings by business impact, and supported structured remediation and retesting to move critical exposure into a controlled state.",

        context:
            "Branch and perimeter systems required a structured security review so externally exposed services, authentication controls, transport protections, and legacy protocols could be validated, ranked, and remediated in a controlled way.",

        objective:
            "Assess security weaknesses across network devices and related services, validate exposure through safe testing, and support structured remediation planning, verification, and risk reduction.",

        methodology: [
            "Black-box and white-box testing approaches",
            "Reconnaissance, service enumeration, and exposure review using manual and automated tools",
            "Exploit validation and CVSS-based risk scoring",
            "Controlled testing of authentication, rate limiting, transport security, and file handling weaknesses",
            "Remediation tracking and retest verification",
        ],

        pipeline: [
            {
                title: "Discovery",
                desc: "Identified exposed services, public entry points, and potentially vulnerable network and application components for review.",
            },
            {
                title: "Enumeration and validation",
                desc: "Profiled accessible services, checked for weak controls, and confirmed exploitable exposure where appropriate using controlled testing.",
            },
            {
                title: "Risk analysis",
                desc: "Ranked findings such as no rate limit, SSH brute force exposure, HTTP verb tampering, Slowloris, FTP exposure, and LFI by severity and impact.",
            },
            {
                title: "Remediation planning",
                desc: "Grouped issues into priority levels and mapped them to practical fixes such as rate limiting, stronger authentication, protocol hardening, and input validation.",
            },
            {
                title: "Retest",
                desc: "Verified remediation efforts and confirmed that the original exposure was reduced or controlled.",
            },
        ],

        evidence: [
            "Assessment screenshots",
            "Exploit validation notes",
            "Risk scoring outputs",
            "Remediation tracking views",
            "Retest verification results",
        ],

        visualization: [
            "Risk reduction progress",
            "Finding severity panels",
            "Retest verification views",
            "VAPT workflow diagrams",
            "Exploitability and control status views",
        ],

        outcomes: [
            "Critical risk controlled",
            "Improved understanding of exploitable exposure",
            "Structured remediation and verification process",
            "Clearer prioritization of security issues",
            "Better visibility into perimeter and device security posture",
        ],

        metrics: [
            "Critical → Controlled",
            "Exploit validation completed",
            "Remediation verification supported",
        ],

        scope: "Vulnerability Assessment / Pentest",
        focus: "Risk Validation",
        status: "Completed",

        bullets: [
            "Black-box and white-box testing approaches",
            "Exploit validation and risk scoring",
            "Remediation tracking and verification",
            "Assessment of rate limiting, SSH exposure, transport security, and legacy service risk",
        ],

        tags: [
            "VAPT",
            "Pentest",
            "Risk Scoring",
            "Exploit Validation",
            "Remediation",
            "Network Security",
            "Banking",
        ],

        relatedProjects: [
            "AppSec Code Review",
            "Network Security Audit",
            "PC Inventory Deep Scan & Audit Reporting",
        ],

        specificChallenge:
            "A key challenge was separating true exploitability from exposed-but-not-immediately-critical findings. I focused on validating only what was safe and relevant in scope, then translating each weakness into practical remediation that reduced business risk without disrupting operations.",
    }
];