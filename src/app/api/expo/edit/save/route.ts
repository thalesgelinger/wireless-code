import fs from 'node:fs'

export async function POST(req: Request) {
    console.log("VAI POSTAR")

    const body = await req.json()

    const code = body.code

    fs.writeFileSync('mobile/App.js', code)

    return new Response('', {
        status: 200
    })
}
