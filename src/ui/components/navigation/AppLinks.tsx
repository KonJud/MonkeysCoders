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
const SocialNetworkLinks: TypeAppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "/#",
        type: "external"
    },
    {
        label: "Youtube",
        baseUrl: "/#",
        type: "external"
    },
    {
        label: "Slack",
        baseUrl:"/#",
        type: "external"
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
