import React, { useEffect, useState, useRef } from 'react'
import styles from "./rangeSlider.module.scss"
import PropTypes, { InferProps } from 'prop-types';

const RangeSliderProps = {
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func
}

export default function RangeSlider({ min, max, onChange }: InferProps<typeof RangeSliderProps>): JSX.Element {
    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMinVal] = useState(max)
    const minValRef = useRef<HTMLInputElement>(null)
    const maxValRef = useRef<HTMLInputElement>(null)
    const range = useRef<HTMLDivElement>(null)

    return (
        <div>
            <input type="range" min="0" max="" />
            <input type="range" min="0" max="" />

        </div>
    )
}
