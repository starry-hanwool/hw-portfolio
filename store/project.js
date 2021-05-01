export const state = () => ({
  projects: [
    {
      id: 7,
      title: '파트너스 서비스',
      subTitle: '집닥',
      cover: 'imgs/project7/1.png',
      imgs: [
        {
          src: 'imgs/project7/1.png',
        },
        {
          src: 'imgs/project7/2.png',
        },
        {
          src: 'imgs/project7/3.png',
        },
        {
          src: 'imgs/project7/4.png',
        },
        {
          src: 'imgs/project7/5.png',
        },
        {
          src: 'imgs/project7/6.png',
        },
      ],
      desc: `인테리어 시공 업체와 사용자를 중개하는 서비스 집닥의 업체용 관리 페이지.`,
      badge: [
        'Spring Boot',
        'AWS',
        'S3',
        'CodeCommit',
        'CodeBuild',
        'ECS',
        'ECR',
        'Fargate',
        'Aurora',
        'Postman',
        'Figma',
        'Trello',
        'Jandi',
      ],
      period: '약 1개월',
      team: 'Server/Backend/Frontend - 1명(Me) , Publisher - 1명',
      homepage: [],
      links: [
        {
          img: 'imgs/btn_google_play.png',
          url: '',
        },
        {
          img: 'imgs/btn_app_store.png',
          url: '',
        },
      ],
      charge: [
        {
          subject: '서버구축',
          content: ['AWS'],
        },
        {
          subject: 'API 및 프론트엔드 (단독작업)',
          content: [
            '시공사례 목록 조회',
            '시공사례 등록 (파일 및 태그 등 등록)',
            '시공사례 상세 조회 및 수정',
            '자체 멤버 서비스(Authorization Server)에 Oauth 2.0 인증 처리(Resource Server)',
          ],
        },
        {
          subject: '파일 업로드 서비스 (단독작업)',
          content: [
            '이미지 파일 업로드 API (리사이징, 워터마크 -> S3)',
            '자체 멤버 서비스(Authorization Server)에 Oauth 2.0 인증 처리(Resource Server)',
          ],
        },
      ],
      comment: [``],
      skills: [
        {
          subject: '개발환경',
          content: ['JDK 11', 'Docker', 'S3', 'Aurora', 'Vue.js / Nuxt.js'],
        },
        {
          subject: '기타',
          content: [
            'Figma',
            'Trello',
            'Gitlab',
            'Postman',
            'Intellij',
            'Jandi',
          ],
        },
      ],
    },
    {
      id: 1,
      title: '김치온',
      subTitle: '세계김치연구소',
      cover: 'imgs/project1/cover1.png',
      imgs: [
        {
          src: 'imgs/project1/cover1.png',
        },
        {
          src: 'imgs/project1/cover2.png',
        },
        {
          src: 'imgs/project1/cover3.png',
        },
        {
          src: 'imgs/project1/cover4.png',
        },
        {
          src: 'imgs/project1/cover5.png',
        },
        {
          src: 'imgs/project1/cover6.png',
        },
      ],
      desc: `맛지표(매운맛, 짠맛, 숙성도)에 따라 김치를 추천하는 모바일 앱 쇼핑몰.`,
      badge: [
        'Spring Boot',
        'AWS',
        'G클라우드',
        'Jenkins',
        'MySQL',
        'JSP',
        'jQuery',
        'Bootpay',
        'GitLab',
        'Postman',
      ],
      period: '약 4개월',
      team: 'Server/Backend/Frontend - 1명(Me) , Android - 1명 , iOS - 1명',
      homepage: [],
      links: [
        {
          img: 'imgs/btn_google_play.png',
          url:
            'https://play.google.com/store/apps/details?id=kr.co.ddfactory.wikim',
        },
        {
          img: 'imgs/btn_app_store.png',
          url:
            'https://apps.apple.com/us/app/%EA%B9%80%EC%B9%98%EC%98%A8/id1489118598',
        },
      ],
      charge: [
        {
          subject: '서버구축 (단독작업)',
          content: [],
        },
        {
          subject: '모바일 앱 API 및 하이브리드 페이지 (단독작업)',
          content: [
            'SNS 로그인 (카카오톡/페이스북/네이버)',
            '결제 페이지 (하이브리드, Bootpay)',
            '상품 및 브랜드 목록 API (검색)',
            '주문 및 취소 등 목록 API',
            '문의, QnA, 공지사항 등 게시판 API',
          ],
        },
        {
          subject: '관리자 사이트 (단독작업)',
          content: [
            '상품 주문/취소 조회 및 발송 관리',
            '업체 관리',
            '문의, QnA, 공지사항 등 게시판 관리',
            '통계',
          ],
        },
      ],
      comment: [
        `관리자 사이트 및 모바일 앱 API 개발을 혼자 진행하면서, Android / iOS 앱 개발 리드.`,
        `모바일 화면 기획만 가지고 관리자 사이트 기획부터 개발을 동시 진행.`,
      ],
      skills: [
        {
          subject: '개발환경',
          content: [
            'jdk 1.8',
            'AWS EC2 (테스트 서버)',
            'G클라우드 (실서버)',
            'apache',
            'tomcat',
            'MySQL',
          ],
        },
        {
          subject: '기타',
          content: [
            'Firebase',
            'Bootpay',
            'GitLab',
            'Jenkins',
            'Postman',
            'Slack',
          ],
        },
      ],
    },
    {
      id: 2,
      title: '세종 중앙공원',
      subTitle: 'LH',
      cover: 'imgs/project3/1.png',
      imgs: [
        {
          src: 'imgs/project3/1.png',
        },
        {
          src: 'imgs/project3/2.png',
        },
        {
          src: 'imgs/project3/4.png',
        },
        {
          src: 'imgs/project3/3.png',
        },
        {
          src: 'imgs/project3/5.png',
        },
      ],
      desc:
        '세종시 공원의 시설 예약 및 동호회 등의 커뮤니케이션을 제공하는 하이브리드 앱.',
      badge: [
        'Spring Boot',
        'AWS',
        'MySQL',
        'JSP',
        'jQuery',
        'Firebase',
        'GitLab',
        'Jenkins',
        'Slack',
        'Postman',
      ],
      period: '약 3개월',
      team:
        'Server/Backend/Frontend - 1명(Me) , Android/관리자 사이트 - 1명 , iOS/Server/Backend/Frontend - 1명, 기획자 - 1명',
      homepage: [],
      links: [
        {
          img: 'imgs/btn_google_play.png',
          url:
            'https://play.google.com/store/apps/details?id=kr.co.ddfactory.smartcityandroid',
        },
        {
          img: 'imgs/btn_app_store.png',
          url: 'https://apps.apple.com/kr/app/id1527034960',
        },
      ],
      charge: [
        {
          subject: 'Frontend / Backend 개발 (하이브리드 앱)',
          content: [
            '회원가입 및 SNS 로그인 API 개발 (카카오톡, 네이버, 페이스북)',
            '경기 대진표 및 리더보드 관리 기능 개발 (1:1, 팀전, 개인 리그, 팀 리그, 조별 리그, 오스트리안 리그, 개인 토너먼트, 팀 토너먼트)',
            '동호회 관리 기능 개발',
            '시민게시판, 장터 등 기능 개발',
            '시설예약 기능 개발',
          ],
        },
      ],
      comment: [
        '대진표 개발을 위해 기획자와 경기 타입별 규칙, 제한 등에 대해 회의를 수시로 진행.',
        'Frontend 개발에 미숙한 다른 팀원들 지원.',
      ],
      skills: [
        {
          subject: '개발환경',
          content: ['Spring Boot', 'AWS', 'MySQL', 'JSP', 'jQuery', 'Tomcat'],
        },
        {
          subject: '기타',
          content: ['Firebase', 'GitLab', 'Jenkins', 'Postman', 'Slack'],
        },
      ],
    },
    {
      id: 3,
      title: 'SK Play With',
      subTitle: 'SK Wyverns',
      cover: 'imgs/project2/play_with1.png',
      imgs: [
        {
          src: 'imgs/project2/play_with1.png',
        },
        {
          src: 'imgs/project2/play_with2.png',
        },
        {
          src: 'imgs/project2/play_with5.png',
        },
        {
          src: 'imgs/project2/homepage1.png',
        },
        {
          src: 'imgs/project2/homepage2.png',
        },
        {
          src: 'imgs/project2/homepage3.png',
        },
        {
          src: 'imgs/project2/homepage4.png',
        },
        {
          src: 'imgs/project2/homepage_pc2.png',
        },
        {
          src: 'imgs/project2/homepage_pc1.png',
        },
      ],
      desc: `한국 프로야구단 SK와이번스의 공식 어플리케이션 ‘PLAY WITH’.`,
      badge: [
        'Spring',
        'AWS',
        'MSSQL',
        'MySQL',
        'JSP',
        'jQuery',
        'Git',
        'Postman',
        'Firebase',
      ],
      period: '약 4개월',
      team: 'Server/Backend/Frontend - 2명(Me) , Android - 1명 , iOS - 1명',
      homepage: ['https://www.skwyverns.com', 'http://www.munhakstadium.com/'],
      links: [
        {
          img: 'imgs/btn_google_play.png',
          url:
            'https://play.google.com/store/apps/details?id=com.skt.ilbs.skwyverns.app',
        },
        {
          img: 'imgs/btn_app_store.png',
          url:
            'https://apps.apple.com/kr/app/sk%EC%99%80%EC%9D%B4%EB%B2%88%EC%8A%A4-play-with/id972556231',
        },
      ],
      charge: [
        {
          subject: '앱 및 홈페이지 통합 관리자 사이트',
          content: [
            '홈페이지 및 모바일 앱에서 함께 사용하는 정보를 관리하는 기능 개발 (연혁, 선수 및 스태프 목록, 소식, 경기일정 등)',
            'Push Notification 기능 및 관리 화면 개발',
          ],
        },
        {
          subject: '모바일 앱 API',
          content: ["'W 위닝 Pick' 이라는 스코어 및 수훈선수 예측 기능 개발"],
        },
        {
          subject: 'SKWyverns 홈페이지 리뉴얼 (단독작업)',
          content: [
            '기존 MSSQL DB를 AWS로 마이그레이션',
            'AWS Linux 기반 서버 구축',
            'Backend',
            'Frontend',
            'Publishing',
            '연혁, 선수 및 스태프 목록, 소식, 경기일정 등의 페이지 개발',
          ],
        },
        {
          subject: '문학경기장 홈페이지 마이그레이션 (단독작업)',
          content: [
            '기존 Windows Server 2012, IIS, ASP 환경의 프로젝트를 AWS로 마이그레이션',
            '기존 MSSQL DB를 AWS로 마이그레이션',
          ],
        },
      ],
      comment: [
        `기존 서버의 계약 만료로 인해 AWS로 이전하면서,`,
        `DB를 마이그레이션하고 기존 서비스는 마이그레이션 하거나 새로 개발.`,
      ],
      skills: [
        {
          subject: '개발환경',
          content: [
            'AWS',
            'Spring',
            'MSSQL',
            'MySQL',
            'Firebase',
            'centOS',
            'Windows Server 2019',
            'ASP',
            'JSP',
            'jQuery',
          ],
        },
        {
          subject: '기타',
          content: ['Firebase', 'GitLab', 'Jenkins', 'Postman', 'Slack'],
        },
      ],
    },
    {
      id: 4,
      title: '스마트에듀',
      subTitle: '국가과학기술인력개발원',
      cover: 'imgs/project4/smartedu1.png',
      imgs: [
        {
          src: 'imgs/project4/smartedu1.png',
        },
        {
          src: 'imgs/project4/smartedu2.png',
        },
        {
          src: 'imgs/project4/smartedu3.png',
        },
        {
          src: 'imgs/project4/smartedu5.png',
        },
      ],
      desc: '집합교육 및 대단위과정을 위해 제작된 앱.',
      badge: [
        '전자정부프레임워크 3.5',
        'JDK 1.7',
        'AWS',
        'Oracle',
        'JSP',
        'jQuery',
        'Firebase',
        'SVN',
        'Jenkins',
        'Slack',
        'Postman',
      ],
      period: '약 2개월',
      team: 'Server/Backend/Frontend - 2명(Me) , Android - 1명 , iOS - 1명',
      homepage: ['https://www.kird.re.kr/'],
      links: [
        {
          img: 'imgs/btn_google_play.png',
          url:
            'https://play.google.com/store/apps/details?id=kr.ddfactory.kird&hl=ko',
        },
        {
          img: 'imgs/btn_app_store.png',
          url:
            'https://apps.apple.com/us/app/kird-%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%97%90%EB%93%80/id1496583652',
        },
      ],
      charge: [
        {
          subject: 'DB 마이그레이션',
          content: ['테스트용 AWS RDS에 Oracle DB 마이그레이션'],
        },
        {
          subject: '관리자 사이트 기능 추가',
          content: [
            '강사 회원 가입 기능 추가',
            '강사 등급 지정 기능 수정',
            '앱 관리 기능 개발',
            '출결 쿼리 작성',
            'Push Notification 기능 및 관리 화면 개발 (전체 알림, 수강생 및 강사 지정 알림, 예약 알림 등)',
          ],
        },
      ],
      comment: [
        '보안 프로그램(TMAX)으로 보호된 Oracle DB와 원격접속이 제한된 환경에서 개발을 진행.',
        '기존 DB를 이요하여 신규 앱을 개발하며, 앱 관련 기능을 기존 관리자 페이지에 추가하는 방향으로 진행.',
      ],
      skills: [
        {
          subject: '개발환경',
          content: [
            '전자정부프레임워크 3.5',
            'JDK 1.7',
            'AWS',
            'Oracle',
            'JSP',
            'jQuery',
            'Tomcat',
          ],
        },
        {
          subject: '기타',
          content: ['Firebase', 'SVN', 'Jenkins', 'Postman', 'Slack'],
        },
      ],
    },
    {
      id: 5,
      title: 'Innopod (사내 ERP)',
      subTitle: '교보피앤비',
      cover: 'imgs/project6/img_pstation.png',
      imgs: [
        {
          src: 'imgs/project6/img_pstation.png',
        },
      ],
      desc: `인쇄업체의 사내 ERP로 작업 지시서 작성과 작업 현황, 재고 관리 등의 기능을 지원.`,
      badge: ['Spring Boot', 'GCP', 'MySQL', 'JSP', 'jQuery', 'Git', 'Rollbar'],
      period: '약 1년 4개월',
      team: 'Server/Backend/Frontend - 1명(Me)',
      homepage: [],
      links: [],
      charge: [
        {
          subject: 'ERP 웹 개발',
          content: [
            '기획, 설계, 개발, 테스트',
            'GCP 서버구축',
            '기존 사용 중인 시스템의 DB도 사용가능 하도록 테이블 구성',
            'Spring Security를 이용하여 로그인',
            '주문 및 작업 생성 및 관리(각종 작업지시서 출력물 생성)',
            '전체 작업 진행 현황 확인 가능한 작업보드',
            '견적서 작성 및 관리 기능',
            '소모품별 재고관리(엑셀 다운로드) 기능',
            '사용자 및 각종 거래처 관리 기능',
          ],
        },
      ],
      comment: [``],
      skills: [
        {
          subject: '개발환경',
          content: [
            'Spring Boot',
            'GCP',
            'MySQL',
            'JSP',
            'jQuery',
            'Tomcat',
            'Ubuntu',
          ],
        },
        {
          subject: '기타',
          content: ['Git', 'Rollbar', 'MeisterTask'],
        },
      ],
    },
    {
      id: 6,
      title: 'MBook',
      subTitle: 'Soluwin',
      cover: 'imgs/project5/cover.png',
      imgs: [
        {
          src: 'imgs/project5/cover.png',
        },
        {
          src: 'imgs/project5/cine21.jpg',
        },
        {
          src: 'imgs/project5/mbook_appbuilder1-2.png',
        },
        {
          src: 'imgs/project5/krystal.gif',
        },
      ],
      desc: '자사 퍼블리싱 솔루션으로 생성된 디지털콘텐츠의 뷰어 앱.',
      badge: [
        'Spring Boot',
        'Android',
        'GCP',
        'Redis',
        'JDK 1.7',
        'MySQL',
        'JSP',
        'jQuery',
        'Firebase',
        'Git',
        'JIRA',
        'Trello',
      ],
      period: '약 3년 2개월',
      team:
        'Server/Backend/Frontend - 2명 -> 1명, Android - 1명, iOS - 1명, MBook Editor - 1명',
      homepage: [
        'http://www.soluwin.co.kr/',
        'http://appbuilder.soluwin.co.kr/',
      ],
      links: [
        {
          img: 'imgs/btn_google_play.png',
          url:
            'https://play.google.com/store/apps/details?id=kr.co.gugakfm.instrument&hl=ko',
        },
        {
          img: 'imgs/btn_app_store.png',
          url:
            'https://apps.apple.com/kr/app/%EC%9A%B0%EB%A6%AC%EC%95%85%EA%B8%B0-%ED%86%BA%EC%95%84%EB%B3%B4%EA%B8%B0/id958843789#?platform=iphone',
        },
      ],
      charge: [
        {
          subject: 'MBook Solution - Web / Server (2015~2016)',
          content: [
            'Push Notification Center 개발 : 배포된 Android / iOS 앱들의 push 알림을 전송하고 관리하는 서버',
            'SNS Share Server 개발 : 앱 공유시 사용자 기기에 따라 해당  스토어 링크로 연결해주는 사이트',
            'Membership Server 개발 : Redis server를 통한 세션 기반  SSO 방식 인증 제공',
            'Server Monitor Server 개발 : 다른 서버들의 상태를 체크하여  에러시 관리자에게 알림을 발송하는 기능 제공',
            'S-Oil 통계 확인 사이트 개발',
            '서비스 서버 및 git 서버 구성 및 관리 (GCE)',
          ],
        },
        {
          subject: 'MBook Solution – Android (2013~2015)',
          content: [
            '뷰어 2.5 개발 및 고도화 (메모리 최적화 등)',
            '정기구독 및 앱 공유 등 신규 기능 추가',
            '결제 오류 등 사용자 오류 문의를 접수받아 분석 및 해결',
            '코웨이 추가 개발(드로잉, 견적, 메모, 달력)',
            '한미약품 추가 개발(사용내역 로그 서버로 전송)',
          ],
        },
        {
          subject: '기타',
          content: [
            'SM 엔터테인먼트의 f(x) 컴백 티저 모바일 웹 퍼블리싱',
            '앱이름 및 스플래시 이미지 등을 바꿔서 안드로이드 앱을 빌드해주는 AppMaker 제작(Java GUI)',
          ],
        },
      ],
      comment: [``],
      skills: [
        {
          subject: '개발환경',
          content: [
            'Spring Boot',
            'Android',
            'GCP',
            'Redis',
            'JDK 1.7',
            'MySQL',
            'JSP',
            'jQuery',
          ],
        },
        {
          subject: '기타',
          content: ['Firebase', 'Git', 'JIRA', 'Trello'],
        },
      ],
    },
  ],
})

export const getters = {
  getProjects: (state) => {
    return state.projects
  },
  getProject: (state) => (pid) => {
    return state.projects.find((p) => p.id === pid)
  },
}

export const mutations = {
  getProjects() {
    return state.projects
  },
}
