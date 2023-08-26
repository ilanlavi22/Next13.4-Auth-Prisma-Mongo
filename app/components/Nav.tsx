'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/profile.png';

export const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav className='flex items-center justify-between bg-white py-3 px-5 relative z-10'>
      <Link href='/'>
        <h1 className='font-bold text-4xl tracking-tight inline'>Auth</h1>
      </Link>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4 gap-2'>
          {(session && (
            <>
              <Link href='/dashboard'>Dashboard</Link>
              <div>
                <button onClick={() => signOut()}>Sign Out</button>
              </div>

              <Link
                href='/dashboard'
                className='group w-14 h-14 rounded-full relative'
              >
                <Image
                  src={session?.user?.image || profilePic}
                  fill
                  className='object-cover rounded-full  group-hover:translate-y-1.5 ease-linear duration-300'
                  alt={session?.user?.name || 'user'}
                />
              </Link>
            </>
          )) || (
            <>
              <Link
                href='/login'
                className='font-medium text-[0.9rem] tracking-wide underline underline-offset-[15px] decoration-2 decoration-transparent hover:decoration-black hover:underline-offset-[8px] ease-out duration-150'
              >
                Login
              </Link>
              <Link
                href='/register'
                className='font-medium text-[0.9rem] tracking-wide underline underline-offset-[15px] decoration-2 decoration-transparent hover:decoration-black hover:underline-offset-[8px] ease-out duration-150'
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      <div className='absolute bottom-[-17px] z-0'>
        <svg width='205' height='17' fill='none'>
          <g filter='url(#filter0_d_1_10)'>
            <path
              d='M32.0238 9L4 0H63.5506H116.095H140.616H172.143L144.119 9L116.095 0L88.0714 9L63.5506 0L32.0238 9Z'
              fill='white'
            />
            <path
              d='M60.0476 9L32.0238 0H91.5744H144.119H168.64H200.167L172.143 9L144.119 0L116.095 9L91.5744 0L60.0476 9Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_1_10'
              x='0'
              y='0'
              width='204.167'
              height='17'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_1_10'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_1_10'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </div>
    </nav>
  );
};
