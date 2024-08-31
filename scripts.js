        // Espera a que el contenido del DOM se cargue completamente
        document.addEventListener('DOMContentLoaded', () => {
            // Selecciona todos los enlaces del menú
            const menuLinks = document.querySelectorAll('.nav-list a');
            
            // Función para ocultar el menú
            function closeMenu() {
                document.querySelector('.nav-list').classList.remove('active');
            }

            // Añade un evento de clic a cada enlace del menú
            menuLinks.forEach(link => {
                link.addEventListener('click', closeMenu);
            });

            // Función para manejar el menú desplegable en móviles
            document.querySelector('.menu-toggle').addEventListener('click', () => {
                document.querySelector('.nav-list').classList.toggle('active');
            });
        });

