/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';
import { singleBlogI } from '@/api-endpoints/blog/blog.interface'
import { getBlog } from '@/api-endpoints/blog/blog.api'
import GeneralLayout from '@/layouts/generalLayout'
import style from '@/styles/blog.module.scss'
import { AiOutlineEye } from 'react-icons/ai'

interface Props {
    blogPost: singleBlogI
}

const ReadBlog: NextPage<Props> = () => {
    const router = useRouter();
    const url = router.query.url as string

    const { data, isLoading, error } = useQuery(['blogPost'], async () => {
        const response = await getBlog(url)
        return response
    });
    const sanitizedData = (html: any) => ({
        __html: DOMPurify.sanitize(html)
    })
    return (
        <GeneralLayout>
            <div className="afri-container md:px-24">
                <h1 className='text-xl md:text-2xl xl:text-3xl font-semibold capitalize mt-16'>{data?.post.title}</h1>
                <div className='flex justify-between mt-3'>
                    <div className='flex gap-3'>
                        {data && data.post.tags.map((tag) => {
                            return <div key={tag} className="bg-light_green text-primary_green px-3 py-1 rounded-3xl">{tag}</div>
                        })}
                    </div>
                    <div>
                        <div className='flex gap-3 items-center'><AiOutlineEye />{data?.post.views}</div>
                        <div></div>
                    </div>
                </div>

                <div className={`${style.post_cover} relative h-fit w-full my-10 md:my-20`}>
                    {data?.post.cover_image && <Image alt={data?.post.title || ''} src={data?.post.cover_image || ''} fill />}
                </div>
                <div className="text-xl mb-16" dangerouslySetInnerHTML={sanitizedData(data?.body.message || '')}
                />
            </div>
        </GeneralLayout>
    );
};

export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export async function getStaticProps({ params }: { params: { url: string } }) {
    console.log({ url: params.url })
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['blogPost', params.url], () => {
        console.log({ fgx: params.url });
        return getBlog(params.url)
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}


export default ReadBlog
