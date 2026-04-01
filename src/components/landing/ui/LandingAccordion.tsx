import { useState, type ReactNode } from "react";
import { getExternalLinkRel } from "@/utils/linkRel";

function linkifyText(text: string): ReactNode {
  const pattern =
    /\[([^\]]+)\]\((https?:\/\/[^)]+)\)|(https?:\/\/[^\s,)]+)|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));

    if (match[1]) {
      parts.push(<a key={match.index} href={match[2]} target="_blank" rel={getExternalLinkRel(match[2])} className="text-accent hover:underline">{match[1]}</a>);
    } else if (match[3]) {
      parts.push(<a key={match.index} href={match[3]} target="_blank" rel={getExternalLinkRel(match[3])} className="text-accent hover:underline">{match[3]}</a>);
    } else if (match[4]) {
      parts.push(<a key={match.index} href={`mailto:${match[4]}`} rel="nofollow" className="text-accent hover:underline">{match[4]}</a>);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex === 0) return text;
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

interface AccordionItem {
  question: string;
  answer: string;
}

interface LandingAccordionProps {
  items: AccordionItem[];
}

const LandingAccordion = ({ items }: LandingAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left text-foreground font-medium hover:text-accent transition-colors"
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <svg
              className={`h-5 w-5 shrink-0 ml-4 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === i ? "max-h-[8000px] pb-5" : "max-h-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {linkifyText(item.answer)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandingAccordion;
