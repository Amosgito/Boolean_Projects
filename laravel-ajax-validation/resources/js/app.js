require('./bootstrap')

window.$ = require('jquery')

function addBestOfListener() {

    var target = $('#best-of')
    target.change(bestOfToggle)
}

function bestOfToggle() {//gives true or false of checkbox

    var me = $(this)
    var isChecked = me.is(':checked')
    getData(isChecked)
}

function getData(isChecked) {

    var url = '/api/posts/all'

    if(isChecked) {

        url = '/api/post/best_of'
    }

    $.ajax({

        url: url,
        metod:'GET',
        success: function(data) {
            
            var target = $('#post')
            target.html('')

           for (var i = 0; i < data.length; i++) {

                var post = data[i]
                var html = "<li>" + post.name + " " + "</li>"
                target.append(html)
           }
        },
        error: function(err) {

            console.log('error', err)
        }
    })
}


function init() {

    getData()
    addBestOfListener()
}

$(document).ready(init)