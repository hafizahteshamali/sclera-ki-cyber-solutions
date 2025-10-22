import { useState } from "react";

const SelectSource = () => {
  const [selectedSource, setSelectedSource] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleContinue = () => {
    if (!selectedSource) {
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
    }, 2000);

      return;
    }
    // Continue logic here
    console.log("Selected source:", selectedSource);
  };

  const handleCancel = () => {
    // Cancel logic here
    console.log("Cancelled");
    setSelectedSource(null)
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="w-full">
        {/* Header */}
        <div className="text-left mb-4 lg:mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
            Quelle wählen
          </h1>
        </div>

        {/* Source Options */}
        <div className="mb-8 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center w-full">
          {/* MQTT Option */}
          <div
            className={`border rounded-lg w-[95%] bg-white mx-auto lg:mx-0 lg:w-[45%] p-4 cursor-pointer transition-all ${
              selectedSource === "mqtt"
                ? "border-blue-500"
                : "border-white"
            }`}
            onClick={() => {
              setSelectedSource("mqtt");
              setShowError(false);
            }}
          >
            <div className="flex justify-center items-start gap-3 h-[300px] w-[100%]">
              <div className="flex flex-col justify-center items-center h-full w-full gap-2">
                <img src="/assets/images/dashboard/wifi.png" alt="" />
                <h3 className="font-semibold text-black text-4xl mb-1">
                  MQTT
                </h3>
                <p className="text-black text-sm">
                  Broker-basierte Telemente
                </p>
              </div>
            </div>
          </div>

          {/* OPC UA Option */}
          <div
            className={`border rounded-lg bg-white w-[95%] mx-auto lg:mx-0 lg:w-[45%] p-4 cursor-pointer transition-all ${
              selectedSource === "opcua"
                ? "border-blue-500"
                : "border-white"
            }`}
            onClick={() => {
              setSelectedSource("opcua");
              setShowError(false);
            }}
          >
            <div className="flex justify-center items-start gap-3 h-[300px] w-[100%]">
              <div className="flex flex-col justify-center items-center h-full w-full gap-2">
                <img src="/assets/images/dashboard/upc.png" alt="" />
                <h3 className="font-semibold text-black text-4xl mb-1">
                UPC UA
                </h3>
                <p className="text-black text-sm">
                Industrie-Standard mit Server-Endpoint
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {showError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm text-left">
              Bitte wählen Sie einen Quellentyp.
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end items-center w-full gap-3">
          <button
            onClick={handleCancel}
            className="w-full lg:w-[22%] py-3 px-4 border border-gray-300 text-gray-700 rounded-lg bg-[#EBEBEB] hover:bg-gray-50 transition-colors font-medium"
          >
            Abbrechen
          </button>
          <button
            onClick={handleContinue}
            className="w-full lg:w-[22%] py-3 px-4 bg-[#007BFF] text-white rounded-lg hover:bg-[#007bffcc] transition-colors font-medium"
          >
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectSource;