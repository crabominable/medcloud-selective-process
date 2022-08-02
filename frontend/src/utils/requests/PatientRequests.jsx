import AxiosHTTP from '../Axios';

const LOCAL = 'http://localhost:3001';

class PatientRequests {
  createPatient = async (payload) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/patients`,
      method: 'POST',
      body: {
        ...payload,
      },
    });
    return response;
  };

  getAllPatients = async () => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/patients`,
      method: 'GET',
    });
    return response;
  };

  updatePatient = async ({ id, data }) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/patients/${id}`,
      method: 'PUT',
      body: {
        ...data,
      },
    });
    return response;
  };

  deleteUser = async (id) => {
    const response = await AxiosHTTP.Request({
      url: `${LOCAL}/patients/${id}`,
      method: 'DELETE',
    });
    return response;
  };
}

export default (new PatientRequests());
