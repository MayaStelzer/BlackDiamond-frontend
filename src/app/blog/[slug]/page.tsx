'use client'

export default function Page({ params }: { params: { slug: string } }) {

    return (
        <div>this is blog page {params.slug}</div>
    )
}