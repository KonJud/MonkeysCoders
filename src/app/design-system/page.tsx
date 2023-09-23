import { Navigation } from "@/ui/components/navigation/Navigation";
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: "Design System",
    description: "description...",
}


export default function DesignSystem() {
    return (
        <>
            <Navigation />
            <div className="">
                Design System
            </div>
        </>
    )
}