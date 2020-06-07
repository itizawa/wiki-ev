import { createContainer } from "unstated-next";
import Axios from "axios";

function appContainer() {
  // API
  async function apiRequest(method, path, params) {
    const res = await Axios[method](`/api${path}`, params);

    if (res.data.ok) {
      return res.data;
    }

    throw new Error(res.data.error);
  }

  async function apiGet(path, params) {
    return apiRequest("get", path, { params });
  }

  async function apiPost(path, params) {
    return apiRequest("post", path, params);
  }

  async function apiPut(path, params) {
    return apiRequest("put", path, params);
  }

  async function apiDelete(path, params) {
    return apiRequest("delete", path, { data: params });
  }

  return { apiGet, apiPost, apiPut, apiDelete };
}

export default createContainer(appContainer);
