import { Button, Form, Image } from "antd";
import Input from "antd/es/input/Input";
import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import fallbackImage from "./fallback-image";

let OPENAI_TIMEOUT: number = 10000

const Text2Image = () => {
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const genImage = async (data: any) => {
        if (data.context === undefined) return

        // Control button loading status
        setLoading(true)
        setTimeout(() => setLoading(false), OPENAI_TIMEOUT)

        // Call openai API to generate image
        const config = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY
        })
        const openai = new OpenAIApi(config)
        openai.createImage({
            prompt: data.context,
            n: 1,
            size: "512x512"
        }).then((res) => {
            setGeneratedImageUrl(res.data.data[0].url ?? "n/a")
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        });
    }

    return <>
        <Image
            width={512}
            src={generatedImageUrl}
            fallback={fallbackImage}
            style={{ margin: 10, padding: 5}}
        />

        <Form
            name="text-2-image-form"
            onFinish={genImage}
        >
            <Form.Item
                label="Describe the image you want"
                name="context"
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type={"primary"} htmlType={"submit"} loading={loading}>Generate</Button>
            </Form.Item>
        </Form>
    </>
}

export default Text2Image;