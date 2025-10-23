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
    icon: "/predictive-maintainance/assets/images/dashboard/werk-overview.svg",
  },
  {
    path: "/dashboard/linien-maschinen",
    label: "Linien & Maschinen",
    icon: "/predictive-maintainance/assets/images/dashboard/tabler_tool.svg",
  },
  {
    path: "/dashboard/wartungsplaner",
    label: "Wartungsplaner",
    icon: "/predictive-maintainance/assets/images/dashboard/uil_calender.svg",
  },
  {
    path: "/dashboard/alarme-events",
    label: "Alarme & Events",
    icon: "/predictive-maintainance/assets/images/dashboard/alarm.svg",
  },
  {
    path: "/dashboard/berichte",
    label: "Berichte",
    icon: "/predictive-maintainance/assets/images/dashboard/report.svg",
  },
  {
    path: "/dashboard/modelle-ki",
    label: "Modelle & KI",
    icon: "/predictive-maintainance/assets/images/dashboard/model-ki.svg",
  },
  {
    path: "/dashboard/datenquellen",
    label: "Datenquellen",
    icon: "/predictive-maintainance/assets/images/dashboard/data.svg",
  },
  {
    path: "/dashboard/benutzer-rollen",
    label: "Benutzer & Rollen",
    icon: "/predictive-maintainance/assets/images/dashboard/lucide_users.svg",
  },
  {
    path: "/dashboard/hardware-konfiguration",
    label: "Hardware Konfiguration",
    icon: "/predictive-maintainance/assets/images/dashboard/uil_setting.svg",
  },
  {
    path: "/dashboard/system-audit",
    label: "System & Audit",
    icon: "/predictive-maintainance/assets/images/dashboard/system-audit.svg",
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

export const DashboardNavigation = [
  {
    text: "Konfiguration",
    url: "/dashboard/datenkonfiguration"
  },
  {
    text: "Neue Entität",
    url: "/dashboard/linien-maschinen"
  },
  {
    text: "Zu Tickets",
    url: "/dashboard/linien-maschinen"
  },
  {
    text: "Zu Trends",
    url: "/dashboard/linien-maschinen"
  }
]

export const machinesTableHeadingName = [
  "Linie", "Maschine", "Status", "OEE %", "AnomalieScore", "Letzte Wartung", "Nächste Wartung", "Aktion"
]
export const maschinenData = [
  {
    id: 1,
    name: "Machine Alpha-1000",
    status: "Running",
    statusColor: "green",
    oee: "85%",
    anomaly: "0.23",
  },
  {
    id: 2,
    name: "Machine Beta-2000",
    status: "Stopped",
    statusColor: "red",
    oee: "0%",
    anomaly: "0.89",
  },
  {
    id: 3,
    name: "Machine Gamma-3000",
    status: "Warning",
    statusColor: "yellow",
    oee: "72%",
    anomaly: "0.45",
  },
  {
    id: 4,
    name: "Machine Delta-4000",
    status: "Running",
    statusColor: "green",
    oee: "91%",
    anomaly: "0.12",
  },
  {
    id: 5,
    name: "Machine Epsilon-5000",
    status: "Maintenance",
    statusColor: "orange",
    oee: "0%",
    anomaly: "0.67",
  },
]
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
      deviceIcon: "/predictive-maintainance/assets/images/dashboard/mingcute_chrome-fill.svg",
      ip: "78.23.45 12",
      ipIcon: "/predictive-maintainance/assets/images/dashboard/lucide_monitor.svg",
      location: "Austria",
      locationIcon: "/predictive-maintainance/assets/images/dashboard/tdesign_location-filled.svg",
    },
    {
      device: "Chrome on Windows",
      deviceIcon: "/predictive-maintainance/assets/images/dashboard/mingcute_chrome-fill.svg",
      ip: "5.73.284.67",
      ipIcon: "/predictive-maintainance/assets/images/dashboard/lucide_monitor.svg",
      location: "Austria",
      locationIcon: "/predictive-maintainance/assets/images/dashboard/tdesign_location-filled.svg",
    },
    {
      device: "Chrome on Windows",
      deviceIcon: "/predictive-maintainance/assets/images/dashboard/mingcute_chrome-fill.svg",
      ip: "78.23.45 25",
      ipIcon: "/predictive-maintainance/assets/images/dashboard/lucide_monitor.svg",
      location: "Austria",
      locationIcon: "/predictive-maintainance/assets/images/dashboard/tdesign_location-filled.svg",
    }
  ]


export const devices = [
  {
    name: "GW-01",
    location: "Hall A",
    protocol: "MOTT",
    fw: "v1.2.3",
    ip: "10.0.1.5",
    status: "OK",
  },
  {
    name: "GW-02",
    location: "Roof",
    protocol: "Modbus",
    fw: "v1.1.0",
    ip: "10.0.1.6",
    status: "Update needed",
  },
  {
    name: "GW-03",
    location: "Hall B",
    protocol: "MQTT",
    fw: "v1.1.0",
    ip: "10.0.1.7",
    status: "OK",
  },
  {
    name: "GW-04",
    location: "Hall C",
    protocol: "OPC-UA",
    fw: "v1.0.1",
    ip: "10.0.1.8",
    status: "Error",
  },
  {
    name: "GW-05",
    location: "Hall D",
    protocol: "OPC-UA",
    fw: "v1.0.2",
    ip: "10.0.1.9",
    status: "Error",
  },
];

export const sensors = [
  {
    id: "SEN-001",
    type: "Temperatursensor",
    unit: "°C",
    date: "15.05.2025",
    rate: "1 Sekunde",
    hb: "22.08.2025",
  },
  {
    id: "SEN-002",
    type: "Drucksensor",
    unit: "bar",
    date: "10.03.2025",
    rate: "500 ms",
    hb: "22.08.2025",
  },
  {
    id: "SEN-003",
    type: "Feuchtigkeitssensor",
    unit: "%",
    date: "01.06.2025",
    rate: "5 Sekunden",
    hb: "22.08.2025",
  },
  {
    id: "SEN-004",
    type: "Vibrationssensor",
    unit: "Hz",
    date: "20.04.2025",
    rate: "10 Hz",
    hb: "22.08.2025",
  },
  {
    id: "SEN-005",
    type: "Vibrationssensor",
    unit: "Hz",
    date: "20.04.2025",
    rate: "10 Hz",
    hb: "22.08.2025",
  },
  {
    id: "SEN-006",
    type: "Vibrationssensor",
    unit: "Hz",
    date: "20.04.2025",
    rate: "10 Hz",
    hb: "22.08.2025",
  },
];

export const NetzwerkData = [
  {
    icon: "/predictive-maintainance/assets/images/dashboard/material-symbols_lan-outline.svg",
    text: "VLAN",
    percent: "3",
    sub: ""
  },
  {
    icon: "/predictive-maintainance/assets/images/dashboard/streamline-ultimate_usb-port-1.svg",
    text: "Ports",
    percent: "12",
    sub: ""
  },
  {
    icon: "/predictive-maintainance/assets/images/dashboard/mingcute_time-line.svg",
    text: "Latenz",
    percent: "10",
    sub: "ms"
  },
  {
    icon: "/predictive-maintainance/assets/images/dashboard/material-symbols_error-outline-rounded.svg",
    text: "Paketverlust",
    percent: "1%",
    sub: ""
  }
]

export const DataConfigStatusData = [
  {
    bgImg: "/predictive-maintainance/assets/images/dashboard/d_c_card_bg1.png",
    text: "Datenqualität",
    value: "82%"
  },
  {
    bgImg: "/predictive-maintainance/assets/images/dashboard/d_c_card_bg2.png",
    text: "Modellrelevanz",
    value: "Hoch"
  },
  {
    bgImg: "/predictive-maintainance/assets/images/dashboard/d_c_card_bg3.png",
    text: "Zuverlässigkeit",
    value: "91%"
  },
  {
    bgImg: "/predictive-maintainance/assets/images/dashboard/d_c_card_bg4.png",
    text: "aktiv",
    value: "5/7"
  }
]

export const steps = [
  "MQTT/KI-Konfiguration",
  "Sicherheit",
  "Payload & Schema",
  "Routing & DB",
  "Monitoring",
  "KI-Modell",
];

export const tableData = [
  { name: "OPC UA", status: "Verbunden", heartbeat: "Vor 5 Sek" },
  { name: "MQTT", status: "Getrennt", heartbeat: "Vor 2 Minuten" },
  { name: "REST API", status: "Verbunden", heartbeat: "Vor 12 Sek" },
  { name: "CSV Import", status: "Nicht konfiguriert", heartbeat: "--" },
  { name: "CSV Import", status: "Nicht konfiguriert", heartbeat: "--" },
  { name: "CSV Import", status: "Nicht konfiguriert", heartbeat: "--" },
  { name: "CSV Import", status: "Nicht konfiguriert", heartbeat: "--" },
  { name: "CSV Import", status: "Nicht konfiguriert", heartbeat: "--" },
  { name: "CSV Import", status: "Nicht konfiguriert", heartbeat: "--" },
  { name: "CSV Import", status: "Nicht konfiguriert", heartbeat: "--" },
];

export const MonitoringData = [
  {
    text: "Latenz",
    numb: "88%",
    bg: "/predictive-maintainance/assets/images/dashboard/d_c_card_bg1.png"
  },
  {
    text: "Batch-Größe",
    numb: "20%",
    bg: "/predictive-maintainance/assets/images/dashboard/d_c_card_bg2.png"
  },
  {
    text: "Nachrichtenrate",
    numb: "90%",
    bg: "/predictive-maintainance/assets/images/dashboard/d_c_card_bg3.png"
  },
  {
    text: "Reconnects",
    numb: "31",
    bg: "/predictive-maintainance/assets/images/dashboard/d_c_card_bg4.png"
  },
]