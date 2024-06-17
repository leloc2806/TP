import Image from 'next/image';
import Link from 'next/link';
import flattenAttributes from '../lib/utils';
import MotionHeader from '@/app/components/motionHeader';
import NavigationMenu from './navbar/navigation';


async function fetchLogo() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/header-logo?populate=deep,2`, { cache: 'no-store' });
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

async function fetchSocial(){
  try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social?populate=deep,2`);
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


export default async function SideHeader() {

  const data = await fetchLogo();
  const social = await fetchSocial();

  const Logos = flattenAttributes(data);
  const mail = flattenAttributes(social)

  const logoBlack = Logos.blackLogo.url;

  return (
    <MotionHeader
      className={`header black show`}
    >
      <Link href={`/`} className="logo absolute">
        <Image className={`logo-black`} src={`${process.env.NEXT_PUBLIC_API_URL}${logoBlack}`} alt={"logo"} width={Logos.blackLogo.width} height={Logos.blackLogo.height} priority/>
      </Link>
      <NavigationMenu Email={mail.Email} />
    </MotionHeader>
  );
}
