import axios from 'axios'
import useSWR, { KeyedMutator } from 'swr'

const useSwrState = <T>(key: string, initialState: T) => {
  const { data, mutate } = useSWR(key)
  return {
    data: (data as T) || initialState,
    mutate: mutate as KeyedMutator<T>,
  }
}
const businessAccount = process.env
  .NEXT_PUBLIC_INSTAGRAM_BUSINESS_ACCOUNT as string
const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN as string

type Instagram = {
  id: string
  media: {
    data: [
      { caption: string; id: string; media_url: string; permalink: string }
    ]
    id: string
  }
  name: string
}

// use, select, insert, update, upsert, delete

// export const useSample = () => useSwrState<boolean>('sample', false)
export const useInstagram = () => {
  const { data, error } = useSWR(
    'https://graph.facebook.com/v12.0/' +
      businessAccount +
      '?fields=name%2Cmedia.limit(30)%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Cpermalink%7D&access_token=' +
      accessToken,
    axios,
    { revalidateOnFocus: false }
  )
  if (error) console.log({ error })
  console.log('テスト')
  return {
    data: data?.data as Instagram,
  }
}
