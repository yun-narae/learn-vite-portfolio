export function menu() {
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.getElementById("headerNav");

    // 메뉴 토글 버튼 클릭 시 메뉴 열고 닫기
    headerToggle.addEventListener("click", (e) => {
        headerNav.classList.toggle("show");
        e.stopPropagation(); // headerToggle 클릭 시 이벤트 전파 방지
    });

    // 메뉴 외부를 클릭하면 메뉴를 닫기
    document.addEventListener("click", (e) => {
        // headerToggle과 headerNav를 제외한 곳 클릭 시 메뉴 닫기
        if (!headerNav.contains(e.target) && !headerToggle.contains(e.target)) {
            headerNav.classList.remove("show");
        }
    });

    // 메뉴 내부 클릭 시 이벤트 전파 방지 (메뉴 클릭 시 메뉴 닫히지 않도록)
    headerNav.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    
    // 화면 크기가 801px 이상일 때 메뉴가 열려 있으면 'show' 클래스를 제거
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 801) {
            headerNav.classList.remove("show");
            navItems.forEach(item => {
                item.removeAttribute("tabindex"); // 메뉴 닫히면 tabindex 제거
            });
        }
    });
};