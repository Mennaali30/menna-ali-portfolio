"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Check,
  Copy,
  MessageSquare,
  ArrowUpRight,
  AlertCircle,
  Loader2
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    // Client-side validations
    const nameTrim = formData.name.trim();
    const emailTrim = formData.email.trim();
    const msgTrim = formData.message.trim();

    if (!nameTrim || nameTrim.length < 2) {
      setStatus("error");
      setStatusMessage("Please enter your name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrim || !emailRegex.test(emailTrim)) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (!msgTrim || msgTrim.length < 10) {
      setStatus("error");
      setStatusMessage("Please enter a message of at least 10 characters.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameTrim,
          email: emailTrim,
          message: msgTrim,
          honeypot: formData.honeypot,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus("success");
        setStatusMessage(data.message || "Thank you, message received! I'll get back to you promptly.");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setStatus("error");
        setStatusMessage(
          data?.error ||
          "Unable to send message via the email service. Please try again or reach out to Mennaali30617@gmail.com directly."
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network connection error. Please try again or reach out directly to Mennaali30617@gmail.com."
      );
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D8E2DC]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FFCAD4]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#222629] bg-white border border-[#9D8189]/30 shadow-xs mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#222629] tracking-tight">
            Let&apos;s Build <span className="gradient-text">Something Intelligent.</span>
          </h2>
          <p className="mt-4 text-[#222629]/75 max-w-2xl text-base leading-relaxed">
            Have a project, opportunity, or collaboration in mind? I&apos;d love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border border-[#9D8189]/20 hover:border-[#F4ACB7] shadow-xs transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#D8E2DC]/50 border border-[#9D8189]/25 text-[#9D8189]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9D8189] block uppercase font-medium">
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-[#222629] hover:text-[#9D8189] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, "email")}
                className="p-2 rounded-lg bg-white border border-[#D8E2DC] text-[#222629] hover:bg-[#D8E2DC]/40 shadow-xs transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedItem === "email" ? (
                  <Check className="w-4 h-4 text-[#222629]" />
                ) : (
                  <Copy className="w-4 h-4 text-[#9D8189]" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-[#9D8189]/20 hover:border-[#F4ACB7] shadow-xs transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#D8E2DC]/50 border border-[#9D8189]/25 text-[#9D8189]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9D8189] block uppercase font-medium">
                    Phone
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-[#222629] hover:text-[#9D8189] transition-colors font-mono"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                className="p-2 rounded-lg bg-white border border-[#D8E2DC] text-[#222629] hover:bg-[#D8E2DC]/40 shadow-xs transition-colors cursor-pointer"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedItem === "phone" ? (
                  <Check className="w-4 h-4 text-[#222629]" />
                ) : (
                  <Copy className="w-4 h-4 text-[#9D8189]" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel p-5 rounded-2xl border border-[#9D8189]/20 hover:border-[#F4ACB7] shadow-xs transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#D8E2DC]/50 border border-[#9D8189]/25 text-[#9D8189]">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9D8189] block uppercase font-medium">
                    LinkedIn
                  </span>
                  <a
                    href={personalInfo.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#222629] hover:text-[#9D8189] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{personalInfo.linkedInHandle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9D8189]" />
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-panel p-5 rounded-2xl border border-[#9D8189]/20 hover:border-[#F4ACB7] shadow-xs transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#D8E2DC]/50 border border-[#9D8189]/25 text-[#9D8189]">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9D8189] block uppercase font-medium">
                    GitHub
                  </span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#222629] hover:text-[#9D8189] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{personalInfo.githubHandle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#9D8189]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-[#9D8189]/20 shadow-xs flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-[#D8E2DC]/50 border border-[#9D8189]/25 text-[#9D8189]">
                <MapPin className="w-5 h-5 text-[#9D8189]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#9D8189] block uppercase font-medium">
                  Location
                </span>
                <span className="text-sm font-medium text-[#222629]">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#9D8189]/25 relative shadow-lg">
            <h3 className="text-xl font-bold text-[#222629] mb-2">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-[#222629]/75 mb-6">
              Fill out the message details below or connect via email directly.
            </p>

            {status === "success" && (
              <div className="p-4 mb-6 rounded-2xl bg-[#D8E2DC]/80 border border-[#9D8189]/40 text-[#222629] text-xs sm:text-sm flex items-center gap-3 shadow-xs">
                <Check className="w-5 h-5 text-[#222629] shrink-0" />
                <div>
                  <span className="font-semibold block">Thank you, message sent!</span>
                  <span>{statusMessage || "I'll get back to you promptly at your provided email."}</span>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 mb-6 rounded-2xl bg-[#FFCAD4]/60 border border-[#F4ACB7] text-[#222629] text-xs sm:text-sm flex items-start gap-3 shadow-xs">
                <AlertCircle className="w-5 h-5 text-[#9D8189] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Notice</span>
                  <span>{statusMessage}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field (anti-spam) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono uppercase tracking-wider text-[#222629] mb-1.5 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#9D8189]/30 text-[#222629] placeholder-[#9D8189]/60 focus:outline-none focus:border-[#F4ACB7] focus:ring-1 focus:ring-[#F4ACB7] text-sm shadow-xs transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-wider text-[#222629] mb-1.5 font-semibold"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#9D8189]/30 text-[#222629] placeholder-[#9D8189]/60 focus:outline-none focus:border-[#F4ACB7] focus:ring-1 focus:ring-[#F4ACB7] text-sm shadow-xs transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#222629] mb-1.5 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Discuss an AI engineering role, collaboration, or consultation..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#9D8189]/30 text-[#222629] placeholder-[#9D8189]/60 focus:outline-none focus:border-[#F4ACB7] focus:ring-1 focus:ring-[#F4ACB7] text-sm shadow-xs transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#F4ACB7] hover:bg-[#F4ACB7]/90 text-[#222629] border border-[#F4ACB7] shadow-md shadow-[#F4ACB7]/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#222629]" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#222629]" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
