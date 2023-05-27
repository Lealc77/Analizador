//////////////SE EJECUTA PARA PODER GUARDAR EL DOMENTO TXT//////////////////
  function exportar (data, fileName){
    const a = document.createElement("a");
    const contenido = data,
    blob = new Blob([contenido], {type: "octet/stream"}),
    url= window.URL.createObjectURL(blob);
    a.href=url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  document.querySelector('#exportar').onclick = function (){
    const data = document.querySelector('#expresion').value;
    const nombreArchivo='Ejercicio.txt';
    exportar(data, nombreArchivo);
  }
////////////////////////////////////////////////////////////////////////////////////





  /////////////SE EJECUTA PARA GUARDAR LA INFORMACION ESCRITA EN UN TEXTAREA///////////////
  function mostrar(valor){
    document.getElementById("expresion").innerHTML=valor;
  }
////////////////////////////////////////////////////////////////////////////////////





////////////////SE EJECUTA PARA ANALIZAR EL CODIGO INGRESADO////////////
  function captura(){
    var exp = document.getElementById('expresion');
    var resultado = document.getElementById('resultado');
    var errow = document.getElementById('erro');
    var array = exp.innerHTML.split(/\s+/);
    document.getElementById("resultado").value = "";
    document.getElementById("erro").value = "";
    for (var i in array){

          ////////////////Para errores////////////////
          if(/(Break|Class|Continue|Def|Elif|Else|If|Except|Exec|Finally|For|From|Global|Import|Print|Return|Try|While|True|False|In|Range)/.test(array[i])){
            document.getElementById("erro").value +=  errow.innerHTML + array[i] + " || No puedes declarar variables con nombres de Palabras Reservadas\n";}

            else if (/^[!]|[¡]|[¿]|[?]|[;]|[{]|[}]|[$]|[#]|[[]|[]]$/.test(array[i])){
              document.getElementById("erro").value +=  errow.innerHTML + array[i] + " || No reconocido por lenguaje Python\n";}


          /////////////Para Digitos///////////////
            else if (/^[1-9]|[0-9]$/.test(array[i])){
              document.getElementById("resultado").value +=  resultado.innerHTML + array[i] + " || Digito\n";}


          ////////////Para Simbolos////////////////
            else if (/^[+]|[-]|[*]|[/]|[=]|[<]|[>]|[>=]|[<=]|[==]|[:]|[+=]|[%]|[(]|[)]$/.test(array[i])){
              document.getElementById("resultado").value +=  resultado.innerHTML + array[i] + " || Simbolo\n";}


          /////////////////Para Palabras Reservadas//////////////////
            else if(/(break|class|continue|def|elif|else|if|except|exec|finally|for|from|global|import|print|return|try|while|true|false|in|range)/.test(array[i])){
              document.getElementById("resultado").value +=  resultado.innerHTML + array[i] + " || Palabra Reservada\n";}


          /////////////////////////Para Identificadores////////////////////////
            else if (/^[a-z]|[a-z]$/.test(array[i])){
              document.getElementById("resultado").value +=  resultado.innerHTML + array[i] + " || Identificador\n";}

            else if (/^[A-Z]|[A-Z]$/.test(array[i])){
              document.getElementById("resultado").value +=  resultado.innerHTML + array[i] + " || Identificador\n";}
      }}
////////////////////////////////////////////////////////////////////////////////////





////////////////PARA LEER EL DOCUMENTO IMPORTADO////////////
  let input = document.getElementById("input_file");
  let respaldo = document.getElementById("expresion");
  input.addEventListener("change", ()=> {
    let archivos = input.files;
    if (archivos.length=0) return;
    let archivo= archivos[0];
    let contenido = new FileReader();
    contenido.onload = (e) => {
      let archivo = e.target.result;
      let lineas = archivo.split(/\r\n|\n/);
      respaldo.innerHTML = respaldo.innerHTML + lineas.join("\n");
      document.getElementById("expresion").value = respaldo.innerHTML;
     };
  contenido.onerror = (e) => alert(e.target.error.name);
  contenido.readAsText(archivo);
  });
////////////////////////////////////////////////////////////////////////////////////





////////////////PARA BORRAR TODO EL FORM////////////
  function borar(){
    form_page.reset();
    return true;
  }
////////////////////////////////////////////////////////////////////////////////////
