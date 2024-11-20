import axios from 'axios';
import { fetchInProgress, fetchSuccess, fetchError } from './tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchInProgress());
    const response = await axios.get('/tasks');
    dispatch(fetchSuccess(response.data));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};
