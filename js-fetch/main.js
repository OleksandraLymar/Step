//вытягиваем информацию с файла
fetch('demo.json')
  .then(res => {
    console.log(res);
    return res.json();
  })
  .then(json => console.log(json));

//вытягиваем картинки (рандомные)
//     fetch('https://unsplash.it/600/400')
//       .then(res => res.blob())
//       .then(blob => {
//         let img = document.createElement('img');
//         img.src = URL.createObjectURL(blob);
//         document.querySelector('body').appendChild(img);
//       });



const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');
//вызов функции
getData()
//async - функция всегда возвращает промис
//await - можно использовать только внутри async-функций. Заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится.
//функция, которая берет информацию
async function getData() {
    const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
    //создание настоящих постов
    const posts = await postStream.json();
    //создание переменной i для контроля количества постов
    let i = 0;

    console.log(posts) //100 posts

    posts.forEach(post => {
        //делает хотя бы 1 картинку-пост
        i++;
        //если картинок меньше 10
        if(i < 10) {
            //создание переменных для заголовка и тела
            const title = post.title;
            const body = post.body;
            //чтоб у каждого поста была своя картинка
            fetch('https://unsplash.it/300/200')
                .then(res => res.blob())
                .then(blob => {
                    //импортирует копию поста
                    const newPost = document.importNode(postTemplate.content, true);
                    const postTitle = newPost.querySelector('.post__title');
                    const postBody = newPost.querySelector('.post__body');
                    //добавление картинки в новый пост
                    const postImg = newPost.querySelector('.post__img');
                    //ссылка новой картинки идет в новый объект
                    postImg.src = URL.createObjectURL(blob);
                    //вывод на экран
                    postTitle.innerText = title;
                    postBody.innerText = body;
                    postSection.appendChild(newPost);
                })
                .catch(err => console.error(err));
        }
    })
}
