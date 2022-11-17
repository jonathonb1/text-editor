// install fix
const installBtn = document.getElementsById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility = 'visible';

    installBtn.addEventListener('click', () => {
        event.prompt();
        installBtn.setAttribute('disabled', true);
        installBtn.textContent = 'Installed!';
    });
});

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});