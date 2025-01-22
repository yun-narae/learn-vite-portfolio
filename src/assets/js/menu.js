export function menu() {
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.getElementById("headerNav");
    const navItems = headerNav.querySelectorAll("li");

    // 메뉴 토글 버튼 클릭 시 메뉴 열고 닫기
    headerToggle.addEventListener("click", (e) => {
        headerNav.classList.toggle("show");

        // 메뉴가 열릴 때 tabIndex를 설정하여 tab 순서 조정
        if (headerNav.classList.contains("show")) {
            navItems.forEach((item, index) => {
                item.setAttribute("tabindex", index + 1); // 탭 순서 설정
            });

            // 메뉴가 열리면 첫 번째 항목에 포커스를 설정
            navItems[0].focus();
        } else {
            // 메뉴가 닫히면 tabIndex를 제거
            navItems.forEach(item => {
                item.removeAttribute("tabindex");
            });
        }

        // 클릭 이벤트 전파 방지
        e.stopPropagation();
    });

    // 메뉴 외부를 클릭하면 메뉴를 닫기
    document.addEventListener("click", (e) => {
        if (!headerNav.contains(e.target) && !headerToggle.contains(e.target)) {
            headerNav.classList.remove("show");
            navItems.forEach(item => {
                item.removeAttribute("tabindex"); // 메뉴 닫히면 tabindex 제거
            });
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

    // 키보드 탭 순서 제어
    headerNav.addEventListener('keydown', (e) => {
        // 포커스가 navItems 마지막 항목에 있을 때, Tab 키를 누르면 메뉴가 닫히도록 하기
        if (document.activeElement === navItems[navItems.length - 1] && !e.shiftKey) {
            headerNav.classList.remove('show'); // 메뉴 닫기
            headerToggle.focus(); // 메뉴가 닫힌 후 headerToggle로 포커스 이동
            e.preventDefault();
        }
    });
};