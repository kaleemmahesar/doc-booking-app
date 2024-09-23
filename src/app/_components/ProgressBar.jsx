
"use client"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"

function ProgressBar({pvalue}) {
    console.log(pvalue)
    return (
        <Progress value={pvalue} />
    )
}

export default ProgressBar