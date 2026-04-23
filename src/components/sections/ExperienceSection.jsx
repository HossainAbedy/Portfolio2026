import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import GlassCard from "../common/GlassCard";
import TagChip from "../common/TagChip";
import DividerLine from "../common/DividerLine";
import Modal from "../common/Modal";

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

const accentDot = {
  cyan: "border-cyan-400/50 bg-cyan-400/20",
  green: "border-emerald-400/50 bg-emerald-400/20",
  violet: "border-violet-400/50 bg-violet-400/20",
  amber: "border-amber-400/50 bg-amber-400/20",
  blue: "border-sky-400/50 bg-sky-400/20",
  indigo: "border-indigo-400/50 bg-indigo-400/20",
  orange: "border-orange-400/50 bg-orange-400/20",
  red: "border-red-400/50 bg-red-400/20",
  slate: "border-slate-400/50 bg-slate-400/20",
};

const accentButton = {
  cyan: "border-cyan-300/30 text-cyan-300 hover:bg-cyan-300/10",
  green: "border-emerald-300/30 text-emerald-300 hover:bg-emerald-300/10",
  violet: "border-violet-300/30 text-violet-300 hover:bg-violet-300/10",
  amber: "border-amber-300/30 text-amber-300 hover:bg-amber-300/10",
  blue: "border-sky-300/30 text-sky-300 hover:bg-sky-300/10",
  indigo: "border-indigo-300/30 text-indigo-300 hover:bg-indigo-300/10",
  orange: "border-orange-300/30 text-orange-300 hover:bg-orange-300/10",
  red: "border-red-300/30 text-red-300 hover:bg-red-300/10",
  slate: "border-slate-300/30 text-slate-300 hover:bg-slate-300/10",
};

const accentStrip = {
  cyan: "from-cyan-300",
  green: "from-emerald-300",
  violet: "from-violet-300",
  amber: "from-amber-300",
  blue: "from-sky-300",
  indigo: "from-indigo-300",
  orange: "from-orange-300",
  red: "from-red-300",
  slate: "from-slate-300",
};

function LogoBadge({ logo, alt }) {
  return (
    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 flex items-center justify-center">
      {logo ? (
        <img
          src={logo}
          alt={alt}
          className="scale-110 object-contain"
        />
      ) : (
        <div className="text-xs text-slate-500">LOGO</div>
      )}
    </div>
  );
}

function StackRow({ stack = [], accent = "cyan" }) {
  if (!stack.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {stack.map((item) => (
        <TagChip key={item} tone={accent}>
          {item}
        </TagChip>
      ))}
    </div>
  );
}

