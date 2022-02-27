// import { hello } from './hello';

const btn = document.getElementById('btn');

btn.onclick = () => {
    import('./hello.js').then((module) => {
        console.log(module);
        module.hello();
    });
};
