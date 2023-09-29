import { LinkType } from "@/lib/LinkType";
import { IconType } from "react-icons";


export interface TypeAppLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
    icon?: IconType
}

export interface TypeFooterLinks {
    label: string,
    links: TypeAppLinks[]
}
