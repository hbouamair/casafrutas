import { SOCIAL } from "@/lib/site";

const PATHS: Record<string, string> = {
  Facebook:
    "M9 8H7v4h2v12h5V12h3.6l.4-4H14V6.3c0-1 .2-1.3 1.2-1.3H18V0h-3.8C10.6 0 9 1.6 9 4.6V8z",
  Instagram:
    "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8A3.2 3.2 0 0 0 19.2 16V8A3.2 3.2 0 0 0 16 4.8zM12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 1.8A3 3 0 1 0 15 12a3 3 0 0 0-3-3zm5.1-2.85a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05z",
  Pinterest:
    "M12 2C6.5 2 2 6.3 2 11.6c0 4 2.5 7.4 6.1 8.6-.1-.7-.2-1.8 0-2.6.2-.7 1.3-5.6 1.3-5.6s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-1 3.7-.3 1.1.6 2 1.7 2 2.1 0 3.5-2.6 3.5-5.8 0-2.4-1.6-4.2-4.6-4.2-3.3 0-5.4 2.5-5.4 5.2 0 1 .3 1.7.8 2.2.2.2.2.3.1.6l-.3 1.1c0 .4-.3.5-.6.3-1.7-.7-2.5-2.6-2.5-4.7 0-3.5 3-7.7 8.8-7.7 4.7 0 7.8 3.4 7.8 7.1 0 4.8-2.7 8.4-6.6 8.4-1.3 0-2.5-.7-2.9-1.5l-.8 3c-.3 1.1-1 2.4-1.6 3.2 1.4.4 2.8.6 4.3.6 5.5 0 10-4.3 10-9.6C22 6.3 17.5 2 12 2z",
  YouTube:
    "M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 32 32 0 0 0 0 12a32 32 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A32 32 0 0 0 24 12a32 32 0 0 0-.5-4.8zM9.8 15.6V8.4L16 12l-6.2 3.6z",
  TikTok:
    "M14.5 3c.4 2.6 1.9 4.4 4.5 4.7v3.1c-1.5 0-2.9-.5-4.2-1.3v6.8A6.3 6.3 0 1 1 8.2 10v3.2a3.2 3.2 0 1 0 2.3 3.1V3h4z",
  LinkedIn:
    "M5.3 8.7H1.6V22h3.7V8.7zM3.4 2A2.2 2.2 0 1 0 3.4 6.3 2.2 2.2 0 0 0 3.4 2zM22 22h-3.7v-6.5c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V22H9.9V8.7h3.5v1.8h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V22z",
};

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
      <path d={PATHS[name] ?? PATHS.Facebook} />
    </svg>
  );
}

export function SocialIcons() {
  return (
    <div className="social-row" aria-label="Social media">
      {SOCIAL.map((item) =>
        item.href ? (
          <a
            key={item.name}
            className="social-btn"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.name}
          >
            <Icon name={item.name} />
          </a>
        ) : (
          <span key={item.name} className="social-btn" title={item.name} aria-label={item.name}>
            <Icon name={item.name} />
          </span>
        ),
      )}
    </div>
  );
}
