import { useState } from "react";
import { BLOG_POSTS, EXPERIENCE, LANGUAGES, ME, PROJECTS, SKILL_BADGES, TOOLS, type BlogPost, type Entry, type MenuItem, type SectionKey } from "../data";
import { PixelSprite } from "./PixelSprite";
import { daysToGrad } from "../util";

function EntryList({ items }: { items: Entry[] }) {
  return (
    <div className="entries">
      {items.map((e) => (
        <article className="entry" key={e.name}>
          <header>
            <h3>{e.name}</h3>
            {e.when && <span className={e.when === "NEXT" ? "when next" : "when"}>{e.when === "NEXT" ? "▶ NEXT" : e.when}</span>}
          </header>
          {e.role && <p className="role">{e.role}</p>}
          {e.tags && <p className="tags">{e.tags.map((t) => <span key={t}>{t}</span>)}</p>}
          {e.points.length > 0 && <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
        </article>
      ))}
    </div>
  );
}

function Profile() {
  return (
    <div>
      <div className="idcard">
        <PixelSprite name="face" scale={6} className="avatar" title="Pixel portrait of Aryan" />
        <dl>
          <dt>Name</dt><dd>{ME.short}</dd>
          <dt>School</dt><dd>{ME.school}</dd>
          <dt>Degree</dt><dd>{ME.degree}</dd>
          <dt>Grad</dt><dd>{ME.grad}</dd>
          <dt>T-minus</dt><dd>{daysToGrad()} days</dd>
          <dt>Class</dt><dd>{ME.focus}</dd>
        </dl>
      </div>
      <h4>Honours</h4>
      <ul>{ME.honours.map((h) => <li key={h}>{h}</li>)}</ul>
      <h4>Courses cleared</h4>
      <p className="dim">{ME.courses.join(" · ")}</p>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <div className="badges">
        {SKILL_BADGES.map((b) => (
          <div className="badge" key={b.label}><PixelSprite name={b.icon} scale={3} />{b.label}</div>
        ))}
      </div>
      <h4>Languages</h4>
      <p>{LANGUAGES.join(" · ")}</p>
      <h4>Tools</h4>
      <p className="dim">{TOOLS.join(" · ")}</p>
    </div>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(ME.email); setCopied(true); }
    catch { const r = document.createRange(); const el = document.getElementById("email"); if (el) { r.selectNodeContents(el); getSelection()?.removeAllRanges(); getSelection()?.addRange(r); } }
  };
  return (
    <div className="contact">
      {ME.links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
      ))}
      <div className="email"><span id="email">{ME.email}</span><button type="button" onClick={copy}>{copied ? "Copied" : "Copy"}</button></div>
    </div>
  );
}

function Blog() {
  return (
    <div className="blog">
      {BLOG_POSTS.map((post: BlogPost) => (
        <article className="blog-post" key={post.title}>
          <h3>{post.title}</h3>
          <p className="blog-summary">{post.summary}</p>
          {post.sections.map((section, idx) => (
            <section key={`${post.title}-${idx}`} className="blog-section">
              {section.heading && <h4>{section.heading}</h4>}
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </article>
      ))}
    </div>
  );
}

export function Home({ item }: { item: MenuItem }) {
  return (
    <div className="idcard home">
      <PixelSprite name="face" scale={6} className="avatar" title="Pixel portrait of Aryan" />
      <div>
        <h4>Main menu</h4>
        <p className="big">{item.label}</p>
        <p className="dim">{item.hint}</p>
      </div>
    </div>
  );
}

export const PANELS: Record<SectionKey, () => JSX.Element> = {
  id: Profile,
  log: () => <EntryList items={EXPERIENCE} />,
  party: () => <EntryList items={PROJECTS} />,
  badges: Skills,
  guilds: Blog,
  link: Contact,
};
