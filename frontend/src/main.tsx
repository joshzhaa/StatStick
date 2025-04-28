import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { HashRouter, Routes, Route } from "react-router";
import { AppNav } from "@/features/app-nav";
import { LiveStatsPage } from "@/routes/live-stats-page";
import { MatchupNotesPage } from "@/routes/matchup-notes-page";
import { SettingsPage } from "@/routes/settings-page";
import { LandingPage } from "./routes/landing-page";

const container = document.getElementById("root");

// The overall layout is AppNav on the left and each page on the right
createRoot(container!).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <AppNav />
      <div className="w-11/12 h-screen right-0 fixed bg-secondary text-secondary-foreground">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/live-stats" element={<LiveStatsPage />} />
          <Route path="/matchup-notes" element={<MatchupNotesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </HashRouter>
  </React.StrictMode>,
);
