import React from "react";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../common/GlassCard";
import TagChip from "../common/TagChip";
import DividerLine from "../common/DividerLine";

const accentText = {
  cyan: "text-cyan-300",
  green: "text-emerald-300",
  violet: "text-violet-300",
  amber: "text-amber-300",
  blue: "text-sky-300",
  indigo: "text-indigo-300",
  orange: "text-orange-300",
  red: "text-red-300",
  slate: "text-slate-300",
};

const accentBorder = {
  cyan: "border-cyan-400/20",
  green: "border-emerald-400/20",
  violet: "border-violet-400/20",
  amber: "border-amber-400/20",
  blue: "border-sky-400/20",
  indigo: "border-indigo-400/20",
  orange: "border-orange-400/20",
  red: "border-red-400/20",
  slate: "border-slate-400/20",
};

const accentGlow = {
  cyan: "from-cyan-300/20",
  green: "from-emerald-300/20",
  violet: "from-violet-300/20",
  amber: "from-amber-300/20",
  blue: "from-sky-300/20",
  indigo: "from-indigo-300/20",
  orange: "from-orange-300/20",
  red: "from-red-300/20",
  slate: "from-slate-300/20",
};

function LogoBadge({ logo, alt }) {
  return (
    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-2">
      {logo ? (
        <img src={logo} alt={alt} className="h-full w-full object-contain" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xs text-slate-500">
          LOGO
        </div>
      )}
    </div>
  );
}

function BulletList({ items = [] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-slate-400">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="text-cyan-400">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StackRow({ stack = [], accent = "cyan" }) {
  if (!stack.length) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {stack.map((item) => (
        <TagChip key={item} tone={accent}>
          {item}
        </TagChip>
      ))}
    </div>
  );
}

function ExperienceCard({ item, index }) {
  const accent = item.accent || "cyan";

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div
          className={`h-4 w-4 rounded-full border border-${accent}-400/50 bg-${accent}-400/20`}
        />
        <div
          className={`w-px flex-1 bg-gradient-to-b ${accentGlow[accent] || accentGlow.cyan} to-transparent`}
          style={{ minHeight: index === 0 ? "140px" : "160px" }}
        />
      </div>

      <GlassCard className={`w-full border ${accentBorder[accent] || accentBorder.cyan} p-6`}>
        <div className="flex gap-4">
          <LogoBadge logo={item.logo} alt={item.company} />

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className={`text-sm ${accentText[accent] || accentText.cyan}`}>
                  {item.company}
                </p>
              </div>

              <div className="text-right">
                <p className="font-mono text-xs text-slate-500">{item.type}</p>
                <p className="font-mono text-xs text-slate-600">{item.period}</p>
              </div>
            </div>

            <p className="mt-2 text-sm text-slate-500">{item.location}</p>
            <BulletList items={item.bullets} />
            <StackRow stack={item.stack} accent={accent} />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function EducationCard({ item }) {
  const accent = item.accent || "violet";

  return (
    <GlassCard className={`p-6 border ${accentBorder[accent] || accentBorder.violet}`}>
      <div className="flex gap-4">
        <LogoBadge logo={item.logo} alt={item.school} />

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{item.school}</h3>
              <p className={`text-sm ${accentText[accent] || accentText.violet}`}>
                {item.degree}
              </p>
            </div>
            <p className="font-mono text-xs text-slate-600">{item.period}</p>
          </div>

          <p className="mt-2 text-sm text-slate-500">{item.location}</p>
          <BulletList items={item.bullets} />
        </div>
      </div>
    </GlassCard>
  );
}

function CertificationCard({ item }) {
  const accent = item.accent || "cyan";

  return (
    <GlassCard className={`p-5 border ${accentBorder[accent] || accentBorder.cyan}`}>
      <div className="flex items-start gap-4">
        <LogoBadge logo={item.logo} alt={item.name} />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold leading-snug text-white">
            {item.name}
          </h3>
          <p className={`mt-1 text-sm ${accentText[accent] || accentText.cyan}`}>
            {item.issuer}
          </p>
          <p className="mt-1 font-mono text-xs text-slate-600">{item.issued}</p>
          {item.credentialId ? (
            <p className="mt-1 font-mono text-xs text-slate-500">
              ID: {item.credentialId}
            </p>
          ) : null}
          {item.skills?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <TagChip key={skill} tone={accent}>
                  {skill}
                </TagChip>
              ))}
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

function PublicationCard({ item }) {
  const accent = item.accent || "red";

  return (
    <GlassCard className={`p-6 border ${accentBorder[accent] || accentBorder.red}`}>
      <div className="flex gap-4">
        <LogoBadge logo={item.logo} alt={item.publisher} />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold leading-snug text-white">
            {item.title}
          </h3>
          <p className={`mt-2 text-sm ${accentText[accent] || accentText.red}`}>
            {item.venue}
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-xs font-mono text-slate-500">
            <span>{item.publisher}</span>
            <span>{item.issued}</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

export default function ExperienceSection({
  skills = [],
  philosophy = [],
  experience = [],
  education = [],
  certifications = [],
  publications = [],
}) {
  return (
    <>
      <section className="px-6 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="mb-3 font-mono text-xs text-slate-600">
              // SUPPORTING_SKILLS
            </div>
            <h2 className="text-2xl font-bold text-slate-300">
              Also Proficient In
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tag-chip border border-white/10 text-slate-400 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <DividerLine />

      <section className="section-pad px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="// METHODOLOGY"
            title="Security Philosophy"
            desc="Core principles that guide threat analysis, vulnerability research, and security architecture decisions."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map(([title, desc], index) => (
              <div
                key={title}
                className="premium-card relative overflow-hidden rounded-xl p-6"
              >
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${
                    ["from-red-300", "from-cyan-300", "from-emerald-300", "from-amber-300"][index]
                  } to-transparent`}
                />
                <div className="mb-3 font-mono text-xs text-slate-600">
                  0{index + 1}
                </div>
                <h3 className="mb-3 font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DividerLine />

      <section className="section-pad px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="// EXPERIENCE"
            title="Professional Experience"
            desc="Banking security operations, network engineering, and software delivery across enterprise and client environments."
          />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <ExperienceCard
                key={`${item.company}-${item.title}-${item.period}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <DividerLine />

      <section className="section-pad px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="// EDUCATION"
            title="Academic Background"
            desc="Formal education that supports the engineering and cybersecurity work."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {education.map((item) => (
              <EducationCard key={`${item.school}-${item.degree}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <DividerLine />

      <section className="section-pad px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="// CERTIFICATIONS"
            title="Licenses & Certifications"
            desc="Professional credentials that reinforce networking, security, and troubleshooting capability."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((item) => (
              <CertificationCard key={`${item.name}-${item.issued}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <DividerLine />

      <section className="section-pad px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="// PUBLICATIONS"
            title="Research & Publication"
            desc="Research that shows analytical depth beyond operations and implementation."
          />
          <div className="grid grid-cols-1 gap-6">
            {publications.map((item) => (
              <PublicationCard key={`${item.title}-${item.issued}`} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}