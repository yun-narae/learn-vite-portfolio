import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";
import { email } from "./email.js";

window.addEventListener("load", function(){
    menu();
    port();
    link();
    smooth();
    
    // 폼의 submit 이벤트 리스너를 추가하여 이메일 전송 함수 연결
    const form = document.getElementById("contact__form");
    if (form) {
        form.addEventListener("submit", email);  // submit 이벤트에 email 함수 연결
    }
});