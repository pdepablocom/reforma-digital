// Pixelarticons, MIT License, © 2019 Gerrit Halfmann — https://github.com/halfmage/pixelarticons
// Only the icons used here. Drawn on a 24px grid: render at 24 or 48 for crisp pixels.
const pixelPaths = {
  'arrow-down': ['M13 12h6v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2h6V4h2v8Z'],
  'arrow-left': [
    'M20 11v2H4v-2zM8 13v2H6v-2zm2 2v2H8v-2zm2 2v2h-2v-2zm-4-6V9H6v2z',
    'M10 15V7H8v8zm2 2V5h-2v12z',
  ],
  'arrow-right': [
    'M4 11v2h16v-2zm12 2v2h2v-2zm-2 2v2h2v-2zm-2 2v2h2v-2zm4-6V9h2v2z',
    'M14 15V7h2v8zm-2 2V5h2v12z',
  ],
  attachment: [
    'M7 7v10H5V7zm12 0v12h-2V7zm-8 2v10H9V9zm4 0v8h-2V9zm0-6v2H9V3zm-2 4v2h-2V7zm4 12v2h-6v-2zm0-14v2h-2V5zM9 5v2H7V5z',
  ],
  briefcase: [
    'M2 8h2v12H2zm18 0h2v12h-2zM4 6h16v2H4zm0 14h16v2H4zM8 4h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2z',
  ],
  building: [
    'M5 2h14v2H5zm0 18h14v2H5zM3 4h2v16H3zm16 0h2v16h-2zM7 6h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm-1 4h4v2h-4zm5-4h2v2h-2z',
  ],
  'card-text': ['M6 8h12v2H6zm0 4h8v2H6zM4 4h16v2H4zm0 14h16v2H4zM2 6h2v12H2zm18 0h2v12h-2z'],
  check: [
    'M10 18H8v-2h2v2Zm-2-2H6v-2h2v2Zm4-2v2h-2v-2h2Zm-6 0H4v-2h2v2Zm8 0h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2V8h2v2Zm2-2h-2V6h2v2Z',
  ],
  'chevron-down': [
    'M13 16h-2v-2h2v2Zm-2-2H9v-2h2v2Zm4 0h-2v-2h2v2Zm-6-2H7v-2h2v2Zm8 0h-2v-2h2v2ZM7 10H5V8h2v2Zm12 0h-2V8h2v2Z',
  ],
  'circle-info': [
    'M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM22 18H20V6H22V18ZM13 17H11V11H13V17ZM13 9H11V7H13V9ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z',
  ],
  close: [
    'M7 19H5V17H7V19ZM19 19H17V17H19V19ZM9 15V17H7V15H9ZM17 17H15V15H17V17ZM11 15H9V13H11V15ZM15 15H13V13H15V15ZM13 13H11V11H13V13ZM11 11H9V9H11V11ZM15 11H13V9H15V11ZM9 9H7V7H9V9ZM17 9H15V7H17V9ZM7 7H5V5H7V7ZM19 7H17V5H19V7Z',
  ],
  copy: [
    'M8 6h12v2H8zM4 2h12v2H4zm2 6h2v12H6zM2 4h2v12H2zm6 16h12v2H8zM20 8h2v12h-2zm-4-4h2v2h-2zM4 16h2v2H4z',
  ],
  'cross-solid': ['M14 4h2v4h4v2h2v4h-2v2h-4v4h-2v2h-4v-2H8v-4H4v-2H2v-4h2V8h4V4h2V2h4v2Z'],
  'file-text': [
    'M6 4H4v16h2zm10-2H6v2h10zm4 4h-2v14h2zm-2 14H6v2h12zM16 4h2v2h-2zm-4 0h2v6h-2z',
    'M12 8h6v2h-6zm-4 8h8v2H8zm0-4h8v2H8zm0-4h2v2H8z',
  ],
  home: [
    'M4 20h16v2H4zm16-10h2v10h-2zM2 10h2v10H2zm2-2h2v2H4zm2-2h2v2H6zm2-2h2v2H8zm2-2h4v2h-4zm4 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zM8 14h2v6H8zm2-2h4v2h-4zm4 2h2v6h-2z',
  ],
  'info-box': ['M4 2h16v2H4zm0 18h16v2H4zM2 4h2v16H2zm18 0h2v16h-2zm-9 5h2V7h-2zm0 8h2v-6h-2z'],
  mail: [
    'M6 8h2v2H6zm2 2h2v2H8zm10-2h-2v2h2zm-2 2h-2v2h2zm-6 2h4v2h-4zM2 6h2v12H2zm18 0h2v12h-2zM4 4h16v2H4zm0 14h16v2H4z',
  ],
  'message-text': [
    'M20 2H4v2h16zm0 14H6v2h14zm2-12h-2v12h2zM4 4H2v18h2zm2 14H4v2h2zm0-6h4v2H6zm0-4h8v2H6z',
  ],
  reload: [
    'M16 4h2v6h-2zm-2-2h2v2h-2zm0 2h2v8h-2zM4 8H2v5h2z',
    'M4 6h16v2H4zm4 14H6v-6h2zm2 2H8v-2h2zm0-2H8v-8h2zm10-4h2v-5h-2z',
    'M20 18H4v-2h16z',
  ],
  stop: ['M20 20H4V4H20V20ZM6 18H18V6H6V18ZM14 14H10V10H14V14Z'],
  'thumbs-down': [
    'M2 12h2V4H2zm2-8h14V2H4zm14 4h2V4h-2zm2 4h2V8h-2zm-6 2h6v-2h-6zm0 2h2v-2h-2zm2 4h2v-4h-2zm-2 2h2v-2h-2zm-2-2h2v-2h-2zm-2-2h2v-2h-2zm-2-2h2v-2H8zm-4-2h4v-2H4zm2-2h2V4H6z',
  ],
  'thumbs-up': [
    'M2 12h2v8H2zm2 8h14v2H4zm14-4h2v4h-2zm2-4h2v4h-2zm-6-2h6v2h-6zm0-2h2v2h-2zm2-4h2v4h-2zm-2-2h2v2h-2zm-2 2h2v2h-2zm-2 2h2v2h-2zM8 8h2v2H8zm-4 2h4v2H4zm2 2h2v8H6z',
  ],
  user: [
    'M9 2h6v2H9zm0 8h6v2H9zm6-6h2v6h-2zM7 4h2v6H7zM4 18h2v4H4zm14 0h2v4h-2zM8 14h8v2H8zm-2 2h2v2H6zm10 0h2v2h-2z',
  ],
  users: [
    'M5 2h6v2H5zm10 0h4v2h-4zM5 10h6v2H5zm10 0h4v2h-4zm4-6h2v6h-2zm-8 0h2v6h-2zM3 4h2v6H3zM0 18h2v4H0zm14 0h2v4h-2zm8 0h2v4h-2zM4 14h8v2H4zm12 0h4v2h-4zM2 16h2v2H2zm10 0h2v2h-2zm8 0h2v2h-2z',
  ],
} as const;

export type PixelIconName = keyof typeof pixelPaths;

export function PixelIcon({ name, size = 24 }: { name: PixelIconName; size?: number }) {
  return (
    <svg
      className="pixel-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {pixelPaths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
