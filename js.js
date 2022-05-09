$("#button1").click(function() {
   $("#square").slideToggle("slow")
}); 
$("p").click(function (){
$(this).css("color","green")
});
$('p1').click(function () {
    $(this).css("color","red")
    let s = $(this);
    let originaltext= s.text();
    $("p1").text('Добрый вечер');  
      s.text(originaltext);
    s.html(s.text() == 'Добрый вечер' ? 'Добрый день' : 'Добрый вечер');

});
  $("p1").click(function () {
    $("p1").css("font-size", "30px");
  });
