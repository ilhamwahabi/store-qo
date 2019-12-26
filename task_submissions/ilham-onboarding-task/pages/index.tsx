import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { AxiosResponse } from 'axios';

import { instance } from '../services/api';
import { IStores } from '../interfaces/store';
import { Stores } from '../components/Stores';

const fetchStores = (url: string) => instance.get(url);

const Home = () => {
  const { data, error } = useSWR<AxiosResponse<IStores>>('/stores', fetchStores);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Head>
        <title>Store-Qo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Store-Qo</p>
      <Stores>
        {data.data.results.map(store => (
          <p key={store.id}>{store.name}</p>
        ))}
      </Stores>
    </div>
  );
};

export default Home;
