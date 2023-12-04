import DashboardCards from "@/components/atoms/DashboardCards/DashboardCards";
import AdminLayout from "@/layouts/adminLayout";
import { useSession } from "next-auth/react";
import { MdOutlineWorkOutline, MdOutlineBusinessCenter, MdMarkChatRead, MdGppBad } from "react-icons/md";


const Candidate = (): JSX.Element => {
    const { data: session } = useSession()
    const strUser = session?.user?.email
    const userName = strUser?.substring(0, strUser.indexOf('@'))
    const cardData = [
        { title: 'Jobs', total: 30, icon: <MdOutlineBusinessCenter size='2rem' />, bgColor: '#D6ECDC' },
        { title: 'Applied', total: 30, icon: <MdOutlineWorkOutline size='2rem' />, bgColor: '#FDF1C9' },
        { title: 'Interviews', total: 30, icon: <MdMarkChatRead size='2rem' />, bgColor: '#C4C4C4' },
        { title: 'Rejected', total: 30, icon: <MdGppBad size='2rem' />, bgColor: '#0D5520' },


    ]

    return (

        <AdminLayout>
            <div>
                <div>
                    <h1 className="text-dark_black font-medium text-lg md:font-bold md:text-2xl lg:text-xl">Hello {userName}</h1>
                    <p className="text-grey_4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum quaerat nemo maxime.</p>
                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {cardData.map((card) => {
                            return <DashboardCards
                                key={card.title}
                                title={card.title}
                                icon={card.icon}
                                total={card.total}
                                bgColor={card.bgColor} />
                        })}

                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}


export default Candidate