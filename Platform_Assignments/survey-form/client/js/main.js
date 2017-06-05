'use strict';

function displaysurvey(data){
    let surveyinfo = `<h2>Submitted Information</h2>
                    <ul>
                        <li>Name: <span>${data.name}</span></li>
                        <li>Dojo Location:<span> ${data.location}</span></li>
                        <li>Favorite Language: ${data.language}</li>
                        <li>Comment: ${data.comment}</li>
                    </ul>
                    <a href="/"><button type="button">Back</button></a>`;

    $('#container').html(surveyinfo);
}

$(document).ready(function() {

    $('#container').on('submit', 'form', function (event) {
        event.preventDefault();
        

        let formData = $(this).serialize();

        $.ajax({
            url: '/result',
            method: 'POST',
            data: formData,
            success: function(data){
                displaysurvey(data);
            }
        });
    })
});

	