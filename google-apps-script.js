/**
 * 노아이디어피자 문의 접수 - Google Apps Script
 *
 * [설정 방법]
 * 1. Google Sheets에서 새 스프레드시트 생성
 * 2. 시트 이름을 "문의접수"로 변경
 * 3. 확장 프로그램 > Apps Script 클릭
 * 4. 이 코드 전체를 붙여넣기
 * 5. EMAIL_TO를 실제 수신 이메일로 변경
 * 6. 배포 > 새 배포 > 유형: 웹 앱
 *    - 실행 주체: 본인
 *    - 액세스 권한: 모든 사용자
 * 7. 배포 후 나오는 URL을 script.js의 APPS_SCRIPT_URL에 붙여넣기
 */

const SHEET_NAME = '문의접수';
const EMAIL_TO = 'dkfjh1234@gmail.com'; // 수신 이메일

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.getActiveSheet();
      sheet.setName(SHEET_NAME);
    }

    // 헤더가 없으면 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['접수일시', '성함', '연락처', '희망지역', '점포보유', '문의내용', '처리상태']);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#0055FF').setFontColor('#FFFFFF');
      sheet.setFrozenRows(1);
    }

    const now = new Date();
    const timestamp = Utilities.formatDate(now, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      timestamp,
      data.name || '',
      data.phone || '',
      data.region || '',
      data.has_store || '',
      data.message || '',
      '미처리'
    ]);

    // 이메일 알림 발송
    const subject = '[노아이디어피자] 새 문의 - ' + (data.name || '이름없음');
    const body = '새로운 문의가 접수되었습니다.\n\n'
      + '━━━━━━━━━━━━━━━━━━━━━━━━\n'
      + '성함: ' + (data.name || '') + '\n'
      + '연락처: ' + (data.phone || '') + '\n'
      + '희망 지역: ' + (data.region || '미입력') + '\n'
      + '점포 보유: ' + (data.has_store || '미선택') + '\n'
      + '문의 내용: ' + (data.message || '없음') + '\n'
      + '━━━━━━━━━━━━━━━━━━━━━━━━\n\n'
      + '접수 시간: ' + timestamp + '\n'
      + '스프레드시트에서 확인: ' + ss.getUrl();

    MailApp.sendEmail(EMAIL_TO, subject, body);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: '노아이디어피자 문의 API 정상 작동 중' })
  ).setMimeType(ContentService.MimeType.JSON);
}
