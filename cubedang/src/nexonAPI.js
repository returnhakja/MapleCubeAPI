import axios from "axios";

export const nexonAPI = (cnt, years) => {
  const key =
    "apikey";
  const result = Promise.all(
    years?.map(async (date) => {
      return axios
        .get(
          `/openapi/maplestory/v1/cube-use-results?count=${cnt}&date=${date}`,
          {
            headers: {
              Authorization: key,
            },
          }
        )
        .then((res) => res.data)
        .catch((error) => console.log(error));
    })
  );

  return result;
};