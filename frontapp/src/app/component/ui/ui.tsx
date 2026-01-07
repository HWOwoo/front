import React from "react";
import s from "./ui.module.css";

export function Card({
  title,
  right,
  children,
}: {
  title?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className={s.card}>
      {(title || right) && (
        <div className={s.cardHeader}>
          <h2 className={s.cardTitle}>{title}</h2>
          {right}
        </div>
      )}
      <div className={s.cardBody}>{children}</div>
    </section>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return <div className={s.label}>{children}</div>;
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${s.input} ${props.className ?? ""}`} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${s.textarea} ${props.className ?? ""}`} />;
}

export function Button({
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
}) {
  const v =
    variant === "primary"
      ? s.primary
      : variant === "secondary"
      ? s.secondary
      : s.danger;

  return (
    <button
      {...props}
      className={`${s.btn} ${v} ${props.className ?? ""}`}
    />
  );
}