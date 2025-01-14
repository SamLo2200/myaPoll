import useProjectVersion from '@/hooks/use-project-version';
import Image from 'next/image';

const AppCreditSection = () => {
  const currentVersion = useProjectVersion();
  return (
    <div className='flex select-none self-end'>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-[0.7rem]'>MyaPoll {currentVersion}</div>
        <div className='text-[0.6rem]'>Created by No.159</div>
        <div className='text-[0.6rem]'>Sawa</div>
      </div>
      <div>
        <a
          className='flex place-items-center p-2'
          href='https://github.com/sawaYch'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className='rounded-full'
            src='/avatar.png'
            alt='author'
            width='28'
            height='28'
          />
        </a>
      </div>
    </div>
  );
};

export default AppCreditSection;
