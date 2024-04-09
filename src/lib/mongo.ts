import { mongo } from '../vendor/inter.js'
import chat from "../schemes/chat/chat.js"

export default class Mongo {

    action: string

    constructor(ops : mongo) {
        this.action = ops.action
    }

    async chat(t: string, i: string) {

        if(this.action === 'save') {

            const newChat = new chat({
                t, i
            })

            await newChat.save()
            
        }

    }

}