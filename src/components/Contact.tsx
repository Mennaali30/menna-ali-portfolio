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
  ExternalLink
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "fallback">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const nameTrim = formData.name.trim();
    const emailTrim = formData.email.trim();
    const subjectTrim = formData.subject.trim() || "Portfolio Contact Inquiry";
    const msgTrim = formData.message.trim();

    if (!nameTrim || nameTrim.length < 2) {
      setStatus("fallback");
      setStatusMessage("Please enter your name (at least 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrim || !emailRegex.test(emailTrim)) {
      setStatus("fallback");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (!msgTrim || msgTrim.length < 10) {
      setStatus("fallback");
      setStatusMessage("Please enter a message of at least 10 characters.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameTrim,
          email: emailTrim,
          message: `${subjectTrim ? `[Subject: ${subjectTrim}]\n\n` : ""}${msgTrim}`,
          honeypot: formData.honeypot
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus("success");
        setStatusMessage(data.message || "Thank you! Your message has been received.");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        // Honest fallback without fake claims
        setStatus("fallback");
        setStatusMessage(
          data?.error ||
          "Direct email service is currently awaiting API key configuration. Please use the 1-click email button below to send your message directly via your email client to Mennaali30617@gmail.com."
        );
      }
    } catch {
      setStatus("fallback");
      setStatusMessage(
        "Unable to send message via web API. Please send your message directly via email to Mennaali30617@gmail.com."
      );
    }
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FFE5D9]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#202124] bg-[#F8F7F4] border border-[#E7E5E0] shadow-xs mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#9D8189]" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#202124] tracking-tight">
            Get in <span className="gradient-text-frontend">Touch</span>
          </h2>
          <p className="mt-4 text-[#686868] max-w-2xl text-base leading-relaxed">
            I am available for junior engineering positions, internships, and freelance opportunities across Frontend Development and AI/ML Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card */}
            <div className="bg-[#F8F7F4] p-5 rounded-2xl border border-[#E7E5E0] hover:border-[#F4ACB7] shadow-xs transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-white border border-[#E7E5E0] text-[#9D8189]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#686868] block uppercase font-bold">
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-[#202124] hover:text-[#9D8189] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, "email")}
                className="p-2 rounded-xl bg-white border border-[#E7E5E0] text-[#202124] hover:bg-[#FFE5D9]/40 shadow-xs transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedItem === "email" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-[#686868]" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-[#F8F7F4] p-5 rounded-2xl border border-[#E7E5E0] hover:border-[#F4ACB7] shadow-xs transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-white border border-[#E7E5E0] text-[#9D8189]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#686868] block uppercase font-bold">
                    Phone
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-semibold text-[#202124] hover:text-[#9D8189] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                className="p-2 rounded-xl bg-white border border-[#E7E5E0] text-[#202124] hover:bg-[#FFE5D9]/40 shadow-xs transition-colors cursor-pointer"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedItem === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-[#686868]" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-[#F8F7F4] p-5 rounded-2xl border border-[#E7E5E0] shadow-xs flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-white border border-[#E7E5E0] text-[#9D8189]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#686868] block uppercase font-bold">
                  Location
                </span>
                <span className="text-sm font-semibold text-[#202124]">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-[#F8F7F4] p-5 rounded-2xl border border-[#E7E5E0] shadow-xs">
              <span className="text-[11px] font-mono text-[#686868] block uppercase font-bold mb-3">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E7E5E0] hover:border-[#6C63FF] hover:bg-[#F3F2FF] transition-all text-xs font-semibold text-[#202124]"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-[#6C63FF]" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#686868]" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E7E5E0] hover:border-[#9D8189] hover:bg-[#FFE5D9]/40 transition-all text-xs font-semibold text-[#202124]"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-[#202124]" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#686868]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Working Fallback */}
          <div className="lg:col-span-7 bg-[#F8F7F4] p-8 sm:p-10 rounded-3xl border border-[#E7E5E0] shadow-sm">
            <h3 className="text-xl font-bold text-[#202124] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-[#686868] mb-6">
              Fill out the form below or launch your default email client.
            </p>

            {status === "success" ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <Check className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-emerald-900 mb-1">
                  Message Sent Successfully
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                  {statusMessage}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for spam prevention */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-bold text-[#202124] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7E5E0] text-sm text-[#202124] focus:outline-none focus:border-[#9D8189] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-bold text-[#202124] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7E5E0] text-sm text-[#202124] focus:outline-none focus:border-[#9D8189] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-bold text-[#202124] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7E5E0] text-sm text-[#202124] focus:outline-none focus:border-[#9D8189] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-bold text-[#202124] mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your project, opportunity, or collaboration ideas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#E7E5E0] text-sm text-[#202124] focus:outline-none focus:border-[#9D8189] transition-colors resize-none"
                  />
                </div>

                {/* Honest Fallback Notice when triggered */}
                {status === "fallback" && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{statusMessage}</p>
                    </div>
                    <div>
                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors shadow-xs"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send via Email Client (mailto)</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-[#202124] hover:bg-[#202124]/90 text-white shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-[#FFCAD4]" />
                    <span>{status === "submitting" ? "Sending..." : "Submit Message"}</span>
                  </button>

                  <a
                    href={getMailtoUrl()}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-white hover:bg-[#FFE5D9]/50 text-[#202124] border border-[#E7E5E0] hover:border-[#F4ACB7] transition-all shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#9D8189]" />
                    <span>Open in Email App</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
