function btnListener () {

    var target = $('#button');
    target.click(addListItem);
}

function printList () {

    $.ajax({

        url: 'http://157.230.17.132:3003/todos',
        method: 'GET',
        success: function (data) {
             
            console.log(data);
            
            for (var i = 0; i < data.length; i++) {
                
                var target = $('#list');
                var text = data[i]['text'];
                target.append('<li>' + text + '</li><span class="delete">X</span>');
            }
        },

        error: function (err) {

            console.log('err', err);
        }
    })
}

function addListItem () {

    var input = $('#input');
    var value = input.val;

    $.ajax ({

        url:'http://157.230.17.132:3003/todos',
        method: 'POST',
        data: {text: value},
        success: function (data) {

            printNewList();
        },
        error: function (err) {

            console.log('err', err);
        }
    })

}

function printNewList () {

    $.ajax({

        url: 'http://157.230.17.132:3003/todos',
        method: 'GET',
        success: function (data) {
             
            console.log(data);
            
            for (var i = 0; i < data.length; i++) {
                
                var target = $('#list');
                var text = data[i]['text'];
                target.append('<li>' + text + '</li><span class="delete">X</span>');
            }
        },

        error: function (err) {

            console.log('err', err);
        }
    })
}





function init() {

    printList();
    btnListener();
    addListItem();

}

$(document).ready(init);