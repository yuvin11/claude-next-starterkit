// PostCSS 설정
// TailwindCSS v4는 @tailwindcss/postcss 플러그인 하나만 사용합니다
// v3의 autoprefixer는 v4에 내장되어 있어 별도로 필요하지 않습니다
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
