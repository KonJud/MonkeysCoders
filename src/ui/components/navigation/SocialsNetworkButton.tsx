import { RiFacebookBoxFill } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid'


import { Button } from "@/ui/design-system/button/Button"
import { SocialNetworkLinks } from "./AppLinks"
import clsx from 'clsx'


interface Props {
    theme?: 'gray' | 'accent' | 'secondary';
    className?: string
}
export const SocialsNetworkButton = ({className, theme = 'accent'}: Props) => {

    const buttonTest = () => {
        console.log("Je refais un test")
    }
    
    const icoList = SocialNetworkLinks.map((socialNetwork) => (
        <Button 
            key={uuidv4()} 
            variant={"ico"}
            iconTheme={theme}
            icon={{icon: 
                socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill
            }}
            action={buttonTest}
        />
    ))

    return (
        <div className={clsx(className, 'flex items-center gap-2.5')}>
            {icoList}
        </div>
    )
}