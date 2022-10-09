"use strict";

import data from "./data.json" assert { type: "json" };
console.log(data);

const otherUsers = data.comments;
console.log(otherUsers);
const commentCard = document.querySelectorAll(".msg-card");

const pageContainer = document.querySelector(".container");
const comments = [];
const commentReplies = [];

const single = otherUsers.map((user) => {
  const testReply = user.replies;
  console.log(testReply);

  if (testReply && testReply.length > 0) {
    return `
    <article class="msg-card">
            <article class="msg-quantity">
              <span class="msg-quantity__wrap">
                <img
                  class="msg-quantity__add"
                  src="./images/icon-plus.svg"
                  alt="add"
                />
                <span class="msg-quantity__num">${user.score}</span>
                <img
                  class="msg-quantity__less"
                  src="./images/icon-minus.svg"
                  alt="less"
                />
              </span>
            </article>
            <div class="msg-content">
              <div class="msg-content__profile">
                <img
                  src=${user.user.image.webp}
                  alt=${user.user.username}
                />
                <span class="name">${user.user.username}</span>
                <span class="duration">${user.createdAt}</span>
              </div>
              <p class="msg-content__text">
              ${user.content}
              </p>
            </div>
  
            <span class="msg-reply">
              <img src="./images/icon-reply.svg" alt="icon-reply" />
              Reply
            </span>
          </article>

        <div class="replies-wrapper">
          <div class="replies-wrapper__line"></div>
          <article class="msg-card">
            <article class="msg-quantity">
              <span class="msg-quantity__wrap">
                <img
                  class="msg-quantity__add"
                  src="./images/icon-plus.svg"
                  alt="add"
                />
                <span class="msg-quantity__num">${testReply[0].score}</span>
                <img
                  class="msg-quantity__less"
                  src="./images/icon-minus.svg"
                  alt="less"
                />
              </span>
            </article>
            <div class="msg-content">
              <div class="msg-content__profile">
                <img
                  src=${testReply[0].user.image.webp}
                  alt=${testReply[0].user.username}
                />
                <span class="name">${testReply[0].user.username}</span>
                <span class="duration">${testReply[0].createdAt}</span>
              </div>
              <p class="msg-content__text">
                ${testReply[0].content}
              </p>
            </div>

            <span class="msg-reply">
              <img src="./images/icon-reply.svg" alt="icon-reply" />
              Reply
            </span>
          </article>
        </div>
    `;
  } else if (testReply && testReply.length < 1) {
    return `
    <article class="msg-card">
            <article class="msg-quantity">
              <span class="msg-quantity__wrap">
                <img
                  class="msg-quantity__add"
                  src="./images/icon-plus.svg"
                  alt="add"
                />
                <span class="msg-quantity__num">${user.score}</span>
                <img
                  class="msg-quantity__less"
                  src="./images/icon-minus.svg"
                  alt="less"
                />
              </span>
            </article>
            <div class="msg-content">
              <div class="msg-content__profile">
                <img
                  src=${user.user.image.webp}
                  alt=${user.user.username}
                />
                <span class="name">${user.user.username}</span>
                <span class="duration">${user.createdAt}</span>
              </div>
              <p class="msg-content__text">
              ${user.content}
              </p>
            </div>
  
            <span class="msg-reply">
              <img src="./images/icon-reply.svg" alt="icon-reply" />
              Reply
            </span>
          </article>
    `;
  }
  // return `
  // <article class="msg-card">
  //         <article class="msg-quantity">
  //           <span class="msg-quantity__wrap">
  //             <img
  //               class="msg-quantity__add"
  //               src="./images/icon-plus.svg"
  //               alt="add"
  //             />
  //             <span class="msg-quantity__num">${user.score}</span>
  //             <img
  //               class="msg-quantity__less"
  //               src="./images/icon-minus.svg"
  //               alt="less"
  //             />
  //           </span>
  //         </article>
  //         <div class="msg-content">
  //           <div class="msg-content__profile">
  //             <img
  //               src=${user.user.image.webp}
  //               alt=${user.user.username}
  //             />
  //             <span class="name">${user.user.username}</span>
  //             <span class="duration">${user.createdAt}</span>
  //           </div>
  //           <p class="msg-content__text">
  //           ${user.content}
  //           </p>
  //         </div>

  //         <span class="msg-reply">
  //           <img src="./images/icon-reply.svg" alt="icon-reply" />
  //           Reply
  //         </span>
  //       </article>
  // `;
});

// const testReply = otherUsers.map((reply) => {
//   return reply.replies;
// });
// console.log(testReply);

// if (testReply && testReply.length > 0) {
//   single;
// }

comments.push(single.join(" "));
pageContainer.innerHTML = comments;

let currentUser;
currentUser
  ? `<div class="input">
<img src="./images/avatars/image-juliusomo.webp" alt="" />
<textarea
  class="input__textarea"
  type="text"
  name=""
  id=""
  placeholder="Add a comment..."
></textarea>
<button class="input__btn-main" type="submit">SEND</button>
</div>`
  : `<article class="msg-card">
<article class="msg-quantity">
  <span class="msg-quantity__wrap">
    <img
      class="msg-quantity__add"
      src="./images/icon-plus.svg"
      alt="add"
    />
    <span class="msg-quantity__num">12</span>
    <img
      class="msg-quantity__less"
      src="./images/icon-minus.svg"
      alt="less"
    />
  </span>
</article>
<div class="msg-content">
  <div class="msg-content__profile">
    <img
      src="./images/avatars/image-amyrobson.webp"
      alt="amyrobson"
    />
    <span class="name">amyrobson</span>
    <span class="duration">1 month ago</span>
  </div>
  <p class="msg-content__text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illo
    numquam sequi, quae deleniti in doloribus ea cum non animi,
    inventore quod laudantium necessitatibus facilis eum natus optio
    ipsum rem obcaecati. Architecto, omnis laborum nobis unde minima
    doloremque consequuntur facilis eos ea soluta amet debitis, esse
    aperiam ex incidunt eius.
  </p>
</div>

<span class="msg-reply">
  <img src="./images/icon-reply.svg" alt="icon-reply" />
  Reply
</span>
</article>`;

// const input = document.querySelector(".inputs");
// input.innerHTML = `<div class="input">
// <img src="./images/avatars/image-juliusomo.webp" alt="" />
// <textarea
//   class="input__textarea"
//   type="text"
//   name=""
//   id=""
//   placeholder="Add a comment..."
// ></textarea>
// <button class="input__btn-main" type="submit">SEND</button>
// </div>`;
