import { LinkType } from "@/lib/LinkType";

export interface TypeAppLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
}

export interface TypeFooterLinks {
    label: string,
    links: TypeAppLinks[]
}
