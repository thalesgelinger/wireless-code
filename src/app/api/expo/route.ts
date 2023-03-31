import { NextResponse } from 'next/server';
import { exec } from 'node:child_process'
import path from 'node:path'


export async function GET(req: Request) {
    console.log("HELLo")

    const startProcess = exec("npm run web", { cwd: path.join("mobile") }, function(error, stdout, stderr) {
        console.log({
            error,
            stdout,
            stderr
        })
    });

    startProcess?.stdout?.on('data', console.log)

    console.log("running")

    const url = 'http://localhost:19006'

    return NextResponse.json({ url })
}

