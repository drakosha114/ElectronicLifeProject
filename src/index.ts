import './assets/css/style.css';


import { WebworkerMessageInterface } from './app/interfaces/index'

function sendMessage (worker: Worker, message: WebworkerMessageInterface): void {
    worker.postMessage(message);
}

//const worker = new Worker('/js/worker.js');
//sendMessage(worker, {type: 'init', data: {}});
(function(){

    document.addEventListener('DOMContentLoaded', () => {
        console.log('dsa')
    })
}())