function ExperienceCard({ item, index, onOpen }) {
  const accent = item.accent || "cyan";
  const summary =
    item.summary ||
    item.bullets?.[0] ||
    "Open the modal to view the full description.";

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div
          className={`h-4 w-4 rounded-full border ${accentDot[accent] || accentDot.cyan}`}
        />
        <div
          className={`w-px flex-1 bg-gradient-to-b ${accentGlow[accent] || accentGlow.cyan} to-transparent`}
          style={{ minHeight: index === 0 ? "120px" : "140px" }}
        />
      </div>

      <GlassCard
        className={`w-full border ${accentBorder[accent] || accentBorder.cyan} p-5 md:p-6`}
      >
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

            <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-400">
              {summary}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpen(item)}
                className={`rounded-lg border px-4 py-2 text-xs font-semibold transition ${accentButton[accent] || accentButton.cyan}`}
              >
                View details
              </button>

              <StackRow stack={item.stack} accent={accent} />
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function EducationCard({ item }) {
  const accent = item.accent || "violet";

  return (
    <GlassCard className={`border ${accentBorder[accent] || accentBorder.violet} p-6`}>
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

          {item.bullets?.length > 0 ? (
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
}

function CertificationCard({ item, onOpen }) {
  const accent = item.accent || "cyan";
  const hasPreview = Boolean(item.certificateImage || item.certificateLink);

  return (
    <GlassCard className={`border ${accentBorder[accent] || accentBorder.cyan} p-5`}>
      <div className="flex items-start gap-4">
        <LogoBadge logo={item.logo} alt={item.name} />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold leading-snug text-white">
                {item.name}
              </h3>
              <p className={`mt-1 text-sm ${accentText[accent] || accentText.cyan}`}>
                {item.issuer}
              </p>
            </div>

            <span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[10px] text-slate-500">
              CERT
            </span>
          </div>

          <div className="mt-1 flex flex-wrap gap-3 text-xs font-mono text-slate-600">
            <span>Issued: {item.issued}</span>
            {item.expires ? <span>Expires: {item.expires}</span> : null}
          </div>

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

          {hasPreview ? (
            <button
              type="button"
              onClick={() => onOpen(item)}
              className={`mt-4 rounded-lg border px-3 py-2 text-xs font-semibold transition ${accentButton[accent] || accentButton.cyan}`}
            >
              View Certificate
            </button>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
}

function PublicationCard({ item }) {
  const accent = item.accent || "red";

  return (
    <GlassCard
      className={`border ${accentBorder[accent] || accentBorder.red} p-6`}
    >
      <div className="flex gap-4">
        <LogoBadge logo={item.logo} alt={item.publisher} />

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold leading-snug text-white">
            {item.title}
          </h3>

          <p className={`mt-2 text-sm ${accentText[accent] || accentText.red}`}>
            {item.venue}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
            {item.publisher && <span>{item.publisher}</span>}
            {item.issued && <span>{item.issued}</span>}

            {item.doi && (
              <span className="text-slate-600">DOI: {item.doi}</span>
            )}
          </div>

          {item.link && (
            <div className="mt-4">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border border-red-300/30 px-4 py-2 text-xs font-semibold text-red-300 transition hover:bg-red-300/10"
              >
                View Publication →
              </a>
            </div>
          )}
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
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section className="px-6 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="mb-3 font-mono text-xs text-slate-600">
              SUPPORTING_SKILLS
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
                    accentStrip[
                      ["red", "cyan", "green", "amber"][index] || "cyan"
                    ] || "from-cyan-300"
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
                onOpen={setSelectedExperience}
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
              <CertificationCard
                key={`${item.name}-${item.issued}`}
                item={item}
                onOpen={setSelectedCert}
              />
            ))}
          </div>
        </div>
      </section>

      <DividerLine />

    <section className="section-pad px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="// RESEARCH"
          title="Publications & Research Work"
          desc="Peer-reviewed research and applied machine learning work demonstrating analytical depth, experimentation, and real-world problem solving."
        />

        <div className="mx-auto max-w-4xl space-y-6">
          {publications.map((item) => (
            <PublicationCard
              key={`${item.title}-${item.issued}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>

      <Modal isOpen={!!selectedExperience} onClose={() => setSelectedExperience(null)}>
        {selectedExperience ? (
          <div className="max-w-2xl">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-300/80">
                  EXPERIENCE DETAIL
                </p>
                <h3 className="text-2xl font-bold text-white">
                  {selectedExperience.title}
                </h3>
                <p className={`mt-1 text-sm ${accentText[selectedExperience.accent || "cyan"]}`}>
                  {selectedExperience.company}
                </p>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-3 text-xs font-mono text-slate-500">
              <span>{selectedExperience.type}</span>
              <span>{selectedExperience.period}</span>
              <span>{selectedExperience.location}</span>
            </div>

            {selectedExperience.description ? (
              <p className="mb-5 text-sm leading-6 text-slate-300">
                {selectedExperience.description}
              </p>
            ) : null}

            {selectedExperience.bullets?.length > 0 ? (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200">
                  Key responsibilities and achievements
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {selectedExperience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selectedExperience.stack?.length > 0 ? (
              <div className="mt-5">
                <h4 className="mb-3 text-sm font-semibold text-slate-200">Tools / Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.stack.map((skill) => (
                    <TagChip key={skill} tone={selectedExperience.accent || "cyan"}>
                      {skill}
                    </TagChip>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </Modal>

      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
        {selectedCert ? (
          <div className="max-w-3xl">
            <p className="mb-2 font-mono text-xs tracking-[0.3em] text-cyan-300/80">
              CERTIFICATE PROOF
            </p>

            <h3 className="text-2xl font-bold text-white">{selectedCert.name}</h3>
            <p className={`mt-1 text-sm ${accentText[selectedCert.accent || "cyan"]}`}>
              {selectedCert.issuer}
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-xs font-mono text-slate-500">
              <span>Issued: {selectedCert.issued}</span>
              {selectedCert.expires ? <span>Expires: {selectedCert.expires}</span> : null}
              {selectedCert.credentialId ? <span>ID: {selectedCert.credentialId}</span> : null}
            </div>

            {selectedCert.certificateImage ? (
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img
                  src={selectedCert.certificateImage}
                  alt={selectedCert.name}
                  className="h-auto w-full object-contain"
                />
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-400">
                No certificate image is attached for this item yet.
              </div>
            )}

            {selectedCert.certificateLink ? (
              <a
                href={selectedCert.certificateLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block rounded-lg border border-cyan-300/30 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-300/10"
              >
                Verify Credential
              </a>
            ) : null}
          </div>
        ) : null}
      </Modal>
    </>
  );
}