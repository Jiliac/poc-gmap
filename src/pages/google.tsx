import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow text-black">
        <h1 className="text-2xl font-semibold text-center mb-4">Address Form</h1>
        <form>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
              onChange: (value) => console.log(JSON.stringify(value)),
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
        </form>
      </div>
    </div>
  );
};

export default Home;
