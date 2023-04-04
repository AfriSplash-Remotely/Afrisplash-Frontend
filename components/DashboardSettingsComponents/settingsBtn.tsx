import React from 'react'
import { useRouter } from 'next/router'
import PropTypes, { InferProps } from 'prop-types';
import SettingBtnComp from './SettingBtnComp';

const SettingsBtnProps = {
    btnItem: PropTypes.array.isRequired
}
export default function SettingsBtn({ btnItem }: InferProps<typeof SettingsBtnProps>): JSX.Element {
    const router = useRouter()

    return (
        <div>
            <ul className='flex  flex-col'>
                {btnItem.map((btn) => {
                    return (
                        <SettingBtnComp
                            key={btn.title}
                            title={btn.title}
                            routeLink={btn.routeLink}
                            isActive={router.pathname === btn.routeLink}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
