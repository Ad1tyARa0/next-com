// 'use client';
import { wixClientServer } from '@/lib/server/wix-client-server';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import DOMPurify from 'isomorphic-dompurify';
interface ProductListProps {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}

export const ProductList: FC<ProductListProps> = async ({
  categoryId,
  limit,
  searchParams,
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq('collectionIds', categoryId)
    .limit(limit || 20)
    .find();

  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      {res.items.map((e) => {
        return (
          <Link
            href={'/' + e.slug}
            className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
            key={e._id}
          >
            <div className='relative h-80'>
              <Image
                src={e.media?.mainMedia?.image?.url || ''}
                alt='hand'
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md  z-10 hover:opacity-0 transition-opacity duration-300 ease'
              />

              {e.media?.items && (
                <Image
                  src={e.media?.items[1]?.image?.url || ''}
                  alt='hand'
                  fill
                  sizes='25vw'
                  className='absolute object-cover rounded-md'
                />
              )}
            </div>

            <div className='flex justify-between'>
              <span className='font-medium'>{e.name}</span>
              <span className='font-semibold'>{e.price?.price}</span>
            </div>

            {e.additionalInfoSections && (
              <div
                className='text-sm text-gray-500'
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    e.additionalInfoSections.find((e) => e.title === 'Material')
                      ?.description || ''
                  ),
                }}
              ></div>
            )}
            <button
              // onClick={(e) => e.stopPropagation()}
              className='rounded-2xl ring-1 ring-primary w-max text-primary py-2 px-4 text-xs hover:bg-primary hover:text-white'
            >
              Add to Cart
            </button>
          </Link>
        );
      })}
    </div>
  );
};
