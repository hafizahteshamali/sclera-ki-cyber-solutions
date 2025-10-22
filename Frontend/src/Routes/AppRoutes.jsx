import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import WerkOverview from "../pages/Dashboard/WerkOverview";
import LineMachines from "../pages/Dashboard/LineMachines";
import MaintenancePlanner from "../pages/Dashboard/MaintenancePlanner";
import AlarmEvents from "../pages/Dashboard/AlarmEvents";
import Reports from "../pages/Dashboard/Reports";
import ModelsKI from "../pages/Dashboard/ModelsKI";
import DataSources from "../pages/Dashboard/DataSources";
import UserRoles from "../pages/Dashboard/UserRoles";
import HardwareConfiguration from "../pages/Dashboard/HardwareConfiguration";
import SystemAudit from "../pages/Dashboard/SystemAudit";
import DataConfiguration from "../pages/Dashboard/DataConfiguration";
import MQTT from "../pages/Dashboard/MQTT";
import SelectSource from "../pages/Dashboard/SelectSource";


// 👇 pages import karna hoga (abhi aapko ye pages create karne padhenge)

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<WerkOverview />} />
        <Route path="linien-maschinen" element={<LineMachines />} />
        <Route path="wartungsplaner" element={<MaintenancePlanner />} />
        <Route path="alarme-events" element={<AlarmEvents />} />
        <Route path="berichte" element={<Reports />} />
        <Route path="modelle-ki" element={<ModelsKI />} />
        <Route path="datenquellen" element={<DataSources />} />
        <Route path="benutzer-rollen" element={<UserRoles />} />
        <Route path="hardware-konfiguration" element={<HardwareConfiguration />} />
        <Route path="system-audit" element={<SystemAudit />} />
        <Route path="datenkonfiguration" element={<DataConfiguration />} />
        <Route path="mqtt" element={<MQTT />} />
        <Route path="select-source" element={<SelectSource />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
