import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  withCredentials: false,
  headers: {
    Authorization:
      "Bearer ojAd0RnETYRCabuYDDecWKEPkn6LaANp8c9v1dbmWxxL7q1tHpvZRL4y5hx5e0zuACpfe2tuvgX7KT22nnjg84ls7z9bl7aPVQGmKtXoI4ut6KmOtPJJdnn7HQ_aZHYx",
  },
});
