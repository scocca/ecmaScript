const btn1 = document.getElementById('btn');
btn1.addEventListener('click', async function (){
    const module = await import('./module.js');
    module.hello();
}); 