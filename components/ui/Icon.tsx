import { cn } from "@/lib/cn";
import type { IconName } from "@/lib/site-types";

type IconProps = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("icon", className, name === "arrow" && "icon--arrow")}
      fill="none"
      viewBox="0 0 24 24"
    >
      {renderPath(name)}
    </svg>
  );
}

function renderPath(name: IconName) {
  const shared = {
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  switch (name) {
    case "arrow":
      return (
        <>
          <path {...shared} d="M5 12h14" />
          <path {...shared} d="m13 6 6 6-6 6" />
        </>
      );
    case "telegram":
      return (
        <>
          <path {...shared} d="m4 11 15-6-3.2 14-4.5-4-2.1 2.2-.7-5.5L4 11Z" />
          <path {...shared} d="m8.5 11.7 7-5.2-5.1 6.3" />
        </>
      );
    case "mail":
      return (
        <>
          <rect {...shared} x="3.5" y="5.5" width="17" height="13" rx="3" />
          <path {...shared} d="m5.5 8 6.5 5 6.5-5" />
        </>
      );
    case "globe":
      return (
        <>
          <circle {...shared} cx="12" cy="12" r="8.5" />
          <path {...shared} d="M4 12h16" />
          <path {...shared} d="M12 3.5c2.6 2.5 3.9 5.3 3.9 8.5S14.6 18 12 20.5C9.4 18 8.1 15.2 8.1 12s1.3-6 3.9-8.5Z" />
        </>
      );
    case "menu":
      return (
        <>
          <path {...shared} d="M4 7h16" />
          <path {...shared} d="M4 12h16" />
          <path {...shared} d="M4 17h16" />
        </>
      );
    case "close":
      return (
        <>
          <path {...shared} d="M6 6 18 18" />
          <path {...shared} d="M18 6 6 18" />
        </>
      );
    case "check":
      return <path {...shared} d="m5 12 4.2 4.2L19 7.5" />;
    case "shield":
      return (
        <>
          <path {...shared} d="M12 4 6.3 6v5.6c0 3.1 2 5.9 5.7 8.3 3.7-2.4 5.7-5.2 5.7-8.3V6L12 4Z" />
          <path {...shared} d="m9.3 12 1.9 1.9 3.7-4.2" />
        </>
      );
    case "chip":
      return (
        <>
          <rect {...shared} x="6.5" y="6.5" width="11" height="11" rx="2.5" />
          <path {...shared} d="M9 9h6v6H9z" />
          <path {...shared} d="M9 3.5v3M15 3.5v3M9 17.5v3M15 17.5v3M3.5 9h3M3.5 15h3M17.5 9h3M17.5 15h3" />
        </>
      );
    case "chart":
      return (
        <>
          <path {...shared} d="M4 19h16" />
          <path {...shared} d="M7 16V9" />
          <path {...shared} d="M12 16V6" />
          <path {...shared} d="M17 16v-4" />
        </>
      );
    case "wallet":
      return (
        <>
          <path {...shared} d="M5 8.5h14a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 19 18.5H5A1.5 1.5 0 0 1 3.5 17v-7A1.5 1.5 0 0 1 5 8.5Z" />
          <path {...shared} d="M7 8.5V6.7A2.2 2.2 0 0 1 9.2 4.5H18" />
          <circle {...shared} cx="16" cy="13.5" r="1.1" />
        </>
      );
    case "support":
      return (
        <>
          <path {...shared} d="M5 13a7 7 0 0 1 14 0" />
          <rect {...shared} x="4" y="12.2" width="3.6" height="6.3" rx="1.5" />
          <rect {...shared} x="16.4" y="12.2" width="3.6" height="6.3" rx="1.5" />
          <path {...shared} d="M8 18.5h5.3A2.7 2.7 0 0 0 16 15.8" />
        </>
      );
    case "football":
      return (
        <>
          <circle {...shared} cx="12" cy="12" r="8.4" />
          <path {...shared} d="m12 7.4 2.6 1.9-1 3.1h-3.2l-1-3.1L12 7.4Z" />
          <path {...shared} d="m9.4 9.3-2.5.8-.9 2.8 1.8 2.3 2.7-.5" />
          <path {...shared} d="m14.6 9.3 2.5.8.9 2.8-1.8 2.3-2.7-.5" />
        </>
      );
    case "slots":
      return (
        <>
          <rect {...shared} x="5" y="5" width="14" height="14" rx="3" />
          <path {...shared} d="M8 9h2.5M13 9h3M8 12h3M12.5 12H16M8 15h2.5M13 15h3" />
        </>
      );
    case "live":
      return (
        <>
          <circle {...shared} cx="12" cy="12" r="8.5" />
          <path {...shared} d="m10 8.5 5 3.5-5 3.5Z" />
        </>
      );
    case "gift":
      return (
        <>
          <path {...shared} d="M5.5 10.2h13v8.3H5.5z" />
          <path {...shared} d="M4 10.2h16V7.7H4z" />
          <path {...shared} d="M12 7.7v10.8" />
          <path {...shared} d="M9.2 7.7c-1.3 0-2.4-.9-2.4-2 0-1 .8-1.7 1.8-1.7 1.4 0 2.4 1.7 3.4 3.7" />
          <path {...shared} d="M14.8 7.7c1.3 0 2.4-.9 2.4-2 0-1-.8-1.7-1.8-1.7-1.4 0-2.4 1.7-3.4 3.7" />
        </>
      );
    case "network":
      return (
        <>
          <circle {...shared} cx="6" cy="12" r="2" />
          <circle {...shared} cx="18" cy="7" r="2" />
          <circle {...shared} cx="18" cy="17" r="2" />
          <path {...shared} d="M8 11.3 16 7.7" />
          <path {...shared} d="M8 12.7 16 16.3" />
        </>
      );
    case "spark":
    default:
      return (
        <>
          <path {...shared} d="M12 3.5 13.8 9 20.5 12l-6.7 3-1.8 5.5-1.8-5.5L3.5 12l6.7-3L12 3.5Z" />
        </>
      );
  }
}

