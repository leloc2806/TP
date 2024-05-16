import Image from 'next/image';
import Link from 'next/link';
import flattenAttributes from '../lib/utils';
import MotionHeader from './motionHeader';

async function fetchLogo() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/header-logo?populate=deep,2`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
  catch(error){
      // Handle errors here, such as logging or displaying an error message
      console.error("Error fetching slider data:", error.message);
      throw error; // Re-throw the error to be handled by the caller if needed
  }
}

export default async function Header() {

  const data = await fetchLogo();
  const Logos = flattenAttributes(data);

  const logoWhite = Logos.whiteLogo.url;
  const logoBlack = Logos.blackLogo.url;

  return (
    <MotionHeader className={`header show`}>
      <Link href={`/`} className="logo absolute">
        <Image className={`logo-white`} src={`${process.env.NEXT_PUBLIC_API_URL}${logoWhite}`} alt={"logo"} width={500} height={500} />
        <Image className={`logo-black`} src={`${process.env.NEXT_PUBLIC_API_URL}${logoBlack}`} alt={"logo"} width={500} height={500} />
      </Link>

    </MotionHeader>
  );
}
