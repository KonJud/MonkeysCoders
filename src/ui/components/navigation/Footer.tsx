import { v4 as uuidv4} from 'uuid'

import { Typography } from "@/ui/design-system/typography/Typography"
import { Container } from "../container/Container"
import { FooterLinks } from "./AppLinks"
import { TypeFooterLinks } from '@/types/AppLinks'

import Image from "next/image"
import { ActiveLink } from './ActiveLink'

import { LinkType } from '@/lib/LinkType'
import { SocialsNetworkButton } from './SocialsNetworkButton'


export const Footer = () => {

    
    const currentYear = new Date().getFullYear() // Pour maintenir à jour la date dans le copyRight

    // le map pour gérer les différents liens de navigation qui sont dans le Footer
    const footerLinks = FooterLinks.map((footerLink) => (
        <FooterLink key={uuidv4()} data={footerLink} />
    ))

    return(
        <div className={"bg-gray"}>

            {/* Premier niveau du footer */}
            <Container className={"flex justify-between pt-16"} >

                    {/* Lien pour la redirection à la chaine youtube */}
                    <div className={"flex flex-col items-center gap-1"}>
                        <Typography
                            variant={"caption1"}
                            theme={"white"}
                            weight={"medium"}
                        >
                            Formation Gratuite
                        </Typography>
                        <Typography 
                            variant={"caption3"}
                            theme={"gray"}
                        >
                            Abonne toi à la chaîne
                        </Typography>
                        <a href={"#/"} target={"_blank"}>
                            <Image 
                                src={"/assets/svg/YTB.svg"}
                                alt={"ITSchool | Youtube"}
                                width={229}
                                height={216}
                            />
                        </a>
                    </div>
                    
                    {/* Liens de navigation dans le Footer */}
                    <div className={"text-white flex gap-7"}>
                        {footerLinks}
                    </div>
            </Container>

            {/* Tout dernier niveau du Footer */}
            <Container className={"pt-9 pb-11 space-y-11"} >
                <hr className={"text-gray-800"} />

                {/* CopyRight */}
                <div className={"flex items-center justify-between"}>
                    <Typography
                        variant={"caption4"}
                        theme={"gray"}
                    >
                        {`Copyright © ${currentYear} | Propulsed by Arnaud desportes - Remote monkey SASU`}
                    </Typography>

                    {/* Bouttons Réseau Sociaux */}
                    <div className="">
                        <SocialsNetworkButton theme={"gray"} />
                    </div>
                </div>
            </Container>
        </div>
    )
}


// COMPOSANT POUR MAPER TOUS LES LIENS DU FOOTER AINSI QUE LEURS TITRES
interface FooterLinkProps {
    data: TypeFooterLinks,
}

const FooterLink = ({ data }: FooterLinkProps) => {

    const colomnsLinks = data.links.map((colomnLink) => (
        <div className={""} key={uuidv4()}>
            {colomnLink.type === LinkType.INTERNAL && (
                <ActiveLink href={colomnLink.baseUrl}>{colomnLink.label}</ActiveLink>
            )}
            {colomnLink.type === LinkType.EXTERNAL && (
                <a href={colomnLink.baseUrl}>{colomnLink.label}</a>
            )}
        </div>
    ))

    return(
        <div className={"min-w-[190px]"}>
            <Typography
                theme={"white"}
                variant={"caption2"}
                weight={"medium"}
                className={"pb-5"}
            >
                {data.label}
            </Typography>
            <Typography
                theme={"gray"}
                variant={"caption3"}
                className={"space-y-4"}
            >
                {colomnsLinks}
            </Typography>
        </div>
    )
}