import {Seo} from "@/ui/components/seo/Seo"
import {Typography} from '@/ui/design-system/typography/Typography'

export default function Home() {
  return (
    <>
      <Seo title={"Coders Monkeys"} description={"description"}/>
      
      <main>
        <Typography theme={"primary"} variant={"display"}>
          Coders Monkeys
        </Typography>
        <Typography theme={"secondary"} variant={"h1"} >
          Coders Monkeys
        </Typography>
        <Typography theme={"gray"} variant={"h2"} >
          Coders Monkeys
        </Typography>
        
      </main>
    </>
  )
}
