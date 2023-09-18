import {Seo} from "@/ui/components/seo/Seo"
import {Typography} from '@/ui/design-system/typography/Typography'

export default function Home() {
  return (
    <>
      <Seo title={"Coders Monkeys"} description={"description"}/>
      
      <main>
        <Typography variant={"display"} >
          Coders Monkeys
        </Typography>
        <Typography variant={"h1"}>
          Coders Monkeys
        </Typography>
      </main>
    </>
  )
}
