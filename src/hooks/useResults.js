import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import yelp_data from "../api/yelpData.json";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      // const response = await yelp.get("/search", {
      //   params: {
      //     term: searchTerm,
      //     limit: 50,
      //     location: "san jose",
      //   },
      // });
      //setResults(response.data.businesses);
      setResults(yelp_data.businesses);
    } catch (err) {
      setErrorMessage("something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
