import GeneralLayout from '@/layouts/generalLayout'
import Image from 'next/image'
import comingImage from "@/assets/coming-soon.png"
import Link from 'next/link'


const ComingSoon = () => {
    return (
        <GeneralLayout>
            <div className="w-full flex flex-col h-full items-center justify-center min-h-[80vh] lg:min-h-[100vh]">
                <span>
                    <Image src={comingImage} alt='coming soon'  height={comingImage?.height} width={comingImage?.width} />
                </span>
                <h1 className='text-black text-2xl lg:text-[40px] mt-6 inter '>
                    Page will be ready soon
                </h1>
                <p className='text-sm mt-6 lg:text-base text-black mx-auto max-w-[512px] px-4'>
                    This page is currently under construction and will be available soon.
                    We’ll email you once it goes live. Thank you
                </p>
                <div className="mt-4 mb-8 mx-auto w-fit">
                    <Link href="/" className='h-[48px] w-[278px] rounded-[8px] flex items-center justify-center border border-[#0D5520] text-[#0D5520] text-base cursor-pointer font-semibold'>
                    Back to homepage
                    </Link> 
            </div>



            </div>
        </GeneralLayout>
    )
}

export default ComingSoon
