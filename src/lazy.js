const isIntersecting = (entry) => {
    return entry.isIntersecting; //true dentro de la pantalla
};

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargue la imagen
    imagen.src = url;
    
    //console.log("holis");
    //desregistra la imagen
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries)=>{
 entries
  .filter(isIntersecting)
  .forEach(loadImage);

});
export const registerImage = (imagen) => {
    // IntersectactionObservador-> observer(imagen)
    observer.observe(imagen);
}