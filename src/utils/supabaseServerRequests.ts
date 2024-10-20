import { NextApiRequest, NextApiResponse } from 'next'
import createClient from './supabaseApi'

export const getAdvert = async ({id}: any) => {
  const supabase = createClient();
  
  try {
    const { data, error } = await supabase
      .from('adverts')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching advert:', error);
    return null;
  }
}

export const getAdverts = async ({category, limit, skip}: any) => {
  const supabase = createClient();

  try {
    let query = supabase
      .from('adverts')
      .select('*')
      .eq('category', category)
      .eq('status', true)
      .limit(limit)

    if (skip) {
      query = query.not('id', 'eq', skip)
    }

    const { data, error } = await query

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching adverts:', error);
    return null;
  }
}
