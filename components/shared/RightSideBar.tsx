import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

async function RightSidebar() {


  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start mt-[25px]'>
        <Link href='https://resume-io-inky.vercel.app/'
        className={`leftsidebar_link bg-primary-500`}
        >

        <h3 className='text-heading4-medium text-light-1'>
         Generate Resume
        </h3>
        </Link>

        
      </div>

      
    </section>
  );
}

export default RightSidebar;
