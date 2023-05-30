import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-semibold text-center mb-4">Address Form</h1>
        <form>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            selectProps={{
              onChange: (value) => console.log(value),
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
