"use client"
import { Editor } from "@/components/Editor";
import { useEffect, useState } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export default function Home() {

    const [emulatorUrl, setEmulatorUrl] = useState('')

    const [code, setCode] = useState( '');

    useEffect(() => {
        api.get('/expo/edit').then(({ data }) => {
            console.log({ data })
            setCode(data.initialCode)
        })
    }, [])



    const saveCode = async () => {
        await api.post('/expo/edit/save', {
            code
        })
    }

    const runEmulator = async () => {
        const { data: { url } } = await api.get<{ url: string }>('/expo')
        setEmulatorUrl(url)
    }

    return (
        <div className="flex h-screen">
            <div className="absolute z-10  bottom-0">
                <button className="bg-green-300 p-4 m-1 rounded" onClick={runEmulator}>
                    RUN
                </button>
                <button className="bg-yellow-300 p-4 m-1 rounded" onClick={saveCode}>
                    SAVE
                </button>
            </div>
            <Editor code={code} onType={setCode} />
            <iframe
                src={emulatorUrl}
                className="h-[844px] w-[390px]"
            />
        </div>

    )
}
