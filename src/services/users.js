/**
 * Created by Admin on 2018/1/19.
 */
import request from '../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/users?_page=${page}&_limit=5`);
}
