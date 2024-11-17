import { wixClientServer } from '@/lib/server/wix-client-server';
import Image from 'next/image';
import Link from 'next/link';

export const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const res = await wixClient.collections.queryCollections().find();
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className='flex gap-4 md:gap-8'>
        {res.items.map((e) => {
          return (
            <Link
              href={`/list?cat=${e.slug}`}
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              key={e._id}
            >
              <div className='relative bg-slate-100 w-full h-96'>
                <Image
                  src={e.media?.mainMedia?.image?.url || ''}
                  alt=''
                  fill
                  sizes='20vw'
                  className='object-cover'
                />
              </div>
              <h1 className='mt-8 font-light text-xl tracking-wide'>
                {e.name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
