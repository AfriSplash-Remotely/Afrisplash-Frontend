import React from 'react'
import Link from 'next/link'
import PropTypes, { InferProps } from 'prop-types';
import styles from 'styles/Settings.module.scss';


const SettingBtnCompProps = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    routeLink: PropTypes.string.isRequired
}
export default function SettingBtnComp({ title, isActive, routeLink }: InferProps<typeof SettingBtnCompProps>): JSX.Element {
    return (
        <>
            <Link href={routeLink}>
                <button
                    className={`rounded-[12px] py-[11px] px-[86px] text-[#0D5520] font-[300] mb-[25px] border border-solid border-[#0D5520]  ${isActive ? `${styles.active}` : undefined} `}
                >
                    {title}
                </button>
            </Link>
        </>
    )
}
