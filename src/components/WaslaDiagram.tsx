"use client";

import React from "react";
import {
  Video,
  Layers,
  Smile,
  HandMetal,
  Cpu,
  CheckCircle2,
  Zap
} from "lucide-react";

export default function WaslaDiagram() {
  return (
    <div className="w-full bg-[#F8F7F4] rounded-2xl border border-[#E7E5E0] p-5 relative overflow-hidden text-[#202124]">
      {/* Subtle top indicator */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E7E5E0] text-[11px] font-mono">
        <span className="font-bold text-[#6C63FF] flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" />
          ABSTRACT ARCHITECTURE PIPELINE
        </span>
        <span className="text-[#686868]">CPU-Only • Real-Time</span>
      </div>

      {/* Pipeline Flow Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
        {/* Step 1: Video Capture */}
        <div className="bg-white p-3.5 rounded-xl border border-[#E7E5E0] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-[#686868]">STEP 01</span>
              <div className="p-1 rounded-md bg-[#F3F2FF] text-[#6C63FF]">
                <Video className="w-3.5 h-3.5" />
              </div>
            </div>
            <h5 className="text-xs font-bold text-[#202124] mb-1">Video Stream</h5>
            <p className="text-[11px] text-[#686868] leading-tight">
              Offline webcam capture at low latency on standard CPU.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-[#E7E5E0] text-[10px] font-mono text-[#6C63FF]">
            RGB Frames
          </div>
        </div>

        {/* Step 2: Multimodal Extraction */}
        <div className="bg-white p-3.5 rounded-xl border border-[#E7E5E0] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-[#686868]">STEP 02</span>
              <div className="p-1 rounded-md bg-[#FFE5D9] text-[#9D8189]">
                <Layers className="w-3.5 h-3.5" />
              </div>
            </div>
            <h5 className="text-xs font-bold text-[#202124] mb-1">Feature Extraction</h5>
            <div className="space-y-1 text-[11px] text-[#686868] leading-tight">
              <div className="flex items-center gap-1 text-[#202124] font-medium">
                <HandMetal className="w-3 h-3 text-[#F4ACB7]" /> MediaPipe: 156-D
              </div>
              <div className="flex items-center gap-1 text-[#202124] font-medium">
                <Smile className="w-3 h-3 text-[#6C63FF]" /> DeepFace: 7-D
              </div>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-[#E7E5E0] text-[10px] font-mono text-[#9D8189] font-bold">
            163-D Unified Vector
          </div>
        </div>

        {/* Step 3: MLP Network */}
        <div className="bg-white p-3.5 rounded-xl border border-[#6C63FF]/30 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-[#6C63FF]">STEP 03</span>
              <div className="p-1 rounded-md bg-[#6C63FF] text-white">
                <Zap className="w-3.5 h-3.5" />
              </div>
            </div>
            <h5 className="text-xs font-bold text-[#202124] mb-1">MLP Classifier</h5>
            <p className="text-[11px] text-[#686868] leading-tight">
              Dense layers: 163 → 256 → 128 → 64 → Softmax.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-[#E7E5E0] text-[10px] font-mono text-[#6C63FF] font-bold">
            ~973 KB Model Size
          </div>
        </div>

        {/* Step 4: Classification Output */}
        <div className="bg-white p-3.5 rounded-xl border border-[#E7E5E0] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-emerald-600">STEP 04</span>
              <div className="p-1 rounded-md bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <h5 className="text-xs font-bold text-[#202124] mb-1">Sign Prediction</h5>
            <p className="text-[11px] text-[#686868] leading-tight">
              47 ESL sign gesture classes & emotional state.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-[#E7E5E0] text-[10px] font-mono text-emerald-600 font-bold">
            91.74% Accuracy
          </div>
        </div>
      </div>
    </div>
  );
}
