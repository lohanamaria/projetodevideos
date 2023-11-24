export default function Registro(){
  return(
    <div class="registro">
      <h1>Registrar novo ví</h1>
      <div class="form">
        <form>
          <label for="nome">Nome do vídeo:</label>
          <input type="text" id="nome" name="nome" />
          <label for="url"> URL do vídeo</label>
          <input type="url" id="url" name="url" />
          <label for="artista">Artista:</label>
          <input type="artista" id="artista" name="artista" />
<label for="letras"> Letras</label>
          <input type= "letras" id="letras" name="letras" />
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
    )};