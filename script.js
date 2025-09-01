document.addEventListener("DOMContentLoaded", () => {
  const botonesComprar = document.querySelectorAll(".card button");

  botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const producto = boton.parentElement.querySelector("h3").innerText;
      const precio = boton.parentElement.querySelector("p").innerText;

      Swal.fire({
        title: "Producto agregado",
        html: `<b>${producto}</b><br>Precio: ${precio}`,
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6",
        backdrop: `
          rgba(0,0,0,0.6)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
    });
  });
});
