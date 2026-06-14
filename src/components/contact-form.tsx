"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button-link";
import { SITE } from "@/lib/site";

const field =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-brown placeholder:text-brown/40 outline-none transition-shadow focus:border-green focus:ring-2 focus:ring-green/30";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-brown/80">
            Name
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${field}`} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-brown/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${field}`}
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-brown/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`mt-1.5 ${field} resize-none`}
          placeholder="How can we help, or how would you like to help?"
        />
      </div>
      <Button type="submit" variant="secondary" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
      {sent && (
        <p className="text-sm text-green-deep">
          Thanks! Your email client should have opened — if not, write to {SITE.email}.
        </p>
      )}
    </form>
  );
}
