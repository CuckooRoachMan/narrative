




$(document).ready(function(){

    $.ajax({
      url:"/leer-archivo",
      method:"POST",
      dataType:"json",
      success:function(respuesta){
      console.log("read-success");
      console.log(respuesta[0]);
          $("#file-system").html("");
              for(var i=0; i<respuesta.length;i++){
                $("#file-system").append(



                );

              }
        }
      });




});
