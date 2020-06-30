import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';
import { AxiosResponse } from 'axios';

import { instance } from '../../services/api';
import { IStoreDetail } from '../../interfaces/store';

import { Layout } from '../../components/Layout';

const fetchStores = (url: string) => instance.get(url);

const StoreDetail = () => {
  const { query } = useRouter();
  if (!query.id) return null;

  const { data, error } = useSWR<AxiosResponse<IStoreDetail>>(`/stores/${query.id}`, fetchStores);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const {
    address, description, name, image, owner, phone, price_rating,
  } = data.data;

  return (
    <Layout>
      <Head>
        <title>
Store-Qo |
          {name}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{owner}</p>
        <p>{phone}</p>
        <p>{address}</p>
        <p>{price_rating}</p>
        <p>{description}</p>
      </div>
    </Layout>
  );
};

export default StoreDetail;
