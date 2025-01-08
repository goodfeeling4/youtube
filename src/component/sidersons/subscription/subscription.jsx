// import React from 'react'

export default function Subscription() {
    return (
        <div className="dark:invert mx-4 grid gap-4">
            <span className="text-lg font-bold cursor-pointer">Subscription</span>
            <div className="flex gap-4 cursor-pointer">
                <img id="img" draggable="false" className="rounded-full" alt="" height="24" width="24" src="https://yt3.ggpht.com/eRB6oijQ30Os9V2O2ZfPMsPtZElNxANfcP0j8jP0V2x7IBhPX_xCsIf_tdFS4WSlkmcSqBrE=s88-c-k-c0x00ffffff-no-rj"></img>
                <span> English Speeches</span>
            </div>
            <div className="flex gap-4 cursor-pointer">
                <img id="img" draggable="false" alt="" height="24" className="rounded-full" width="24" src="https://yt3.ggpht.com/WESTsFOeL30onSDHqsb2irpv1dGyxfip1dmwTAam1nRSbgTkgBlWj95RcqDEtf3eX6-jDwhPSQ=s88-c-k-c0x00ffffff-no-rj"/>
                <span>Nouman Ali Khan</span>
            </div>
        </div>
    )
}
