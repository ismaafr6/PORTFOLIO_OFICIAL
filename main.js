const translations = {
    es: {
        nav: { home: "Inicio", about: "Sobre Mí", skills: "Habilidades", exp: "Experiencia", contact: "Contacto" },
        hero: { badge: "Desarrollador en formación", btn1: "Hablemos", btn2: "Descargar CV" },
        about: { 
            title: "Perfil Profesional", 
            quote: '"Mi objetivo es contribuir al crecimiento de las empresas mediante soluciones tecnológicas innovadoras mientras perfecciono mis habilidades como técnico superior."',
            p1: "Soy un apasionado de la informática, con una formación sólida en el I.E.S. Azarquiel. Me destaco por mi proactividad, creatividad y mi gran interés por la Inteligencia Artificial.",
            p2: "Cuento con vehículo propio y plena disponibilidad para incorporarme a entornos de trabajo híbridos o presenciales en Toledo.",
            loc_label: "Ubicación", age_label: "Edad", age_val: "19 años (16/04/2006)",
            license_label: "Carnets", license_val: "B, AM (Vehículo propio)",
            lang_label: "Idiomas", lang_val: "Español (Nativo), Inglés (B1)"
        },
        skills: { title: "Stack Tecnológico", f_title: "Frontend", f_res: "Diseño Responsivo", b_title: "Backend & DB", t_title: "Herramientas", t_hard: "Gestión de Hardware", t_soft: "Gestión de Software" },
        projects: { 
            title: "Proyectos Destacados", 
            p1: "Plataforma enfocada en sostenibilidad digital y optimización de recursos web.",
            p2: "Sitio web de recomendación y descubrimiento de películas con algoritmos personalizados.",
            p3: "Solución integral para presencia digital y marketing estratégico para negocios.",
            p4: "Comunidad interactiva para entusiastas del espacio con datos en tiempo real."
        },
        exp: { title: "Experiencia y Formación", col1: "Laboral", col2: "Académica", l1_role: "Prácticas Online (OutSystems)", l1_desc: "Desarrollo de aplicaciones web y procesos de negocio.", a1_title: "G.S. Desarrollo de Aplicaciones Web", a2_title: "Bachillerato (CC. Sociales)", a3_title: "Educación Secundaria Obligatoria (ESO)" },
        contact: { title: "¿Hablamos?", label_name: "Nombre", label_email: "Email", label_msg: "Mensaje", btn: "Enviar Mensaje" },
        stats: { h: "Horas de Código", p: "Proyectos Reales", t: "Tecnologías Domadas", i: "Pasión por la IA" },
        map: { title: "Toledo, ES", sub: "Base de Operaciones Digital" },
        footer: { rights: "Todos los derechos reservados." }
    },
    en: {
        nav: { home: "Home", about: "About", skills: "Skills", exp: "Experience", contact: "Contact" },
        hero: { badge: "Developer in training", btn1: "Let's Talk", btn2: "Download CV" },
        about: { 
            title: "Professional Profile", 
            quote: '"My goal is to contribute to company growth through innovative tech solutions while perfecting my skills as a senior technician."',
            p1: "I am passionate about IT, with a solid background from I.E.S. Azarquiel. I stand out for my proactivity, creativity, and deep interest in AI.",
            p2: "I have my own vehicle and full availability for hybrid or on-site work in Toledo.",
            loc_label: "Location", age_label: "Age", age_val: "19 years (16/04/2006)",
            license_label: "Licenses", license_val: "B, AM (Own vehicle)",
            lang_label: "Languages", lang_val: "Spanish (Native), English (B1)"
        },
        skills: { title: "Tech Stack", f_title: "Frontend", f_res: "Responsive Design", b_title: "Backend & DB", t_title: "Tools", t_hard: "Hardware Mgmt", t_soft: "Software Mgmt" },
        projects: { 
            title: "Featured Projects", 
            p1: "Platform focused on digital sustainability and web resource optimization.",
            p2: "Movie recommendation and discovery website with custom algorithms.",
            p3: "Integrated solution for digital presence and strategic marketing for business.",
            p4: "Interactive community for space enthusiasts with real-time data."
        },
        exp: { title: "Experience & Education", col1: "Work", col2: "Academic", l1_role: "Online Internship (OutSystems)", l1_desc: "Web app development and business processes.", a1_title: "H.D. Web Application Development", a2_title: "High School (Social Sciences)", a3_title: "Compulsory Secondary Education (ESO)" },
        contact: { title: "Let's Talk", label_name: "Name", label_email: "Email", label_msg: "Message", btn: "Send Message" },
        stats: { h: "Hours of Code", p: "Real Projects", t: "Tamed Tech", i: "Passion for AI" },
        map: { title: "Toledo, ES", sub: "Digital Base of Operations" },
        footer: { rights: "All rights reserved." }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });

    // Scroll Progress
    const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + "%";
    });

    // Typewriter Effect
    const typewriter = document.getElementById('typewriter-text');
    const roles = ["Especialista en Desarrollo Web.", "Apasionado de la IA.", "Técnico Superior DAW.", "Creativo y Proactivo."];
    const rolesEn = ["Web Development Specialist.", "AI Enthusiast.", "Senior Web App Technician.", "Creative & Proactive."];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let currentLang = 'es';

    function type() {
        const currentRoles = currentLang === 'es' ? roles : rolesEn;
        const fullTxt = currentRoles[roleIdx];
        
        if (isDeleting) {
            typewriter.textContent = fullTxt.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typewriter.textContent = fullTxt.substring(0, charIdx + 1);
            charIdx++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIdx === fullTxt.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % currentRoles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();

    // Language Switching
    function setLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-t]').forEach(el => {
            const key = el.getAttribute('data-t');
            const keys = key.split('.');
            let value = translations[lang];
            keys.forEach(k => value = value[k]);
            el.innerHTML = value;
        });
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    // Brand Preloader dismissal
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('preloader--hidden');
            }, 1000); // Dramatic entrance
        }
    });

    // 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // Magnetic Buttons & Links
    const magneticEls = document.querySelectorAll('.btn, .nav__link, .fab-cv, .nav__logo');
    document.addEventListener('mousemove', (e) => {
        magneticEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
            if (distance < 80) { // Interaction radius
                const pullX = distanceX * 0.3;
                const pullY = distanceY * 0.3;
                el.style.transform = `translate(${pullX}px, ${pullY}px) scale(1.05)`;
            } else {
                el.style.transform = '';
            }
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Reveal Intersection Observer
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Map Initialization
    try {
        const toledoCoords = [39.8628, -4.0273];
        const cuervaCoords = [39.6644, -4.2128];

        const map = L.map('map', {
            center: [39.76, -4.12], // Centered between both
            zoom: 10,
            scrollWheelZoom: false,
            zoomControl: false
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO'
        }).addTo(map);

        // Marker for Cuerva (Home)
        L.circle(cuervaCoords, {
            color: '#fff',
            fillColor: '#fff',
            fillOpacity: 0.8,
            radius: 400
        }).addTo(map).bindPopup("Cuerva (Home)");

        // Marker for Toledo (Work/Base)
        L.circle(toledoCoords, {
            color: '#fff',
            fillColor: '#fff',
            fillOpacity: 0.8,
            radius: 400
        }).addTo(map).bindPopup("Toledo (Base)");

        // Route (Polyline with waypoints)
        const latlngs = [
            cuervaCoords,
            [39.695, -4.154], // Pulgar
            [39.776, -4.062], // Layos
            [39.808, -4.059], // Arges
            toledoCoords
        ];
        
        const polyline = L.polyline(latlngs, {
            color: '#ffffff', // White in code becomes Black with the css filter
            weight: 3,
            opacity: 0.9,
            lineJoin: 'round'
        }).addTo(map);

        // Zoom to fit both with more padding and a slight delay to ensure container is ready
        setTimeout(() => {
            map.invalidateSize();
            map.fitBounds(polyline.getBounds(), { padding: [70, 70] });
        }, 500);

    } catch (e) {
        console.error("Map initialization failed:", e);
    }

    // Form Handling (AJAX - No redirection)
    const form = document.querySelector('.contact__form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;
        
        // Visual feedback
        btn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';
        btn.disabled = true;

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                btn.textContent = currentLang === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!';
                btn.style.background = '#22c55e';
                
                // Luxury Confetti
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ffffff', '#000000', '#666666']
                });

                form.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 4000);
            } else {
                throw new Error('FormSubmit Error');
            }
        })
        .catch(error => {
            btn.textContent = currentLang === 'es' ? 'Error al enviar' : 'Send Error';
            btn.style.background = '#ef4444';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 4000);
        });
    });
});
