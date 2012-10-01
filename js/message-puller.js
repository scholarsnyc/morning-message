$(document).ready(function () {

  var spreadsheet = '0Aq1QkjSPfNNjdFl4Zzdld2VGQkhQblhrY1huSW9NZlE';
  
  Tabletop.init( { key: spreadsheet,
                     callback: displayMessages,
                     simpleSheet: true } )
  
  function displayMessages(data, tabletop) {
    var today = formatDate(new Date());
    $.each(data, function (index, message) {
      var announceOn = formatDate(new Date(message.dateofannoucement));
      if (announceOn === today) {
        $('#messages').append(formatMessage(message));
      }
    });
  }
  
  function formatMessage(message) {
    var formattedMessage = "<article>\n<h2>" + message.eventname + "</h2>\n<p>" + message.description + "</p>\n</article>";
    return formattedMessage;
  }
  
  function formatDate(date) {
    var date, day, month, year, formattedDate, formatDate;
  
    function padDateWithZero(num) {
      num = parseInt(num);
      return (num < 10 ? '0' : '') + num;
    }
    
    year = date.getFullYear();
    month = padDateWithZero(date.getMonth() + 1);
    day = padDateWithZero(date.getDate());
    formattedDate = month + "/" + day + "/" + year;
  
    return formattedDate;
  }

});