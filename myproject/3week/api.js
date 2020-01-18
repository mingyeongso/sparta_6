$(document).ready(function(){
  listing();
});

function listing() {
  $('#names-q1').html('');
  $.ajax({
    type: "GET",
    url: "http://spartacodingclub.shop/order",
    data: {},
    success: function(response){
        let rows = response["orders"];
        for (let i = 0; i < rows.length; i++) {
          let address = rows[i]['address'];
          let count = rows[i]['count'];
          let name = rows[i]['name'];
          let phone = rows[i]['phone'];
          let temp_html = '<tr>\
                            <td>'
                              + name +'\
                            </td>\
                            <td>'
                              + count + '\
                            </td>\
                            <td>\
                              ' + address + '\
                            </td>\
                            <td>\
                              ' + phone + '\
                            </td>\
                          </tr>'
          $('#table-body').append(temp_html);
        }
      }
    })
}