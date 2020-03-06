import React from 'react'
import './expiration.min.css'
export default function ExpirationProgress({dates}) {
    return (
        <svg width="105.205" height="170.333" viewBox="0 0 105.205 107.333">
            <defs>
                <clipPath id="clip-path">
                    <path id="Combined_Shape" data-name="Combined Shape" class="cls-1" d="M4.128.928A.886.886,0,1,1,5.9.928a.886.886,0,1,1-1.769,0ZM0,.928A.907.907,0,0,1,.885,0a.907.907,0,0,1,.885.928.907.907,0,0,1-.885.928A.906.906,0,0,1,0,.928Z" transform="translate(0 0)" />
                </clipPath>
            </defs>
            <g id="Graphics" transform="translate(2 2)">
                <path id="Oval_" data-name="Oval " class="cls-2" d="M10.963,52.623A56.045,56.045,0,0,0,13.408,36.18,54.813,54.813,0,0,0,.923,1.082Q.468.534,0,0" transform="translate(87.797 16.785)" />
                <path id="Oval_2" data-name="Oval " class="cls-3" d="M84.77,14.1A48.945,48.945,0,0,0,50.529,0C22.623,0,0,23.865,0,53.3A55.94,55.94,0,0,0,2.485,69.861" />
                <g id="Icon" transform="translate(42.385 29.941)">
                    <g transform="translate(5.701 9.073)">
                        <path id="Combined_Shape-2" data-name="Combined Shape" class="cls-1" d="M4.128.928A.886.886,0,1,1,5.9.928a.886.886,0,1,1-1.769,0ZM0,.928A.907.907,0,0,1,.885,0a.907.907,0,0,1,.885.928.907.907,0,0,1-.885.928A.906.906,0,0,1,0,.928Z" transform="translate(0 0)" />
                    </g>
                </g>
                <text id="_842k" data-name="842k" class="cls-5" transform="translate(9.515 52.333)"><tspan x="20.379" y="43">{dates.days}</tspan></text>
                <text id="_842k" data-name="842k" class="cls-6" transform="translate(9.515 52.333)"><tspan x="18.379" y="84">Días</tspan></text>
            </g>

        </svg>
    )
}
