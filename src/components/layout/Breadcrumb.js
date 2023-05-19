import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BiHome, BiLeftArrowCircle, BiRightArrow } from 'react-icons/bi'


function Breadcrumb({title}){
    const router=useRouter();
    console.log('router',router.query);

    return(
        <div className='my-2 bg-light d-flex justify-content-between align-items-center'>
                <div className='d-flex aligh-items-center gap-1'>
                    <div className="mx-2 d-flex align-items-center">
                        <Link href="/"className='text-decoration-none text-black'>
                            <BiHome size={28}/>
                        </Link>
                        <BiRightArrow size={12}/>
                    </div>
                    <h4 className="text-center py-t text-uppercase">{title}</h4>
                </div>
        <div className="px-2">
            <Link href="/"className="text-decoration-none text-black" onClick={()=>router.back()}>
                <BiLeftArrowCircle size={28}/>
            </Link>

        </div>

        </div>
    )
}
export default Breadcrumb