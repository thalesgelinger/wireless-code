import { NextResponse } from "next/server";
import fs from 'node:fs'


export async function GET() {

    const initialCode = fs.readFileSync('mobile/App.js', { encoding: 'utf8' })

    return NextResponse.json({
        initialCode
    })
}
