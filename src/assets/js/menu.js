export function menu() {
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.getElementById("headerNav");

    // 메뉴 토글 버튼 클릭 시 메뉴 열고 닫기
    headerToggle.addEventListener("click", () => {
        headerNav.classList.toggle("show");
    });
};