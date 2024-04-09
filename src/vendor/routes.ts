import { Uws } from "../lib/uws.js"
import { mw } from '../vendor/inter.js'
import Mongo from "../lib/mongo.js"

export default function Routes() {

    async function mw(data : mw) {
        
        if(!data.vgx || data.vgx != process.env.VGX) return console.log('VGX err')
        if(!data.t) return console.log('T err')
        if(!data.i) return console.log('i err')

        new Mongo({action: 'save'}).chat(data.t, data.i)
    }

    Uws.app.post('/e/:t/:i', (res, req) => {

        const data: mw = {
            t: req.getParameter(0),
            i: req.getParameter(1),
            vgx: req.getHeader('vgx')
        }

        if(data.vgx) mw(data)

        res.close()
    
    })

    Uws.app.get('/hds', (res, req) => {

        req.forEach((k, v) => {
            res.write(k +': '+ v +'\n');
            res.write('-------------- \n\n');
        }); 

        res.end()
    
    })

}