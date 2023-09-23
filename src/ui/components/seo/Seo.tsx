import Head from 'next/head'
import type {Metadata} from "next"

interface Props {
    title: string;
    description: string;
}


export const Seo = ({title, description}: Props) => {

    return(
        <>

            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
        </>
    )
}