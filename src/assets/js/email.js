import emailjs from '@emailjs/browser';

// 이메일 전송 함수
export function email(e) {
  e.preventDefault();  // 기본 폼 제출 동작을 막음
  console.log("폼 제출 이벤트가 발생했습니다!");  // 이벤트 확인을 위한 로그

  // emailjs 초기화 (필요한 경우)
  emailjs.init('uZwXD-cSyW-6lPXgf');  // 공개 키를 통해 초기화

  // 폼 요소를 가져옵니다.
  const form = document.getElementById('contact-form');

  // emailjs의 sendForm 메서드를 사용하여 이메일 전송
  emailjs
    .sendForm(
      'service_dvexwxl',  // 서비스 ID
      'template_hz7cr4x',  // 템플릿 ID
      form,
      'uZwXD-cSyW-6lPXgf'  // 공개 키
    )
    .then(
      (result) => {
        console.log('이메일 전송 성공:', result.text);
        alert('이메일이 성공적으로 전송되었습니다!');
      },
      (error) => {
        console.log('이메일 전송 실패:', error.text);
        alert('이메일 전송에 실패했습니다.');
      }
    );
}