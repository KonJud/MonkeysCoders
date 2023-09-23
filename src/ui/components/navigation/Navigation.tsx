import { Logo } from "@/ui/design-system/logo/Logo"
import { Container } from "../container/Container"
import { Typography } from "@/ui/design-system/typography/Typography"
import { Button } from "@/ui/design-system/button/Button"
import Link from "next/link"
import { ActiveLink } from "./ActiveLink"

interface Props { }

export const Navigation = ({ }: Props) => {
    return (
        <div className={"border-b-2 border-gray-400"}>

            <Container className={"flex items-center justify-between py-1.5 gap-7"}>
                <Link href={"/"}>
                    <div className={"flex items-center gap-2.5"}>
                        <Logo size={"small"} />
                        <div className={"flex flex-col"}>
                            <div className={"text-gray font-extrabold text-[24px]"}>
                                ITSchool
                            </div>
                            <Typography
                                variant={"caption4"}
                                component={"span"}
                                theme={"gray"}
                            >
                                International Training School
                            </Typography>
                        </div>
                    </div>
                </Link>

                <div className="flex items-center gap-7">
                    <Typography
                        variant={"caption3"}
                        component={"div"}
                        // theme={"black"}
                        className={"flex items-center font-semibold text-gray-800/80 gap-7"}
                    >
                        <ActiveLink href={"/design-system"}>Design System</ActiveLink>
                        <ActiveLink href={"/projets"}>Projets</ActiveLink>
                        <ActiveLink href={"/formations"}>Formations</ActiveLink>
                        <ActiveLink href={"/contact"}>Contact</ActiveLink>
                    </Typography>

                    <div className={"flex items-center gap-2"}>
                        <Button size={"small"} >Connexion</Button>
                        <Button size={"small"} variant={"secondary"} >Rejoindre</Button>
                    </div>
                </div>
            </Container>

        </div>
    )
}