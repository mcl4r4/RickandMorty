
// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const page = 4

const baseURL = "https://rickandmortyapi.com/api/";

const loadCharacter = async () => {
    try {

        const res = await fetch(`${baseURL}/character`)
        if (!res.ok) {
            throw new Error('Erro ao buscar chacarter')
        }
        const data = await res.json()
        const limitData = data.results.slice(3, 9)
        // console.log("Personagens => ", limitData)
        return { results: limitData };

    } catch (error) {
        console.log("Erro ", error)
    }
}

const loadLocation = async () => {
    try {
        const res = await fetch(`${baseURL}/location`);
        if (!res.ok) {
            throw new Error("Erro ao busca localização")
        }
        const data = await res.json()
        const limitData = data.results.slice(0, 10)
        // console.log('Localização => ', limitData)
        return { results: limitData };
    } catch (error) {
        console.log("error: ", error)
    }
}

const loadEpisode = async () => {
    try {
        const res = await fetch(`${baseURL}/episode`);
        const data = await res.json()
        return { results: data };
    } catch (error) {
        console.log('error:', error)
    }
}


const loadAllWithPromisse = async () => {
    const [character, location, episode] = await Promise.all([
        loadCharacter(),
        loadLocation(),
        loadEpisode(),
    ]);

    showCharaceter(character.results)
    // console.log(location.results)
    // console.log(episode.results)
}


const showCharaceter = (characteres) => {
    console.log(characteres)
    const characterContainer = document.getElementById("character-container")
    characteres.map((charactere) => {
        const divCharacter = document.createElement('div')
        divCharacter.id = `character-${charactere.id}`
        divCharacter.innerHTML = `
        <img class="img-character" src="${charactere.image}"/>
        <article class="cahracter-infor">
        <h3>${charactere.name}</h3>
        <span class="${charactere.status}"> ${charactere.location.url} - ${charactere.species}</span>
        
        <span class="location">Location:</span>
        <a class="character-link" href="${charactere.location.url}">${charactere.location.name}</a>

        
        <span class="location">Origin:</span>
        <a class="character-link" href="${charactere.origin.url}">${charactere.origin.name}</a>
        
        </article>`

        divCharacter.classList('character-box')
        characterContainer.appendChild(divCharacter)
    })

};