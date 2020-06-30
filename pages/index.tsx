import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useSWR, { useSWRPages } from 'swr';
import { AxiosResponse } from 'axios';

import { instance } from '../services/api';
import { IStores } from '../interfaces/store';

import { Stores } from '../components/Stores';
import { Store } from '../components/Store';
import { StoreItem } from '../components/StoreItem';
import { Title } from '../components/Title';
import { Layout } from '../components/Layout';

const fetchStores = (url: string) => instance.get(url);

const Home = () => {
  const { pages, isLoadingMore, loadMore } = useSWRPages<any, AxiosResponse<IStores>>(
    'stores',
    ({ offset, withSWR }) => {
      const url = `/stores/${offset || '?page=1'}`;
      const { data, error } = withSWR(useSWR(url, fetchStores));

      if (error) return <div>failed to load</div>;
      if (!data) return <div>loading...</div>;

      const { results } = data.data;
      return results.map(store => (
        <Link key={store.id} href={`/store/${store.id}`}>
          <Store key={store.id}>
            <StoreItem>{store.name}</StoreItem>
            <StoreItem>{store.type}</StoreItem>
            <StoreItem>
              <span>Rating: </span>
              {store.price_rating}
            </StoreItem>
          </Store>
        </Link>
      ));
    },
    SWR => SWR.data.data.next && SWR.data.data.next.split('/').slice(-1)[0],
    [],
  );

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    loadMore();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Layout>
      <Head>
        <title>Store-Qo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Store-Qo</Title>
      <Stores>{pages}</Stores>
      {isLoadingMore && <p>loading...</p>}
    </Layout>
  );
};

export default Home;
