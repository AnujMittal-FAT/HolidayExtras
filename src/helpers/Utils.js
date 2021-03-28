import React from "react";
export default {
  async sendApiRequest(url, method, setauth, body) {
    const requestOptions = {
      method: method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    if (method === "DELETE") {
      delete requestOptions.body;
    }

    if (method === "GET") {
      delete requestOptions.body;
    }

    if (setauth === true) {
      let token = window.user ? window.user.token : "no-token";
      requestOptions.headers["Authorization"] = "Bearer " + token;
    }

    try {
      const response = await fetch(window.apiurl + url, requestOptions);
      let success = true;
      let body = await response.text();
      if (response.status === 204 || response.status === 201) {
        success = true;
        return response.status;
      } else if (response.status !== 200) {
        success = false;
      }

      if (success) {
        const data = JSON.parse(body);
        return data;
      } else {
        if (response.status === 401) {
          throw response.status;
        }
        throw body;
      }
    } catch (e) {
      throw e;
    }
  },
};
