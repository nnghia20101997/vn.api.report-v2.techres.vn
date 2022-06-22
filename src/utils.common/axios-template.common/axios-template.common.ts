
import axios from 'axios'

export class http {
    constructor(){}
    static async request(url:string, body:object, method: number) {

        
      let query =   {
            "params": body,
            "http_method": method,
            "is_production_mode": 0,
            "project_id": 1487,
            "request_url":url
        }
     return  await axios.post('https://beta.api.gateway.techres.vn/api/queues', query )
    }

}


