import axios from 'axios';
import { API_ROOT, API_KEY } from './config';

export enum ResortType {
  'NA_Alpine' = 'NA_Alpine', // North America Apline
  'XC' = 'XC', // Cross country
  'Intl' = 'Intl', // International
}

export type ResortData = {
  id: string;
  resortName: string;
  state: string; // Two letter state abbr.
  reportDateTime: string; // Date/Time of Report Format: YYYY-MM-DD HH:ii:ss
  resortType: ResortType;
  newSnowMin: string; // Minimum new snow in last 24 hours, unit=inches
  newSnowMax: string; // Maximum new snow in last 24 hours, unit=inches
  avgBaseDepthMin: string; // Minimum Average Base Depth , unit=inches
  avgBaseDepthMax: string; // Maximum Average Base Depth , unit=inches
};

export type GetResortsParams = {
  region?: string;
  state?: string;
};

export type GetResortsResult = {
  data: {
    apiVersion: string;
    totalItems: number;
    items: ResortData[] | null;
  }
};

export default class Resort {
  /**
   * Return the resorts with the highest amount of snowfall
   * Will only return 3 resorts with the free api key
   */
  public static async getResortList(input: GetResortsParams): Promise<GetResortsResult> {
    let paramString = '';
    if (input.region) {
      paramString = `&regions=${input.region}`;
    }
    if (input.state) {
      paramString = `&states=${input.state}`;
    }
    const result: GetResortsResult = await axios.get(
      `${API_ROOT}/getSnowReport.php?apiKey=${API_KEY}${paramString}&action=top20`,
    );
    return result;
  }
}
