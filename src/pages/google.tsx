import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Home: React.FC = () => {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!selectedAddress) {
      alert("Please select an address");
      return;
    }

    const response = await fetch("/api/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address: selectedAddress }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow text-black">
        <h1 className="text-2xl font-semibold text-center mb-4">Address Form</h1>
        <form>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
              onChange: (value) => setSelectedAddress(value?.label as string),
              styles: {
                option: (provided) => ({
                  ...provided,
                  color: "black",
                  backgroundColor: "white",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "black",
                }),
              },
            }}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 w-full py-2 px-4 btn btn-primary btn-lg"
          >
            Validate Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
