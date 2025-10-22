import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DataConfigStatusData } from "../../assets/ConstantData";
import { CiWarning } from "react-icons/ci";
import { FaSquarePlus } from "react-icons/fa6";

const DataConfiguration = () => {
  const chartData = [
    { x: 0, Datenqualität: 24 },
    { x: 10, Datenqualität: 28 },
    { x: 20, Datenqualität: 26 },
    { x: 30, Datenqualität: 32 },
    { x: 40, Datenqualität: 30 },
    { x: 50, Datenqualität: 28 },
    { x: 60, Datenqualität: 24 },
    { x: 70, Datenqualität: 26 },
    { x: 80, Datenqualität: 30 },
    { x: 90, Datenqualität: 32 },
    { x: 100, Datenqualität: 34 },
  ];

  const tableData = [
    {
      quelle: "MQTT_Extruder01",
      typ: "MQTT",
      datenqualität: "86%",
      relevanz: "Hoch",
      zuverlässigkeit: "94%",
      zuletzt: "vor 2 Minuten",
    },
    {
      quelle: "OPC_Silo01",
      typ: "OPC UA",
      datenqualität: "72%",
      relevanz: "Mittel",
      zuverlässigkeit: "81%",
      zuletzt: "vor 10 Minuten",
    },
    {
      quelle: "MQTT_Pump02",
      typ: "MQTT",
      datenqualität: "90%",
      relevanz: "Hoch",
      zuverlässigkeit: "97%",
      zuletzt: "vor 3 Minuten",
    },
    {
      quelle: "REST_EnergyAPI",
      typ: "REST API",
      datenqualität: "78%",
      relevanz: "Niedrig",
      zuverlässigkeit: "89%",
      zuletzt: "vor 7 Minuten",
    },
    {
      quelle: "CSV_Import_QC",
      typ: "CSV Import",
      datenqualität: "65%",
      relevanz: "Mittel",
      zuverlässigkeit: "75%",
      zuletzt: "vor 15 Minuten",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-2 lg:overflow-hidden lg:h-screen">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        {/* Left Section - Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-black mb-4">
              Datenkonfiguration
            </h1>

            {/* Subtitle Section */}
            <div className="rounded-lg mb-4 bg-[#F8FBFF] p-2">
              <h2 className="text-2xl font-bold text-black mb-2">
                Datenquellen – KI-Bewertung & Relevanzanalyse
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Analyse und Bewertung aller verbundenen Datenquellen anhand von
                Datenqualität, Stabilität und Modellrelevanz.
              </p>

              {/* Buttons */}
              <div className="flex flex-col lg:flex-row gap-3">
                <button className="flex items-center gap-2 px-3 h-[45px] border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-50 transition text-sm">
                  <CiWarning className="text-xl" />
                  Analyse aktualisieren
                </button>
                <button className="flex items-center gap-2 px-3 h-[45px] bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm">
                  <FaSquarePlus className="text-xl" />
                  Datenquelle hinzufügen
                </button>
              </div>
            </div>

            {/* Stat Cards */}
            <div className="flex flex-wrap justify-between gap-2">
              {DataConfigStatusData.map((item, index) => (
                <div
                  key={index}
                  className="text-white rounded-lg py-6 px-5 shadow bg-cover bg-center bg-no-repeat w-full sm:w-[45%] lg:w-[24%]"
                  style={{ backgroundImage: `url(${item.bgImg})` }}
                >
                  <h3 className="text-lg font-semibold">{item.text}</h3>
                  <p className="text-4xl font-[500]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex flex-col lg:flex-row justify-between gap-4 overflow-hidden">
            {/* Main Content - Table and Chart */}
            <div className="w-full lg:w-[75%] flex flex-col overflow-hidden">
              {/* Table Section */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col min-h-0">
                <div className="overflow-auto flex-1">
                  <table className="w-full text-xs table-fixed">
                    <thead className="bg-[#E8E8E8] sticky top-0">
                      <tr className="border-b border-gray-200">
                        <th className="px-3 py-3 text-left font-semibold text-gray-700 w-[17%] whitespace-nowrap">
                          Quelle
                        </th>
                        <th className="px-3 py-3 text-left font-semibold text-gray-700 w-[10%] whitespace-nowrap">
                          Typ
                        </th>
                        <th className="px-3 py-3 text-left font-semibold text-gray-700 w-[13%] whitespace-nowrap">
                          Datenqualität
                        </th>
                        <th className="px-3 py-3 text-left font-semibold text-gray-700 w-[13%] whitespace-nowrap">
                          Relevanz
                        </th>
                        <th className="px-3 py-3 text-left font-semibold text-gray-700 w-[13%] whitespace-nowrap">
                          Zuverlässigkeit
                        </th>
                        <th className="px-3 py-3 text-left font-semibold text-gray-700 w-[20%] whitespace-nowrap">
                          Zuletzt geprüft
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-3 py-2.5 text-gray-900 truncate whitespace-nowrap">
                            {row.quelle}
                          </td>
                          <td className="px-3 py-2.5 text-gray-900 whitespace-nowrap">
                            {row.typ}
                          </td>
                          <td className="px-3 py-2.5 text-gray-900 whitespace-nowrap">
                            {row.datenqualität}
                          </td>
                          <td className="px-3 py-2.5 text-gray-900 whitespace-nowrap">
                            {row.relevanz}
                          </td>
                          <td className="px-3 py-2.5 text-gray-900 whitespace-nowrap">
                            {row.zuverlässigkeit}
                          </td>
                          <td className="px-3 py-2.5 text-gray-900 whitespace-nowrap">
                            {row.zuletzt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Chart Section */}
              <div className="py-2 mt-3">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart
                    data={chartData}
                    margin={{ top: 25, right: 5, left: 0, bottom: 5 }}
                  >
                    {/* Only horizontal grid lines like in image */}
                    <CartesianGrid
                      strokeDasharray="0"
                      stroke="#e5e7eb"
                      horizontal={true}
                      vertical={false}
                      strokeWidth={2}
                    />

                    {/* XAxis - Clean styling like in image */}
                    <XAxis
                      dataKey="x"
                      stroke="#6b7280"
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      axisLine={false}
                      tickLine={false}
                      tickMargin={10}
                    />

                    {/* YAxis - Show numbers on left side like in image */}
                    <YAxis
                      stroke="#6b7280"
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      axisLine={false}
                      tickLine={false}
                      domain={[0, 40]}
                      tickMargin={10}
                      width={30}
                      tickCount={5}
                      ticks={[0, 10, 20, 30, 40]}
                    />

                    {/* Tooltip */}
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "6px",
                        fontSize: "11px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      cursor={{ stroke: "#e5e7eb", strokeWidth: 1 }}
                    />

                    {/* Custom Legend with colored squares only - no icons */}
                    <Legend
                      verticalAlign="top"
                      align="right"
                      height={40}
                      iconSize={0}
                      formatter={(value, entry) => (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            marginLeft: "10px",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#374151",
                          }}
                        >
                          <span
                            style={{
                              display: "inline-block",
                              width: "12px",
                              height: "12px",
                              backgroundColor: entry.color,
                              marginRight: "6px",
                              borderRadius: "2px",
                            }}
                          />
                          {value}
                        </span>
                      )}
                    />

                    {/* Line with dots/nodes like in image */}
                    <Line
                      type="monotone"
                      dataKey="Datenqualität"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: "#3b82f6", r: 4, strokeWidth: 0 }}
                      activeDot={{ r: 6, fill: "#3b82f6" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Zuverlässigkeit"
                      stroke="#008080"
                      strokeWidth={2}
                      dot={{ fill: "#008080", r: 4, strokeWidth: 0 }}
                      activeDot={{ r: 6, fill: "#008080" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Section - Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0 lg:h-[350px] bg-white rounded-lg shadow-lg p-4 overflow-y-auto">
              <h3 className="text-base font-bold text-black mb-3">
                KI-Empfehlungen
              </h3>

              <ul className="space-y-2 w-full text-[12px] text-gray-700 font-[600] flex flex-col gap-2.5">
                <li className="flex gap-2 justify-start items-center">
                  <div className="text-blue-500 h-[5px] w-[5px] rounded-full bg-black font-bold"></div>
                  <span className="w-[80%]">
                    Die Quelle MQTT_Extruder01 liefert stabile Echtzeitdaten.
                  </span>
                </li>
                <li className="flex gap-2 justify-start items-center">
                  <div className="text-blue-500 h-[5px] w-[5px] rounded-full bg-black font-bold"></div>
                  <span className="w-[80%]">
                    OPC_Silo01 weist Datenlücken auf (3 % fehlende Werte).
                  </span>
                </li>
                <li className="flex gap-2 justify-start items-center">
                  <div className="text-blue-500 h-[5px] w-[5px] rounded-full bg-black font-bold"></div>
                  <span className="w-[80%]">
                    Prüfen Sie die Zeitzonen-Synchronisation bei REST_EnergyAPI.
                  </span>
                </li>
                <li className="flex gap-2 justify-start items-center">
                  <div className="text-blue-500 h-[5px] w-[5px] rounded-full bg-black font-bold"></div>
                  <span className="w-[80%]">
                    Datenquelle CSV_Import_QC enthält Ausreißerwerte.
                  </span>
                </li>
              </ul>

              <p className="text-xs text-gray-700 font-[600] mt-5">
                Hinweis: Eine höhere Datenfrequenz verbessert die
                Modellgenauigkeit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataConfiguration;
