window.addEventListener("message", async (event) => {
    //TODO validar el origen
    //if (event.origin === "http://localhost") {
    const datos = JSON.parse(event.data);
  
  
    var requestOptions = {
      method: "POST",
      body: JSON.stringify(datos),
    };
  
    try {
      const result = await fetch("/api/auth", requestOptions);
      const data = await result.json();
      document.datosSesion = data.datosSesion;
      if(document.location != data.urlActual){
        document.location = data.urlActual;
      }
    } catch (error) {
      console.log("error", error);
    }
  
    window["marco"] = event.source;
    window["origen"] = event.origin;
    window["idFrame"] = datos.idFrame;
  
    //}
  });