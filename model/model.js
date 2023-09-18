var homeContent = `<h1>home Page</h1><p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        necessitatibus repellendus maiores non. Distinctio iure in veniam! Modi
        aliquam iure distinctio quidem at tenetur provident!
      </p>
      <p>
        Delectus recusandae eum quae, mollitia voluptatem sed porro dolore,
        nihil animi nam officia harum ducimus, debitis consequuntur architecto
        unde placeat dolorum? Quae incidunt laboriosam vero.
      </p>
      <p>
        Quibusdam voluptatibus officia ad porro rerum eveniet libero
        accusantium, dolorem quidem alias. Sapiente itaque officia amet dolore?
        Eius a veritatis repellat ad architecto qui libero!
      </p>`;
var aboutContent = `<h1>about Page</h1>`;
var photosContent = `<h1>photos Page</h1>`;
var contactContent = `<h1>ontact Page</h1>`;

var getContent
// var _getMyVariable = function (pageID) {

//     $.get(`pages/${pageID}.html`,
//         function (data) {
//             $("#app").html(data);
//         });
// }

// return {
//     getMyVariable: _getMyVariable,
// }


export function updatePageContent(pageName) {
    /* let pageContent = pageName + "Content";

    //eval turns the variable into a string
    $('#app').html(eval(pageContent)); */

    $.get(`pages/${pageName}.html`,
        function (data) {
            $("#app").html(data);
        });
}