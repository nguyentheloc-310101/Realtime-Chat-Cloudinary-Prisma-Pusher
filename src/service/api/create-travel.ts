'use server';
import axios from 'axios';

interface IPlaceAdd {
  name: string;
  location: string;
  description: string;
}

export async function createTravel(param: IPlaceAdd) {
  try {
    await axios({
      url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${process.env.NEXT_PUBLIC_API_TRAVEL}`,
      method: 'POST',
      data: param,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  } catch (e) {
    console.error('Error Account Create account:', e);
    return null;
  }
}
