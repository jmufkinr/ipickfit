import axios from "axios"

const headers = {
  //'SABIO-AUTH': 'U56LC3BHB'
};

const baseUrl = process.env.REACT_APP_API_URL_BASE + `/hackers`;

export function create(hackerData) {
  const config = {
    method: "POST",
    headers,
    data: hackerData
  };

  return axios(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function readById(id) {
  const config = {
    method: "GET",
    headers
  };

  return axios
    .get(baseUrl + "/" + id, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}
export function readAll() {
  const config = {
    method: "GET",
    headers
  };

  return axios
    .get(baseUrl, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function update(hackerData) {
  const config = {
    method: "PUT",
    headers,
    withCredentials: true,
    data: hackerData
  };

  return axios(`${baseUrl}/${hackerData._id}`, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function del(id) {
  const config = {
    method: "DELETE",
    headers
  };

  return axios(`${baseUrl}/${id}`, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = error => {
  console.log(error);
  return Promise.reject(error);
};