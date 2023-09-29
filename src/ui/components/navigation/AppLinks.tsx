import { RiLinkedinFill, RiYoutubeFill, RiFacebookFill} from 'react-icons/ri'

import { TypeAppLinks, TypeFooterLinks } from "@/types/AppLinks";


const FooterAppLinks: TypeAppLinks[] = [
    {
        label: "Acceuil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projet",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "ITSchool",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formations",
        baseUrl: "/#",
        type: "internal"
    }
]
const FooterUsersLinks: TypeAppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
        type: "internal"
    }
]
const InformationsLinks: TypeAppLinks[] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal"
    }
]
export const SocialNetworkLinks: TypeAppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "/#",
        type: "external",
        icon: RiLinkedinFill
    },
    {
        label: "Youtube",
        baseUrl: "/#",
        type: "external",
        icon: RiYoutubeFill
    },
    {
        label: "Facebook",
        baseUrl:"/#",
        type: "external",
        icon: RiFacebookFill
    }
]

export const FooterLinks: TypeFooterLinks[] = [
    {
        label: 'App',
        links: FooterAppLinks
    },
    {
        label: 'Utilisateur',
        links: FooterUsersLinks
    },
    {
        label: 'Informations',
        links: InformationsLinks
    },
    {
        label: 'Réseaux',
        links: SocialNetworkLinks
    }
]
