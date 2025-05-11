const horoscopos = {
    aries: "Hoy es un buen día para comenzar nuevos proyectos.",
    tauro: "La paciencia será tu mejor aliada hoy.",
    geminis: "Tu curiosidad te llevará a descubrir algo importante.",
    cancer: "Rodéate de quienes te apoyan emocionalmente.",
    leo: "Tu liderazgo brillará hoy.",
    virgo: "Organiza tus ideas antes de actuar.",
    libra: "Busca el equilibrio antes de tomar decisiones.",
    escorpio: "Confía en tu intuición.",
    sagitario: "La aventura está más cerca de lo que piensas.",
    capricornio: "Tu esfuerzo será recompensado.",
    acuario: "Deja que tus ideas innovadoras fluyan.",
    piscis: "Tu sensibilidad será tu fortaleza."
};

function obtenerSigno(fechaNacimiento) {
    const fecha = new Date(fechaNacimiento);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "aries";
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "tauro";
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "geminis";
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "cancer";
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "leo";
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "virgo";
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "libra";
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "escorpio";
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "sagitario";
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "capricornio";
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "acuario";
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "piscis";
    
    return null;
}

function obtenerHoroscopo(signo) {
    return horoscopos[signo] || "Signo no encontrado.";
}
