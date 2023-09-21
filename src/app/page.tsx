import {Seo} from "@/ui/components/seo/Seo"
import {Typography} from '@/ui/design-system/typography/Typography'
import { Button } from "@/ui/design-system/typography/button/Button"

export default function Home() {
  return (
    <>
      <Seo title={"Coders Monkeys"} description={"description"}/>
      
      <div className="flex items-center p-10 gap-5">
        <Button size={"small"} variant={"accent"}>
          Accent
        </Button>
        <Button size={"small"} variant={"secondary"}>
          Secondary
        </Button>
        <Button size={"small"} variant={"outline"}>
          Outline
        </Button>
        <Button size={"small"} variant={"disabled"}>
          Disabled
        </Button>       
      </div>

      <div className="flex items-center p-10 gap-5">
        <Button variant={"accent"}>
          Accent
        </Button>
        <Button variant={"secondary"}>
          Secondary
        </Button>
        <Button variant={"outline"}>
          Outline
        </Button>
        <Button variant={"disabled"}>
          Disabled
        </Button>       
      </div>

      <div className="flex items-center p-10 gap-5">
        <Button size={"large"} variant={"accent"}>
          Accent
        </Button>
        <Button size={"large"} variant={"secondary"}>
          Secondary
        </Button>
        <Button size={"large"} variant={"outline"}>
          Outline
        </Button>
        <Button size={"large"} variant={"disabled"}>
          Disabled
        </Button>       
      </div>



      {/* <Typography theme={"primary"} variant={"display"}>
        Coders Monkeys
      </Typography>
      <Typography theme={"secondary"} variant={"h1"} >
        Coders Monkeys
      </Typography>
      <Typography theme={"gray"} variant={"h2"} >
        Coders Monkeys
      </Typography> */}
    </>
  )
}
