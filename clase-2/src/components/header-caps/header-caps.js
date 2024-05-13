(function(){

    document.addEventListener('DOMContentLoaded', () => {
        const bgMode = document.getElementById('bg-mode');
    
        // Verifica si el usuario prefiere el modo oscuro
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Aplica el modo oscuro automáticamente si es preferido por el usuario
        if (prefersDarkMode) {
            document.body.classList.add('dark-mode');
        }

        // Puedes agregar un evento de cambio para seguir las preferencias del usuario
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        });

        // Agrega eventos de clic para cambiar entre modo claro y oscuro
        bgMode.addEventListener('click', function () {
            toggleDarkMode();
        });
    });

    //show logo variables
    const logo = document.getElementById('logo');
    const caps = document.getElementById('caps');

    //show logo function
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        let scrollTopMain = caps.offsetTop;

        if (scrollTopMain < scrollTop){
            logo.style.top = '5px';
        }
        else{
            logo.style.top = '-50px';
        }        
    });

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

})();