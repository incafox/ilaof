import React from 'react'
import './GoalProgress.min.css'
import './../../../dist/css/circle.css'

export default function GoalProgress({ tiempo, progress }) {
    const claseName = (progress) => {
        progress = progress/100
        progress = Math.trunc(75*progress)


        return `c100 p${progress} big`
    }
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="156.674" height="156.632" viewBox="0 0 156.674 156.632">
                <defs>

                </defs>
                <g id="Grupo_1319" data-name="Grupo 1319" transform="translate(-867.544 -497.167)">
                    <g id="Graphic" transform="translate(867.544 497.167)">
                        <g id="Shape" transform="translate(0 0)">
                            <path id="Scores_lines" data-name="Scores lines" class="clsGoal-3" d="M55.181,111.252h0v-1.568h.309l.009,1.568h-.317ZM67.8,109.815h0l-.354-1.527.3-.071.363,1.526-.069.016-.24.056Zm11.965-4.273h0l-.693-1.406.277-.138.7,1.4-.285.142Zm10.673-6.877h0l-.994-1.213.239-.2,1,1.207-.073.061-.172.141Zm8.853-9.118h0l-1.242-.958.188-.246,1.247.951-.185.241-.009.011Zm6.558-10.873h0l-1.426-.651.127-.281,1.43.643-.026.057-.105.232Zm3.913-12.086h0l-1.537-.308c.022-.108.043-.214.06-.3l1.539.3,0,.026-.057.286Zm-.5-12.611h0c0-.092-.006-.192-.01-.306l1.568-.054q.005.154.01.308v.007l-1.567.045ZM1.555,48.34h0L0,48.133v-.009q.021-.153.042-.306l1.553.217c-.012.085-.025.182-.042.306ZM107.5,41.75h0q-.039-.149-.08-.3l1.514-.408.014.05.069.258-1.516.4ZM4.577,36.386h0l-1.466-.556.114-.3,1.463.565-.11.286v0Zm98.43-6.131h0l-.146-.274,1.381-.743.15.282-1.385.735ZM10.248,25.426h0l-1.3-.875.04-.06.139-.2,1.3.882-.173.257Zm85.773-5.339h0l-.2-.232L97,18.82l.058.066.151.173-1.183,1.029ZM18.266,16.02h0L17.2,14.874l.233-.216,1.064,1.152-.169.156-.057.053ZM86.9,11.743h0l-.251-.181.913-1.275.061.044.2.142-.92,1.269ZM28.184,8.678h0L27.4,7.32l.067-.039.208-.119.776,1.363-.267.153Zm47.955-3h0l-.282-.117.6-1.449.25.1.038.016.006,0-.608,1.445Zm-36.631-1.9h0l-.453-1.5.305-.091.445,1.5-.3.089Zm24.8-1.538h0L64,2.188,64.257.641l.014,0,.3.05-.263,1.546Zm-12.64-.654h0l-.1-1.565L51.885,0l.091,1.566-.3.018h-.008Z" transform="translate(0 83.645) rotate(-49)" />
                            <g id="Button" transform="translate(85.111 26.623)">
                            </g>
                            <text id="Text" class="clsGoal-5" transform="translate(49.456 84.833)"><tspan x="13.14" y="9">{tiempo} min</tspan></text>
                            <text id="Time_Spent" data-name="Time Spent" class="clsGoal-5" transform="translate(46.766 67.398)"><tspan x="14.729" y="9">Tiempo</tspan></text>
                            <text id="Min" class="clsGoal-6" transform="translate(43.456 113.833)"><tspan x="1.765" y="16">M</tspan></text>
                            <text id="Max" class="clsGoal-7" transform="translate(97.456 113.833)"><tspan x="-0.234" y="21">M</tspan></text>
                        </g>
                        <g id="Text-2" data-name="Text" transform="translate(13.832 15.018)">
                            <text id="Text-3" data-name="Text" class="clsGoal-8" transform="translate(15.624 100.815)"><tspan x="1.5" y="5">0</tspan></text>
                            <text id="Text-4" data-name="Text" class="clsGoal-8" transform="translate(0 34.816)"><tspan x="4.606" y="5">25</tspan></text>
                            <text id="Text-5" data-name="Text" class="clsGoal-8" transform="translate(55.624 -0.185)"><tspan x="6" y="5">50</tspan></text>
                            <text id="Text-6" data-name="Text" class="clsGoal-8" transform="translate(114.641 35.443)"><tspan x="3.822" y="5">75</tspan></text>
                            <text id="Text-7" data-name="Text" class="clsGoal-8" transform="translate(112.624 104.815)"><tspan x="-4.5" y="0">100</tspan></text>
                        </g>
                    </g>
                    <image id="trofeo" width="26" height="26" transform="translate(961 611)" href="data:image/png;base64,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" />
                </g>
            </svg>
            <div class={claseName(progress)}>
                <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                </div>
            </div>

        </div >
    )
}