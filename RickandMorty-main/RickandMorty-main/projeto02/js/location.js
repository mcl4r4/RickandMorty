

const loadLocation = async (url, id) => {
    try {
      const res = await fetch(`${url}/${id}`);
      if (!res.ok) {
        throw new Error("Erro ao carregar a localização");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const loadLocations = async () => {
    const urlLocation = new URLSearchParams(window.location.search);
    console.log(urlLocation );
    const idLocation = urlLocation.get("id");
    console.log(idLocation);
  
    if (!idLocation) {
      //direcionar o usuário para o index
      console.log("ID não encontrado");
      return;
    }
  
    const baseUrl = "https://rickandmortyapi.com/api/location/";
    try {
      const location = await loadLocation(baseUrl, idParam)
      showLocation(location)
    } catch (error) {
      console.log(error)
    }
  };
  
  loadInfo();
  
  const showLocation = (locations) => {
      console.log(locations)
  }
