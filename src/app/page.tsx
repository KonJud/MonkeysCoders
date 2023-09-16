import Head from "next/head"
import {Seo} from "@/ui/components/seo/Seo"
export default function Home() {
  return (
    <>
      <Seo title={"Coders Monkeys"} description={"description"}/>
      
      <main>
        <h1 className={"text-[90px] uppercase"}>This the main page</h1>
      </main>
    </>
  )
}
