import axios from 'axios';
import { API_ROOT, API_KEY } from './config';

export type ResortData = {
  id: string;
  resortName: string;
  state: string;
  country: string;
  region: string;
  resortType: string;
  package: string;
};

export type GetResortsResult = {
  apiVersion: string;
  totalItems: number;
  items: ResortData[];
};

export default class Resort {
  /**
   * Return all available resorts
   */
  public static async getResortList(): Promise<GetResortsResult> {
    const result: GetResortsResult = await axios.get(
      `${API_ROOT}/getResortList.php?apiKey=${API_KEY}&states=vt`,
    );
    return result;
  }
}
