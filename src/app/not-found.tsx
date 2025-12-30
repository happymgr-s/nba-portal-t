import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <div className="w-full h-max flex justify-center items-center">
        <div className="flex flex-col items-center">
          <Image src={'/not_found_image.png'} alt="not_found_image" width={250} height={250} />
          <Link
            href={`/`}
            className="font-roboto font-semibold text-xl text-[#245CEB] border-b-2 border-[#245CEB] hover:opacity-75 focus:opacity-75"
          >
            HOME
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
