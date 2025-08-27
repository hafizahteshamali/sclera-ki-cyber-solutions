// 📂 src/constants/sidebarData.js
import {
  MdOutlineDashboard,
  MdOutlineBuildCircle,
  MdOutlineAlarm,
  MdOutlineBarChart,
  MdOutlineModelTraining,
  MdOutlineStorage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineSecurity,
} from "react-icons/md";

export const sidebarData = [
  {
    path: "/dashboard", // index route (Werk-Overview)
    label: "Werk Overview",
    icon: "/assets/images/dashboard/werk-overview.svg",
  },
  {
    path: "/dashboard/linien-maschinen",
    label: "Linien & Maschinen",
    icon: "/assets/images/dashboard/tabler_tool.svg",
  },
  {
    path: "/dashboard/wartungsplaner",
    label: "Wartungsplaner",
    icon: "/assets/images/dashboard/uil_calender.svg",
  },
  {
    path: "/dashboard/alarme-events",
    label: "Alarme & Events",
    icon: "/assets/images/dashboard/alarm.svg",
  },
  {
    path: "/dashboard/berichte",
    label: "Berichte",
    icon: "/assets/images/dashboard/report.svg",
  },
  {
    path: "/dashboard/modelle-ki",
    label: "Modelle & KI",
    icon: "/assets/images/dashboard/model-ki.svg",
  },
  {
    path: "/dashboard/datenquellen",
    label: "Datenquellen",
    icon: "/assets/images/dashboard/data.svg",
  },
  {
    path: "/dashboard/benutzer-rollen",
    label: "Benutzer & Rollen",
    icon: "/assets/images/dashboard/lucide_users.svg",
  },
  {
    path: "/dashboard/hardware-konfiguration",
    label: "Hardware Konfiguration",
    icon: "/assets/images/dashboard/uil_setting.svg",
  },
  {
    path: "/dashboard/system-audit",
    label: "System & Audit",
    icon: "/assets/images/dashboard/system-audit.svg",
  },
];

export const WerkOverviewFilterData = [
  {
    text: "OEE",
    num: "88%",
  },
  {
    text: "Verfügbarkeit",
    num: "25%",
  },
  {
    text: "aktive Alarme",
    num: "4",
  },
];

export const maschinenData = [
  {
    id: 1,
    name: "Maschinenliste 1",
    status: "Ok",
    statusColor: "green",
    oee: "96%",
    anomaly: "0.05",
  },
  {
    id: 2,
    name: "Maschinenliste 2",
    status: "Warning",
    statusColor: "yellow",
    oee: "75%",
    anomaly: "0.30",
  },
  {
    id: 3,
    name: "Maschinenliste 3",
    status: "Critical",
    statusColor: "red",
    oee: "60%",
    anomaly: "0.75",
  },
  {
    id: 4,
    name: "Maschinenliste 4",
    status: "Ok",
    statusColor: "green",
    oee: "88%",
    anomaly: "0.15",
  },
  {
    id: 5,
    name: "Maschinenliste 5",
    status: "Critical",
    statusColor: "red",
    oee: "40%",
    anomaly: "0.90",
  },
];

export const events = [
  {
    equipment: "Pressmaschine 1",
    severity: "Kritisch",
    source: "Sensor",
    message: "Temperatur zu hoch",
  },
  {
    equipment: "Pressmaschine 2",
    severity: "Hoch",
    source: "Modell",
    message: "Ungewöhnliche Vibration",
  },
  {
    equipment: "Extruder 1",
    severity: "Medium",
    source: "Regel",
    message: "Hoher Speicherverbrauch",
  },
  {
    equipment: "Spritzgießmaschine",
    severity: "Kritisch",
    source: "Sensor",
    message: "Temperatur zu hoch",
  },
  {
    equipment: "Montagelinie 1",
    severity: "Hoch",
    source: "Modell",
    message: "Ungewöhnliche Vibration",
  },
  {
    equipment: "Abfüllanlage",
    severity: "Medium",
    source: "Regel",
    message: "Überstrom erkannt",
  },
  {
    equipment: "Förderband",
    severity: "Kritisch",
    source: "Sensor",
    message: "Niederdruck",
  },
];

export const TermsAndBerechi = [
  {
    num: 12,
    text: "Werk",
  },
  {
    num: 5,
    text: "Schichtleiter",
  },
  {
    num: 7,
    text: "Datenwissenschaft",
  },
  {
    num: 2,
    text: "Admin",
  },
];

export const SessionDevice = 
[
  {
    device: "Chrome on Windows",
    deviceIcon: "/assets/images/dashboard/mingcute_chrome-fill.svg",
    ip: "78.23.45 12",
    ipIcon: "/assets/images/dashboard/lucide_monitor.svg",
    location: "Austria",
    locationIcon: "/assets/images/dashboard/tdesign_location-filled.svg",
  },
  {
    device: "Chrome on Windows",
    deviceIcon: "/assets/images/dashboard/mingcute_chrome-fill.svg",
    ip: "5.73.284.67",
    ipIcon: "/assets/images/dashboard/lucide_monitor.svg",
    location: "Austria",
    locationIcon: "/assets/images/dashboard/tdesign_location-filled.svg",
  },
  {
    device: "Chrome on Windows",
    deviceIcon: "/assets/images/dashboard/mingcute_chrome-fill.svg",
    ip: "78.23.45 25",
    ipIcon: "/assets/images/dashboard/lucide_monitor.svg",
    location: "Austria",
    locationIcon: "/assets/images/dashboard/tdesign_location-filled.svg",
  }
]