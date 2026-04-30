import {
  Network,
  BarChart3,
  Video,
  Code2,
  Server,
  Box,
} from "lucide-react";

export const projects = [
    {
        title: "PC Inventory & Risk Analysis Platform",
        subtitle: "Asset Discovery, Endpoint Inspection, and Audit Reporting",
        desc: "A two-stage PowerShell and React platform that discovers enterprise endpoints, enriches asset data, scores risk, maps findings to remediation guidance, and generates audit-ready reports for branch and enterprise environments.",
        objective:
        "Discover, identify, assess, analyze, score, and guide remediation for enterprise endpoints across branches using a repeatable inventory and risk workflow.",
        type: "Security Platform",
        risk: "High",
        coverage: "Enterprise Networks",
        status: "Operational",
        tags: ["C#", "PowerShell", "React", "MITRE ATT&CK"],
        accent: "cyan",
        icon: Network,
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
        summary:
        "Built to map entire networks, inspect endpoints deeply, calculate posture-based risk, and export branch-specific or enterprise-wide reports with LAN diagrams.",
        pipeline: [
        {
            title: "Bulk network discovery",
            desc: "A PowerShell WMI scanner uses thread-pool parallel processing across an IP range to collect hostname, OS version, antivirus status, and domain posture for broad asset discovery.",
        },
        {
            title: "Deep branch inspection",
            desc: "A second PowerShell script scans a selected branch in detail and captures a wide endpoint posture dataset covering hardware, security, services, encryption, exposure, and local administration status.",
        },
        {
            title: "Timestamped Excel export",
            desc: "Both scan modes generate structured Excel output with proper file naming and timestamps so results can be imported into the React UI and tracked over time.",
        },
        {
            title: "Branch mapping and visualization",
            desc: "The UI maps hosts to branches for easier identification and visualizes the inventory through charts, progress bars, and detailed device views.",
        },
        {
            title: "Risk scoring and MITRE mapping",
            desc: "The UI risk engine calculates device exposure using patch age, OS level, AV posture, domain status, remote access state, encryption, firmware protections, and other security signals, then aligns findings to MITRE-style reasoning.",
        },
        {
            title: "Audit reporting and remediation",
            desc: "Results are printable for audits, include LAN diagram support, and provide remediation guidance for migration, hardening, and operational cleanup.",
        },
        ],
        discovery: {
        script: "PowerShell WMI bulk discovery script",
        method:
            "Thread-pool parallel processing across an IP range to collect host inventory, OS version, AV status, and domain posture.",
        outputs: [
            "Hostname and IP discovery",
            "OS version and old OS detection",
            "Domain migration candidates",
            "AV installation gap detection",
        ],
        },
        deepScan: {
        script: "Branch-level PowerShell deep inspection script",
        columns: [
            "IP","Hostname","DomainStatus","OSVersion","OSBuild","Architecture","LastBootTime","CPU","TotalRAM_GB","RAM_Modules","RAM_ModuleCount",
            "Disk_Types","Disk_Details","Disk_C_GB","Disk_C_Free_GB","HotfixCount","LatestHotfix","PatchAge_Days","AV_Details","LoggedOnUser",
            "LoggedOnUser_PasswordAge_Days","LocalAdmins","Manufacturer","Model","BitLocker_Status","TPM_Present","TPM_SpecVersion","SecureBoot",
            "Firewall_DomainEnabled","Firewall_PrivateEnabled","Firewall_PublicEnabled","SMB1_Enabled","RDP_Enabled","RDP_NLA","RemoteDiag",
            "OpenPorts","ServicesList","Autoruns","SecurityEvents","Disk_Encryption_Details","FirmwareSecureBootPolicy","ExploitMitigations","ScanType","Timestamp","Status",
        ],
        outputs: [
            "Deep endpoint posture capture",
            "Branch-level security visibility",
            "Detailed audit evidence export",
        ],
        },
        riskEngine: {
        inputs: [
            "Patch age",
            "OS version",
            "AV posture",
            "Domain status",
            "Firewall state",
            "RDP exposure",
            "SMB exposure",
            "BitLocker",
            "TPM",
            "Secure Boot",
            "Open ports",
            "Services",
            "Autoruns",
        ],
        mapping: [
            "Map weak posture to MITRE-style risk reasoning",
            "Prioritize endpoints with outdated OS or missing AV",
            "Flag weak hardening and remote access exposure",
        ],
        remediation: [
            "Migrate non-domain devices",
            "Install or repair endpoint protection",
            "Patch unsupported or outdated systems",
            "Enable BitLocker, TPM, and Secure Boot where possible",
            "Harden firewall, RDP, SMB, and service exposure",
        ],
        },
        visualization: [
            "Branch mapping",
            "Bar charts for migration status",
            "Pie charts for OS and risk distribution",
            "Progress bars for audit readiness",
        ],
        auditUse: [
            "Printable audit reports",
            "Branch-wise inventory evidence",
            "LAN diagram support",
            "Migration planning and remediation tracking",
        ],
        relatedProjects: [
            "Legacy Windows 7 upgrade work used this platform to identify unsupported systems.",
            "Automation and audit workflows were built on top of the same inventory and risk data.",
        ],
        highlights: [
            "Two scan modes: full network discovery and deep endpoint inspection",
            "Risk scoring based on patch status, OS version, antivirus posture, services, memory, hardware, and domain membership",
            "PDF export for branch-level and full-environment audit reporting",
            "LAN diagram support for visual review and documentation",
            "Frontend surfaces OS type, device posture, and branch-level mapping",
        ],
        stack: ["PowerShell", "React", "PDF Export", "Diagram Export", "MITRE Mapping"],
        impact: [
            "Improved asset visibility across distributed environments",
            "Standardized endpoint posture analysis for audit use",
            "Reduced manual inventory and reporting workload",
            "Enabled migration planning, hardening review, and remediation tracking from one workflow",
        ],
   },

   {
        title: "Attendance Sync Reliability Pipeline",
        subtitle: "Attendance Scheduler and Consistency Engine",
        desc: "A ZKTeco attendance collection pipeline with scheduled polling, duplicate prevention, and reliable synchronization into the HR application.",
        objective:
            "Collect attendance data reliably from distributed ZKTeco devices, prevent duplicates, and forward clean records into the HR platform with better operational consistency.",
        type: "Automation Pipeline",
        risk: "Medium",
        coverage: "Attendance Systems",
        status: "Operational",
        tags: ["Flask", "Python", "ThreadPool", "MySQL"],
        accent: "violet",
        icon: BarChart3,
        images: [
            "/assets/images/Projects/Att-System/Att-1.png",
            "/assets/images/Projects/Att-System/Att-2.png",
            "/assets/images/Projects/Att-System/Att-3.png",
            "/assets/images/Projects/Att-System/Att-4.png",
            "/assets/images/Projects/Att-System/Att-5.png",
            "/assets/images/Projects/Att-System/Att-6.png",
            "/assets/images/Projects/Att-System/Att-7.png",
            "/assets/images/Projects/Att-System/Att-8.png",
        ],
        summary:
            "Designed for reliable attendance collection, consistency control, and clean forwarding of validated records to the HR platform.",
        pipeline: [
            {
                title: "Scheduled polling",
                desc: "Collects data from ZKTeco devices on a schedule so attendance records are gathered continuously and predictably.",
            },
            {
                title: "Parallel device scanning",
                desc: "Uses thread-pool based execution to query multiple devices efficiently across branches and reduce collection time.",
            },
            {
                title: "Consistency control",
                desc: "Applies atomic locks and duplicate checks to prevent repeated entries and protect record integrity.",
            },
            {
                title: "Local staging",
                desc: "Stores validated data locally before sync so records remain available even if the downstream HR system is temporarily unavailable.",
            },
            {
            title: "HR synchronization",
            desc: "Forwards clean, validated records into the HR application after checks are complete.",
            },
        ],
        highlights: [
            "Scheduled polling from ZKTeco devices",
            "Thread pool based parallel scanning for speed and scale",
            "Atomic locks and duplicate checks for consistency",
            "Stored local copies before HR synchronization",
            "Frontend tracks uptime, reachability, and previous data states",
        ],
        visualization: [
            "Device uptime view",
            "Branch reachability status",
            "Historical sync state tracking",
            "Operational monitoring dashboard",
        ],
        auditUse: [
            "Helps validate attendance sync reliability during audits",
            "Supports branch operational checks and troubleshooting",
            "Provides evidence of consistent data handling",
        ],
        stack: ["Python", "Flask", "MySQL", "ThreadPoolExecutor", "Atomic Locks"],
        impact: [
            "Reduced data inconsistency during sync",
            "Improved reliability of attendance collection",
            "Increased operational visibility across branches",
        ],
        relatedProjects: [
            "Part of the broader automation ecosystem used for branch operations and data reliability.",
        ],
    },

    {
        title: "DVR Fleet Administration",
        subtitle: "Time Sync, Bulk Control, and Configuration Automation",
        desc: "A full-stack DVR fleet management system combining React-based control dashboard, Python orchestration backend, and PowerShell execution layer for managing mixed Hikvision firmware environments.",

        objective:
            "Centralize DVR fleet operations so time drift, password management, and configuration updates can be handled consistently across distributed banking branches with heterogeneous firmware behavior.",

        type: "Device Management",
        risk: "Medium",
        coverage: "CCTV / DVR Fleet",
        status: "Operational",

        tags: [
            "React Frontend",
            "Python Backend",
            "PowerShell",
            "Hikvision API",
            "NTP",
            "Automation",
            "JSON Orchestration"
        ],

        accent: "green",
        icon: Video,

        images: [
            "/assets/images/Projects/DVR-System/DVR-1.png",
            "/assets/images/Projects/DVR-System/DVR-2.png",
        ],

        summary:
            "Built a full-stack DVR control platform featuring a React-based operational dashboard, Python orchestration backend, and PowerShell execution engine. The system handles mixed Hikvision firmware inconsistencies through adaptive authentication logic, fallback admin identity resolution, and structured JSON-based device reporting.",

        pipeline: [
            {
                title: "React control dashboard",
                desc: "Frontend interface for monitoring DVR fleet health, executing bulk operations, and visualizing device status in real time.",
            },
            {
                title: "Device time validation",
                desc: "Checks DVR clock accuracy and detects drift affecting logs and forensic traceability.",
            },
            {
                title: "Firmware-aware NTP enforcement",
                desc: "Applies time synchronization logic adapted to different Hikvision firmware behaviors.",
            },
            {
                title: "Bulk password automation engine",
                desc: "Executes PowerShell-based password updates with fallback admin identity handling across heterogeneous devices.",
            },
            {
                title: "Python orchestration layer",
                desc: "Coordinates execution, handles retries, aggregates responses, and returns structured JSON status per device.",
            },
            {
                title: "System health monitoring",
                desc: "Collects DVR memory usage and storage availability metrics for operational visibility.",
            },
        ],

        highlights: [
            "Full-stack DVR management system (React + Python + PowerShell)",
            "Mixed firmware handling with adaptive authentication logic",
            "Fallback admin identity resolution for Hikvision device variations",
            "Structured JSON-based execution and reporting pipeline",
            "Device storage and memory monitoring integrated into control dashboard",
        ],

        visualization: [
            "Fleet health dashboard (React UI)",
            "Device status & uptime panels",
            "Time sync drift monitoring",
            "Configuration execution logs",
        ],

        auditUse: [
            "Supports CCTV operational audit checks across branches",
            "Provides centralized visibility for device configuration control",
            "Documents controlled administrative actions for compliance review",
        ],

        stack: [
            "React",
            "Python Backend",
            "PowerShell",
            "Hikvision API",
            "NTP",
            "Automation",
        ],

        impact: [
            "Reduced manual DVR administration across branches",
            "Improved reliability across mixed firmware Hikvision deployments",
            "Enabled scalable bulk device management through a unified control plane",
        ],

        relatedProjects: [
            "Supports enterprise branch infrastructure automation and security operations workflows.",
        ],
    },

    {
        title: "SafeOps Endpoint Health Review",
        subtitle: "PC Health and Status Checks",
        desc: "An operational utility for checking endpoint health, configuration state, and readiness across distributed branches.",
        objective:
            "Provide a quick way to inspect branch endpoint health, surface readiness issues, and guide remediation during support or audit activities.",
        type: "Health Monitoring",
        risk: "Low",
        coverage: "Branch Endpoints",
        status: "Operational",
        tags: ["Python", "Health Checks", "Operations", "Support"],
        accent: "blue",
        icon: Code2,
        images: [
            "/assets/images/Projects/SafeOps/Safe-1.png",
            "/assets/images/Projects/SafeOps/Safe-2.png",
            "/assets/images/Projects/SafeOps/Safe-3.png",
            "/assets/images/Projects/SafeOps/Safe-4.png",
            "/assets/images/Projects/SafeOps/Safe-5.png",
        ],
        summary:
            "Provides branch-wise scanning, health status display, remediation guidance, and SOP-aligned validation for endpoints.",
        pipeline: [
            {
                title: "Branch-wise scanning",
                desc: "Checks endpoint status across distributed branches so operational teams can quickly identify unhealthy systems.",
            },
            {
                title: "Health validation",
                desc: "Verifies readiness signals and highlights systems that need attention or remediation.",
            },
            {
                title: "Remediation guidance",
                desc: "Surfaces SOP-aligned next steps so support teams can act consistently.",
            },
            {
                title: "Operational review",
                desc: "Lets teams use the results for readiness checks, support validation, and audit preparation.",
            },
        ],
        highlights: [
            "Branch-wise scanning for distributed infrastructure visibility",
            "Real-time endpoint health status display",
            "Remediation guidance aligned with SOP",
            "Useful for audits, readiness checks, and support validation",
        ],
        visualization: [
            "Branch health cards",
            "Status indicators",
            "Readiness progress views",
            "Operational validation summary",
        ],
        auditUse: [
            "Supports endpoint health evidence for branch audits",
            "Helps document readiness and remediation status",
            "Useful for periodic operational validation",
        ],
        stack: ["Python", "Monitoring", "Health Checks", "Operational Support"],
        impact: [
            "Improved endpoint readiness checks",
            "Helped operational support teams validate status quickly",
            "Added visibility for audit and remediation workflows",
        ],
        relatedProjects: [
            "Complements the inventory and migration workflow by validating endpoint readiness after changes.",
        ],
    },

    {
        title: "Active Directory Migration & Automation",
        subtitle: "Domain Migration Framework",
        desc: "A large-scale Active Directory migration framework with automated post-deployment setup and branch-wide workstation handling.",
        objective:
            "Migrate branch endpoints from workgroup to domain while automating post-migration setup, reducing manual effort, and standardizing workstation configuration at scale.",
        type: "Migration",
        risk: "High",
        coverage: "125+ Branches",
        status: "Operational",
        tags: ["PowerShell", "AD", "Automation", "Enterprise"],
        accent: "indigo",
        icon: Server,
        images: [
            "/assets/images/Case Studies/AD/AD-1.png",
            "/assets/images/Case Studies/AD/AD-2.png",
            "/assets/images/Case Studies/AD/AD-3.png",
            "/assets/images/Case Studies/AD/AD-4.png",
            "/assets/images/Case Studies/AD/AD-5.png",
        ],
        summary:
            "Migrated workgroup systems into domain-managed environments and automated post-installation setup across 125+ branches.",
        pipeline: [
            {
                title: "Pre-migration preparation",
                desc: "Prepared endpoints for migration by aligning configuration and identifying workgroup systems that needed domain onboarding.",
            },
            {
                title: "Domain migration",
                desc: "Moved endpoints from workgroup to domain-managed identity across a large branch footprint.",
            },
            {
                title: "Post-domain automation",
                desc: "Applied reusable PowerShell scripts for software installation, policy enforcement, and system setup after migration.",
            },
            {
                title: "User environment restoration",
                desc: "Restored desktops, documents, and shortcuts so users could resume work with minimal disruption.",
            },
        ],
        highlights: [
            "Migrated endpoints from workgroup to domain across 125+ branches",
            "Reusable PowerShell framework for post-domain configuration",
            "Automated software installation, licensing, and policy enforcement",
            "Restored user desktops, documents, and shortcuts after migration",
        ],
        visualization: [
            "Migration progress tracking",
            "Branch rollout status",
            "Post-domain setup completion",
            "Configuration consistency view",
        ],
        auditUse: [
            "Useful for documenting domain migration progress",
            "Supports branch rollout evidence and post-change validation",
            "Helps demonstrate standardized endpoint management",
        ],
        stack: ["PowerShell", "Active Directory", "GPO", "Deployment Automation"],
        impact: [
            "Standardized workstation configuration at scale",
            "Reduced migration downtime and manual setup effort",
            "Improved consistency across branches",
        ],
        relatedProjects: [
            "This migration work is closely connected to the PC Inventory & Risk Analysis Platform, which helped identify and validate migration candidates.",
        ],
    },

    {
        title: "Legacy System Upgrade & Hardware Optimization",
        subtitle: "System Modernization Strategy",
        desc: "A remediation strategy for legacy Windows 7 environments using hardware upgrades where possible and Linux fallback options where upgrades were not feasible.",
        objective:
            "Reduce unsupported OS exposure by identifying legacy systems, upgrading hardware where possible, and applying secure fallback options where constraints existed.",
        type: "Modernization Program",
        risk: "High",
        coverage: "Legacy Branch Systems",
        status: "Operational",
        tags: ["Windows", "Linux", "Hardware", "Operations"],
        accent: "orange",
        icon: Box,
        images: ["/assets/images/legacy-upgrade.png"],
        summary:
            "Improved security posture by identifying outdated systems, replacing unsupported hardware where possible, and using Linux alternatives where needed.",
        pipeline: [
            {
                title: "Legacy system identification",
                desc: "Detected Windows 7 and other outdated systems across branches that needed remediation.",
            },
            {
                title: "Hardware evaluation",
                desc: "Assessed whether devices could be upgraded to run supported operating systems reliably.",
            },
            {
                title: "Fallback modernization",
                desc: "Used Linux alternatives for constrained systems where full upgrades were not practical.",
            },
            {
                title: "Security posture improvement",
                desc: "Removed unsupported OS exposure and improved the reliability of branch endpoints.",
            },
        ],
        highlights: [
            "Identified and audited legacy Windows 7 systems across branches",
            "Performed hardware upgrades to support modern operating systems",
            "Deployed Linux alternatives for constrained devices",
            "Improved security by removing unsupported OS usage",
        ],
        visualization: [
            "Legacy system reduction charts",
            "Upgrade readiness view",
            "Hardware replacement tracking",
            "Branch remediation progress",
        ],
        auditUse: [
            "Provides evidence for legacy OS remediation",
            "Useful for compliance and audit reporting",
            "Supports modernization planning and control tracking",
        ],
        stack: ["Windows 7", "Linux", "Hardware Refresh", "Asset Remediation"],
        impact: [
            "Reduced legacy OS exposure",
            "Extended usable hardware lifecycle",
            "Balanced security, cost, and operational continuity",
        ],
        relatedProjects: [
            "This modernization work used the inventory and risk platform to identify outdated systems and validate remediation progress.",
        ],
    },
];