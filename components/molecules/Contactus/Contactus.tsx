import React from 'react';
import Image from 'next/image';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

import styles from './contactus.module.scss';
import RoundedInput from '@/components/atoms/Input/RoundedInput';
import Button from '@/components/atoms/Button/Button';
import chipper from 'assets/icons/chipper.svg';
import propel from 'assets/icons/Propel.svg';
import nextford from 'assets/icons/nextford.svg';
import panther from 'assets/icons/panther.svg';
import rootlo from 'assets/icons/rootlo.svg';
import safetyWing from 'assets/icons/safetyWing.svg';

const Contactus = (): JSX.Element => {
  const globalCompanies = [
    chipper,
    panther,
    nextford,
    safetyWing,
    rootlo,
    propel,
  ];

  const Globalcompanies = () => {
    return (
      <div className='flex gap-2 justify-between item-center flex-wrap w-full'>
        {globalCompanies.map((item: any, idx: number) => (
          <div
            key={idx}
            className='w-[30%] h-[5rem]'
          >
            <Image
              src={item}
              alt='global companies'
              className='w-full block '
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`${styles.pad} flex `}>
      <form
        className={`${styles.smallPad} bg-white rounded-[24px] shadow-large-contact`}
      >
        <fieldset className='flex gap-7 py-2'>
          <div>
            <label htmlFor='FirstName'>FIRST NAME *</label>
            <RoundedInput
              placeholder=''
              className='w-[100%] rounded-[10px] bg-white border-[1px] border-[#BBBBC3]'
            />
          </div>

          <div>
            <label htmlFor='LastName'>LAST NAME *</label>
            <RoundedInput
              placeholder=''
              className='w-[100%] rounded-[10px] bg-white border-[1px] border-[#BBBBC3]'
            />
          </div>
        </fieldset>

        <fieldset className='py-2'>
          <label htmlFor='Email'>EMAIL *</label>
          <RoundedInput
            placeholder=''
            className='w-[100%] rounded-[10px] bg-white border-[1px] border-[#BBBBC3]'
          />
        </fieldset>

        <fieldset className='py-2'>
          <label htmlFor='Message'>MESSAGE *</label>
          <RoundedInput
            placeholder=''
            className='w-[100%] rounded-[10px] bg-white border-[1px] border-[#BBBBC3]'
          />
        </fieldset>

        <fieldset className='py-2'>
          <label htmlFor='details'> ADDITIONAL DETAILS</label>
          <textarea
            name='details'
            className='resize-none px-4 py-2 w-[100%] h-[8rem] rounded-[10px] bg-white border-[1px] border-[#BBBBC3]'
          />
        </fieldset>

        <div className='flex gap-5 w-full pb-6 pt-8'>
          <Button
            classes={`hover:bg-[#1C1D36] w-[50%]
             rounded-[10px] h-[56px]
              border-[1px] border-[solid #B6BBB2]
              hover:text-white transition 
              `}
          >
            Cancel
          </Button>
          <Button
            classes={`
          hover:bg-white
           border-[1px] 
           border-[solid transparent]
            hover:border-[solid #B6BBB2] 
            hover:text-black transition 
            w-[50%] bg-[#1C1D36] rounded-[10px] 
            h-[56px] text-white
          `}
          >
            Send message
          </Button>
        </div>

        <hr className='' />

        <address className='pb-[2rem] flex flex-col gap-3 not-italic pt-6'>
          <h3 className='pb-3 text-xl font-bold'>Contact Information</h3>
          <p className='flex gap-4'>
            {' '}
            <MapPinIcon className='w-7 h-7' /> 71-75, Shelton Street, London,
            Greater London.
          </p>
          <p className='flex gap-4'>
            {' '}
            <PhoneIcon className='w-7 h-7' />
            +(44) 204 549 9317
          </p>
          <p className='flex gap-4'>
            {' '}
            <EnvelopeIcon className='w-7 h-7' /> hello@afrisplash.com
          </p>
        </address>
      </form>

      <section className={`${styles.smallPad} mt-[6rem] flex flex-col gap-4`}>
        <h2 className='text-xl font-bold'>How Can We Help?</h2>
        <p className='pb-10'>
          Please select a topic below related to your inquiry. If you don’t find
          what you need, fill out our contact form.
        </p>

        <h3 className='text-sm font-bold'>Find & Hire Vetted talents</h3>
        <p>Request a demo from one our conversation specialists.</p>
        <hr />
        <h3 className='text-sm font-bold'>
          Work with us as your dedicated HR Business Partner
        </h3>
        <p>Discover the many ways in which our customers use Afrisplash.</p>
        <hr />

        <h3 className='text-sm font-bold'>
          Join forces with us as a General Partner
        </h3>
        <p>Join our partner program and earn 25% recurring commissions.</p>
        <hr />
        <h4 className='mt-[3rem]'>TRUSTED BY</h4>
        <div>{Globalcompanies()}</div>
      </section>
    </div>
  );
};

export default Contactus;
