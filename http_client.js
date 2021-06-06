const axios = require("axios");

/**
 * Fetch URL
 * @param {{}} options - The options for AXIOS
 * @return {Promise|{error: boolean, success: number, data: {any}}} - Parsed Response with status
 */
exports.fetch_data = async (options = {}) => {
  try {
    const res = await axios({
      method: "get",
      timeout: 8000,
      headers:{
        "Content-Type": "application/json",
      },
      // merge options
      ...options,
    });

    if (res.status === 200 ) {
      return {
        error: false,
        status: "OK",
        data: res.data,
      };

    } else throw new Error();

  } catch (e) {
    return {
      error: true,
      status: 500,
      data: {},
    };
  }
}
