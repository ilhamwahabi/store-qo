import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import { AxiosResponse } from 'axios';

import { instance } from '../services/api';
import { IStores } from '../interfaces/store';

import { Stores } from '../components/Stores';
import { Store } from '../components/Store';
import { StoreItem } from '../components/StoreItem';
import { Title } from '../components/Title';

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

      <Title>Store-Qo</Title>
      <Stores>
        {data.data.results.map(store => (
          <Link href={`/store/${store.id}`}>
            <Store key={store.id}>
              <StoreItem>{store.name}</StoreItem>
              <StoreItem>{store.type}</StoreItem>
              <StoreItem>
                Rating:
                {store.price_rating}
              </StoreItem>
            </Store>
          </Link>
        ))}
      </Stores>
    </div>
  );
};

export default Home;
