import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

async function RightSidebar() {


  return (
    <section className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 flex-col justify-start'>
        <Link href='/resume'>

        <h3 className='text-heading4-medium text-light-1'>
         Generate Resume
        </h3>
        </Link>

        
      </div>

      <div className='flex flex-1 flex-col justify-start'>
        <h3 className='text-heading4-medium text-light-1'>Similar Minds</h3>
       
      </div>
    </section>
  );
}

export default RightSidebar;
