import { motion } from "motion/react";
import { ReactNode } from "react";

export const GrainOverlay = () => <div className="grain-overlay" />;
export const CRTOverlay = () => <div className="crt-overlay" />;

export const SectionHeading = ({
  children,
  subtitle,
}: {
  children: ReactNode;
  subtitle?: string;
}) => (
  <div className="mb-12 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-display text-5xl md:text-7xl text-prl-red uppercase tracking-tighter"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-mono text-prl-gray mt-2 uppercase text-sm tracking-widest"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1 w-24 bg-prl-red mx-auto mt-4" />
  </div>
);

export const RetroButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit";
}) => {
  const variants = {
    primary: "bg-prl-red text-prl-cream hover:bg-prl-brick",
    secondary: "bg-prl-mustard text-prl-ink hover:bg-[#c48f2e]",
    outline: "bg-transparent border-2 border-prl-ink text-prl-ink hover:bg-prl-ink hover:text-prl-cream",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`retro-border px-6 py-3 font-display text-xl uppercase tracking-wider transition-all duration-200 ease-out hover:scale-[1.04] active:translate-x-1 active:translate-y-1 active:scale-100 active:shadow-none ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export const DocStamp = ({ children }: { children: ReactNode }) => (
  <div className="inline-block bg-prl-mustard/30 border border-prl-ink px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
    {children}
  </div>
);
