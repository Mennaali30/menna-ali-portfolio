"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cpu, Activity, Zap, Sparkles } from "lucide-react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number;
  color: string;
  glow: string;
  pulsePhase: number;
}

interface Signal {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export default function AiNeuralGraphic() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeTelemetry, setActiveTelemetry] = useState({
    activeSynapses: 128,
    throughput: "240 FPS",
    confidence: "91.74%",
    currentMode: "Multi-Modal Inference"
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 480);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNetwork();
    };

    window.addEventListener("resize", handleResize);

    // Layer definitions for the neural topology
    const layerCounts = [4, 6, 8, 6, 4];
    let nodes: Node[] = [];
    let connections: { from: number; to: number; weight: number }[] = [];
    let signals: Signal[] = [];

    const layerColors = [
      { color: "#D8E2DC", glow: "rgba(216, 226, 220, 0.4)" }, // Sage (Input)
      { color: "#FFFFFF", glow: "rgba(255, 255, 255, 0.4)" }, // White
      { color: "#FFCAD4", glow: "rgba(255, 202, 212, 0.5)" }, // Soft Pink
      { color: "#F4ACB7", glow: "rgba(244, 172, 183, 0.5)" }, // Dusty Pink
      { color: "#9D8189", glow: "rgba(157, 129, 137, 0.5)" }  // Muted Mauve (Output)
    ];

    function initNetwork() {
      nodes = [];
      connections = [];
      signals = [];

      const layerSpacing = width / (layerCounts.length + 1);

      layerCounts.forEach((count, lIdx) => {
        const x = layerSpacing * (lIdx + 1);
        const ySpacing = height / (count + 1);

        for (let i = 0; i < count; i++) {
          const y = ySpacing * (i + 1);
          nodes.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: lIdx === 0 || lIdx === layerCounts.length - 1 ? 5 : 4,
            layer: lIdx,
            color: layerColors[lIdx].color,
            glow: layerColors[lIdx].glow,
            pulsePhase: Math.random() * Math.PI * 2
          });
        }
      });

      // Build layered connections
      let prevLayerStart = 0;
      for (let l = 0; l < layerCounts.length - 1; l++) {
        const currentCount = layerCounts[l];
        const nextCount = layerCounts[l + 1];
        const nextLayerStart = prevLayerStart + currentCount;

        for (let i = 0; i < currentCount; i++) {
          for (let j = 0; j < nextCount; j++) {
            // Sparsify connections to avoid visual clutter
            if (Math.random() > 0.35) {
              connections.push({
                from: prevLayerStart + i,
                to: nextLayerStart + j,
                weight: Math.random() * 0.6 + 0.2
              });
            }
          }
        }
        prevLayerStart = nextLayerStart;
      }
    }

    initNetwork();

    // Spawn synaptic signals
    const spawnSignalInterval = setInterval(() => {
      if (connections.length === 0) return;
      const conn = connections[Math.floor(Math.random() * connections.length)];
      signals.push({
        fromNode: conn.from,
        toNode: conn.to,
        progress: 0,
        speed: 0.02 + Math.random() * 0.025,
        color: nodes[conn.to]?.color || "#F4ACB7"
      });

      if (signals.length > 25) {
        signals.shift();
      }
    }, 180);

    let time = 0;

    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Subtle backdrop radial gradient
      const bgGlow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        width * 0.6
      );
      bgGlow.addColorStop(0, "rgba(244, 172, 183, 0.08)");
      bgGlow.addColorStop(0.5, "rgba(216, 226, 220, 0.04)");
      bgGlow.addColorStop(1, "transparent");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw Connections
      connections.forEach((conn) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        if (!fromNode || !toNode) return;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);

        // Opacity oscillation
        const alpha = 0.08 + Math.sin(time + conn.weight * 10) * 0.04;
        ctx.strokeStyle = `rgba(216, 226, 220, ${Math.max(0.04, alpha)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw and advance synaptic signal pulses
      signals.forEach((sig, idx) => {
        sig.progress += sig.speed;
        const fromNode = nodes[sig.fromNode];
        const toNode = nodes[sig.toNode];

        if (!fromNode || !toNode) return;

        const currX = fromNode.x + (toNode.x - fromNode.x) * sig.progress;
        const currY = fromNode.y + (toNode.y - fromNode.y) * sig.progress;

        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = sig.color;
        ctx.beginPath();
        ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = sig.color;
        ctx.fill();
        ctx.restore();
      });

      // Filter out completed signals
      signals = signals.filter((sig) => sig.progress < 1);

      // Draw Nodes
      nodes.forEach((node) => {
        // Micro floating movement
        node.pulsePhase += 0.04;
        const pulse = Math.sin(node.pulsePhase);
        const currentR = Math.max(2, node.radius + pulse * 1);

        ctx.save();
        // Outer halo
        ctx.shadowBlur = 12;
        ctx.shadowColor = node.color;

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentR, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, currentR * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(spawnSignalInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Outer ambient decorative ring */}
      <div className="absolute inset-0 rounded-3xl bg-[#222629] backdrop-blur-2xl border border-[#9D8189]/30 shadow-2xl shadow-[#222629]/20 overflow-hidden">
        {/* Decorative corner brackets */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D8E2DC]/60" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#F4ACB7]/60" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#9D8189]/60" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#FFCAD4]/60" />

        {/* Live Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-crosshair"
          title="Interactive Neural Network Visualization"
        />

        {/* Floating AI HUD Chips */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs pointer-events-none">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#222629]/90 border border-[#F4ACB7]/40 text-[#FFCAD4] font-mono backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F4ACB7] animate-ping" />
            <span>NEURAL PIPELINE ACTIVE</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#222629]/90 border border-[#9D8189]/40 text-[#D8E2DC] font-mono backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-[#F4ACB7]" />
            <span>CUDA / T4 GPU</span>
          </div>
        </div>

        {/* Bottom Floating Telemetry Panel */}
        <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-[#222629]/95 border border-[#9D8189]/30 backdrop-blur-md shadow-lg pointer-events-auto">
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
            <div className="p-1.5 rounded-lg bg-[#222629] border border-[#9D8189]/25">
              <span className="text-[#D8E2DC]/70 block text-[10px]">ACCURACY</span>
              <span className="text-white font-bold">{activeTelemetry.confidence}</span>
            </div>
            <div className="p-1.5 rounded-lg bg-[#222629] border border-[#9D8189]/25">
              <span className="text-[#D8E2DC]/70 block text-[10px]">CLASSES</span>
              <span className="text-[#FFCAD4] font-bold">47 GESTURES</span>
            </div>
            <div className="p-1.5 rounded-lg bg-[#222629] border border-[#9D8189]/25">
              <span className="text-[#D8E2DC]/70 block text-[10px]">LATENCY</span>
              <span className="text-[#F4ACB7] font-bold">REAL-TIME</span>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-[#9D8189]/30 flex items-center justify-between text-[10px] text-[#D8E2DC]/80 font-mono">
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-[#F4ACB7]" />
              WASLA Multi-Modal Architecture
            </span>
            <span className="text-[#FFCAD4]">CNN + LSTM + MediaPipe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
