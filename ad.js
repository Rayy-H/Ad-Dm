
function previewImage1(event) {
    var input = event.target;
    var preview = document.getElementById('preview-1');
    
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
        preview.setAttribute('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }

  function previewImage2(event) {
    var input = event.target;
    var preview = document.getElementById('preview-2');
    
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
        preview.setAttribute('src', e.target.result);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }


  const formulario = document.querySelector('#meu-formulario');
    const mensagemEnviada = document.querySelector('#mensagem-enviada');

    formulario.addEventListener('submit', function(evento) {
      evento.preventDefault();
    window.alert('Sua mensagem foi enviada com sucesso! Obrigado pelo seu contato.')
      formulario.reset();
    });
