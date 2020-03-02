$(function(){
  function buildHTML(message) {
    if ( message.image ) {
      var html =
        `<div class="message__user">
          ${message.user_name}
        </div>
        <div class="message__user__date">
          ${message.created_at}
        </div>
        <div class="message__text">
          <p class="message__text__content">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >`
      return html;
    } else {
      var html =  
        `<div class="message__user">
          ${message.user_name}
          <div class="message__user__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message__text">
          <p class="message__text__content">
            ${message.content}
          </p>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.message').append(html);
      $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
      $('.submit-btn').prop('disabled', false);
      $('#new_message')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});