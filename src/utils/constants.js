// 폼 요소 관련 상수
export const FORM_SIZES = {
  SMALL: 'small',
  MIDDLE: 'middle',
  LARGE: 'large',
  CUSTOM: 'large' // 커스텀 크기 (large를 기본으로 사용)
};

// 버튼 타입 관련 상수
export const BUTTON_TYPES = {
  PRIMARY: 'primary',
  DEFAULT: 'default',
  DASHED: 'dashed',
  LINK: 'link',
  TEXT: 'text'
};

// 폼 레이아웃 관련 상수
export const FORM_LAYOUTS = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  INLINE: 'inline'
};

// 스타일 관련 상수
export const STYLES = {
  CARD: {
    MAX_WIDTH: '500px',
    MARGIN: '2rem auto',
    BORDER_RADIUS: '8px',
    BOX_SHADOW: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  FORM: {
    PADDING: '1rem'
  },
  BUTTON_GROUP: {
    DISPLAY: 'flex',
    JUSTIFY_CONTENT: 'space-between',
    MARGIN_TOP: '1rem'
  },
  TITLE: {
    TEXT_ALIGN: 'center',
    MARGIN_BOTTOM: '2rem'
  },
  ALERT: {
    MARGIN_BOTTOM: '1rem'
  },
  ROW: {
    MIN_HEIGHT: '80vh'
  }
};

// 라우트 경로 상수
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register'
};
