import Link from 'next/link.js';
import { fetchDogs } from './actions/fetchDogs.jsx';
import Image from 'next/image.js';

const HomePage = async () => {
  const dogs = await fetchDogs();

  return (
    <div className='flex flex-col'>
      <h3>Home Page</h3>
      <div>
        {dogs?.data?.map((obj, i) => (
          <Link key={i} href={`/available/dogs/${obj?.id}`}>
            <div
              style={{
                width: '300px',
                height: '300px',
                position: 'relative',
              }}
            >
              <Image
                src={obj?.attributes?.photos[0]}
                alt={`${obj?.attributes?.name}`}
                fill
                sizes='300px'
                style={{ objectFit: 'cover' }}
                priority={true}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
