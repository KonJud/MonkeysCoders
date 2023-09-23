import {Seo} from "@/ui/components/seo/Seo"
import {Typography} from '@/ui/design-system/typography/Typography'
import { Button } from "@/ui/design-system/button/Button"
import {RiUser6Fill} from "react-icons/ri"
import { Spinner } from "@/ui/design-system/spinner/Spinner"
import { Logo } from "@/ui/design-system/logo/Logo"
import { Avatar } from "@/ui/design-system/avatar/Avatar"
import { Container } from "@/ui/components/container/Container"
import { Navigation } from "@/ui/components/navigation/Navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="">
        Home
      </div>
    </>
  )
}
